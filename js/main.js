document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#project-grid');
  const modal = document.querySelector('#project-modal');
  const modalContent = document.querySelector('#modal-content');
  let previousFocus;

  document.querySelector('#year').textContent = new Date().getFullYear();
  document.querySelectorAll('.brand').forEach(el => el.firstChild.textContent = portfolioConfig.name);
  document.querySelectorAll('[data-social]').forEach(el => {
    const url = portfolioConfig.social[el.dataset.social];
    if (url && url !== '#') el.href = url;
  });
  document.querySelectorAll('[data-email]').forEach(el => {
    if (portfolioConfig.email && portfolioConfig.email !== 'hello@example.com') {
      el.href = `mailto:${portfolioConfig.email}`;
    }
  });

  const preview = project => {
    const label = project.type === 'chatbot' ? 'Ask a question' : project.type === 'backend' ? 'Django / Python' : '↗';
    return `<div class="project-visual" aria-label="${project.title} visual preview"><div class="preview-frame"><div class="preview-top"></div><div class="preview-lines"></div><div class="preview-block one"></div><div class="preview-block two"></div><div class="preview-chat">${label}</div></div></div>`;
  };
  const projectCard = project => `<article class="project-card" data-id="${project.id}" data-type="${project.type}">${preview(project)}<div class="project-info"><span class="project-index">PROJECT ${project.number}</span>${project.status ? `<span class="project-status">${project.status}</span>` : ''}<h3 class="project-title">${project.title}</h3><p class="project-category">${project.category}</p><p>${project.description}</p><ul class="tech-list">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul><div class="project-links"><button class="text-link" data-open-project="${project.id}">View details ↗</button>${project.live ? `<a class="text-link" href="${project.live}" target="_blank" rel="noreferrer">Live Demo ↗</a>` : ''}<a class="text-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>`;
  grid.innerHTML = projects.map(projectCard).join('');

  function openProject(project) {
    previousFocus = document.activeElement;
    const d = project.details;
    const section = (title, content) => content ? `<section><h3>${title}</h3><p>${content}</p></section>` : '';
    modalContent.innerHTML = `<header class="modal-header"><span class="project-index">PROJECT ${project.number} / ${project.category}</span>${project.status ? `<span class="project-status">${project.status}</span>` : ''}<h2 class="project-title" id="modal-title">${project.title}</h2><p>${project.description}</p></header>${preview(project).replace('project-visual', 'modal-visual')}<div class="modal-details">${section('Overview', d.overview)}${section('What I Built', d.built)}${section('Features', d.features)}${section('Challenges', d.challenges)}${section('Solution', d.solution)}${section('What I Learned', d.learned)}${section('Project Note', d.note)}<section><h3>Technologies</h3><ul class="tech-list">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul></section></div><div class="modal-actions">${project.live ? `<a class="button button-dark" href="${project.live}" target="_blank" rel="noreferrer">Live Demo ↗</a>` : ''}<a class="button ${project.live ? 'button-light' : 'button-dark'}" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a></div>`;
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }
  function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; previousFocus?.focus(); }
  grid.addEventListener('click', e => { const id = e.target.dataset.openProject; if (id) openProject(projects.find(p => p.id === id)); });
  modal.addEventListener('click', e => { if (e.target.closest('[data-close-modal]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

  document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    document.querySelectorAll('.filter').forEach((b) => {
        b.classList.toggle('active', b === button);
      });

      const visibleCards = [];

      document.querySelectorAll('.project-card').forEach((card) => {
        const project = projects.find(
          (p) => p.id === card.dataset.id
        );

        if (!project) return;

        const visible =
          filter === 'all' ||
          project.filters.includes(filter);

        card.classList.toggle('is-hidden', !visible);

        if (visible) {
          visibleCards.push(card);
        }
      });

      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (
        window.gsap &&
        !reduced &&
        visibleCards.length
      ) {
        gsap.killTweensOf(visibleCards);

        gsap.fromTo(
          visibleCards,
          {
            opacity: 0,
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: 'power2.out',
            overwrite: 'auto',
            clearProps: 'transform,opacity',
            onComplete: () => {
              if (window.ScrollTrigger) {
                ScrollTrigger.refresh();
              }
            }
          }
        );
      } else if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });

  const toggle = document.querySelector('.menu-toggle'); const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => { const open = navLinks.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open); });
  navLinks.addEventListener('click', e => { if (e.target.matches('a')) { navLinks.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); } });
  addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('scrolled', scrollY > 8), { passive: true });
});
