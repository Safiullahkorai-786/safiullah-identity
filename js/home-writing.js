(() => {
  const featured = {
    platform: 'HackerNoon',
    title: "We Built a Tech Conference Where No One Expected It — OpenHack'25 and a Campus in Interior Sindh",
    excerpt: "Featured story: organizing OpenHack'25 and helping bring a major developer event to MUET SZAB Campus in interior Sindh.",
    url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh'
  };

  const selected = [
    featured,
    { platform: 'Medium', title: 'Who Is Safiullah Korai? Flutter Developer Today, AI Engineer Tomorrow.', excerpt: 'A personal introduction to my work, direction and journey toward AI Engineering.', url: 'https://medium.com/@safiullahkorai/who-is-safiullah-korai-flutter-developer-today-ai-engineer-tomorrow-8c49ba9847e6' },
    { platform: 'Medium', title: 'The Experience Trap Is Breaking the Next Generation of Talent', excerpt: 'Thoughts on experience, opportunity and how the next generation of talent gets overlooked.', url: 'https://medium.com/@safiullahkorai/the-experience-trap-is-breaking-the-next-generation-of-talent-b6a64dff79ba' },
    { platform: 'Medium', title: 'Bento Me: The Website Without Coding', excerpt: 'A look at building a personal web presence without starting from a traditional coding workflow.', url: 'https://medium.com/@safiullahkorai/bento-me-the-website-without-coding-37ef4ed15626' },
    { platform: 'Medium', title: 'In the Era of AI, Why Do I Still Choose Flutter?', excerpt: 'A reflection on choosing Flutter while the software industry is rapidly changing around AI.', url: 'https://medium.com/@safiullahkorai' },
    { platform: 'Medium', title: 'How Writing Helps Developers Think Clearly', excerpt: 'Why explaining what you build can make you a better developer and communicator.', url: 'https://medium.com/@safiullahkorai' }
  ];

  const elsewhere = [
    ['GitHub', 'Code, experiments and open-source work', 'https://github.com/Safiullahkorai-786'],
    ['LinkedIn', 'Professional updates and opportunities', 'https://www.linkedin.com/in/safiullah-korai'],
    ['Medium', 'Articles, essays and technical writing', 'https://medium.com/@safiullahkorai'],
    ['Dev.to', 'Developer-focused posts and discussions', 'https://dev.to/safiullahkorai'],
    ['Hashnode', 'Technical notes and longer-form writing', 'https://safiullahkorai.hashnode.dev'],
    ['Peerlist', 'Professional profile and community', 'https://peerlist.io/safiullahkorai'],
    ['X', 'Short thoughts, updates and conversations', 'https://x.com/SafiullahKorai'],
    ['YouTube', 'Videos, talks and experiments', 'https://youtube.com/@safiullah-korai']
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));

  function observeReveals(root) {
    root.querySelectorAll('.reveal').forEach((element) => {
      if (window.observer) window.observer.observe(element);
      requestAnimationFrame(() => element.classList.add('visible'));
    });
  }

  function renderArticles() {
    document.querySelectorAll('[data-posts]').forEach((container) => {
      container.innerHTML = `
        <div class="articles-layout">
          <a class="card article-card article-featured reveal" href="${escapeHtml(featured.url)}" target="_blank" rel="noopener">
            <div><span class="kicker article-platform">${escapeHtml(featured.platform)} · Featured</span><h3>${escapeHtml(featured.title)}</h3><p>${escapeHtml(featured.excerpt)}</p></div>
            <span class="date">Read on ${escapeHtml(featured.platform)} ↗</span>
          </a>
          <div class="articles-grid">
            ${selected.slice(1).map((post) => `
              <a class="card article-card reveal" href="${escapeHtml(post.url)}" target="_blank" rel="noopener">
                <div><span class="kicker article-platform">${escapeHtml(post.platform)}</span><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.excerpt)}</p></div>
                <span class="date">Read on ${escapeHtml(post.platform)} ↗</span>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="actions article-actions"><a class="btn btn-secondary" href="blog.html">View all My Articles →</a></div>
      `;
      observeReveals(container);
    });
  }

  function renderElsewhere() {
    if (document.querySelector('[data-elsewhere]')) return;
    const connectCard = Array.from(document.querySelectorAll('.section')).find((section) => section.querySelector('h2')?.textContent.includes('Have an idea worth building?'));
    if (!connectCard) return;

    const section = document.createElement('section');
    section.className = 'section alt elsewhere-section';
    section.dataset.elsewhere = 'true';
    section.innerHTML = `
      <div class="container">
        <div class="section-head"><div><span class="kicker">Elsewhere</span><h2>Find me around the web.</h2></div><p class="section-intro">Writing, code, professional updates and everything in between.</p></div>
        <div class="elsewhere-grid">
          ${elsewhere.map(([name, description, url]) => `
            <a class="card elsewhere-card reveal" href="${escapeHtml(url)}" target="_blank" rel="noopener">
              <div><span class="mini-label">${escapeHtml(name)}</span><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p></div><span class="date">Visit ↗</span>
            </a>
          `).join('')}
        </div>
        <div class="actions elsewhere-actions"><a class="btn btn-secondary" href="contact.html">View all Elsewhere →</a></div>
      </div>
    `;
    connectCard.parentNode.insertBefore(section, connectCard);
    observeReveals(section);
  }

  function render() { renderArticles(); renderElsewhere(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true });
  else render();
})();
