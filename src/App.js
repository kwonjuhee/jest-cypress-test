import MemoInput from "./component/MemoInput";
import MemoList from "./component/MemoList";
import "./index.css";

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    const $h2 = document.createElement("h2");
    $h2.textContent = "메모🐯";

    const $div = document.createElement("div");
    $div.style.width = "300px";
    $div.style.margin = "auto";
    $div.append($h2);

    new MemoInput($div, {
      addMemo: this.addMemo.bind(this),
    });
    this.$MemoList = new MemoList($div);

    this.$target.append($div);
  }

  addMemo(newMemo) {
    this.$MemoList.addMemo(newMemo);
  }
}

export default App;
