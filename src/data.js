import beanSearcherImage from './assets/mockup__mobile-on-table.jpg';
import AiLanguageImage from './assets/mockup__mobile-on-white-table.jpg';
import ProductivityHelperImage from './assets/mockup__red-laptop.jpg';


import laptopMockupBeanSearcher from './assets/mockup__laptop-on-grey.jpg';
import laptopMockupProductivity from './assets/mockup__mobile-on-grey.jpg';
import laptopMockupChatBot from './assets/mockup-ipad.webp';
//import laptopMockupSticky from './assets/laptop-mockup.webp';
import laptopMockupSticky from './assets/mockup__mobile-on-grey.jpg';
import mobileMockup from './assets/mobile_01.png';
import mobileMockup2 from './assets/BNG iphone.jpg';


export const projectsData = [
    {
        title: 'AI Language Assistant',
        description: 'Improve your spoken spanish.',
        image: AiLanguageImage,
        grid: '7 / 13',
        align: 'right',
        link: '/project-ai-spanish-assistant'
    },

    {
        title: 'Bean Searcher',
        description: 'Application for exploring, comparing, and finding coffee beans.',
        image: beanSearcherImage,
        grid: '1 / 7',
        align: 'left',
        link: '/project-bean-searcher'
    },

    {
        title: 'Learning Helper',
        description: 'It helps to plan and keep daily learning habits.',
        image: ProductivityHelperImage,
        grid: '7 / 13',
        align: 'right',
        link: '/project-productivity-helper'
    },

]



export const ProjectsMenuData = [

    {
        title: 'AI Spanish Buddy',
        hover: 'Can help you with conversations',
        link: '/project-ai-spanish-assistant',
    },
    
    {
        title: 'Bean Searcher',
        hover: 'Find your perfect bag of coffee',
        link: '/project-bean-searcher',
    },


    {
        title: 'Productivity Helper',
        hover: 'Keep up the great work',
        link: '/project-productivity-helper',
    },

    
]







