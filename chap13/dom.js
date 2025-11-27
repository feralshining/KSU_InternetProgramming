document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('to-do-list');

    //아이템 추가 - 로직
    const addItem = document.getElementById('add-item-btn');
    addItem.addEventListener('click', () => {
        const newLI = document.createElement('li');
        const inputValue = document.getElementById('item-input').value;
        if (inputValue.trim() != '') {
            newLI.textContent = inputValue.trim();
            todoList.appendChild(newLI);
            document.getElementById('item-input').value = '';
        }
    });

    //아이템 삭제 - 로직
    const removeItem = document.getElementById('remove-item-btn');
    removeItem.addEventListener('click', () => {
        if (todoList.children.length > 0) {
            //첫 번째 방법
            // const item1 = todoList.querySelector('#to-do-list > li');  //">"는 직계 자손
            // todoList.removeChild(item1);
            //두 번째 방법
            const item2 = todoList.lastElementChild;
            todoList.removeChild(item);
        }
    });

    //아이템 1000개 추가 - 로직
    const addThousandItem = document.getElementById('add-thousand-btn');
    addThousandItem.addEventListener('click', () => {
        //fragment의 역할 : 메모리 상에 가상의 돔을 만들어서 실제 돔에 접근하는 횟수를 줄여줌 -> 성능 향상
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 1000; i++) {
            const newLI = document.createElement('li');
            newLI.textContent = `할 일 ${i}`;
            fragment.appendChild(newLI);
        }
        todoList.appendChild(fragment);
    });

    //css 수정
    const dom_array = document.getElementsByClassName('dom-desc');
    const desc = dom_array[0];

    console.log(desc);
    console.log(desc.style);

    desc.style.color = 'blue';
    desc.setAttribute('style', 'color: magenta');
    desc.remove(); //노드 삭제

    const clickBTN = document.getElementById('mouse-btn');
    clickBTN.addEventListener('mouseover', () => {
        clickBTN.style.backgroundColor = 'yellow';
    });
    clickBTN.addEventListener('click', function (e) {
        alert(`버튼이 클릭되었습니다. ${e.type} ${e.target}`);
    });


    // html 요소 추가
    const content = document.getElementById('aside');
    const newLine = document.createElement('div');
    newLine.innerHTML = '<strong>새로운 내용이 추가되었습니다.</strong> <em>HTML 태그도 가능해요!</em>';  // HTML 태그 포함
    content.appendChild(newLine);

    const newTR = document.createElement('tr');
    const newTH = document.createElement('th');
    newTH.textContent = 'javascript';
    newTH.setAttribute('colspan', '2');
    newTR.appendChild(newTH);
    console.log(newTR);

    const tbody = document.querySelector('#info-table tbody');
    tbody.insertBefore(newTR, tbody.rows[1]);

    const imgContent = document.getElementById('image-container');
    //한 줄로 선언하면, repaint, reflow가 한 번만 일어남
    imgContent.style.cssText = 'width: 400px; height: 800px; border: 20px solid red;'; 
});