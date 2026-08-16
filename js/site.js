const DATA = {
  projects: [
    {
      title: 'SlayzUp',
      type: 'Flutter · Mobile',
      description: 'A Gen-Z slang dictionary focused on a clean mobile experience, offline favorites, and online synchronization.',
      tags: ['Flutter', 'Dart', 'Supabase', 'Hive'],
      link: 'https://github.com/SafiullahKorai-786'
    },
    {
      title: 'Zaiblify',
      type: 'AI · Web',
      description: 'An AI-focused product experiment exploring practical AI workers and useful developer-facing workflows.',
      tags: ['AI', 'JavaScript', 'APIs'],
      link: 'https://github.com/SafiullahKorai-786'
    },
    {
      title: 'EXAI Research',
      type: 'AI · Medical Imaging',
      description: 'A research direction around explainable AI for lung tumor detection, forming part of the journey toward AI engineering.',
      tags: ['Python', 'Deep Learning', 'XAI', 'Medical AI'],
      link: 'https://github.com/SafiullahKorai-786'
    }
  ],

  achievements: [
    {
      date: '2025',
      title: "OpenHack'25",
      text: 'Core coordination and community work around a major developer event at MUET SZAB Campus.',
      image: 'assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg'
    },
    {
      date: '2024',
      title: "GSSoC '24",
      text: 'Selected as an EXT Campus Ambassador and placed among the Top 50.'
    },
    {
      date: '2026',
      title: 'Zindigi Prize milestone',
      text: 'A first runner-up team achievement at the MUET SZAB Zindigi Prize event.',
      image: 'assets/Safiullah-Korai-Pitching-Idea-At-MUETSZAB-Zindigi-Prize-Event.jpg'
    },
    {
      date: 'Community',
      title: 'ETL Hero',
      text: 'A continuing community journey through learning, collaboration, and developer-focused initiatives.'
    }
  ],

  certificates: [
    {
      title: 'Good Pakistani Quiz — 100% Score',
      issuer: 'PNP',
      description: 'Certificate documenting a 100% result in the Good Pakistani Quiz, 2026.',
      image: 'assets/certificates/Safiullah-Korai-PNP-Good-Pakistani-Quiz-2026-100-Percent.png'
    },
    {
      title: 'Certificate of Membership — 2026',
      issuer: 'PAFLA',
      description: 'Membership certificate for 2026.',
      image: 'assets/certificates/Safiullah_Korai_PAFLA_Certificate_of_Membership_2026.png'
    },
    {
      title: 'Engagement Letter',
      issuer: 'FlyRank AI',
      description: 'Current engagement documentation with FlyRank AI.',
      image: 'assets/certificates/flyrank-engagement-letter.png'
    },
    {
      title: 'Certificate',
      issuer: 'Certificate record',
      description: 'Certificate image currently stored in the collection.',
      image: 'assets/certificates/safiullah-korai-certificate.png'
    }
  ],

  posts: [
    {
      title: 'Who Is Safiullah Korai? Flutter Developer Today, AI Engineer Tomorrow.',
      excerpt: 'A personal introduction to my work, direction and journey toward AI Engineering.',
      url: 'https://medium.com/@safiullahkorai/who-is-safiullah-korai-flutter-developer-today-ai-engineer-tomorrow-8c49ba9847e6'
    },
    {
      title: 'The Experience Trap Is Breaking the Next Generation of Talent',
      excerpt: 'Thoughts on experience, opportunity and how the next generation of talent gets overlooked.',
      url: 'https://medium.com/@safiullahkorai/the-experience-trap-is-breaking-the-next-generation-of-talent-b6a64dff79ba'
    },
    {
      title: 'Bento Me: The Website Without Coding',
      excerpt: 'A look at building a personal web presence without starting from a traditional coding workflow.',
      url: 'https://medium.com/@safiullahkorai/bento-me-the-website-without-coding-37ef4ed15626'
    }
  ],

  gallery: [
    { src: 'assets/Safiullah-Korai.png', alt: 'Safiullah Korai portrait' },
    ...Array.from({ length: 13 }, (_, i) => ({
      src: `assets/Safiullah-Korai-Pic-${i + 2}.jpg`,
      alt: 'Safiullah Korai — personal photo'
    })),
    {
      src: 'assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg',
      alt: 'Safiullah Korai and team receiving a first runner-up award at the MUET SZAB Zindigi Prize event'
    },
    {
      src: 'assets/Safiullah-Korai-Pitching-Idea-At-MUETSZAB-Zindigi-Prize-Event.jpg',
      alt: 'Safiullah Korai pitching an idea at the MUET SZAB Zindigi Prize event'
    },
    {
      src: 'assets/Zindigi Prize Award.jpg',
      alt: 'Zindigi Prize award moment'
    }
  ]
};

