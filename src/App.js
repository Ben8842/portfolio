import "./App.css";
//import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <div id="title">Recent Projects</div>
      <div class="row">
        <div class="column left">
          <div class="fancy">
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://trivia-redux.herokuapp.com/">TRIVIA</a>
            </button>

            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://emojii-matching.herokuapp.com/">
                EMOJII MATCHING
              </a>
            </button>
            <button class="fancy" variant="primary" size="lg" block>
              <a href="https://wordsearch-generator.herokuapp.com/">
                WORD SEARCH GENERATOR
              </a>
            </button>
            <button class="fancy" variant="secondary" size="lg" block>
              <a href="https://benwperkins.github.io/BitProject/">
                Cryptocurrency Project
              </a>
            </button>
          </div>
        </div>{" "}
        <div class="column right">
          <div id="about">
            <p>Name: Ben</p>
            <p>Contact email: ben@protonmail.com</p>
            <p>Location: Massachusetts</p>
            <p>About: Ben is searching for employment. </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
