// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'yog.png',
      name: 'Yogesh Srihari',
      title: 'Head of Product',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/yogesh-srihari-000b3a33/',
      brief: 'Yogesh co-founded a popular blockchain startup, SpankChain, in 2017, which raised $11 million in token sales. Prior to founding SpankChain, Yogesh worked as Lead Software Engineer at ZEFR, Director of Engineering at Wickr, and Software Engineer at Google. He holds a Masters degree in Computer Science from Stony Brook University under professor Joseph Mitchell.'
    },
    {
      avatar: 'Sergey-Nikitin-Large.jpg',
      name: 'Sergey Nikitin',
      title: ' Head of Technology',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/snikitin2/',
      brief: 'Sergey started his career at Microsoft and has since worked in the IT industry. Prior to joining LQDEX, he founded xCoins.io, an innovative peer-to-peer cryptocurrency lending platform that allows nearly instant acquisition of bitcoin. Sergey holds a BS degree in Computer Science and an MBA degree from University of California, Los Angeles.'
    },
    {
      avatar: 'richardBranning.jpg',
      name: 'Rich Branning',
      title: 'Head of Bus. Dev.',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/richard-branning-0252283b/',
      brief: 'Rich co-founded Closetclicks, an investor-backed social fashion startup. Prior to that he worked as District Manager at ADP, a leading automatic data processing company. He obtained his degree in Economics at Pepperdine University.'
    },
    {
      avatar: 'MichelleKim.jpg',
      name: 'Michelle Kim',
      title: 'Head of Operations',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/michelle-kim-05086213a/',
      brief: 'Michelle has been passionate about blockchain technology since she started managing operations for a cryptocurrency lending platform in early 2017. She has extensive experience in platform security and operational issues. Michelle holds a BS degree in Cognitive Psychology from University of California, Irvine.'
    },
    //{
    //  avatar: 'GregKalin.jpg',
    //  name: 'Greg Kalin',
    //  title: 'Finance',
    //  advisor: '',
    //  myLink: 'https://www.linkedin.com/in/greg-kalin-b6186554/',
    //  brief: 'Greg spent his career in finance working in private wealth management at Morgan Stanley Smith-Barney. Additionally, he co-founded Closetclicks, an investor-backed social fashion startup.'
    //},
    {
      avatar: 'PatrickMaher.jpg',
      name: 'Patrick Maher',
      title: 'Head of Client Relations',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/patrick-maher-6b7b0b7b/',
      brief: 'Patrick began his career as a data analyst for Coin Dealer Newsletter. He was introduced to bitcoin in early 2014 and started a cryptocurrency mining operation. Patrick graduated from Colorado State with a BS degree in Computer Information Systems.'
    },
    {
      avatar: 'EthanReynolds.jpg',
      name: 'Ethan Reynolds',
      title: 'Head of Public Relations',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ethan-reynolds-73b50663/',
      brief: 'Since 2012, Ethan has specialized in the creation, incubation and promotion of digital and startup companies. He has successfully launched international brands, and placed in top-tier publications including TechCrunch and Forbes.'
    },
    {
      avatar: 'ajishnew.jpg',
      name: 'Ajish Pillai',
      title: 'Solutions Architect',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ajish-pillai-7575b0104/',
      brief: 'Ajish has over 17 years of extensive IT architecture design and development experience with a focus on enterprise applications. He has worked with several Fortune 500 companies in the banking, hedgefund, telecommunication, and e-commerce industries.'
    },
    {
      avatar: 'RamKumar.jpg',
      name: 'Ram Kumar',
      title: 'Lead Engineer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ramkumardevaraj/',
      brief: 'Ram co-founded a successful cloud and data startup that scaled from 4 to 100 people over the span of two years. He has gained vast experience in the past 11 years in web, mobile, and algorithm development from notable companies such as Motorola and Texas Instruments.'
    },
    {
      avatar: 'AndresCortes.jpg',
      name: 'Andrés Cortés',
      title: 'Full Stack Web Developer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/andr%C3%A9s-cort%C3%A9s-zald%C3%ADvar-69a3a766/',
      brief: 'Andrés is a well-versed developer with over five years of experience in web, mobile, and desktop applications with some highly recognized companies in Spain. He advised in two proof-of-concept projects based on blockchain technology.'
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