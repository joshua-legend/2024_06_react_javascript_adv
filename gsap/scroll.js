gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".box",
  {},
  {
    x: 500,
    scrollTrigger: {
      trigger: ".test",
      markers: true, //개발자들 보기 좋게 해놓은 표시
      //start: "top-=400", //요소의 400px 위에서 시작하라는 뜻
      start: "top 80%", // 200vh * 80% 도달했을 때 시작하라는 뜻
      end: "top-=200",
      scrub: 3,
    },
  }
);
