// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'yog.png',
      name: 'Yogesh Srihari',
      title: 'Head of Product',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/yogesh-srihari-000b3a33/',
      brief: 'Yogesh holds a Masters in Computer Science degree from Stony Brook University under professor Joseph Mitchell.He co-founded a popular blockchain startup called SpankChain in 2017 and had a successful token sale with raise $11M dollars at the time. Prior to that Yogesh has worked as Lead software engineer at ZEFR , Director of Engineering at Wickr , Software Engineer at Google.'
    },
    {
      avatar: 'Sergey-Nikitin-Large.jpg',
      name: 'Sergey Nikitin',
      title: ' Head of Technology',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/snikitin2/',
      brief: 'Sergey started his career at Microsoft and worked in the IT industry ever since. Prior to joining LQDEX, Sergey founded xCoins.io, an innovative peer-to-peer cryptocurrency lending platform, which allows nearly instant acquisition of bitcoin. Sergey holds a BS, Computer Science degree from UCSB and an MBA degree from UCLA.'
    },
    {
      avatar: 'richardBranning.jpg',
      name: 'Rich Branning',
      title: 'Head of Bus. Dev.',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/richard-branning-0252283b/',
      brief: 'Rich Branning got his degree in economics at Pepperdine University. He worked as District Manager at an Automatic Data Processing leading company and was Co-founder of Closetclicks and LQDEX.'
    },
    {
      avatar: 'RamKumar.jpg',
      name: 'Ram Kumar',
      title: 'Lead Engineer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ramkumardevaraj/',
      brief: 'Ram was a co-founder of successful cloud and data startup that scaled from 4 to 100 people over the span of 2 years. Has rich experience of around 11 years in web, mobile and algorithm development in companies like Motorola, Texas Instruments.'
    },
    {
      avatar: 'GregKaling.jpg',
      name: 'Greg Kaling',
      title: 'Finance',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/greg-kalin-b6186554/',
      brief: 'Greg Kalin was the Co-Founder of Closetclicks, an investor-backed social fashion startup. Additionally, he spent time working in private wealth management at Morgan Stanley Smith-Barney.'
    },
    {
      avatar: 'AndresCortes.jpg',
      name: 'Andrés Cortés',
      title: 'Full Stack Web Developer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/andr%C3%A9s-cort%C3%A9s-zald%C3%ADvar-69a3a766/',
      brief: 'Andres is experienced developing on React Framework,he was involved in two proof-of-concept based on BlockChain technology. He has over 5 years experience in web, mobile and desktop application with some higly recognised companies in Spain and as a Freelance.'
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