$(function (){

     //2차 menu
     $('.pc_menu>li').mouseover(function () {
        $('.pc_depth02').stop().slideDown(300);
        $('.pc_menu_bg').stop().slideDown(300);
    }).mouseout(function () {
        $('.pc_depth02').stop().slideUp(300);
        $('.pc_menu_bg').stop().slideUp(300);
    });

    let menuBtn = document.querySelector('.menu_btn');
    let mobileNav = document.querySelector('.mobile_nav'); //.mobile_nav            

    //menuBtn을 클릭했을 때 이벤트 실행
    menuBtn.addEventListener('click', () => {
        //2. mobileNav한테 클래스명 active 추가/삭제
        mobileNav.classList.toggle('active');
    });
    $('.mobile_nav .mobile_menu>li').click(function () {
        $('.mobile_nav .mobile_depth02').stop().slideToggle(300);
        $('.bg').stop().slideDown(300);
    });
});