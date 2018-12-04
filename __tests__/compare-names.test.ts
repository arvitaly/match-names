import { matchNames } from "../lib/match-names";
import fixtures from "./../__fixtures__/sample";
test("match names tests", () => {
    for (const fixture of fixtures) {
        expect(matchNames(fixture.name1, fixture.name2)).toBe(fixture.isEqual);
    }
});
it("when setted option ignoreUpperSymbols should be equal", () => {
    expect(matchNames("Name F P", "Name", { ignoreAbbr: true })).toBe(true);
    expect(matchNames("Name FP", "F Name", { ignoreAbbr: true })).toBe(true);
});
