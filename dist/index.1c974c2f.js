"use strict";
const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second.`));
        }, s * 1000);
    });
};

//# sourceMappingURL=index.1c974c2f.js.map
