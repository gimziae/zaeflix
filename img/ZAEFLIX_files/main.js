//오류방지 위해 다 불러온 뒤 플러그인 실행
window.addEventListener("load", ()=>{ 
    const grid = new Isotope("section",{ //배치할 요소를 감싼 부모요소
    itemSelector : "article", //배치할 요소명
    columnWidth : "article", //너비값 구할 요소명
    transitionDuration : "0.5s", //화면 재배치 시 움직이는 속도
    });
})

    //sort기능 구현하기
    //sort버튼 변수 저장
    //const btns = document.querySelectorAll("main ul