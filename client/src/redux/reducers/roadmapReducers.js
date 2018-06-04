// import constants from '../constants';

const initialState = {
  milestones: [
    {
      _id: 0,
      date: 'January 2018',
      desc: 'Project started'
    },
    {
      _id: 1,
      date: 'March 2018',
      desc: 'Functional demo completed'
    },
    {
      _id: 2,
      date: 'June 2018',
      desc: 'Public whitepaper published'
    },
    {
      _id: 3,
      date: 'October 2018',
      desc: 'First prototype completed'
    },
    {
      _id: 4,
      date: 'December 2018',
      desc: 'Alpha version released'
    },
    {
      _id: 5,
      date: 'January 2019',
      desc: 'Launch!'
    }
  ]
};

/* eslint-disable */
const roadmap = (state = initialState, action) => {
  switch (action.type) {



    default: return state;
  }
};

export default roadmap;