/*
  Edit this file to replace titles, descriptions, image previews, and links.
  Do not add the in-progress neural network here until it is complete and demonstrable.
*/
const portfolioConfig = {
  name: 'Mate Asanidze',
  email: 'hello@example.com',
  social: { github: '#', linkedin: '#', x: '#' }
};

const projects = [
  {
    id: 'chatbot-website-01', number: '01', type: 'chatbot', filters: ['frontend', 'chatbot'],
    title: 'Website + AI Chatbot', category: 'AI Chatbot / Frontend',
    description: 'A responsive website combined with a custom AI chatbot, allowing visitors to interact with the website through a conversational interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI API'], github: 'https://github.com/mate882/Gym.git', live: 'https://gym-k9u8.vercel.app',
    details: {
      overview: 'A completed responsive website with a custom website AI chatbot.',
      problem: 'Create a website experience where visitors can access information through a conversational interface.',
      built: 'A responsive frontend interface and an integrated AI chatbot experience.',
      how: 'Visitors browse the website and can open the chatbot to ask questions in context.',
      challenges: 'Maintaining a clear, usable experience across screen sizes while introducing a conversational interface.',
      solution: 'A responsive layout with the chatbot integrated as part of the website experience.',
      results: 'A completed frontend and AI chatbot integration project.',
      learned: 'Designing conversational interactions within a responsive website.'
    }
  },
  {
    id: 'chatbot-website-02', number: '02', type: 'chatbot', filters: ['frontend', 'chatbot'],
    title: 'Website + AI Chatbot', category: 'AI Chatbot / Frontend',
    description: 'A responsive website combining modern frontend development with a custom AI chatbot designed to provide an interactive conversational experience for visitors.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI API'], github: 'https://github.com/mate882/Hotel.git', live: 'https://hotel-zeta-beige.vercel.app',
    details: {
      overview: 'A second completed responsive website with a custom AI chatbot.',
      problem: 'Build a modern website that supports a useful, approachable conversational experience for visitors.',
      built: 'A responsive frontend and a custom AI chatbot integrated directly into the website.',
      how: 'The interface lets visitors explore the website and engage with its chatbot conversation flow.',
      challenges: 'Bringing visual clarity and interaction together in a responsive interface.',
      solution: 'A focused frontend structure with the chatbot integrated into the visitor journey.',
      results: 'A completed responsive frontend and website AI chatbot project.',
      learned: 'Creating a cohesive experience between website content and conversational interaction.'
    }
  },
  {
    id: 'gsap-experience-01', number: '03', type: 'gsap', filters: ['frontend', 'gsap'],
    title: 'GSAP Visual Experience', category: 'Creative Frontend / GSAP',
    description: 'An interactive frontend experience focused on visual design, responsive layouts, smooth transitions, and GSAP-powered animation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'], github: 'https://github.com/mate882/MidnightPour.git', live: 'https://mate882.github.io/MidnightPour/',
    details: {
      overview: 'A completed interactive frontend project built around visual design and purposeful motion.',
      problem: 'Create an engaging responsive web experience where animation supports the visual presentation.',
      built: 'A responsive frontend with GSAP-powered transitions and interactive visual details.',
      how: 'Layout, interaction, and motion work together to guide visitors through the experience.',
      challenges: 'Keeping motion smooth, responsive, and supportive of the interface.',
      solution: 'Purposeful GSAP animation paired with a responsive frontend structure.',
      results: 'A completed visual frontend engineering project.',
      learned: 'Balancing creative interaction with usable, responsive implementation.'
    }
  }
];
