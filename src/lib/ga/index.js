// reference https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/

// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }