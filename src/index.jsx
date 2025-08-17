import { Jarvis } from './lib/lib'
import myImage from '../asset/my-image.png';

// --- Simple Client-Side Router (No Hooks Needed) ---
const portfolioData = {
  projects: [
    {
      id: 1,
      title: 'React-like Library',
      description: 'This project involved building a custom React-like library from scratch, focusing on understanding the core concepts of React such as virtual DOM, reconciliation, and hooks. The library supports basic features like state management and component rendering, providing a hands-on experience with the principles of modern frontend development.\
      this library is used to build this portfolio website, showcasing its capabilities in a real-world application. Also used for the ft_transcendence project',
      sourceCode: ['react-like'],
      links: ['https://github.com/achahid19/jarvisLib'],
      tech: ['TypeScript', 'Virtual DOM', 'Reconciliation', 'State Hook', 'Jsx Support', 'Frontend Development']
    },
    {
      id: 2,
      title: 'HTTP / IRC protocols implementation - Webserv & IRC',
      description: 'These projects were focused on implementing HTTP and IRC protocols. In Webserv, I developed a full web server that can handle HTTP requests and serve both static/dynamic files. This project deepened my understanding of web protocols and server-client architecture. In IRC, I implemented a basic Internet Relay Chat server that supports multiple clients and channels, enhancing my skills in network programming and real-time communication.',
      sourceCode: ['Webserv', 'IRC'],
      links: ['https://github.com/achahid19/Web-Server', 'https://github.com/achahid19/irc_server'],
      tech: ['HTTP/1.1 Protocol', 'IRC Protocol', 'Network Programming (Sockets)', 'Real-time Communication', 'CPP programming']
    },
    {
      id: 3,
      title: "System Administration, Visualization, Networking Projects",
      description: "These porjects aimed to introduce me to build system and understand how they work. Born2beroot was a project that focused on system administration, where I learned to configure and manage a Linux server using the virtualization tools as VirtualBoox, including setting up a wordpress, database as maria-db, and many security measures. \
      The NetPractice was about networking, where I learned to configure a network and understand how it works. Inception was a project that focused on containerization, where I learned to use Docker to create and manage containers and built a small infrastructure, including setting up a web server, database, and other services.",
      sourceCode: ["Born2BeRoot", "NetPractice", "Inception"],
      links: ['#', '#', 'https://github.com/achahid19/Inception_42'],
      tech: ['Docker', 'VirtualBox', 'Linux System Administration', 'TCP/IP Networking', 'Containerization', 'Virtualization']
    },
    {
      id: 4,
      title: "Pair C Programming Projects - Minishell & Cub3D",
      description: "These projects were completed in pairs, focusing on collaborative problem-solving and advanced C programming techniques. In minishell, we created a Unix shell bash-like implementation that supports command execution, piping, and redirection. This project deepened our understanding of process management and system calls. In cub3D, we developed a 3D raycasting engine to render a 3D environment from a 2D map, enhancing our skills in graphics programming and algorithm optimization.",
      sourceCode: ["miniShell", "cub3D"],
      links: ['https://github.com/achahid19/Mini_HELL', 'https://github.com/Khdzakariae/cub3D'],
      tech: ["Unix Shell", "Raycasting", "Graphics Programming", "Algorithm Optimization", "C programming"]
    },
    {
      id: 5,
      title: "Foundational C Projects",
      description: "A series of foundational projects that provided a deep understanding of low-level programming and problem-solving techniques. I gained practical experience with Unix systems, including piping and process management, through projects like pipex, a simplified implementation of the Unix pipe command. To hone my skills in data structures and algorithms, I developed push_swap, a sorting algorithm that efficiently sorts integers using only a stack. I also explored concurrency and synchronization by solving the classic dining philosophers problem in the philo project. Finally, to explore mathematical visualization, I built fractol, a program that generates fractals like the Mandelbrot and Julia sets.",
      sourceCode: ["pipex", "push_swap", "philo", "fractol"],
      links: ['https://github.com/achahid19/1337_projects/tree/main/pipex', 'https://github.com/achahid19/1337_projects/tree/main/push_swap', 'https://github.com/achahid19/1337_projects/tree/main/philo', 'https://github.com/achahid19/1337_projects/tree/main/fractol'],
      tech: ["Unix pipes", "Minilibx", "Mathematic visualization", "Process management", "Threads", "Sorting algorithms", "Concurrency", "Data Structures", "C programming \
        ", "Problem Solving"]
    },
    {
      id: 6,
      title: "C Language Utility Library",
      description: "Developed a comprehensive library of reusable C functions. This project served as a hands-on exercise to build a strong understanding of low-level programming concepts. The library includes modules for string manipulation, dynamic memory allocation, and the implementation of various data structures and algorithms. The primary goal was to create a foundational toolkit to be used in various 42-projects, demonstrating a strong grasp of core programming principles.",
      sourceCode: ["libft", "printf", "get_next_line"],
      links: ['https://github.com/achahid19/1337_projects/tree/main/libft', 'https://github.com/achahid19/1337_projects/tree/main/printf', 'https://github.com/achahid19/1337_projects/tree/main/get_next_line'],
      tech: ["C programming", "Data Structures & Algorithms", "Memory Management", "Linux System Programming"]
    },
  ],
  skills: [
    "JavaScript", "React", "C", "C++", "Node.js",
    "Git", "GitHub", "Docker", "HTML", "CSS", "Tailwind CSS",
    "Typescript", "Linux", "VsCode", "Solidity", "Blockchain",
  ]
};

