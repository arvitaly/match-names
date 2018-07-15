"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareStringArrays(arr1, arr2) {
    return [...arr1].sort().join("") === [...arr2].sort().join("");
}
exports.compareStringArrays = compareStringArrays;
