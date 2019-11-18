"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchNames = (name1, name2, params = { quality: 75, ignoreAbbr: false }) => {
    const result = exports.compareNames(name1, name2, params.ignoreAbbr);
    return result.name1Quality >= params.quality || result.name2Quality >= params.quality;
};
exports.compareNames = (name1, name2, ignoreAbbr) => {
    const result = {
        name1Quality: 0,
        name2Quality: 0,
    };
    if (name1 === name2) {
        result.name1Quality = 100;
        result.name2Quality = 100;
        return result;
    }
    if (name1.trim() === "" && name2.trim() !== "") {
        return result;
    }
    if (name2.trim() === "" && name1.trim() !== "") {
        return result;
    }
    const splitter = new RegExp("[^A-z0-9]+", "gi");
    const name1Words = name1
        .split(splitter)
        .filter((word) => !!word)
        .map((word) => word.toLowerCase());
    const name2Words = name2
        .split(splitter)
        .filter((word) => !!word)
        .map((word) => word.toLowerCase());
    const name1Length = name1Words.join("").length;
    const name2Length = name2Words.join("").length;
    let name1Quality = 0;
    let name2Quality = 0;
    for (const word1 of name1Words) {
        for (const word2 of name2Words) {
            if (word1 === word2) {
                name1Quality += (word1.length / name1Length) * 100;
                name2Quality += (word2.length / name2Length) * 100;
                continue;
            }
            if (word1.indexOf(word2) === 0) {
                name2Quality += (word2.length / name2Length) * 100;
                continue;
            }
            if (word2.indexOf(word1) === 0) {
                name1Quality += (word1.length / name1Length) * 100;
                continue;
            }
        }
    }
    if (ignoreAbbr === false) {
        const upperCaseRegexp = new RegExp("[A-Z]", "g");
        const name1UpperSymbols = name1.match(upperCaseRegexp);
        const name2UpperSymbols = name1.match(upperCaseRegexp);
        if (name1UpperSymbols && name2UpperSymbols) {
            for (const symbol1 of name1UpperSymbols) {
                for (const symbol2 of name2UpperSymbols) {
                    if (symbol1 === symbol2) {
                        name1Quality += (1 / name1Length) * 100;
                        name2Quality += (1 / name2Length) * 100;
                    }
                }
            }
        }
    }
    result.name1Quality = name1Quality;
    result.name2Quality = name2Quality;
    return result;
};
