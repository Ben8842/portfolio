import "./App.css";
//import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App" id="title">
      Portfolio.
      <div>
        <div class="fancy">
          <button class="fancy" variant="primary" size="lg" block>
            <a href="https://trivia-redux.herokuapp.com/">TRIVIA</a>
          </button>
        </div>
        <button class="fancy" variant="secondary" size="lg" block>
          <a href="https://emojii-matching.herokuapp.com/">EMOJII MATCHING</a>
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
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
