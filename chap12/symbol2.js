class Counter {
    count = 0;
    add() { return this.count++;}
    get() { return this.count; }
}

counter = new Counter();
console.log(counter.add());
console.log(counter.get());

class testCounter extends Counter {
    count = function() {
        console.log("count 호출");
    }
}

console.log("-------상속 실습-------");
testcounter = new testCounter();
console.log("testcounter = new testCounter();");
console.log(testcounter.add());
console.log(testcounter.get());