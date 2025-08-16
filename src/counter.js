import mojs from "@mojs/core";

const bouncyCircle = new mojs.Shape({
  shape: 'circle',
  fill: { '#F64040': '#FC46AD' },
  radius: { 20: 80 },
  duration: 2000,
  isYoyo: true,
  isShowStart: true,
  easing: 'elastic.inout',
  repeat: 1,
});

bouncyCircle.play()