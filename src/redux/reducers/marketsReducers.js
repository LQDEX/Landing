// import constants from '../constants';

const initialState = {
  marketData: [
    {
      index: 'NIKKEI 225',
      value: '21720.25',
      balanceV: '255.27',
      balanceP: '1.19'
    },
    {
      index: 'OMXN40',
      value: '157.86',
      balanceV: '26.44',
      balanceP: '1.71'
    },
    {
      index: 'FTSE100',
      value: '6859.15',
      balanceV: '-34.77',
      balanceP: '-0.5'
    },
    {
      index: 'NIKKEI 225',
      value: '21720.25',
      balanceV: '255.27',
      balanceP: '1.19'
    }
  ]
};

/* eslint-disable */
const market = (state = initialState, action) => {
  switch (action.type) {



    default: return state;
  }
};

export default market;