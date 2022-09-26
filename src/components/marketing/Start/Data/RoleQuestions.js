export default {
  question: 'What is your team role?',
  why: `This info is used to tailor your experience. It can be changed later.`,
  answers: [
    {
      description: 'You lead and co-ordinate projects, tasks, and teams.',
      answer: 'Manager',
      value: 'manager',
      asset:
        '/assets/images/join/The-Project-Manager-v2-Zesty-io-Hero-Campaign.png',
      imageSX: {
        right: '-80px',
        top: '-20px',
        position: 'absolute',
        transform: 'rotate(-10deg)',
      },
      cardSX: {
        backgroundColor: '#497EDF',
        position: 'relative',
        height: '200px',
        width: '400px',
        overflow: 'hidden',
      },
    },
    {
      answer: 'Marketer',
      value: 'marketer',
      asset: '/assets/images/join/The-Marketer-Zesty-io-Hero-Campaign.png',
      description: 'You initiat and lead marketing campaigns.',
      imageSX: {
        right: '130px',
        top: '-50px',
        position: 'absolute',
        width: '100%',
        transform: 'rotate(15deg)',
      },
      cardSX: {
        backgroundColor: '#EA398C',
        position: 'relative',
        height: '200px',
        width: '400px',
        overflow: 'hidden',
      },
    },

    {
      answer: 'Developer',
      value: 'developer',
      asset: '/assets/images/join/The-Architect-Zesty-io-Hero-Campaign.png',
      description: 'You build and maintain website and apps.',
      imageSX: {
        right: '-30px',
        top: '-30px',
        position: 'absolute',
        width: '120%',
      },
      cardSX: {
        backgroundColor: '#75BF43',
        position: 'relative',
        height: '200px',
        width: '400px',
        overflow: 'hidden',
      },
    },
  ],
};
