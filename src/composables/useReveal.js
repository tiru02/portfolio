import { onMounted, onUnmounted } from 'vue';

export function useReveal(options = { threshold: 0.1 }) {
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Give the DOM a tiny bit of time to render if called directly
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 0);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
}
