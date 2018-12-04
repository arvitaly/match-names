"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_names_1 = require("../lib/match-names");
const sample_1 = require("./../__fixtures__/sample");
test("match names tests", () => {
    for (const fixture of sample_1.default) {
        expect(match_names_1.matchNames(fixture.name1, fixture.name2)).toBe(fixture.isEqual);
    }
});
it("when setted option ignoreUpperSymbols should be equal", () => {
    expect(match_names_1.matchNames("Name F P", "Name", { ignoreAbbr: true })).toBe(true);
    expect(match_names_1.matchNames("Name FP", "F Name", { ignoreAbbr: true })).toBe(true);
});
