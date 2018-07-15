"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalizeWord_1 = require("./normalizeWord");
const getUpperSymbols_1 = require("./getUpperSymbols");
const compareStringArrays_1 = require("./compareStringArrays");
function matchNames(name1, name2) {
    if (name1 === name2) {
        return true;
    }
    const words1 = name1
        .split(" ")
        .map((w) => normalizeWord_1.normalizeWord(w))
        .filter((w) => !!w);
    const words2 = name2
        .split(" ")
        .map((w) => normalizeWord_1.normalizeWord(w))
        .filter((w) => !!w);
    let equalWordsCount = 0;
    let shortEqualCount = 0;
    let strictEqualCount = 0;
    for (const word1 of words1) {
        for (const word2 of words2) {
            if (word1 === word2) {
                equalWordsCount++;
                strictEqualCount++;
                continue;
            }
            if (word1.indexOf(word2) === 0 || word2.indexOf(word1) === 0) {
                equalWordsCount++;
                shortEqualCount++;
                continue;
            }
        }
    }
    const upperSymbols1 = getUpperSymbols_1.getUpperSymbols(name1);
    const upperSymbols2 = getUpperSymbols_1.getUpperSymbols(name2);
    if (equalWordsCount === words1.length && equalWordsCount === words2.length && shortEqualCount < 2) {
        return true;
    }
    if (compareStringArrays_1.compareStringArrays(upperSymbols1, upperSymbols2) &&
        Math.abs(equalWordsCount - words1.length) < 3 &&
        Math.abs(equalWordsCount - words2.length) < 3 &&
        shortEqualCount < 3 &&
        strictEqualCount > 0) {
        return true;
    }
    return false;
}
exports.matchNames = matchNames;
