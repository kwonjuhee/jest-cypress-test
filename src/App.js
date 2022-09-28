import "./index.css";

function App($app) {
  this.$target = document.createElement("h1");
  this.$target.appendChild(document.createTextNode("테스트입니다🐯"));
  $app.appendChild(this.$target);
}

export default App;
