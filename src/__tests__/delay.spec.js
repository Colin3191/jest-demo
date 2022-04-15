const delay = require("../delay");
it("异步测试", (done) => {
  jest.useFakeTimers();
  delay(() => {
    done();
  });
  jest.runAllTimers();
});
