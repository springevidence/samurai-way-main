import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header  className="header">
                <img src="https://seeklogo.com/images/C/company-name-logo-09881CAD1A-seeklogo.com.png" alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg" alt="sky"/>
                </div>
                <div>
                    My posts
                </div>
                <div>
                    New post
                </div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
            </div>
        </div>
    );
}
export default App;
