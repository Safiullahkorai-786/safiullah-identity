(() => {
  const featured = {
    platform: 'HackerNoon',
    title: "We Built a Tech Conference Where No One Expected It — OpenHack'25 and a Campus in Interior Sindh",
    excerpt: "Featured story: organizing OpenHack'25 and helping bring a major developer event to MUET SZAB Campus in interior Sindh.",
    url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh'
  };

  const selected = [
    featured,
    {
      platform: 'Medium',
      title: 'Who Is Safiullah Korai? Flutter Developer Today, AI Engineer Tomorrow.',
      excerpt: 'A personal introduction to my work, direction and journey toward AI Engineering.',
      url: 'https://medium.com/@safiullahkorai/who-is-safiullah-korai-flutter-developer-today-ai-engineer-tomorrow-8c49ba9847e6'
    },
    {
      platform: 'Medium',
      title: 'Bento Me: The Website Without Coding',
      excerpt: 'A look at building a personal web presence without starting from a traditional coding workflow.',
      url: 'https://medium.com/@safiullahkorai/bento-me-the-website-without-coding-37ef4ed15626'
    }
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));

  function render() {
    document.querySelectorAll('[data-posts]').forEach((container) => {
      container.innerHTML = selected.map((post, index) => `
        <a class="card article-card reveal${index === 0 ? ' article-featured' : ''}" href="${escapeHtml(post.url)}" target="_blank" rel="noopener">
          <div>
            <span class="kicker article-platform">${escapeHtml(post.platform)}${index === 0 ? ' · Featured' : ''}</span>
            <h3 style="margin-top:6px">${escapeHtml(post.title)}</h3>
            <p>${escapeHtml(post.excerpt)}</p>
          </div>
          <span class="date">Read on ${escapeHtml(post.platform)} ↗</span>
        </a>
      `).join('');

      container.querySelectorAll('.reveal').forEach((element) => {
        if (window.observer) window.observer.observe(element);
        requestAnimationFrame(() => element.classList.add('visible'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();
