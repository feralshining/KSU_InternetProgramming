// Symbol 정리
// 1. 변수.description : 심볼 설명 반환
// 2. Symbol.for('key') : 전역 심볼 생성 또는 참조
// 3. keyFor(심볼) : 전역 심볼 레지스트리에 저장된 ‘등록 이름’을 반환하는 함수, 전역 심볼이 아니면 undefined 반환

let test1 = Symbol(undefined);
let test2 = Symbol("test");

console.log(test1);
console.log(typeof test2);

let test3 = Symbol.for('test');
console.log(test3.description);

console.log(test1.keyFor); // undefined
console.log(Symbol.keyFor(test3)); // test

console.log("-------실습-------");


let sym = Symbol.for('mySymbol');
let symtokenstring = Symbol.keyFor(sym);
console.log(symtokenstring); // mySymbol
sym3 = Symbol.for(symtokenstring);
console.log(sym === sym3); // true

const iterable = ['a', 'b', 'c'];
const iterator = iterable[Symbol.iterator]();