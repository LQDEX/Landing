// import constants from '../constants';

const initialState = {
  members: [
    {
      name: 'spacex',
      logoFile: 'logoSpacex.png'
    },
    {
      name: 'tesla',
      logoFile: 'logoTesla.png'
    },
    {
      name: 'theBoringCompany',
      logoFile: 'logoBoring.png'
    },
    {
      name: 'solarCity',
      logoFile: 'logoSolarcity.png'
    },
    {
      name: 'openai',
      logoFile: 'logoOpenai.png'
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