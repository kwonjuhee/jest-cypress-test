import "@testing-library/cypress/add-commands";

function fillContent(content) {
  cy.get('input[placeholder="추가할 메모를 입력해주세요"]').type(content);
}

function clickAddMemoBtn() {
  cy.findByText("추가").click();
}

function clickDeleteMemoBtn(text) {
  cy.findByText(text).parent().findByText("삭제").click();
}

/**
 * 메모 추가 후 value가 초기화되었는지 검증한다.
 */
function assertEmptyMemoInput() {
  cy.get('input[placeholder="추가할 메모를 입력해주세요"]').should(
    "have.value",
    ""
  );
}

/**
 * 특정 메모 항목이 삭제되었는지 검증한다.
 */
function assertNotHaveMemoItem(text) {
  cy.findByText(text).should("have.not.exist");
}

/**
 * 메모가 순서대로 등록되었는지 검증한다.
 */
function assertOrderedMemoList(textList) {
  cy.get("li").each((el, index) => {
    expect(el.text()).to.contain(textList[index]);
  });
}

/**
 * 경고 창의 경고 문구를 확인한다.
 */
function assertAlertText(text) {
  cy.on("window.alert", (str) => {
    expect(str).to.eq(text);
  });
}

beforeEach(() => {
  cy.visit("/");
});

describe("메모 추가 및 삭제 E2E 테스트", () => {
  /**
   * 1. 사용자는 텍스트를 입력하고, "추가" 버튼을 눌러 메모를 추가한다.
   * 2. 메모는 순서대로 추가되며, 추가된 후 텍스트는 초기화된다.
   * 3. 사용자는 추가된 메모 항목의 "삭제" 버튼을 눌러 메모를 삭제한다.
   */
  it("일반 사용자", () => {
    fillContent("메모1");
    clickAddMemoBtn();

    fillContent("메모2");
    clickAddMemoBtn();

    assertOrderedMemoList(["메모1", "메모2"]);
    assertEmptyMemoInput();

    clickDeleteMemoBtn("메모1");

    assertNotHaveMemoItem("메모1");
  });

  /**
   * 메모를 입력하지 않은 상태로 "추가" 버튼을 클릭해도 빈 스트링이 메모에 추가되지 않는다.
   */
  it("메모를 입력하지 않은 사용자", () => {
    clickAddMemoBtn();

    assertNotHaveMemoItem("");
  });

  /**
   * 50자 이상의 글자를 입력한 뒤 "추가" 버튼을 클릭하면 경고 창이 뜬다.
   */
  it("메모 입력 조건(50자 이하 입력)을 지키지 않은 사용자", () => {
    fillContent(
      "Adipisicing id consequat voluptate qui enim nostrud id est dolor in cupidatat occaecat."
    );
    clickAddMemoBtn();

    assertAlertText("50자 이하로 입력해주세요");
  });
});
