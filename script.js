const progress = document.querySelector(".reading-progress");
const steps = Array.from(document.querySelectorAll(".step"));
const scenes = Array.from(document.querySelectorAll(".scene"));
const clock = document.querySelector("[data-clock]");

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}

function setScene(index) {
  scenes.forEach((scene) => {
    scene.classList.toggle("is-active", scene.dataset.scene === String(index));
  });

  const activeStep = steps.find((step) => step.dataset.step === String(index));
  if (activeStep && clock) {
    clock.textContent = activeStep.dataset.time;
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setScene(visible.target.dataset.step);
    }
  },
  {
    root: null,
    threshold: [0.35, 0.55, 0.75],
  }
);

steps.forEach((step) => observer.observe(step));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