function getPortfolioData() {
  return portfolioData;
}

const getInitialPath = function () {
  let path = window.location.pathname.toLowerCase().replace('/', '');
  const routes = ['welcome', 'explore'];

  // tweaking the path to server from public folder where the bundled
  // webpack code leaves there and the web-server would server from
  // this path management is not robust and only used for learning
  // and developement purposes and not good for production mode.
  
  if (path == '' || path === 'public/' || path === 'public/index.html') {
    path = 'welcome';
    window.history.pushState({}, '', '/welcome');
  }
  if (routes.includes(path)) {
    return path.charAt(0).toUpperCase() + path.slice(1);
  }

  return 'PageNotFound';
};

let setLoad;
let setP;

function WelcomePage({ currentPage, setPage, setLoading }) {
  const isVisible = currentPage === 'Welcome';
  setLoad = setLoading;
  setP = setPage;

  const exploreNow = function () {
    const welcomeEl = document.getElementById('welcome-screen');
    if (welcomeEl) {
      // remove visibility of welcome view
      welcomeEl.style.display = 'none';
      setLoading(true);
      setTimeout(function() {
        // setLoading and setPage would not be accessible after the parent function is executed
        // we need sophisticated way to handle this
        // normaly its wokring with closures
        setLoad(false);
        window.history.pushState({}, '', '/explore');
        setP('Explore');
      }, 2000); // 1s loading duration
    }
  }

  if (!isVisible) return null;
  
  return (
    <div id="welcome-screen"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white transition-opacity duration-300 ease-in-out opacity-100">
      <h1 className="text-4xl font-bold mb-8">Welcome To My Portfolio</h1>
      <button 
        onClick={exploreNow} 
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100 transition">
        Explore Now
      </button>
    </div>
  );
}


function PageNotFound({ currentPage }) {
  if (currentPage !== 'PageNotFound') return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center mt-8 py-4 border-t text-sm text-gray-500">
      <p>
        © 2025 Anas Chahid Ksabi PF. Built with my 
        <a href='#' className='bg-sky-500/50 underline md:decoration-cyan-500'><strong>Custom React-like library</strong></a>
      </p>
    </footer>
  );
}

function NavigationBar({ currentSection, setSection, loading }) {
  if (loading) return null;

  const sections = ['About Me', 'Projects', 'Technologies', 'Contact'];

  return (

    <nav className="flex justify-center space-x-4 py-4 bg-gray-100">
      {sections.map((section) => (
        <button key={section}
          onClick={() => setSection(section)}
          className={`px-4 py-2 rounded ${
            currentSection === section 
              ? 'bg-indigo-600 text-white' 
              : 'text-gray-700 hover:bg-gray-200'
          }`}>
          {section}
        </button>
      ))}
    </nav>
  );
}

function AboutMe({ currentSection, loading }) {
  if (currentSection !== 'About Me' || loading) return null;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className='flex flex-row items-center justify-center gap-4'>
        <img src={ myImage } className='h-32 w-32 rounded-full'/>
        <div>
          <h1 className="text-2xl font-semibold">Jr.Software Engineer👨‍💻</h1>
          <span className='block text-gray-300 text-sm'>Finance & Economics Background.</span> 
        </div>
      </div>
      <p className='bg-gray-100 p-4 rounded-lg shadow-md font-mono m-4'>
        With a strong background in finance and a growing passion for technology, I am currently seeking a <span className='underline md:decoration-cyan-500'><strong>6 month internship</strong></span> 
        &nbsp;as a Junior Developer. My unique interdisciplinary skills, developed through a Master's in Finance and two years at the <a href='#' className='underline md:decoration-cyan-500'>1337 coding school</a>
        &nbsp;have provided me with a robust understanding of both economics and fundamental of computer science principles like data structures, algorithms, and problem-solving.
        In addition I have a deep interest in Web3.0, and for the past four years, I've been actively exploring and engaging with decentralized technologies. I have hands-on experience
        using blockchain protocols, studying various Web3.0 projects, and learning about the potential of these technologies to revolutionize industries. I am eager to contribute
        my blend of technical skills and financial insight to a dynamic team where I can help build impactful projects and continue to grow as a developer.
        <br />
        <br />
        <div className='text-right text-gray-400 underline md:decoration-black-300'>@Ks.Dev</div>
      </p>
      <div className='text-center m-4'><span className='underline md:decoration-cyan-500'><strong>Let’s connect and explore how I can add value to your organization / project!</strong></span></div>
      <div className='block text-center'><a className='justify-self-auto bg-sky-500/50 underline md:decoration-cyan-500 text-gray-500 text-lg' href='#'><strong>Download my CV NOW!</strong></a></div>
      <Footer />
    </div>
  );
}

