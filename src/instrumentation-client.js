// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

export let onRouterTransitionStart = undefined;

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://4d93b3a97e10da5bc8817c46c1c79e9b@o162121.ingest.us.sentry.io/4510349072728064',

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true,

    maxBreadcrumbs: 50,
    normalizeDepth: 10,
    beforeBreadcrumb: (breadcrumb, hint) => {
      if (
        hint?.event?.target &&
        (breadcrumb.category === 'ui.click' ||
          breadcrumb.category === 'ui.input')
      ) {
        const target = hint.event.target;
        const elementType = target.tagName.toLowerCase();
        const dataCy = target.dataset?.cy;
        const messages = [];

        if (elementType) {
          messages.push(`Tag name: "${elementType}"`);
        }

        if (dataCy) {
          messages.push(`data-cy: "${dataCy}"`);
        }

        if (target.id) {
          messages.push(`ID: "${target.id}"`);
        }

        if (target.name) {
          messages.push(`Input Name: "${target.name}"`);
        }

        if (elementType === 'button' && target.textContent) {
          messages.push(`Button Text: "${target.textContent.trim()}"`);
        }

        // Messages needs to be more than 1 since every interaction would have a tag name by default
        // but if there are no other relevant attributes then only having the tag name info
        // is not that helpful in determining what was exactly being interacted by the user
        if (messages.length > 1) {
          breadcrumb.message = messages.join('\n');

          return breadcrumb;
        }

        // Return default breadcrumb data
        return breadcrumb;
      }

      // Return default breadcrumb data if the event is not a click or input event
      return breadcrumb;
    },
  });

  onRouterTransitionStart = Sentry.captureRouterTransitionStart;
}
