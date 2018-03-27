// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'JoeUrgo.jpg',
      name: 'Joe Urgo',
      title: 'CEO, District0x',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/joseph-urgo-a8b77983/',
      brief: ''
    },
    {
      avatar: 'JesseLeimgruber.jpg',
      name: 'Jesse Leimgruber',
      title: 'CEO, Bloom',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/jesseleimgruber/',
      brief: ''
    },
    {
      avatar: 'BraytonWilliams.jpg',
      name: 'Brayton Williams',
      title: 'BoostVC',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/braytonwilliams/',
      brief: ''
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