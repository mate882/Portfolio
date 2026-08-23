(() => {
  const initAnimations = () => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Respect accessibility settings.
    if (reduced) return;

    // GSAP or ScrollTrigger failed to load.
    if (!window.gsap || !window.ScrollTrigger) {
      console.warn('GSAP or ScrollTrigger failed to load.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /*
     * HERO
     * Set the initial state explicitly so there is no flash of
     * unstyled content before GSAP takes control.
     */
    const heroElements = gsap.utils.toArray('.hero-animate');

    if (heroElements.length) {
      gsap.set(heroElements, {
        opacity: 0,
        y: 22
      });

      gsap.to(heroElements, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.11,
        ease: 'power3.out',
        delay: 0.08,
        clearProps: 'transform,opacity'
      });
    }

    /*
     * HERO VISUAL FLOATING ELEMENTS
     */
    const chatbotTag = document.querySelector('.tag-chatbot');
    const miniCard = document.querySelector('.mini-card');

    if (chatbotTag) {
      gsap.to(chatbotTag, {
        y: -5,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    if (miniCard) {
      gsap.to(miniCard, {
        y: -4,
        duration: 2.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    /*
     * SCROLL REVEALS
     *
     * Do not use display:none or visibility:hidden here.
     * ScrollTrigger needs the elements to remain in the document
     * so it can calculate their positions.
     */
    const revealElements = gsap.utils.toArray('.reveal');

    revealElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 22
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: element,
            start: 'top 87%',
            once: true
          }
        }
      );
    });

    /*
     * Initial layout calculation.
     */
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    /*
     * Images/fonts/layout changes can alter element positions.
     * Refresh after the page has fully loaded.
     */
    window.addEventListener(
      'load',
      () => {
        ScrollTrigger.refresh();
      },
      { once: true }
    );
  };

  /*
   * GSAP scripts are loaded with defer.
   * DOMContentLoaded is therefore safe, but this also handles
   * the case where this file executes after DOMContentLoaded.
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations, {
      once: true
    });
  } else {
    initAnimations();
  }
})();