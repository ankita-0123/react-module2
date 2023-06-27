import React from "react";
import play from '../Images/home.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="button-group">
          <button className="button button-lg">Get our Latest Album</button>
          <button className="button button-icon">
            <img src={play} alt="Play Icon" className="play-icon" />
          </button>
        </div>
      </div>
      <div className="container">
        <h2 className="heading">Tours</h2>
      </div>
      <div className="table-container">
        <table className="table">
          <tbody>
            <tr>
              <td>JUL 16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td><button className="button button-lg button-active">Buy tickets</button></td>
            </tr>
            <tr>
              <td>JUL 19</td>
              <td>TORONTO, ON</td>
              <td>BUDWEISER STAGE</td>
              <td><button className="button button-lg button-active">Buy tickets</button></td>
            </tr>
            <tr>
              <td>JUL 22</td>
              <td>DETROIT</td>
              <td>JIGGY LUBE LIVE</td>
              <td><button className="button button-lg button-active">Buy tickets</button></td>
            </tr>
            <tr>
              <td>JUL 29</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td><button className="button button-lg button-active">Buy tickets</button></td>
            </tr>
            <tr>
              <td>AUG 2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td><button className="button button-lg button-active">Buy tickets</button></td>
            </tr>
            <tr>
              <td>AUG 7</td>
              <td>CONCORD, CA</td>
              <td>CONCORD PAVILION</td>
              <td><button className="button button-lg button-active">Buy tickets</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
