// gsap.fromTo(".text1", {}, { x: 350, duration: 1 });
// gsap.fromTo(".text3", {}, { x: -350, duration: 1 });
// gsap.fromTo("body", {}, { backgroundColor: "white", delay: 1, duration: 1 });
// gsap.fromTo(
//   ".text1",
//   {},
//   { color: "black", duration: 0.5, delay: 1.5, ease: "power4.in" }
// );
// gsap.fromTo(
//   ".text2",
//   {},
//   { color: "black", duration: 0.5, delay: 1.5, ease: "power4.in" }
// );
// gsap.fromTo(
//   ".text3",
//   {},
//   { color: "black", duration: 0.5, delay: 1.5, ease: "power4.in" }
// );

//timeline 특) 애니메이션 순차대로 끝나서야 진행

const tl = gsap.timeline();

const fadeInText = { color: "black", duration: 0.5, ease: "power4.in" };

tl.fromTo(".text1", {}, { x: 350, duration: 1 })
  .fromTo(".text3", {}, { x: -350, duration: 1 }, "<")
  .fromTo("body", {}, { backgroundColor: "white", delay: 1, duration: 1 })
  .fromTo(".text1", {}, fadeInText, "<0.2")
  .fromTo(".text2", {}, fadeInText, "<")
  .fromTo(".text3", {}, fadeInText, "<");
