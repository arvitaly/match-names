import { normalizeWord } from "./normalizeWord";
import { getUpperSymbols } from "./getUpperSymbols";
import { compareStringArrays } from "./compareStringArrays";
export interface IMatchNamesOptions {
    ignoreAbbr?: boolean;
}
export function matchNames(name1: string, name2: string, options: IMatchNamesOptions = {}) {
    if (name1 === name2) {
        return true;
    }
    let words1 = name1.split(" ");
    let words2 = name2.split(" ");
    if (options.ignoreAbbr) {
        words1 = words1.filter((w) => w.toUpperCase() !== w);
        words2 = words2.filter((w) => w.toUpperCase() !== w);
    }
    words1 = words1.map((w) => normalizeWord(w)).filter((w) => !!w);
    words2 = words2.map((w) => normalizeWord(w)).filter((w) => !!w);
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
    const upperSymbols1 = getUpperSymbols(name1);
    const upperSymbols2 = getUpperSymbols(name2);
    if (equalWordsCount === words1.length && equalWordsCount === words2.length && shortEqualCount < 2) {
        return true;
    }
    if (
        compareStringArrays(upperSymbols1, upperSymbols2) &&
        Math.abs(equalWordsCount - words1.length) < 3 &&
        Math.abs(equalWordsCount - words2.length) < 3 &&
        shortEqualCount < 3 &&
        strictEqualCount > 0
    ) {
        return true;
    }
    return false;
}
