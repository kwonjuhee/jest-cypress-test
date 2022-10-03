import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MemoItem from "../../src/component/MemoItem";

describe("MemoItem 컴포넌트", () => {
  let $el, mockFn, memoItem;

  beforeEach(() => {
    $el = document.createElement("div");
    mockFn = jest.fn();
    memoItem = new MemoItem($el, { content: "밥 먹기", deleteMemo: mockFn });

    document.body.append($el);
  });

  afterEach(() => {
    $el.remove();
  });

  it("MemoItem 컴포넌트가 렌더링된다.", () => {
    expect($el).toContainElement(memoItem.$li);
  });

  it("삭제 버튼을 누를시 deleteMemo 메서드가 실행된다.", async () => {
    const button = screen.getByText("삭제");

    await userEvent.click(button);

    expect(mockFn).toBeCalledTimes(1);
  });

  it("삭제 버튼을 누를 시 요소가 제거된다.", async () => {
    const button = screen.getByText("삭제");

    await userEvent.click(button);

    expect($el).not.toContainElement(memoItem.$li);
  });
});
