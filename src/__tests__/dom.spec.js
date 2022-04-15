const { generateDiv } = require("../dom");
require("../jsdom-config");
describe("Dom测试", () => {
  it("测试Dom操作", () => {
    generateDiv();
    expect(document.getElementsByClassName("c1").length).toBe(1);
  });
});
