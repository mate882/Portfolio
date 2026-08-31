/*
  Project content lives here so it can be changed without touching the layout.
  Add the neural-network project only after it is finished and demonstrable.
*/
const portfolioConfig = {
  name: 'Mate Asanidze',
  email: 'mateasanidze808@gmail.com',
  social: {
    github: 'https://github.com/mate882',
    linkedin: 'https://www.linkedin.com/in/mate-asanidze-22ba36391/',
    x: 'https://x.com/MateAsanidze'
  }
};

const projects = [
  {
    id: 'chatbot-website-01', number: '01', type: 'chatbot', filters: ['frontend', 'chatbot'],
    title: 'Website + AI Chatbot', category: 'AI Chatbot / Frontend',
    description: 'A responsive website combined with a custom AI chatbot, allowing visitors to interact with the website through a conversational interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI API'], github: 'https://github.com/mate882/Gym', live: 'https://gym-k9u8.vercel.app',
    details: {
      overview: 'A completed responsive website with a custom website AI chatbot.',
      built: 'A responsive frontend interface and an integrated AI chatbot experience.',
      features: 'Visitors can browse the website and open the chatbot to begin a conversation in context.',
      challenges: 'Maintaining a clear, usable experience across screen sizes while introducing a conversational interface.',
      solution: 'A responsive layout with the chatbot integrated as part of the website experience.',
      learned: 'Designing conversational interactions within a responsive website.',
      note: 'Answers may take a while to load.'
    }
  },
  {
    id: 'chatbot-website-02', number: '02', type: 'chatbot', filters: ['frontend', 'chatbot'],
    title: 'Website + AI Chatbot', category: 'AI Chatbot / Frontend',
    description: 'A responsive website combining modern frontend development with a custom AI chatbot designed to provide an interactive conversational experience for visitors.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI API'], github: 'https://github.com/mate882/Hotel', live: 'https://hotel-zeta-beige.vercel.app',
    details: {
      overview: 'A completed responsive website with a custom AI chatbot.',
      built: 'A responsive frontend and a custom AI chatbot integrated directly into the website.',
      features: 'The interface lets visitors explore the website and engage with its chatbot conversation flow.',
      challenges: 'Bringing visual clarity and interaction together in a responsive interface.',
      solution: 'A focused frontend structure with the chatbot integrated into the visitor journey.',
      learned: 'Creating a cohesive experience between website content and conversational interaction.',
      note: 'Answers may take a while to load.'
    }
  },
  {
    id: 'gsap-experience-01', number: '03', type: 'gsap', filters: ['frontend', 'gsap'],
    title: 'GSAP Visual Experience', category: 'Creative Frontend / GSAP',
    description: 'An interactive frontend experience focused on visual design, responsive layouts, smooth transitions, and GSAP-powered animation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'], github: 'https://github.com/mate882/MidnightPour', live: 'https://mate882.github.io/MidnightPour/',
    details: {
      overview: 'A completed interactive frontend project built around visual design and purposeful motion.',
      built: 'A responsive frontend with GSAP-powered transitions and interactive visual details.',
      features: 'Layout, interaction, and motion work together to guide visitors through the experience.',
      challenges: 'Keeping motion smooth, responsive, and supportive of the interface.',
      solution: 'Purposeful GSAP animation paired with a responsive frontend structure.',
      learned: 'Balancing creative interaction with usable, responsive implementation.'
    }
  },
  {
    id: 'e-wallet', number: '04', type: 'backend', filters: ['python'], status: 'Previous Project',
    title: 'E-Wallet', category: 'Python / Django',
    description: 'A Django-based e-wallet application focused on user accounts, wallet operations, and backend business logic.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'], github: 'https://github.com/mate882/E-Wallet',
    details: {
      overview: 'A previous Django project organized around user accounts and wallet management.',
      built: 'A Django project with separate user and wallet applications.',
      features: 'Registration, login, profile, password-reset, wallet creation, deposits, withdrawals, transfers, and transaction history.',
      learned: 'Structuring user flows and related backend operations in a Django application.',
      note: 'Sensitive configuration such as email credentials is stored using environment variables and is intentionally excluded from the repository.'
    }
  },
  {
    id: 'job-board', number: '05', type: 'backend', filters: ['python'], status: 'Previous Project',
    title: 'Job Board', category: 'Python / Django',
    description: 'A Django-based job board application for managing job-related data and user interactions.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'], github: 'https://github.com/mate882/JobBoard',
    details: {
      overview: 'A previous Django project for organizing job-related information and applications.',
      built: 'A Django application with job, company, applicant, and application areas.',
      features: 'Job lists and detail pages, company lists and forms, applicant profiles and applications, plus login and registration pages.',
      learned: 'Modeling related application data and building the accompanying Django views and templates.',
      note: 'You may need to install some dependencies after cloning the repository.'
    }
  },
  {
    id: 'inventory-management', number: '06', type: 'backend', filters: ['python'], status: 'Previous Project',
    title: 'Inventory Management System', category: 'Python / Django',
    description: 'A Django-based inventory management application for managing products, inventory data, and related backend operations.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'], github: 'https://github.com/mate882/InventoryManagementSystem',
    details: {
      overview: 'A previous Django project for organizing inventory-related data and operations.',
      built: 'A Django inventory application with dedicated inventory models, forms, views, and templates.',
      features: 'Dashboard, category management, item detail and forms, stock movement records, and supplier management.',
      learned: 'Building database-driven Django views for connected inventory records.',
    }
  },
  {
    id: 'invoice-generator', number: '07', type: 'backend', filters: ['python'], status: 'Previous Project',
    title: 'Invoice Generator', category: 'Python / Django',
    description: 'A Django-based application for generating and managing invoices through a web interface.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'], github: 'https://github.com/mate882/InvoiceGenerator',
    details: {
      overview: 'A previous Django project for creating and managing invoice information through a web interface.',
      built: 'A Django project with user and invoice applications, forms, views, templates, and utilities.',
      features: 'Account flows, company profile support, invoice creation, updates and deletion, PDF invoice templates, and an email-sending form.',
      learned: 'Connecting Django forms, templates, and utilities for a document-oriented workflow.',
      note: 'Sensitive configuration such as email credentials is stored using environment variables and is intentionally excluded from the repository.'
    }
  }
];
