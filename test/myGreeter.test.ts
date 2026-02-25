import { MyGreeter } from "../src/myGreeter";

describe("MyGreeter", () => {
  let greeter: MyGreeter;

  beforeAll(() => {
    greeter = new MyGreeter();
  });

  it("should be an instance of MyGreeter", () => {
    expect(greeter).toBeInstanceOf(MyGreeter);
  });

  it("should be an instance of MyGreeter", () => {
    const message = greeter.greeting();
    expect(message).toBeDefined();
    expect(message.length).toBeGreaterThan(0);
  });
});
