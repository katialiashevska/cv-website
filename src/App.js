import React, { useEffect } from 'react';
import "./App.css";
import hand from "./images/hand.svg";
import rocket from "./images/rocket.svg";
import star from "./images/star.svg";

document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
};

function App() {
  useEffect(() => {
    document.title = "Katia Liashevska - website"
  }, []);
 
  return (
    <div className="App">
      <body>
        <div id="inverted-cursor"></div>
        <h1>
          Hi! My name is <span className="katia">Katia</span> <img className="hand-image image" src={hand} alt="hand"/> and I'm looking for 
          <br/>
          a <span className="alternance">12-month</span> alternance in web development. 
          <br/>
          It will start with a 9-week bootcamp at <a className="ironhack" href="https://www.ironhack.com" target="_blank">Ironhack</a> <img className="rocket-image image" src={rocket} alt="rocket"/> 
          <br/>
          Afterwards I'll be available for work 5 days 
          <br/>
          a week for 10 months. Here is my <a className="github" href="https://github.com/katialiashevska" target="_blank">GitHub</a> and 
          <br/>
          my <a className="underline linkedin" href="https://www.linkedin.com/in/katia-liashevska" target="_blank">LinkedIn</a> if you want to find out more <img className="star-image image" src={star} alt="star"/>
        </h1>
        <div className="buttons">
          <a className="github-button each-button" href="https://github.com/katialiashevska" target="_blank">
            GitHub
          </a>
          <a className="linkedin-button each-button" href="https://www.linkedin.com/in/katia-liashevska" target="_blank">
            LinkedIn
          </a>
          <a className="email-button each-button" onClick={() => navigator.clipboard.writeText("kate.liashevska@gmail.com")}>
          <span>kate.liashevska@gmail.com</span>
          </a>
        </div>
      </body>
    </div>
  );
}

export default App;
