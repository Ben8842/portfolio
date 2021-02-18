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
              <a href="https://trivia-redux.herokuapp.com/">Trivia</a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://emojii-matching.herokuapp.com/">
                Emojii Matching Game
              </a>
            </button>
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://wordsearch-generator.herokuapp.com/">
                Word Search Generator
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://benwperkins.github.io/BitProject/">
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
