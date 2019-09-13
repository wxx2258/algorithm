/**
 * 字符串去重
 * @param {String} str 
 * 使用对象存储，遍历一遍判断hash对象是否存在属性值。时间复杂度： O(n)
 * 思路： 
    * hash对象存储的key值为 非重复字符
    * 遍历str字符串，判断是否当前遍历字符是否在hash对象中是否存在；
    * 如果不存在，则拼接到结果字符串中，并将值存到hash；存在则说明该字符为重复字符，无需操作。
 */
function removeRepeatStr(str) {
    const hash = {};
    let result = '';
    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (!hash[str[i]]) {
            result += str[i];
            hash[str[i]] = true;
        }
    }
    return result;
}
// 用map数据结构实现，与object hash类似
function removeRepeatStr1(str) {
    const hashMap = new Map();
    let result = '';
    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (!hashMap.get(str[i])) {
            result += str[i];
            hashMap.set(str[i], true);
        }
    }
    return result;
}

/**
 * 借用set数据结构和对象解构实现
 * @param {string} str 
 */
function removeRepeatStr2(str) {
    return [...new Set(str)].join('');
}

console.log('removeRepeatStr 输入结果：',removeRepeatStr('a,b,c,a,d,d'));
console.log('removeRepeatStr1 输入结果：',removeRepeatStr1('a,b,c,a,d,d'));
console.log('removeRepeatStr2 输入结果：',removeRepeatStr2('a,b,c,a,d,d'));