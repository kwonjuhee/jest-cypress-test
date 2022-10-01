import MemoItem from "./MemoItem";

let key = 0;

export default class MemoList {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.memos = [];
    this.render();
  }

  render() {
    this.$ul = document.createElement("ul");
    this.$ul.style.width = "250px";

    this.$target.append(this.$ul);
  }

  addMemos(newMemo) {
    this.memos = [...this.memos, newMemo];
    this.MemoItem = new MemoItem(this.$target, {
      content: newMemo,
      key: key++,
      deleteMemo: this.deleteMemo.bind(this),
    });
  }

  deleteMemo(key) {
    const items = [...this.memos];
    const index = items.findIndex((e) => e.key === key);
    items.splice(index, 1);
    this.memos = items;
  }
}
