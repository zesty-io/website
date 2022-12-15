const frameworkList = [
  { label: 'Parsely/Zesty', value: 'parsely' },
  { label: 'NextJs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'PHP/Laravel', value: 'php' },
  { label: 'HTML/jQuery', value: 'html' },
  { label: 'NodeJS', value: 'nodejs' },
  { label: 'Hugo', value: 'hugo' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
  { label: 'Other', value: 'other' },
];

const componentsSystemList = [
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: 'Material UI', value: 'material ui' },
  { label: 'Tailwind', value: 'tailwind' },
  { label: 'Bulma', value: 'bulma' },
  { label: 'Foundation', value: 'foundation' },
  { label: 'Chakra UI', value: 'chakra ui' },
  { label: 'Other', value: 'other' },
];

const roleList = [
  { label: 'Marketer', value: 'Marketer', type: 'influencer' },
  { label: 'Developer', value: 'Developer', type: 'influencer' },
  { label: 'Content Creator', value: 'Content Creator', type: 'influencer' },
  {
    label: 'Business Leader',
    value: 'Business Leader',
    type: 'decision-maker',
  },
  {
    label: 'Development Leader',
    value: 'Development Leader',
    type: 'decision-maker',
  },
  {
    label: 'Marketing Leader',
    value: 'Marketing Leader',
    type: 'decision-maker',
  },
  {
    label: 'Project Manager',
    value: 'Project Manager',
    type: 'decision-maker',
  },
  {
    label: 'Product Manager',
    value: 'Product Manager',
    type: 'decision-maker',
  },
];

const goalsList = [
  { label: 'Personalization', value: 'personalization' },
  { label: 'SEO', value: 'seo' },
  { label: 'Marketing Autonomy', value: 'marketing autonomy' },
  { label: 'A/B Testing', value: 'a/b testing' },
  { label: 'Multi-site', value: 'multi-site' },
  { label: 'Multi-lang(globalization)', value: 'multi-lang' },
  { label: 'Product Activation', value: 'product activation' },
  { label: 'Developer Flexibility', value: 'developer flexibility' },
];
const devProjects = [
  { label: 'App', value: 'App or IoT' },
  { label: 'Headless Website', value: 'Headless Website' },
  { label: 'Hybrid Website', value: 'Hybrid Website' },
  { label: 'Other Headless Project', value: 'other Headless Project' },
];
const nonDevProjects = [
  { label: 'Website', value: 'Website' },
  { label: 'Blog', value: 'Blog' },
  { label: 'App', value: 'App or IoT' },
];

const projectTypeList = [
  { label: 'Personal', value: 'Personal' },
  { label: 'Business', value: 'Business' },
];
export const joinAppConstants = {
  devProjects,
  nonDevProjects,
  projectTypeList,
  frameworkList,
  componentsSystemList,
  roleList,
  goalsList,
};
