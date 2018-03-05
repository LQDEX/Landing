// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'avatar5.png',
      name: 'Alice Carter',
      advisor: 'Strategy Advisor',
      title: 'CEO of Tapscott Group',
      myLink: 'https://www.linkedin.com/in/Alice-Carter',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      avatar: 'avatar6.png',
      name: 'Steven Barnett',
      advisor: 'Capital Markets Advisor',
      title: ' Former COO Soros Fund',
      myLink: 'https://www.linkedin.com/in/Steven-Barnett',
      brief: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur minima veniam, quis nostrum exercitationem. '
    },
    {
      avatar: 'avatar7.png',
      name: 'Catherine Ellis',
      advisor: 'Capital Markets Advisor',
      title: ' Former COO Soros Fund',
      myLink: 'https://www.linkedin.com/in/Catherine-Ellis',
      brief: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    {
      avatar: 'avatar8.png',
      name: 'Gerald Curtis',
      advisor: 'Public Sector Advisor',
      title: 'CEO of Keynote',
      myLink: 'https://www.linkedin.com/in/Gerald-Curtis',
      brief: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui qui eiusmod tempor incididunt.'
    }
  ]
};

/* eslint-disable */
const advisors = (state = initialState, action) => {
  switch (action.type) {

    default: return state;
  }
};

export default advisors;