// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'yog.png',
      name: 'Yogesh Srihari',
      title: 'Head of Product',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/yogesh-srihari-000b3a33/',
      brief: 'Yogesh co-founded a popular blockchain startup called SpankChain in 2017 and had a successful token sale with raise $11M dollars at the time. Prior to that Yogesh has worked as Lead software engineer at ZEFR , Director of Engineering at Wickr , Software Engineer at Google'
    },
    {
      avatar: 'Sergey-Nikitin-Large.jpg',
      name: 'Sergey Nikitin',
      title: ' Head of Technology',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/snikitin2/',
      brief: 'Sergey started his career at Microsoft and worked in the IT industry ever since. He is passionate about blockchain technology. Prior to joining LQDEX, Sergey founded xCoins.io, an innovative peer-to-peer cryptocurrency lending platform, which allows nearly instant acquisition of bitcoin. Sergey holds a BS, Computer Science degree from UCSB and an MBA degree from UCLA.'
    },
    {
      avatar: 'avatar0.png',
      name: 'Rich Branning',
      title: 'Head of Bus. Dev.',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/Rich-Branning',
      brief: 'Rich Branning got his degree in economics at Pepperdine University. He worked as District Manager at an Automatic Data Processing leading company and was Co-founder of Closetclicks.'
    },
    {
      avatar: 'avatar0.png',
      name: 'Ram Kumar',
      title: 'Lead Engineer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/Ram-Kumard',
      brief: 'A very short bio, if you want'
    },
    {
      avatar: 'GregKaling.jpg',
      name: 'Greg Kaling',
      title: 'Finance',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/greg-kalin-b6186554/',
      brief: 'Greg Kalin was the Co-Founder of Closetclicks, an investor-backed social fashion startup. Additionally, he spent time working in private wealth management at Morgan Stanley Smith-Barney.'
    }
  ]
};

/* eslint-disable */
const team = (state = initialState, action) => {
  switch (action.type) {

    default: return state;
  }
};

export default team;