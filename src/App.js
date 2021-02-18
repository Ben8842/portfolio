import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      Portfolio.
      <div>
        <div>
          <Button variant="primary" size="lg" block>
            <a href="https://trivia-redux.herokuapp.com/">TRIVIA</a>
          </Button>
        </div>
        <Button variant="secondary" size="lg" block>
          <a href="https://emojii-matching.herokuapp.com/">EMOJII MATCHING</a>
        </Button>
        <Button variant="primary" size="lg" block>
          <a href="https://wordsearch-generator.herokuapp.com/">
            WORD SEARCH GENERATOR
          </a>
        </Button>
        <Button variant="secondary" size="lg" block>
          <a href="https://benwperkins.github.io/BitProject/">
            Cryptocurrency Project
          </a>
        </Button>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
