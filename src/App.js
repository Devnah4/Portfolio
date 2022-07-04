import React, { useState, useEffect } from "react";
import './App.css';
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import NavBar from "./components/NavBar";


function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }

        if (currentPage === 'Contact') {
            return <Contact />
        }

        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    useEffect(()=> {
        document.title = currentPage;
    })

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <NavBar onPageChange={handlePageChange} />
            {renderPage()}
            <footer>
                <p>&copy; {new Date().getFullYear()}</p>
                <a href="https://www.linkedin.com/in/martin-costas-9b6033233/"><img src="./lilogo.png" alt="Linkedin Logo" /></a>
                <a href="https://github.com/Devnah4"><img src="./GitHubLogo.png" alt="GitHub Logo"/></a>
                <a href="https://www.youtube.com/user/deathmonkster/featured"><img src="./youtubeicon.png" alt="Youtube Logo"/></a>
            </footer>
        </div>
    )
}

export default App;