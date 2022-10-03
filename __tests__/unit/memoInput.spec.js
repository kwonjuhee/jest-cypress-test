import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MemoInput from "../../src/component/MemoInput";

describe("MemoInput 컴포넌트", () => {
  let mockFn, $el, memoInput;

  beforeEach(() => {
    mockFn = jest.fn();
    $el = document.createElement("div");
    memoInput = new MemoInput($el, { addMemo: mockFn });

    document.body.append($el);
  });

  afterEach(() => {
    $el.remove();
  });

  it("MemoInput 컴포넌트가 렌더링된다.", () => {
    expect($el).toContainElement(memoInput.$input);
  });

  it("엔터를 누를 시 addMemo 함수가 호출된다.", async () => {
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "밥 먹기{enter}");

    expect(mockFn).toBeCalledWith("밥 먹기");
    expect(input).toHaveValue("");
  });

  it("추가 버튼을 누를 시 addMemo 함수가 호출된다.", async () => {
    const button = screen.getByText("추가");
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "밥 먹기");
    await userEvent.click(button);

    expect(mockFn).toBeCalledWith("밥 먹기");
    expect(input).toHaveValue("");
  });
});
