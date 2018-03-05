// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'avatar1.png',
      name: 'Nataly Chen',
      title: 'Project Lead (Co-founder)',
      myLink: 'https://www.linkedin.com/in/Nataly-Chen'
    },
    {
      avatar: 'avatar2.png',
      name: 'Brandon Long',
      title: 'Technical Lead (Co-founder)',
      myLink: 'https://www.linkedin.com/in/Brandon-Long'
    },
    {
      avatar: 'avatar3.png',
      name: 'Jasmine Jensen',
      title: 'BizDev Lead (Co-founder)',
      myLink: 'https://www.linkedin.com/in/Jasmine-Jensen'
    },
    {
      avatar: 'avatar4.png',
      name: 'Mark Williams',
      title: 'Developer (Back-end)',
      myLink: 'https://www.linkedin.com/in/Mark-Williams'
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