import { matchNames } from "../lib/match-names";
import fixtures from "./../__fixtures__/sample";
test("match names tests", () => {
    for (const fixture of fixtures) {
        expect(matchNames(fixture.name1, fixture.name2)).toBe(fixture.isEqual);
    }
});
