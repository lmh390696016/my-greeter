import { MyGreeter } from "../src/myGreeter";

describe("MyGreeterTest", () => {
  let greeter: MyGreeter;

  beforeAll(() => {
    greeter = new MyGreeter();
  });

  it("should be an instance of MyGreeter", () => {
    expect(greeter).toBeInstanceOf(MyGreeter);
  });

  it("greeting() should return a non-empty string", () => {
    const message = greeter.greeting();
    expect(message).toBeDefined();
    expect(message.length).toBeGreaterThan(0);
  });

  // Supplementary test cases
  it("greeting() should return 'Good morning' between 6:00 and 12:00", () => {
    // mock hour 08:00
    jest.useFakeTimers().setSystemTime(new Date(2025, 1, 25, 8, 0, 0));
    const message = greeter.greeting();
    expect(message).toBe("Good morning");
  });

  it("greeting() should return 'Good afternoon' between 12:00 and 18:00", () => {
    // mock hour 14:00
    jest.useFakeTimers().setSystemTime(new Date(2025, 1, 25, 16, 0, 0));
    const message = greeter.greeting();
    expect(message).toBe("Good afternoon");
  });

  it("greeting() should return 'Good evening' between 18:00 and 6:00", () => {
    // mock hour 21:00
    jest.useFakeTimers().setSystemTime(new Date(2025, 1, 25, 21, 0, 0));
    const message = greeter.greeting();
    expect(message).toBe("Good evening");

    // mock hour 05:00
    jest.useFakeTimers().setSystemTime(new Date(2025, 1, 25, 5, 0, 0));
    const message2 = greeter.greeting();
    expect(message2).toBe("Good evening");
  });
});

