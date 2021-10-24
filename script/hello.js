const hello = document.querySelector(".hello"),
  time = document.querySelector(".clock"),
  today = document.querySelector(".date");

const week = today.innerText.substring(today.innerText.lastIndexOf(" ") + 1);
const hour = parseInt(time.innerText.substring(0, 2));

if (week == "일요일" || week == "토요일") {
  hello.innerText = "즐거운 주말 보내세요!";
} else {
  if (hour <= 10 && hour >= 06) {
    hello.innerText = "좋은 아침입니다. 오늘도 즐거운 하루 되세요";
  } else if (hour >= 11 && hour <= 14) {
    hello.innerText = "점심 식사는 맛나게! 오후 일과는 힘차게!";
  } else if (hour >= 15 && hour <= 17) {
    hello.innerText =
      "지치는 오후 시간입니다. 따뜻한 커피와 간식과 함께 힘내세요";
  } else if (hour >= 18 && hour <= 21) {
    hello.innerText =
      "하루해가 저물어갑니다. 즐거운 저녁 식사 하시고 좋은 저녁 시간 보내세요.";
  } else {
    hello.innerText =
      "소중한 하루 수고 많으셨습니다. 편히 쉬시고 행복한 저녁 되세요";
  }
}
