import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/index.css";
import TopNav from './topNav'



class Home extends Component {
    render() {
        return <div>
            <TopNav />

            <div className="homeBanner">
                <h1>TURN YOUR MENU INTO A POWERFUL MARKETING TOOL</h1>
                <Link to={""}>
                    <button variant="raised">Sample Menu</button>
                </Link>
            </div>
            
          </div>;
    }
}
export default Home;