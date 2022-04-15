# Jest 单元测试

### 1.文件和目录命名规范

待测试文件：`hello.js`测试文件取名：`hello.spec.js`或者`hello.test.js`测试目录：`tests`或者`__tests__`

### 断言函数

> 测试即运行结果是否与我们预期结果一致 断言函数用来验证结果是否正确

```js
exspect(运行结果).toBe(期望的结果);
//常见断言方法
expect({ a: 1 }).toBe({ a: 1 }); //判断两个对象是否相等
expect(1).not.toBe(2); //判断不等
expect({ a: 1, foo: { b: 2 } }).toEqual({ a: 1, foo: { b: 2 } });
expect(n).toBeNull(); //判断是否为null
expect(n).toBeUndefined(); //判断是否为undefined
expect(n).toBeDefined(); //判断结果与toBeUndefined相反
expect(n).toBeTruthy(); //判断结果为true
expect(n).toBeFalsy(); //判断结果为false
expect(value).toBeGreaterThan(3); //大于3
expect(value).toBeGreaterThanOrEqual(3.5); //大于等于3.5
expect(value).toBeLessThan(5); //小于5
expect(value).toBeLessThanOrEqual(4.5); //小于等于4.5
expect(value).toBeCloseTo(0.3); // 浮点数判断相等
expect("Christoph").toMatch(/stop/); //正则表达式判断
expect(["one", "two"]).toContain("one");
```
