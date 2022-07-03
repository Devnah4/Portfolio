import React, { useState, useEffect } from "react";
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
        </div>
    )
}

export default App;