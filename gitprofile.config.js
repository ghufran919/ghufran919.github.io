// gitprofile.config.js

const config = {
  github: {
    username: 'ghufran919', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Resume-AMMAN-Coding-Bootcamp', 'full-stack-web-assignments', 'ghufran919.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ghufran919',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'ghufran919',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://ghufran919.my.id',
    phone: '+6285238035370',
    email: 'official@ghufran919.my.id',
  },
  resume: {
    fileUrl:
      'https://ghufran919.my.id/cv/wp-content/uploads/2023/03/CV-Ahmad-Ghufran-Akbar.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'MySQL',
    'Git',
    'HTML',
    'CSS',
    'Wordpress',
  ],
  experiences: [
    {
      company: 'SeaCMD Universitas Mataram',
      position: 'Website Development',
      from: '2023',
      to: 'Present',
      companyLink: 'https://seacmd.unram.ac.id',
    },
    {
      company: 'Summercourse Universitas Mataram',
      position: 'Website Development',
      from: '2023',
      to: 'Present',
      companyLink: 'https://summercourse.unram.ac.id',
    },
     {
      company: 'Indonesian Youth Diplomacy',
      position: 'Website Development',
      from: '2023',
      to: 'Present',
      companyLink: 'https://iyd-westnusatenggara.com',
    },
     {
      company: 'FPCI Chapter Universitas Mataram',
      position: 'Website Development',
      from: '2023',
      to: 'Present',
      companyLink: 'https://fpci-chapterunram.com',
    },
  ],
  certifications: [
    {
      name: 'PT. Impactbyte Teknologi - Skilvul',
      body: 'AMMAN Coding Bootcamp',
      year: 'September 2021',
      link: 'null',
    },
    {
      name: 'BabaStudio',
      body: 'Wordpress e-Commerce Website Development',
      year: 'March 2020',
      link: 'null',
    },
  ], 
  education: [
    {
      institution: 'Universitas Mataram',
      degree: 'International Relations',
      from: '2019',
      to: 'Present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Kalkulator Indeks Massa Tubuh',
      description:
        'Simple BMI Calculator based on HTML, CSS, and Javascript',
      imageUrl: 'https://ghufran919.my.id/cv/wp-content/uploads/2023/03/download.png',
      link: 'https://indeksmassatubuh.netlify.app/',
    },
    {
      title: 'Movie App dengan TMDB API',
      description:
        'Simple Movie Rating App based on HTML, CSS, and Javascript connected to TMDB API',
      imageUrl: 'https://ghufran919.my.id/cv/wp-content/uploads/2023/03/download.png',
      link: 'https://skilmovie-ghufran919.netlify.app/',
    },
    {
      title: 'To-Do List App',
      description:
        'Simple ReactJs To-Do List App',
      imageUrl: 'https://ghufran919.my.id/cv/wp-content/uploads/2023/03/download.png',
      link: 'https://todo-app-ghufran919.netlify.app/',
    },
    {
      title: 'Baby Care Love e-Commerce Site',
      description:
        'e-Commerce site based on Responsive Web Design (RWD) with Bootstrap',
      imageUrl: 'https://ghufran919.my.id/cv/wp-content/uploads/2023/03/download.png',
      link: 'https://babycarelove.netlify.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-VN8YXPE3E6', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://ghufran919.my.id/"
      target="_blank"
      rel="noreferrer"
    >Ahmad Ghufran Akbar</a>`,
};

export default config;
