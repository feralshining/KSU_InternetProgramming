/*
    이미지 슬라이더와 점 네비게이션 기능 구현
    로직의 기본은 다음과 같습니다.

    1. 점 요소를 추가합니다. <span> 태그를 사용하여 별도로 독립시킵니다.
    2. active 클래스를 UI/UX 관점에서 유지보수 용이하도록 JS에서 관리합니다.
     2.1. 슬라이더에서 현재 이미지가 몇 번인지 알려주기 위해 사용합니다.
    3. <div id="slider-dots"> 요소를 만들어 점들을 감쌀 컨테이너를 만듭니다.
    4. slider-dots 컨테이너 안에 점들을 동적으로 생성합니다. (이미지 개수에 따라)
*/

const images = document.querySelectorAll('.slider-container img');
const prevBTN = document.getElementById('prev-btn');
const nextBTN = document.getElementById('next-btn');

let currentIndex = 0;
const imageWidth = images[0].clientWidth;
const track = document.getElementById('imageTrack');
const sliderDot = document.getElementById('slider-dots');

function createDots() {
    for(let i = 0; i < images.length; i++) {
        const dot = document.createElement('span'); // span = 인라인 요소 (텍스트 감싸는 용도)
        dot.classList.add('dot'); //dot 클래스 추가
        dot.dataset.index = i; //데이터 속성에 인덱스 저장
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
        sliderDot.appendChild(dot);
    }
}

function updateSlider() {
    const offset = -currentIndex * imageWidth; //이미지 이동 거리 계산
    track.style.transform = `translateX(${offset}px)`; //트랙 이동
    track.style.transition = 'transform 0.3s ease-in-out'; //트랜지션 효과 적용    
    const dots = sliderDot.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active')); //모든 점에서 active 클래스 제거
    dots[currentIndex].classList.add('active'); //현재 인덱스에 해당하는 점에 active 클래스 추가
}

let autoSlideInterval;
function autoSlide(){
    autoSlideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; //이미지 초과 시 => 처음으로
        }
        updateSlider(); //슬라이더 업데이트
    }, 2000);
}

//마우스 호버 시 자동 슬라이드 멈춤
track.addEventListener('mouseenter', () => {
    console.log("마우스 호버 - 자동 슬라이드 멈춤");
    clearInterval(autoSlideInterval); //인터벌 제거
});

//마우스 떠날 시 자동 슬라이드 재개
track.addEventListener('mouseleave', () => {
    console.log("마우스 떠남 - 자동 슬라이드 재개");
    autoSlide(); //함수 재호출
});

createDots(); //점 생성
updateSlider(); //초기 슬라이더 상태 설정
autoSlide(); //자동 슬라이드 시작