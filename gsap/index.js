// gsap.fromTo(".box", { opacity: 0 }, { opacity: 1, x: 300 });

// timeline: tween여러개
// tween: 제리가 치즈훔침
// tween: 톰이 눈이 튀어나옴
// tween: 톰이 달려감
// tween: 톰이 덫을 밟음
// tween: 톰이 끄야야야약호호호호 소리냄

// const timeLine = gsap.timeline();
// timeLine
//   .fromTo(".box", { x: 0 }, { x: 100, duration: 1 })
//   .fromTo(".box", { y: 0 }, { y: 100, duration: 1 })
//   .fromTo(".box", {}, { backgroundColor: "green", rotation: 180, duration: 1 });

const tl = gsap.timeline();

tl.fromTo(
  ".title",
  {},
  { display: "none", opacity: 0, duration: 1, ease: "power1.in" }
)
  .fromTo(
    ".photo",
    { y: 1000, opacity: 0 },
    { y: 0, opacity: 1, display: "block", duration: 1, ease: "power1.inOut" }
  )
  .fromTo(
    ".photo",
    {},
    {
      width: "100%",
      height: "100%",
      duration: 1.5,
      delay: 0.3,
      ease: "power1.inOut",
    }
  );
