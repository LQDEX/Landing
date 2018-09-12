export default {
  active: 'exchange',
  menuDef: [
    'press',
    'aboutUs',
    'whitepaper',
    'products',
    'contact',
    'medium',
    'telegram'
  ],
  items: [
    {
      name: 'press',
      type: 'btnMenu',
      caption: 'PRESS',
      class: 'btnMenu',
      href: '',
      pageTo: 'landing',
      pointTo: 'press'
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
      caption: 'TELEGRAM ',
      type: 'linkIcon',
      icon: 'fa-telegram-plane',
      title:'JOIN US ON TELEGRAM',
      class: 'btnMenu',
      href: 'https://t.me/LQDEX',
      pageTo: '',
      pointTo: ''
    },
    {
      name: 'medium',
      caption: '',
      type: 'linkIcon',
      icon: 'fa-medium-m',
      title:'FOLLOW US ON MEDIUM',
      class: 'btnMenu',
      href: 'https://medium.com/lqdex',
      pageTo: '',
      pointTo: ''
    },
    {
      name: 'products',
      type: 'dropdown',
      caption: 'PRODUCTS',
      class: 'btnMenu',
      content: [
        'BRIDGE'
      ]
    },
  ]
}
