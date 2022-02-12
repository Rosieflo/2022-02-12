$(document).ready(function () {
  // 3번 슬라이드를 1번 앞으로 배치
  $(".s_wrap > li:last-child").insertBefore(".s_wrap > li:first-child");
  // 1번 슬라이드가 가운데 배치 되도록 전체적으로 왼쪽으로 1200px 이동
  $(".s_wrap").css("margin-left", "-1200px");

  // 왼쪽으로 -2400px 만큼 이동. 이미지 가로의 2배
  function moveleft() {
    // 왼쪽으로 한칸 이동
    $(".s_wrap").animate({ "margin-left": "-2400px" }, 500, function () {
      // 왼쪽의 3번 슬라이드를 오른쪽 끝으로 자리 변경
      $(".s_wrap > li:first-child").insertAfter(".s_wrap > li:last-child");

      // 다시 2번 슬라이드가 가운데 배치 되도록 위치 변경
      $(".s_wrap").css("margin-left", "-1200px");
    });
  }

  let Timer = setInterval(moveleft, 3000);

  // 공지사항의 첫번째 목록 클릭시 모달창 서서히 보이게
  let btn = $(".notice > ul > li:first-child > a");

  btn.click(function () {
    $(".modal").fadeIn();
  });

  // 닫기 버튼 클릭시 모달창 서서히 사라지게
  let close = $(".c_btn");

  close.click(function () {
    $(".modal").fadeOut();
  });
});
