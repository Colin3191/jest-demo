const { getData } = require("../fetch");
const axios = require("axios");
jest.mock("axios");
it("fetch", async () => {
  // 模拟第一次接受的数据
  axios.get.mockResolvedValueOnce("123");
  // 模拟每一次接受到的数据
  axios.get.mockResolvedValueOnce("456");
  const data1 = await getData();
  const data2 = await getData();
  expect(data1).toBe("123");
  expect(data2).toBe("456");
});

it("测试jest.fn()调用", () => {
  const mockFn = jest.fn();
  const result = mockFn(1, 2, 3);
  // 断言mockFn的执行后返回undefined
  expect(result).toBeUndefined();
  // 断言mockFn被调用
  expect(mockFn).toBeCalled();
  // 断言mockFn被调用了一次
  expect(mockFn).toBeCalledTimes(1);
  // 断言mockFn传入的参数为1, 2, 3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
});
