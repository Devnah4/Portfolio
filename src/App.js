import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import NavBar from "./components/NavBar";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    if (currentPage === "Contact") {
      return <Contact />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  useEffect(() => {
    document.title = currentPage;
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class="container">
      <NavBar onPageChange={handlePageChange} />
      {renderPage()}
<<<<<<< Updated upstream
      <footer class="container-fluid">
        <div class="row">
          <span class="mb-3 mb-md-0 text-muted">&copy; {new Date().getFullYear()}</span>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a href="https://www.linkedin.com/in/martin-costas-9b6033233/">
                <img src="./lilogo.png" alt="Linkedin Logo" className="logo" />
              </a>
            </li>
            <li class="ms-3">
              <a href="https://github.com/Devnah4">
                <img
                  src="./GitHubLogo.png"
                  alt="GitHub Logo"
                  className="logo"
                />
              </a>
            </li>
          </ul>
=======
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-5">
              <div class="flex-center">
                <a href="https://www.linkedin.com/in/martin-costas-9b6033233/">
                  <img
                    src="./lilogo.png"
                    alt="Linkedin Logo"
                    className="logo"
                  />
                </a>
                <a href="https://github.com/Devnah4">
                  <img
                    src="./GitHubLogo.png"
                    alt="GitHub Logo"
                    className="logo"
                  />
                </a>
                <a href="https://www.youtube.com/user/deathmonkster/featured">
                  <img
                    src="./youtubeicon.png"
                    alt="Youtube Logo"
                    className="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3 text-black">
          &copy; {new Date().getFullYear()}
>>>>>>> Stashed changes
        </div>
      </footer>
    </div>
  );
}

export default App;
