// tema_honeymoon_banner.js

(function($){
  var bannerBox = $('#bannerBox');
  var ul = bannerBox.children('ul');
  var li = ul.children('li');


  // 1. 3,4 번때 그림을 0번째 그림 앞에 복제
  // li.eq(3).nextAll();
  // console.log( li.eq(2).nextAll() );
  
  // li.eq(3).nextAll().clone();
  // console.log( li.eq(2).nextAll().clone() );
  
  // li.eq(3).nextAll().clone().prependTo(ul);
  li.clone().prependTo(ul);


  // 2. 0번째 그림을 중앙에 배치하도록 설정
  ul.css({marginLeft:-500+'%'});

  // 3. 일정시간에 따라 그림이 변경되도록 처리.
  function repeat(){

    li = ul.children('li');
    var first_banner = li.first();

    ul.animate({'marginLeft':-600+'%'}, timed, function(){
  // +++++++ 2. 이동 한 후에는 첫번째가 된 이미지를 마지막으로 이동하도록 처리
    ul.append(first_banner).css({'marginLeft':-500+'%'});
    });
  }//function끝
    
    var autoMove;
    
    var timed = 700;
  

      // 4. setIn으로 반복처리 하기
  function setIn(){
    autoMove = setInterval(function(){ repeat(); }, timed*3);
  }
  function clearIn(){
    clearInterval(autoMove);
  }

    // 마우스 올리고 내렸을때!!
  bannerBox.on({'mouseenter':clearIn, 'mouseleave':setIn});



  setIn();
  //repeat();



})(this.jQuery);
