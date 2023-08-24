const progressCircle1 = document.querySelector(".autoplay-progress2 svg");
const progressContent1 = document.querySelector(".autoplay-progress2 span");

const swiperEl1 = document.querySelector("swiper-container");
swiperEl1.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle1.style.setProperty("--progress", 1 - progress);
  progressContent1.textContent = `${Math.ceil(time / 1000)}s`;
});