const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

function setClock() {
  const DAY = new Date();

  clock.innerText = `${`${DAY.getHours()}`.padStart(
    2,
    "0"
  )} : ${`${DAY.getMinutes()}`.padStart(2, "0")}`;
  var week = DAY.getDay();
  switch (week) {
    case 0:
      week = "일";
      break;
    case 1:
      week = "월";
      break;
    case 2:
      week = "화";
      break;
    case 3:
      week = "수";
      break;
    case 4:
      week = "목";
      break;
    case 5:
      week = "금";
      break;
    case 6:
      week = "토";
      break;
  }

  date.innerHTML = `${DAY.getMonth()}월 ${DAY.getDate()}일 <span>${week}요일<span>`;
  if (week == "일" || week == "토") {
    date.children.item(0).style.color = "red";
  } else {
    date.children.item(0).style.color = "darkblue";
  }
}

setClock();
setInterval(setClock, 1000);
