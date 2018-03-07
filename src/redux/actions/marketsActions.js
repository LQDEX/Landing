/* eslint-disable */
import constants from '../constants';
import {
  HTTPAsync
} from '../helpers';

/** ---------------------------------------------------------------------------- */
/** TO CHANGE THE URL FOR THE API GO TO "/src/redux/constants/apiURLsConst.js"  */
/** ---------------------------------------------------------------------------- */

const coinMarketApiURL = constants.URL_CRYPTO_MARKET_API;

/** ---------------------------------------------------------------------------- */

export default {

  getCryptoData: () => dispatch => dispatch(
    HTTPAsync.get(
      `${coinMarketApiURL}`,
      null,
      constants.CRYP_STATS_MARKETS_GET
    )
  )
};