import constants from '../constants';

const initialState = {
  config: {
    backgroundVideo: true,
    backgroundVideoRes: 'SD', // SD, HD, 2K, 4K
  },
  activePage: {
    page: 'landing',
    params: ''
  },
  showSidenav: false,
  platform: {},
  wDim: {},
  navBar: {
    active: 'exchange',
    options: [
      {
        name: 'newsFeeds',
        type: 'btnMenu',
        caption: 'NEWS FEEDS',
        class: 'btnMenu',
        href: '',
        pageTo: 'landing',
        pointTo: 'newsFeeds'
      },
      {
        name: 'aboutUs',
        type: '',
        caption: 'ABOUT',
        class: 'btnMenu',
        href: '',
        pageTo: 'landing',
        pointTo: 'aboutUs'
      },
      {
        name: 'whitepaper',
        type: 'link',
        caption: 'WHITEPAPER',
        class: 'btnMenuSubscribe',
        href: '/doc/LQDEX-Whitepaper.pdf',
        pageTo: '',
        pointTo: ''
      },
      {
        name: 'blog',
        type: 'link',
        caption: 'BLOG',
        class: 'btnMenu',
        href: 'https://medium.com/lqdex',
        pageTo: '',
        pointTo: ''
      },
      {
        name: 'contact',
        caption: 'CONTACT',
        class: 'btnMenu',
        type: '',
        href: '',
        pageTo: 'contact',
        pointTo: 'contact'
      },
      {
        name: 'telegram',
        type: 'linkIcon',
        caption: 'TELEGRAM ',
        class: 'btnMenu',
        href: 'https://t.me/LQDEX',
        pageTo: '',
        pointTo: ''
      },
    ]
  }
};

/* eslint-disable */
const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.APP_CONFIG_SET: {
      const config = state.config;
      config[action.data.prop] = action.data.value;
      return {
        ...state,
        config
      };
    }
    case constants.APP_SHOW_PAGE: {
      return {
        ...state,
        activePage: {
          page:action.data.page,
          params:action.data.params || ""
        },
        showSidenav: false
      };
    }
    case constants.APP_PLATFORM_SET: {
      return {
        ...state,
        platform: action.data
      };
    }
    case constants.APP_SIDENAV_TOGGLE: {
      return {
        ...state,
        showSidenav: !state.showSidenav
      };
    }
    case constants.APP_NAVBAR_ACTIVE: {
      const navBar = {
        ...state.navBar,
        active: action.data,
      }
      return {
        ...state,
        navBar
      }
    }
    default:
      return state;
    
  //  case constants.APP_WINDOW_RESIZE: {
  //    return {
  //      ...state,
  //      wDim: action.data,
  //    }
  //  }
  }
};

export default app;
