"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUpperSymbols(str) {
    return str.split("").filter((s) => s.toUpperCase() === s && s.trim());
}
exports.getUpperSymbols = getUpperSymbols;
