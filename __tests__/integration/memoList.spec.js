import { screen } from "@testing-library/dom";
import MemoList from "../../src/component/MemoList";

describe("MemoList 컴포넌트", () => {
  let $el, memoList;

  beforeEach(() => {
    $el = document.createElement("div");
    memoList = new MemoList($el);

    document.body.append($el);
  });

  afterEach(() => {
    $el.remove();
  });

  it("MemoList 컴포넌트가 렌더링된다.", () => {
    expect(document.body).toContainElement(memoList.$ul);
  });

  it("addMemo 메서드 호출시 메모 항목이 순서대로 추가된다.", () => {
    memoList.addMemo("메모1");
    memoList.addMemo("메모2");

    const firstMemo = screen.getByText("메모1");
    const secondMemo = screen.getByText("메모2");

    expect(memoList.$ul.childNodes[0]).toContainElement(firstMemo);
    expect(memoList.$ul.childNodes[1]).toContainElement(secondMemo);
  });

  it("메모 리스트의 삭제 버튼 클릭 시 해당 메모 항목이 삭제된다.", () => {
    memoList.addMemo("밥 먹기");

    const memoItem = screen.getByText("밥 먹기");
    const deleteBtn = screen.getByText("삭제");
    deleteBtn.click();

    expect(memoList.$ul).not.toContainElement(memoItem);
  });
});
