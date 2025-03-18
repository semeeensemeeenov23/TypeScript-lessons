"use strict";
const data69 = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' }
];
function group69(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res = group69(data69, 'group');
console.log(res);
