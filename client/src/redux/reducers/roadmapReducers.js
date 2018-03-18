// import constants from '../constants';

const initialState = {
  milestones: [
    {
      date: 'January 2018',
      desc: 'Project started'
    },
    {
      date: 'March 2018',
      desc: 'Functional demo completed'
    },
    {
      date: 'April 2018',
      desc: 'Public whitepaper published'
    },
    {
      date: 'June 2018',
      desc: 'Token sale'
    },
    {
      date: 'October 2018',
      desc: 'First prototype completed'
    },
    {
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