function Projects({ currentSection, loading }) {
  if (currentSection !== 'Projects' || loading) return null;

  const { projects } = getPortfolioData();

  return (
    <div>
    <div className="p-6 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="bg-white border-l-2 border-r-4 border-b-8 border-indigo-500 rounded-lg p-6 hover:border-gray-500 transition-all">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.sourceCode.map((tech, i) => (
              <a href={`${project.links[i]}`} target='_blank' key={i} className="bg-blue-100 text-indigo-500 px-2 py-1 rounded text-sm underline hover:no-underline"><strong>{tech[0].toUpperCase() + tech.slice(1)}</strong></a>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">{tech}</span>
            ))}
          </div>
        </div>
      ))}
        
    </div>
    <div className='p-6 max-w-3xl mx-auto'>
    <Footer />
    </div>
    </div>
  );
}

function Skills({ currentSection, loading }) {
  if (currentSection !== 'Technologies' || loading) return null;

  const { skills } = getPortfolioData();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <ul className="grid grid-cols-2 gap-2">
        {skills.map((skill, i) => (
          <li key={i} className="bg-gray-100 px-3 py-2 rounded text-center text-base hover:bg-gray-200 hover:shadow-md hover:text-indigo-700 hover:text-lg transition-all">
            { skill }
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

function Contact({ currentSection, loading }) {
  if (currentSection !== 'Contact' || loading) return null;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <div className="space-y-2 text-gray-700">
        <p>If you have any questions, want to collaborate, or just want to say hi, feel free to reach out!</p>
        <p>Email: <a href="mailto:anasks1999@gmail.com" className="text-indigo-600 hover:underline">anasks1999@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/anas-chahid-ksabi/" target="_blank" className="text-indigo-600 hover:underline">@Anas-Chahid-Ksabi</a></p>
        <p>GitHub: <a href="https://www.github.com/achahid19" target="_blank" className="text-indigo-600 hover:underline">@achahid19</a></p>
        <p>Twitter: <a href="https://www.twitter.com/it_CryptoKs" target="_blank" className="text-indigo-600 hover:underline">@it_CryptoKs</a></p>
      </div>
      <Footer />
    </div>
  );
}

function Loading({ loading }) {
  console.log('Loading:', loading);
  if (!loading) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-indigo-600">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
      <p className="text-lg font-semibold">Loading your portfolio...</p>
    </div>
  )
}

function App() {
  const [currentPage, setPage] = Jarvis.useState(getInitialPath());
  const [currentSection, setSection] = Jarvis.useState('About Me');
  const [loading, setLoading] = Jarvis.useState(false);

  window.onpopstate = (e) => {
    e.preventDefault();
    const newView = getInitialPath();
    setPage(newView);
  };

  return (
    <div className='text-gray-600'>
      <WelcomePage currentPage={currentPage} setPage={setPage} setLoading={ setLoading } />
      <Loading loading={ loading } />
      {currentPage === 'Explore' && (
        <div key={currentPage} className="animate-fadeIn">
          <NavigationBar currentSection={currentSection} setSection={setSection} loading={ loading } />
          <AboutMe currentSection={currentSection} loading={ loading } />
          <Projects currentSection={currentSection} loading={ loading } />
          <Skills currentSection={currentSection} loading={ loading } />
          <Contact currentSection={currentSection} loading={ loading } />
        </div>
      ) || ''}
      <PageNotFound currentPage={currentPage} />
    </div>
  );
}


const container = document.getElementById('root');
Jarvis.render(<App />, container);

console.log('for webpack side effects');


/**
 * important note:
 * 
 * use enum for pages, sections naming. it would be pain to change the naming without enums *-*.
 * fix the issue with the back-next page(for smooth UX), code reloading.
 * next thing now is to style the page.
 * 
 * use variables for colors, fonts, sizes, etc. to make it easy to change the theme.
  */
