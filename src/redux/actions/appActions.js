/* eslint-disable */
import constants from '../constants';

export default {
  platformGet: value => {
    return {
      type: constants.APP_PLATFORM_GET,
      data: value
    };
  },

};