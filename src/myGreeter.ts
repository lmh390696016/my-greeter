export class MyGreeter {
  constructor() {}

  /**
   * Return different greetings based on the running time
   * @return {string} Good morning / Good afternoon / Good evening
   */
  greeting(): string {
    // get running time
    const hour: number = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
}
