"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_1 = require("./../__fixtures__/sample");
const __1 = require("..");
test("match names tests", () => {
    for (const fixture of sample_1.default) {
        expect(__1.matchNames(fixture.name1, fixture.name2)).toBe(fixture.isEqual);
    }
});
it("when setted option ignoreUpperSymbols should be equal", () => {
    expect(__1.matchNames("Name F P", "Name")).toBe(true);
    expect(__1.matchNames("Name FP", "F Name")).toBe(true);
});
