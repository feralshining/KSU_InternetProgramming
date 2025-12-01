/*
    이미지 슬라이더 기능 구현
    로직의 기본은 다음과 같습니다.

    1. .slider-container로 이미지의 창을 만듭니다. (창문)
    2. imageTrack 아이디를 가진 div 요소를 만들어서 이미지들을 감쌉니다. (필름)
    3. overflow: hidden 속성을 사용하여 슬라이더 영역 밖의 이미지는 보이지 않도록 합니다.
    4. translateX 속성을 사용하여 이미지 트랙을 좌우로 이동시킵니다.
    (예시)
        트랙이 [이미지1][이미지2][이미지3] 으로 구성되어 있고 창이 300px 너비라고 가정할 때,
        - 첫 번째 이미지가 보일 때: translateX(0px)
        - 두 번째 이미지가 보일 때: translateX(-300px)
        - 세 번째 이미지가 보일 때: translateX(-600px)
*/

const images = document.querySelectorAll('.slider-container img');
const prevBTN = document.getElementById('prev-btn');
const nextBTN = document.getElementById('next-btn');

let currentIndex = 0;
const imageWidth = images[0].clientWidth;
const track = document.getElementById('imageTrack');

function updateSlider() {
    const offset = -currentIndex * imageWidth; //이미지 이동 거리 계산
    track.style.transform = `translateX(${offset}px)`; //트랙 이동
    track.style.transition = 'transform 0.3s ease-in-out'; //트랜지션 효과 적용    
    
    //트랜지션은 CSS 속성 값이 변화할 때 그 변화를 부드럽게 만들어주는 효과
}


prevBTN.addEventListener('click', () => {
    currentIndex--; 
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlider(); 
});

nextBTN.addEventListener('click', () => {
    currentIndex++; 
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider(); 
});