const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

const tags = (items) => items
  .map((item) => `<span class="tag">${esc(item)}</span>`)
  .join('');

function projectCard(project) {
  return `
    <article
      class="card project-card reveal clickable-card"
      tabindex="0"
      data-title="${esc(project.title)}"
      data-type="${esc(project.type)}"
      data-description="${esc(project.description)}"
      data-image=""
      data-link="${esc(project.link)}"
    >
      <div class="project-media">
        <span>${esc(project.type)}</span>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <h3>${esc(project.title)}</h3>
          <span class="mini-label">Project</span>
        </div>
        <p>${esc(project.description)}</p>
        <div class="tags">${tags(project.tags)}</div>
        <div class="project-links">
          <a
            class="text-link"
            href="${esc(project.link)}"
            target="_blank"
            rel="noopener"
            onclick="event.stopPropagation()"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  `;
}

function achievementCard(achievement) {
  return `
    <article
      class="card reveal clickable-card"
      tabindex="0"
      data-title="${esc(achievement.title)}"
      data-type="${esc(achievement.date)}"
      data-description="${esc(achievement.text)}"
      data-image="${esc(achievement.image || '')}"
      data-link=""
    >
      <div class="project-media">
        ${achievement.image
          ? `<img src="${esc(achievement.image)}" alt="${esc(achievement.title)}" loading="lazy">`
          : `<span>${esc(achievement.date)}</span>`}
      </div>
      <div style="padding:23px">
        <span class="timeline-date">${esc(achievement.date)}</span>
        <h3>${esc(achievement.title)}</h3>
        <p>${esc(achievement.text)}</p>
      </div>
    </article>
  `;
}

function certificateCard(certificate) {
  return `
    <article
      class="card reveal clickable-card"
      tabindex="0"
      data-title="${esc(certificate.title)}"
      data-type="${esc(certificate.issuer)}"
      data-description="${esc(certificate.description)}"
      data-image="${esc(certificate.image || '')}"
      data-link=""
    >
      <div class="project-media" style="aspect-ratio:16/10">
        <img
          src="${esc(certificate.image)}"
          alt="${esc(certificate.title)} — ${esc(certificate.issuer)}"
          loading="lazy"
        >
      </div>
      <div style="padding:23px">
        <span class="mini-label">${esc(certificate.issuer)}</span>
        <h3 style="margin-top:9px">${esc(certificate.title)}</h3>
        <p>${esc(certificate.description)}</p>
      </div>
    </article>
  `;
}

function galleryItem(image) {
  return `
    <figure
      class="gallery-item reveal clickable-card"
      tabindex="0"
      data-title="${esc(image.alt)}"
      data-type="Gallery"
      data-description=""
      data-image="${esc(image.src)}"
      data-link=""
    >
      <img src="${esc(image.src)}" alt="${esc(image.alt)}" loading="lazy">
    </figure>
  `;
}

function renderAll() {
  document.querySelectorAll('[data-projects]').forEach((element) => {
    element.innerHTML = DATA.projects.map(projectCard).join('');
  });

  document.querySelectorAll('[data-achievements]').forEach((element) => {
    element.innerHTML = DATA.achievements.map(achievementCard).join('');
  });

  document.querySelectorAll('[data-certificates]').forEach((element) => {
    element.innerHTML = DATA.certificates.map(certificateCard).join('');
  });

  document.querySelectorAll('[data-gallery]').forEach((element) => {
    element.innerHTML = DATA.gallery.map(galleryItem).join('');
  });

  document.querySelectorAll('[data-posts]').forEach((element) => {
    element.innerHTML = DATA.posts.map((post) => `
      <a class="card article-card reveal" href="${esc(post.url)}" target="_blank" rel="noopener">
        <div>
          <span class="kicker">Medium</span>
          <h3 style="margin-top:6px">${esc(post.title)}</h3>
          <p>${esc(post.excerpt)}</p>
        </div>
        <span class="date">Read on Medium ↗</span>
      </a>
    `).join('');
  });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  bindCards();
}

