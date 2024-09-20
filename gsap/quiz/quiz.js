gsap.registerPlugin(ScrollTrigger);

//
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "section",
    start: "top top", //시작하자마자
    end: "+=2000", // 마지막까지
    scrub: 1, // 왔다리갔다리 가능
    pin: true, //
    markers: true,
  },
});

tl.fromTo(".first", { opacity: 0 }, { opacity: 1, duration: 1 }).fromTo(
  ".first",
  {},
  { opacity: 0, duration: 1 },
  "+=1"
);
tl.fromTo(".second", { opacity: 0 }, { opacity: 1, duration: 1 }).fromTo(
  ".second",
  {},
  { opacity: 0, duration: 1 },
  "+=1"
);

tl.fromTo(".third", { opacity: 0 }, { opacity: 1, duration: 1 });
