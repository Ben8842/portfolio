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
              <a href="https://602eb4ffddb4bb09bd3b196f--vibrant-spence-207a4e.netlify.app/">
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
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://602eb62581bfec0b60715d27--tender-benz-d42ce4.netlify.app/">
                Eight Queens Puzzle
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
