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

  const preview = project => `<div class="project-visual" aria-label="${project.title} visual preview"><div class="preview-frame"><div class="preview-top"></div><div class="preview-lines"></div><div class="preview-block one"></div><div class="preview-block two"></div><div class="preview-chat">${project.type === 'chatbot' ? 'Ask a question' : '↗'}</div></div></div>`;
  const projectCard = project => `<article class="project-card" data-id="${project.id}" data-type="${project.type}">${preview(project)}<div class="project-info"><span class="project-index">PROJECT ${project.number}</span><h3 class="project-title">${project.title}</h3><p class="project-category">${project.category}</p><p>${project.description}</p><ul class="tech-list">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul><div class="project-links"><button class="text-link" data-open-project="${project.id}">View details ↗</button><a class="text-link" href="${project.live}" target="_blank" rel="noreferrer">Live Demo ↗</a><a class="text-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>`;
  grid.innerHTML = projects.map(projectCard).join('');

  function openProject(project) {
    previousFocus = document.activeElement;
    const d = project.details;
    modalContent.innerHTML = `<header class="modal-header"><span class="project-index">PROJECT ${project.number} / ${project.category}</span><h2 class="project-title" id="modal-title">${project.title}</h2><p>${project.description}</p></header>${preview(project).replace('project-visual', 'modal-visual')}<div class="modal-details"><section><h3>Overview</h3><p>${d.overview}</p></section><section><h3>Problem</h3><p>${d.problem}</p></section><section><h3>What I Built</h3><p>${d.built}</p></section><section><h3>How It Works</h3><p>${d.how}</p></section><section><h3>Challenges</h3><p>${d.challenges}</p></section><section><h3>Solution</h3><p>${d.solution}</p></section><section><h3>Results</h3><p>${d.results}</p></section><section><h3>What I Learned</h3><p>${d.learned}</p></section><section><h3>Technologies</h3><ul class="tech-list">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul></section></div><div class="modal-actions"><a class="button button-dark" href="${project.live}" target="_blank" rel="noreferrer">Live Demo ↗</a><a class="button button-light" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a></div>`;
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }
  function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; previousFocus?.focus(); }
  grid.addEventListener('click', e => { const id = e.target.dataset.openProject; if (id) openProject(projects.find(p => p.id === id)); });
  modal.addEventListener('click', e => { if (e.target.closest('[data-close-modal]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button));
    document.querySelectorAll('.project-card').forEach(card => { const project = projects.find(p => p.id === card.dataset.id); card.classList.toggle('is-hidden', filter !== 'all' && !project.filters.includes(filter)); });
  }));

  const toggle = document.querySelector('.menu-toggle'); const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => { const open = navLinks.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open); });
  navLinks.addEventListener('click', e => { if (e.target.matches('a')) { navLinks.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); } });
  addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('scrolled', scrollY > 8), { passive: true });
});
