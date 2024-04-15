import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
    const name = "Kim Hsieh";
    const description1 = "Junior Student";
    const description2 = "Studying Computer Science and Information Engineering at NCU";
    const github = "https://github.com/SL3333PY";
    const linkedin = "https://www.linkedin.com/in/jin-ru-hsieh/";
    const aboutMe = "Hi. I'm Kim, a junior student majoring in Computer Science and Information Engineering (CSIE) at National Central University (NCU).";
    const education = "TFG, NCU";
    const skills = "C++, Python, Java, x86 Assembly, MySQL, SQLite";

    const projects = [
        {
          name: "Auction",
          description: "An auction simulator in Python that utilizes sockets to establish TCP connections, allowing for up to four simultaneous users.",
          image: "Auction.png",
          labels: ["Python", "TCP", "PyQt"]
        },
        {
          name: "Portfolio",
          description: "Peronal Portfolio",
          image: "Portfolio.png",
          labels: ["Typescript", "React", "Three.js"]
        },
        {
            name: "Project 3",
            description: "Description of Project 3",
            image: "url_to_image",
            labels: ["Python", "React", "MySQL"]
          }
        // More projects
      ];

    return (
        <Router basename='/'>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={ 
                    <Home 
                        name = { name } 
                        description1 = { description1 } 
                        description2 = { description2 }
                        github = { github }
                        linkedin = { linkedin }
                        /> } />
                    <Route path="/about" element={ 
                    <About 
                        aboutMe = { aboutMe }
                        education = { education }
                        skills = { skills }
                    /> } />
                    <Route path="/projects" element={ <Projects projects={projects} /> } />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
        </Router> 
    );
    
}

export default App;