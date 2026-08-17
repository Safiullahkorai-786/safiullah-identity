(() => {
  const programs = [
    {
      label: 'Leadership Program',
      title: 'Aspire Leaders Program',
      text: 'A leadership and personal development program that became part of my broader learning journey.',
      meta: 'Aspire Institute · 2024'
    },
    {
      label: 'Fellowship',
      title: 'Savvy Fellowship',
      text: 'Selected for the Savvy global fellowship program for entrepreneurs.',
      meta: 'Savvy · Fellowship'
    },
    {
      label: 'AI Program',
      title: 'ACT AI',
      text: 'Completed the ACT AI program, adding another AI-focused learning experience to the journey.',
      meta: 'ACT AI'
    },
    {
      label: 'AI Learning',
      title: 'One Million Prompters',
      text: 'AI and prompt-engineering learning through the UAE initiative focused on building practical prompt literacy.',
      meta: 'Dubai Future Foundation · UAE'
    },
    {
      label: 'Learning Initiative',
      title: 'Winter Microsoft Learning',
      text: 'A 15-day Microsoft learning initiative with sessions, community activities and practical learning.',
      meta: 'Microsoft Learn community initiative'
    }
  ];

  const badges = [
    {
      label: 'Microsoft',
      title: 'Azure OpenAI & Microsoft Learn Badges',
      text: 'A collection of Microsoft learning and community badges earned across the Microsoft ecosystem.',
      url: 'https://www.credly.com/users/safiullah-korai'
    },
    {
      label: 'Microsoft',
      title: 'Azure Database for MySQL Contributor Badges',
      text: 'Recognition connected with Microsoft Azure Database for MySQL community contribution challenges.',
      url: 'https://www.credly.com/users/safiullah-korai'
    },
    {
      label: 'Postman',
      title: 'Postman API Fundamentals Student Expert',
      text: 'A digital credential documenting foundational API knowledge and hands-on learning.',
      url: 'https://www.credly.com/users/safiullah-korai'
    }
  ];

  const community = [
    {
      label: 'Community',
      title: 'Microsoft Learn Student Ambassador',
      text: 'A student community role focused on learning, sharing technology and helping build developer communities.',
      meta: 'Microsoft · 2023–Present'
    },
    {
      label: 'Community',
      title: 'ETL Ambassador',
      text: 'Community involvement with Empowerment Through Learning, including support for learning and technology initiatives.',
      meta: 'Empowerment Through Learning'
    },
    {
      label: 'Membership',
      title: 'PAFLA',
      text: 'Member of the Pakistan Freelancing Association, connecting professional development with Pakistan’s freelancing ecosystem.',
      meta: 'Pakistan Freelancing Association'
    },
    {
      label: 'Membership',
      title: 'IAENG',
      text: 'Member of the International Association of Engineers.',
      meta: 'International Association of Engineers'
    },
    {
      label: 'Community',
      title: "GirlScript Summer of Code '24",
      text: 'Selected as an EXT Campus Ambassador and participated in the open-source community ecosystem.',
      meta: 'GSSoC · 2024'
    },
    {
      label: 'Community',
      title: 'Hult Prize MUET Khairpur',
      text: 'Community and design involvement around student entrepreneurship and innovation activities at MUET SZAB.',
      meta: 'Hult Prize · MUET Khairpur'
    }
  ];

  const story = {
    label: 'Community Story',
    title: "OpenHack'25 — Building a Tech Conference in Interior Sindh",
    text: 'A student-led technology event at MUET SZAB Campus Khairpur that grew from classroom conversations into a multi-day hackathon and technology conference. My role focused heavily on partnerships, sponsorship communication, branding direction and strategic outreach.',
    meta: 'MUET SZAB Campus · October 2025',
    url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh'
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));

  const card = (item, external = false) => `
    <article class="card achievement-detail-card reveal">
      <div class="achievement-detail-top">
        <span class="mini-label">${esc(item.label)}</span>
        ${item.meta ? `<span class="achievement-detail-meta">${esc(item.meta)}</span>` : ''}
      </div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
      ${item.url ? `<a class="text-link" href="${esc(item.url)}" target="_blank" rel="noopener">${external ? 'View credential on Credly ↗' : 'Learn more ↗'}</a>` : ''}
    </article>
  `;

  const section = (kicker, title, intro, content, extra = '') => `
    <section class="section achievement-section">
      <div class="container">
        <div class="section-head">
          <div><span class="kicker">${esc(kicker)}</span><h2>${esc(title)}</h2></div>
          ${extra}
        </div>
        ${intro ? `<p class="section-intro achievement-section-intro">${esc(intro)}</p>` : ''}
        ${content}
      </div>
    </section>
  `;

  function render() {
    const mount = document.querySelector('[data-achievement-sections]');
    if (!mount) return;

    mount.innerHTML = [
      section('Programs', 'Programs, fellowships & learning initiatives.', 'The programs that added a meaningful layer to the learning journey.', `<div class="grid-3">${programs.map((item) => card(item)).join('')}</div>`),
      section('Badges', 'Digital credentials.', 'Badges live on Credly so each credential can be verified from the source profile.', `<div class="grid-3">${badges.map((item) => card(item, true)).join('')}</div><div class="achievement-profile-links"><a class="btn btn-secondary" href="https://www.credly.com/users/safiullah-korai" target="_blank" rel="noopener">View all badges on Credly ↗</a><a class="btn btn-secondary" href="https://winter-microsoft-learning.super.site" target="_blank" rel="noopener">Winter Microsoft Learning ↗</a></div>`),
      section('Community', 'Community & memberships.', 'The communities, organizations and roles where I have contributed, learned and collaborated.', `<div class="grid-3">${community.map((item) => card(item)).join('')}</div><div class="achievement-profile-links"><a class="btn btn-secondary" href="https://www.linkedin.com/in/safiullah-korai" target="_blank" rel="noopener">View community experience on LinkedIn ↗</a><a class="btn btn-secondary" href="https://www.instagram.com/safiullah.korai" target="_blank" rel="noopener">Community & event updates on Instagram ↗</a></div>`),
      section('Featured Story', story.title, story.text, `<article class="card achievement-story-card reveal"><div><span class="mini-label">${esc(story.label)}</span><h3>${esc(story.title)}</h3><p>${esc(story.text)}</p><span class="achievement-detail-meta">${esc(story.meta)}</span></div><a class="btn btn-primary" href="${esc(story.url)}" target="_blank" rel="noopener">Read the full HackerNoon story ↗</a></article>`)
    ].join('');

    mount.querySelectorAll('.reveal').forEach((element) => {
      if (window.observer) window.observer.observe(element);
      requestAnimationFrame(() => element.classList.add('visible'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();
