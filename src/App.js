import "./App.css";
//import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <div id="title">Recent Projects</div>
      <div class="row">
        <div class="column left">
          <div>
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://https://project-repo.herokuapp.com/LandingPage">
                Trivia
              </a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://project-repo.herokuapp.com/UserPage">
                Emojii Matching Game
              </a>
            </button>
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://project-repo.herokuapp.com/Scores">
                Word Search Generator
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://project-repo.herokuapp.com/SignUp/">
                Cryptocurrency Project
              </a>
            </button>
          </div>
        </div>
        <div class="column right">
          <div id="about">
            <p>Name: Ben</p>
            <p>Contact email: ben@protonmail.com</p>
            <p>Location: Massachusetts</p>
            <p>About: Ben is currently searching for employment. </p>
            <p>Technologies: React, Node, Redux, MongoDB, Mongoose,</p>
            <p> Express, JavaScript, HTML, CSS, SQL, JQuery</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
