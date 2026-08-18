(() => {
  const split = () => {
    const sections = [...document.querySelectorAll('.achievement-section')];
    const communitySection = sections.find((section) => /community/i.test(section.querySelector('h2')?.textContent || ''));
    if (!communitySection) return;

    const originalGrid = communitySection.querySelector('.grid-3');
    if (!originalGrid) return;
    const cards = [...originalGrid.children];
    const organizedTitles = ['Tafreeh-e-Data with Power BI', 'Winter Microsoft Learning', 'Open Source Contribution Workshop', "OpenHack'25"];
    const organized = cards.filter(card => organizedTitles.some(title => (card.querySelector('h3')?.textContent || '').includes(title)));
    const leadership = cards.filter(card => !organized.includes(card));

    const makeSection = (kicker, title, intro, items, href) => {
      const section = document.createElement('section');
      section.className = 'section achievement-section split-community-section';
      section.innerHTML = `<div class="container"><div class="section-head"><div><span class="kicker">${kicker}</span><h2>${title}</h2></div><a class="section-view-all" href="${href}">View all ${items.length} →</a></div><p class="section-intro achievement-section-intro">${intro}</p><div class="grid-3 split-community-grid"></div></div>`;
      section.querySelector('.split-community-grid').append(...items);
      return section;
    };

    const organizedSection = makeSection('Organized', 'Events I organized', 'Work where I turned community roles into actual workshops, initiatives and events.', organized, 'events.html');
    const leadershipSection = makeSection('Leadership', 'Leadership roles', 'The communities and roles where I represented, mentored, organized and helped others grow.', leadership, 'leadership.html');
    communitySection.replaceWith(organizedSection, leadershipSection);
  };

  const addViewAll = () => {
    const routes = [
      {match:/Awards & wins/i, href:'achievements-awards.html', label:'View all'},
      {match:/Badges & recognition|Digital badges/i, href:'achievements-badges.html', label:'View all'}
    ];
    document.querySelectorAll('.achievement-section').forEach(section => {
      if (section.classList.contains('split-community-section')) return;
      const heading = section.querySelector('h2')?.textContent || '';
      const route = routes.find(r => r.match.test(heading));
      const grid = section.querySelector('.grid-3');
      if (!route || !grid || grid.children.length <= 6 || section.querySelector('.section-view-all')) return;
      const head = section.querySelector('.section-head');
      const link = document.createElement('a');
      link.className = 'section-view-all'; link.href = route.href; link.textContent = `${route.label} ${grid.children.length} →`;
      head.appendChild(link);
      [...grid.children].forEach((card, index) => { if (index >= 6) card.classList.add('preview-hidden-card'); });
    });
  };

  const enhanceImageClicks = () => {
    const images = [...document.querySelectorAll('.achievement-detail-card img, .badge-card img')];
    if (!images.length) return;
    const overlay = document.createElement('div'); overlay.className = 'image-lightbox'; overlay.innerHTML = `<button class="lightbox-close" aria-label="Close">×</button><button class="lightbox-prev" aria-label="Previous">‹</button><div class="lightbox-stage"><img alt=""></div><button class="lightbox-next" aria-label="Next">›</button><div class="lightbox-caption"></div>`; document.body.appendChild(overlay);
    const state = { list: [], index: 0 };
    const open = (image) => { state.list = images; state.index = images.indexOf(image); overlay.classList.add('is-open'); show(); };
    const show = () => { const img = state.list[state.index]; if (!img) return; overlay.querySelector('.lightbox-stage img').src = img.src; overlay.querySelector('.lightbox-stage img').alt = img.alt; overlay.querySelector('.lightbox-caption').textContent = img.alt; };
    images.forEach(img => { img.tabIndex = 0; img.addEventListener('click', () => open(img)); img.addEventListener('keydown', e => { if(e.key === 'Enter') open(img); }); });
    overlay.querySelector('.lightbox-close').onclick = () => overlay.classList.remove('is-open');
    overlay.querySelector('.lightbox-prev').onclick = () => { state.index = (state.index - 1 + state.list.length) % state.list.length; show(); };
    overlay.querySelector('.lightbox-next').onclick = () => { state.index = (state.index + 1) % state.list.length; show(); };
    overlay.addEventListener('click', e => { if(e.target === overlay) overlay.classList.remove('is-open'); });
    document.addEventListener('keydown', e => { if(!overlay.classList.contains('is-open')) return; if(e.key==='Escape') overlay.classList.remove('is-open'); if(e.key==='ArrowLeft') overlay.querySelector('.lightbox-prev').click(); if(e.key==='ArrowRight') overlay.querySelector('.lightbox-next').click(); });
  };

  split();
  addViewAll();
  enhanceImageClicks();
})();
