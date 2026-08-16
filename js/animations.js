document.addEventListener('DOMContentLoaded', () => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-animate', { y: 22, opacity: 0, duration: .75, stagger: .11, ease: 'power3.out', delay: .08 });
  gsap.to('.tag-chatbot', { y: -5, duration: 1.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.mini-card', { y: -4, duration: 2.1, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.utils.toArray('.reveal').forEach(el => gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 87%', once: true },
    opacity: 0,
    y: 22,
    duration: .65,
    ease: 'power2.out'
  }));
});