function ensureModal() {
  if (document.getElementById('site-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'site-modal';
  modal.className = 'site-modal';
  modal.innerHTML = `
    <div class="modal-backdrop" data-close></div>
    <div class="modal-card" role="dialog" aria-modal="true">
      <button class="modal-close" data-close aria-label="Close">×</button>
      <div class="modal-image-wrap">
        <img id="modal-image" alt="">
      </div>
      <div class="modal-content">
        <span class="kicker" id="modal-type"></span>
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <a id="modal-link" class="btn btn-primary" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelectorAll('[data-close]').forEach((element) => {
    element.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function openModal(card) {
  ensureModal();

  const modal = document.getElementById('site-modal');
  const image = modal.querySelector('#modal-image');
  const link = modal.querySelector('#modal-link');

  modal.querySelector('#modal-title').textContent = card.dataset.title;
  modal.querySelector('#modal-type').textContent = card.dataset.type;
  modal.querySelector('#modal-description').textContent = card.dataset.description;

  if (card.dataset.image) {
    image.src = card.dataset.image;
    image.alt = card.dataset.title;
    image.parentElement.style.display = 'block';
  } else {
    image.parentElement.style.display = 'none';
  }

  if (card.dataset.link) {
    link.href = card.dataset.link;
    link.style.display = 'inline-flex';
  } else {
    link.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('site-modal')?.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function bindCards() {
  document.querySelectorAll('.clickable-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      openModal(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card);
      }
    });
  });
}

function addPersonSchema() {
  if (location.pathname === '/' || location.pathname.endsWith('/index.html')) return;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: location.href,
    name: document.title,
    about: {
      '@type': 'Person',
      name: 'Safiullah Korai',
      alternateName: 'Shahzaib',
      url: 'https://safiullahkorai.com/',
      email: 'hello@safiullahkorai.com',
      image: 'https://safiullahkorai.com/assets/safiullah-korai.png',
      jobTitle: ['Software Engineer', 'Flutter Developer', 'Technical Writer'],
      description: 'Safiullah Korai, also known as Shahzaib, is a Software Engineer, Flutter Developer and Technical Writer building toward AI Engineering.',
      sameAs: [
        'https://www.linkedin.com/in/safiullah-korai',
        'https://github.com/SafiullahKorai-786',
        'https://orcid.org/0009-0008-2198-4674',
        'https://scholar.google.com/citations?user=r9UKHn4AAAAJ',
        'https://x.com/SafiullahKorai',
        'https://www.instagram.com/safiullah.korai',
        'https://youtube.com/@safiullah-korai',
        'https://medium.com/@safiullahkorai',
        'https://dev.to/safiullahkorai',
        'https://safiullahkorai.hashnode.dev',
        'https://peerlist.io/safiullahkorai'
      ]
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function ensureGlobalNavigation() {
  const requiredLinks = [
    ['Contact', 'contact.html'],
    ['FAQ', 'faq.html']
  ];

  document.querySelectorAll('.nav-links, .mobile-nav').forEach((nav) => {
    requiredLinks.forEach(([label, href]) => {
      if (Array.from(nav.querySelectorAll('a')).some((link) => link.getAttribute('href') === href)) return;

      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;

      if (location.pathname.endsWith(`/${href}`)) {
        link.classList.add('active');
      }

      nav.appendChild(link);
    });
  });

  const footerLinks = document.querySelector('.footer-links');

  if (!footerLinks) return;

  const links = [
    ['About', 'about.html'],
    ['Projects', 'projects.html'],
    ['Achievements', 'achievements.html'],
    ['Certificates', 'certificates.html'],
    ['Gallery', 'gallery.html'],
    ['Blog', 'blog.html'],
    ['Contact', 'contact.html'],
    ['FAQ', 'faq.html'],
    ['Privacy', 'privacy.html'],
    ['Terms', 'terms.html'],
    ['Email', 'mailto:hello@safiullahkorai.com'],
    ['GitHub', 'https://github.com/SafiullahKorai-786'],
    ['LinkedIn', 'https://www.linkedin.com/in/safiullah-korai']
  ];

  links.forEach(([label, href]) => {
    if (Array.from(footerLinks.querySelectorAll('a')).some((link) => link.getAttribute('href') === href)) return;

    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;

    if (href.startsWith('http')) {
      link.target = '_blank';
      link.rel = 'noopener';
    }

    footerLinks.appendChild(link);
  });
}

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }),
  { threshold: 0.08 }
);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.year')?.replaceChildren(
    document.createTextNode(new Date().getFullYear())
  );

  document.querySelector('.menu-btn')?.addEventListener('click', () => {
    document.querySelector('.mobile-nav')?.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.mobile-nav')?.classList.remove('open');
    });
  });

  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('light') ? 'light' : 'dark'
    );
  });

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }

  window.addEventListener(
    'scroll',
    () => document.querySelector('.site-header')?.classList.toggle('scrolled', scrollY > 10),
    { passive: true }
  );

  ensureGlobalNavigation();
  addPersonSchema();
  renderAll();
});
