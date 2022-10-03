import Button from "./Button";

export default class MemoInput {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
    this.setEvent();
  }

  render() {
    this.$input = document.createElement("input");
    this.$input.setAttribute("placeholder", "추가할 메모를 입력해주세요");
    this.$input.style.width = "200px";

    this.$target.append(this.$input);
    new Button(this.$target, { textContent: "추가", onClick: this.addMemo });
  }

  setEvent() {
    this.$input.addEventListener("keyup", (e) => {
      if (e.key !== "Enter") return;
      this.addMemo(e);
    });
  }

  addMemo = () => {
    if (this.$input.value === "") return;
    this.props.addMemo(this.$input.value.trim());
    this.$input.value = "";
  };
}
