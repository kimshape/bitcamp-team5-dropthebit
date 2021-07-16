var sliderWrapper = document.getElementsByClassName('container'), // .container
    sliderContainer = document.getElementsByClassName('slider-container'), // .silder-container
    slides = document.getElementsByClassName('slide') // .slide
    slideCount = slides.length // numbers of slides
    
    
    var currentIndex = 0;
    var topHeight = 0;
    var navPrev =document.getElementById('prev'); // 아이디 prev 
    var navNext =document.getElementById('next');// 아이디 next

console.log(slides)

//슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide(){

   for(var i=0; i<slideCount; i++){
    if(slides[i].offsetHeight>topHeight ){
        topHeight = slides[i].offsetHeight;
    }  
   }

    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height=topHeight + 'px';
}
calculateTallestSlide();

// 슬라이드가 있으면 가로배열하기
for(var i=0; i<slideCount; i++){
    slides[i].style.left = i*100+'%';
}

//슬라이드 이동 함수
function goToSlide(idx){
    sliderContainer[0].style.left= idx*(-100) + '%';
   sliderContainer[0].classList.add('animated');
    currentIndex = idx;
}

//버튼기능 업데이트 함수

navPrev.addEventListener('click',function(event){
    event.preventDefault(currentIndex-1);
    goToSlide()

});

navNext.addEventListener('click',function(event){
    event.preventDefault(currentIndex+1);
})

