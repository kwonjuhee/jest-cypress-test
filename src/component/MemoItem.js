import Button from "./Button";

export default class MemoItem {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
  }

  render() {
    this.$li = document.createElement("li");
    this.$li.className = "item";
    this.$li.dataset.key = this.props.key;

    const $span = document.createElement("span");
    $span.textContent = this.props.content;
    $span.style.marginRight = "8px";
    this.$li.append($span);

    new Button(this.$li, {
      textContent: "삭제",
      onClick: (e) => {
        const { key } = e.target.closest(".item").dataset;
        this.props.deleteMemo(key);
        this.$li.remove();
      },
    });

    this.$target.append(this.$li);
  }
}
