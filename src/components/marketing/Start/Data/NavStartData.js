export const NavStartData = (scenario) => {
  switch (scenario) {
    case 1:
      return scenario1;
    case 2:
      return scenario2;
    case 3:
      return scenario3;
    case 4:
      return scenario4;

    default:
      return scenario1;
  }
};

const scenario1 = [
  {
    step: { id: 1, label: '1' },
    title: `Let's begin your Zesty Journey`,
    description: 'We are here to guide you every step fo the way.',
  },
  {
    step: { id: 2, label: '2' },
    title: `Tell us a little more about your project`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
  {
    step: { id: 3, label: 'Great progress' },
    title: `Create an account to save and continue`,
    description: 'We are excited to have you here!',
  },
  {
    step: { id: 4, label: '3' },
    title: `Tell us a little more about your project`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
  {
    step: { id: 5, label: '4' },
    title: `How would you like to build your website?`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
];

const scenario2 = [
  {
    step: { id: 1, label: '2' },
    title: `Tell us a little more about your project`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
  {
    step: { id: 2, label: 'Great progress' },
    title: `Tell us a little more about your project`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
  {
    step: { id: 3, label: '4' },
    title: `How would you like to build your website?`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
];

const scenario3 = [
  {
    step: { id: 1, label: 'Great progress' },
    title: `Create an account to save and continue`,
    description: 'We are excited to have you here!',
  },
  {
    step: { id: 2, label: '3' },
    title: `Tell us a little more about your project`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
  {
    step: { id: 3, label: '4' },
    title: `How would you like to build your website?`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
];

const scenario4 = [
  {
    step: { id: 1, label: '3' },
    title: `Tell us a little more about your project`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
  {
    step: { id: 2, label: '4' },
    title: `How would you like to build your website?`,
    description:
      'This information helps us make you get started in Zesty faster.',
  },
];