export const personalProjectsData = [

    {
        link: '/project-ai-spanish-assistant',
        title: 'AI Spanish Assistant',
        liveSite: 'view live site',
        mainImage: laptopMockupChatBot,
        stickyImage: laptopMockupSticky,
        firstMobileMockup: mobileMockup,
        secondMobileMockup: mobileMockup2,

        overview: `Coffee lovers often face challenges in exploring and comparing coffee beans 
                    from multiple online sources. The absence of a centralized platform makes it 
                    difficult to browse through various options, compare prices, and track new arrivals. 
                    Bean Searcher aims to address these issues by providing a user-friendly application 
                    that streamlines the process of searching and comparing coffee beans.`,
    
        problem: `Coffee lovers often face challenges in exploring and comparing coffee beans 
                  from multiple online sources. The absence of a centralized platform makes it 
                  difficult to browse through various options, compare prices, and track new arrivals. 
                  Bean Searcher aims to address these issues by providing a user-friendly application 
                  that streamlines the process of searching and comparing coffee beans.`,
    
        solution: 'Bean Searcher is designed to be a comprehensive solution, offering the following features:',
    
        solution_list: [
          'User Authentication: <br/><br/> Firebase\'s authentication module is integrated into the application, enabling users to create accounts, log in securely, and maintain their personalized profiles.',
          'Wishlist Creation: <br/><br/> Once authenticated, users can create personalized wishlists by adding desired coffee bean bags to their collection. This feature allows users to curate a list of preferred beans for future reference or purchase.',
          'Search Functionality: <br/><br/> Bean Searcher leverages web scraping techniques to gather data from various online shops and roasteries. Users can search for specific coffee beans using keywords, filter by attributes like roast type or origin, and obtain detailed information about each product.',
          'Sorting and Filtering: <br/><br/> The app provides sorting options to help users find coffee beans based on their preferences. Sorting by price allows users to identify the best deals, while filtering options enable users to refine their search based on roast level, origin, or other relevant factors.',
          'New Arrivals: <br/><br/> Bean Searcher keeps users informed about the latest additions to the inventory. The app highlights new arrivals, ensuring users stay up-to-date with the coffee bean market.'
        ],
        architecture: `The architecture of Bean Searcher follows a client-server model. 
                       The client-side is built using React, while the server-side is implemented using Node.js. 
                       The client communicates with the server via API calls, which are processed by serverless functions hosted on Netlify. 
                       Data is stored in a MongoDB database, and Mongoose is used to define data schemas and interact with the database.
                       Firebase authentication was integrated to handle user registration, login, and session management. 
                       This ensured secure access to the application's features.`
    },

    {
        link: '/project-bean-searcher',
        title: 'Bean Searcher',
        liveSite: 'view live site',
        mainImage: laptopMockupBeanSearcher,
        stickyImage: laptopMockupSticky,
        firstMobileMockup: mobileMockup,
        secondMobileMockup: mobileMockup2,

        overview: `I created app for coffee enthusiasts that helps to discover, browse, compare coffee beans. 
                    Using web scraping techniques, I've integrated data from different online coffee shops, 
                    providing users with a comprehensive selection of coffee beans, including details like origin, flavor profiles, new arrivals. 
                    User can explore a wide range of coffee beans from various sources, all in one place.`,



    
        problem: `Coffee lovers often face challenges in exploring and comparing coffee beans 
                  from multiple online sources. The absence of a centralized platform makes it 
                  difficult to browse through various options, compare prices, and track new arrivals.`,
    
        solution: 'Bean Searcher is designed to be a comprehensive solution, offering the following features:',
    
        solution_list: [
          'User Authentication: <br/><br/> Firebase\'s authentication module is integrated into the application, enabling users to create accounts, log in securely, and maintain their personalized profiles.',
          'Wishlist Creation: <br/><br/> Once authenticated, users can create personalized wishlists by adding desired coffee bean bags to their collection. This feature allows users to curate a list of preferred beans for future reference or purchase.',
          'Search Functionality: <br/><br/> Bean Searcher leverages web scraping techniques to gather data from various online shops and roasteries. Users can search for specific coffee beans using keywords, filter by attributes like roast type or origin, and obtain detailed information about each product.',
          'Sorting and Filtering: <br/><br/> The app provides sorting options to help users find coffee beans based on their preferences. Sorting by price allows users to identify the best deals, while filtering options enable users to refine their search based on roast level, origin, or other relevant factors.',
          'New Arrivals: <br/><br/> Bean Searcher keeps users informed about the latest additions to the inventory. The app highlights new arrivals, ensuring users stay up-to-date with the coffee bean market.'
        ],
        architecture: `The architecture follows a client server model. 
                       The client side is built using <bold>React</bold>, while the server side is implemented using Node.js. 
                       The client communicates with the server via API calls, which are processed by serverless functions hosted on Netlify. 
                       Data is stored in a MongoDB database, and Mongoose is used to define data schemas and interact with the database.
                       Firebase authentication was integrated to handle user registration, login, and session management. 
                       This ensured secure access to the application's features.`
    },

    {
        link: '/project-productivity-helper',
        title: 'Productivity Helper',
        liveSite: 'view live site',
        mainImage: laptopMockupProductivity,
        stickyImage: laptopMockupSticky,
        firstMobileMockup: mobileMockup,
        secondMobileMockup: mobileMockup2,
        overview: `A productivity app for effective daily planning, organization, and learning assistance in our fast-paced world.`,
        problem: `In today's fast-paced world, individuals often find themselves overwhelmed by their daily tasks and responsibilities. 
                    Staying organized and laearning can be challenging. 
                    To address this issue, we present a productivity helper app 
                    designed to help users plan and manage their day effectively especially when it comes to learning and keeping the good work.`,
        solution: `Productivity helper app designed to help users plan and manage their day effectively especially when it comes to learning and keeping the good work.`,
        
        solution_list: [
          'Task Planner: <br/><br/> Users can create tasks, organize them into categories, and prioritize them.',
          "Category Management: <br/><br/> Categories can be created and customized to suit the user's specific needs. For example, a 'Spanish' category may include subcategories like 'Grammar,' 'Vocabulary,'' and 'Writing Skills'.",
          'Countdown Timer: <br/><br/> Each subcategory includes a countdown timer. Users can allocate a specific amount of time to work on tasks within that subcategory. This encourages focused work sessions.',
          'Task Progress Tracking: <br/><br/> Users can mark tasks as complete, providing an overview of how much of their planned tasks are accomplished.',
          
        ],
        architecture: `A lightweight and beginner-friendly application built using vanilla JavaScript and local storage.`
    },
]