import userEvent from "@testing-library/user-event";
import Button from "../../src/component/Button";

describe("Button 컴포넌트", () => {
  let $el;

  beforeEach(() => {
    $el = document.createElement("div");
  });

  /**
   * 버튼 요소가 원하는 DOM 요소에 올바르게 렌더링되었는지 검증한다.
   */
  it("button 요소가 렌더링된다.", () => {
    const button = new Button($el);

    expect($el).toContainElement(button.$button);
  });

  /**
   * 생성자 인자에 따라 textContent가 올바르게 등록되었는지 검증한다.
   */
  it("textContent가 등록되어야 한다.", () => {
    const button = new Button($el, { textContent: "텍스트" });

    expect(button.$button).toHaveTextContent("텍스트");
  });

  /**
   * 이벤트 리스너가 올바르게 등록되었는지 검증한다.
   * 결과를 검증하는 것이 아니라 등록한 이벤트가 발생했을 때 호출되는지 행위 자체를 검증해야 한다.
   */
  it("이벤트 리스너가 등록되어야 한다.", async () => {
    const mockFn = jest.fn();
    const button = new Button($el, { onClick: mockFn });

    await userEvent.click(button.$button);

    expect(mockFn).toBeCalledTimes(1);
  });
});
