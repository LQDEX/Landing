// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'avatar0.png',
      name: 'Greg Kaling',
      title: 'Title needed',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/Nataly-Chen',
      brief: 'Greg Kalin was the Co-Founder of Closetclicks, an investor-backed social fashion startup. Additionally, he spent time working in private wealth management at Morgan Stanley Smith-Barney.'
    },
    {
      avatar: 'Sergey-Nikitin-Large.jpg',
      name: 'Sergey Nikitin',
      title: ' Head of Technology',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/Brandon-Long',
      brief: 'Sergey started his career at Microsoft and worked in the IT industry ever since. He is passionate about blockchain technology. Prior to joining LQDEX, Sergey founded xCoins.io, an innovative peer-to-peer cryptocurrency lending platform, which allows nearly instant acquisition of bitcoin. Sergey holds a BS, Computer Science degree from UCSB and an MBA degree from UCLA.'

    },
    {
      avatar: 'yog.png',
      name: 'Yogesh Srihari',
      title: 'Co-Founder and CEO',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/Jasmine-Jensen',
      brief: 'A very short bio'
    },
    {
      avatar: 'avatar4.png',
      name: 'Mark Williams',
      title: 'Developer (Back-end)',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/Mark-Williams',
      brief: ''
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