/**
 * @jest-environment jsdom
 */

import "../src/index.css";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});