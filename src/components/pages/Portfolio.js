import React from 'react';

export default function about() {
    return (
        <div className="container">
            <div className="row col-12">
            <h1>Projects</h1>
            <p>I have been working on a number of projects, some of which are listed below:</p>
            </div>
            
            <div className="row col-6">
            <h1>Budget Tracker</h1>
            <img src="./budgettracker.png" className="project" alt="Budget Tracker" />
            <a href="https://github.com/Devnah4/budget-tracker">View the repository</a>
            </div>
            <div className="row col-6">
            <h1>Social Network Backend Api</h1>
            <img src="./socialnetworkbackendapi.png" className="project" alt="Social Network" />
            <a href="https://github.com/Devnah4/mongodb-social-network-api">View the repository</a>
            </div>
            <div className="row col-6">
            <h1>Food Festival</h1>
            <img src="./foodfestival.PNG" className="project" alt="Food Festival" />
            <a href="https://github.com/Devnah4/food-festival">View the repository</a>
            </div>
            <div className="row col-6">
            <h1>Budge-it</h1>
            <img src="./budgeit.png" className="project" alt="Budge-it" />
            <a href="https://github.com/Devnah4/budge-it">View the repository</a>
            </div>
            <div className="row col-6">
            <h1>Employee Generator</h1>
            <img src="./employeemaker.png" className="project" alt="Employee Generator" />
            <a href="https://github.com/Devnah4/employee-generator-for-science">View the repository</a>
            </div>
            <div className="row col-6">
            <h1>Employee Tracker</h1>
            <img src="./employeetracker.png" className="project" alt="Employee Tracker" />
            <a href="https://github.com/Devnah4/employee-tracker-for-science">View the repository</a>
            </div>
            <div className="row col-6">
            <h1>Fridge-Friend</h1>
            <img src="./fridge_friend.png" className="project" alt="Fridge Friend" />
            <a href="https://github.com/beimy/fridge-friend">View the repository</a>
            <a href="https://fridge-friends.herokuapp.com/">View the Deployment</a>
            </div>
        </div>
    )
}