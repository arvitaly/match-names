import fixtures from "./../__fixtures__/sample";
import { matchNames } from "..";
test("match names tests", () => {
  for (const fixture of fixtures) {
    expect(matchNames(fixture.name1, fixture.name2)).toBe(fixture.isEqual);
  }
});
it("when setted option ignoreUpperSymbols should be equal", () => {
  expect(matchNames("Name F P", "Name")).toBe(true);
  expect(matchNames("Name FP", "F Name")).toBe(true);
});
