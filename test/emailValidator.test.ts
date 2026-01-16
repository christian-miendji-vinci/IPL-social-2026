import { isValidEmail } from "../src/emailValidator";

describe("Email validation", () => {

  test("should return false if no @ is present", () => {
    expect(isValidEmail("christian.miendji")).toBe(false);
  });

  test("should return false if there is a space", () => {
    expect(isValidEmail("christian miendji@vinci.be")).toBe(false);
  });

  test("should return false if nothing before @", () => {
    expect(isValidEmail("@vinci.be")).toBe(false);
  });

  test("should return false if nothing after @", () => {
    expect(isValidEmail("christian@")).toBe(false);
  });

  test("should return false if domain has no dot", () => {
    expect(isValidEmail("christian@vinci")).toBe(false);
  });

  test("should return false if dot is last character", () => {
    expect(isValidEmail("christian@vinci.")).toBe(false);
  });

  test("should return true for a valid email", () => {
    expect(isValidEmail("christian.miendji@vinci.be")).toBe(true);
  });

});
