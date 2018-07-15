"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./lib/match-names"));
__export(require("./lib/compareStringArrays"));
__export(require("./lib/getUpperSymbols"));
__export(require("./lib/normalizeWord"));
const match_names_1 = require("./lib/match-names");
exports.default = match_names_1.matchNames;
