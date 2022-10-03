export default class Button {
  constructor($target, props = {}) {
    this.$target = $target;
    this.onClick = props.onClick;
    this.textContent = props.textContent ?? "";
    this.render();
    this.setEvent();
  }

  render() {
    this.$button = document.createElement("button");
    this.$button.textContent = this.textContent;
    this.$target.append(this.$button);
  }

  setEvent() {
    this.$button.addEventListener("click", this.onClick);
  }
}
