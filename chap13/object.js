//실습2. 객체가 비어있는지 확인하는 함수 작성
// 객체가 비어있으면 true, 아니면 false 반환


let test1 = {};
let test2 = { 키: "값" };

function isEmpty(prop){
    for (let key in prop) {
        return false;
    }
    return true;
}

//실습4. 프로퍼티의 합계 구하기
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
if (isEmpty(salaries)) sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
console.log("월급의 합계 : " + sum);

//실습5. 프로퍼티 값 두 배로 부풀리기

let menu ={
    width: 200,
    height: 300,
    title: "My menu"
}
console.log(menu);
function multiplyNumeric(prop){
    for (let key in prop) {
        if (typeof prop[key] === 'number') {
            prop[key] *= 2;
        }
    }
}
console.log("menu 프로퍼티에 값 2배 작용");
multiplyNumeric(menu);
console.log(menu);