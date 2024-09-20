// 앞에 콜백함수를 3초뒤에 실행시키라는 뜻~
// setTimeout(() => {
//   console.log("이해완?");
// }, 3000);
// 짧퀴 button 태그 [엄준식] => 클릭하면 => 3초뒤에 [살아있다.]

// const button = document.createElement("button");
// button.innerText = "엄준식";
// button.addEventListener("click", () => {
//   setTimeout(() => {
//     button.innerText = "살아있음";
//   }, 3000);
// });
// document.body.appendChild(button);

// const button = document.createElement("button");
// button.innerText = "🥚";
// button.addEventListener("click", () => {
//   setTimeout(() => {
//     button.innerText = "🐣";
//     setTimeout(() => {
//       button.innerText = "🐥";
//       setTimeout(() => {
//         button.innerText = "🐓";
//         setTimeout(() => {
//           button.innerText = "🍗";
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 500);
// });
// document.body.appendChild(button);

// setInterval(() => {
//   console.log("엄준식 살아있다.");
// }, 1000);

// 시계 ㄱ
// 19:32:??

const div = document.createElement("div");
document.body.appendChild(div);

setInterval(() => {
  const time = new Date().toLocaleString().split(" ");
  div.innerText = time[4];
}, 1000);
