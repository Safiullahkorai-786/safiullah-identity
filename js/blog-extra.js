(() => {
  const posts = [
    {
      platform: 'SafiullahKorai.com',
      title: 'Why I Switched From Being a Software Engineer to AI Engineer',
      excerpt: 'Why I am moving toward AI Engineering without leaving Software Engineering behind — the foundation stays, the direction expands.',
      url: 'blog/why-i-switched-from-software-engineer-to-ai-engineer.html',
      thumbnail: 'assets/blog/why-i-switched-software-engineer-to-ai-engineer.svg',
      featured: true,
      internal: true,
      date: 'Aug 17, 2026',
      readTime: '8 min read',
      tags: ['AI', 'Career', 'Software Engineering', 'Developer Journey']
    },
    {
      platform: 'Medium',
      title: 'Who Is Safiullah Korai? Flutter Developer Today, AI Engineer Tomorrow.',
      excerpt: 'A personal introduction to my work, direction and journey toward AI Engineering.',
      url: 'https://medium.com/@safiullahkorai/who-is-safiullah-korai-flutter-developer-today-ai-engineer-tomorrow-8c49ba9847e6',
      tags: ['AI', 'Flutter', 'Career', 'Personal Brand']
    },
    {
      platform: 'Medium',
      title: 'The Experience Trap Is Breaking the Next Generation of Talent',
      excerpt: 'Thoughts on experience, opportunity and how the next generation of talent gets overlooked.',
      url: 'https://medium.com/@safiullahkorai/the-experience-trap-is-breaking-the-next-generation-of-talent-b6a64dff79ba',
      tags: ['Career', 'Developers', 'Opportunity']
    },
    {
      platform: 'Medium',
      title: 'Bento Me: The Website Without Coding',
      excerpt: 'A look at building a personal web presence without starting from a traditional coding workflow.',
      url: 'https://medium.com/@safiullahkorai/bento-me-the-website-without-coding-37ef4ed15626',
      tags: ['Web Development', 'Personal Brand', 'No-Code']
    },
    {
      platform: 'HackerNoon',
      title: 'How Stitch Helps Flutter Developers Design Faster',
      excerpt: 'Exploring how Google Stitch can speed up interface ideation for Flutter developers.',
      url: 'https://hackernoon.com/how-stitch-helps-flutter-developers-design-faster',
      tags: ['Flutter', 'UI/UX', 'AI Tools', 'Development']
    },
    {
      platform: 'HackerNoon',
      title: 'Google Stitch Is Changing UI/UX Design in 2026',
      excerpt: 'A look at how AI-assisted design workflows are changing the way developers think about interfaces.',
      url: 'https://hackernoon.com/google-stitch-is-changing-uiux-design-in-2026',
      tags: ['AI', 'UI/UX', 'Design', 'Development']
    },
    {
      platform: 'HackerNoon',
      title: 'How Writing Helps Developers Think Clearly',
      excerpt: 'Why turning technical ideas into words can sharpen engineering thinking.',
      url: 'https://hackernoon.com/how-writing-helps-developers-think-clearly',
      tags: ['Technical Writing', 'Developers', 'Learning']
    },
    {
      platform: 'HackerNoon',
      title: 'A Practical Guide to Technical Writing for Developers Who Want to Start Sharing What They Know',
      excerpt: 'A practical starting point for developers who want to turn what they learn into useful writing.',
      url: 'https://hackernoon.com/a-practical-guide-to-technical-writing-for-developers-who-want-to-start-sharing-what-they-know',
      tags: ['Technical Writing', 'Developers', 'Learning']
    },
    {
      platform: 'HackerNoon',
      title: 'How to Choose the Right Writing Platform as a Developer When There Are So Many Options',
      excerpt: 'Comparing the trade-offs developers face when choosing where to publish technical work.',
      url: 'https://hackernoon.com/how-to-choose-the-right-writing-platform-as-a-developer-when-there-are-so-many-options',
      tags: ['Technical Writing', 'Personal Brand', 'Developers']
    },
    {
      platform: 'HackerNoon',
      title: 'How Building a Personal Brand Early Opens Doors for Student Developers',
      excerpt: 'Why building a visible body of work early can create opportunities before graduation.',
      url: 'https://hackernoon.com/how-building-a-personal-brand-early-opens-doors-for-student-developers',
      tags: ['Personal Brand', 'Career', 'Developers']
    },
    {
      platform: 'HackerNoon',
      title: 'How Learning in Public Speeds Up Developer Growth',
      excerpt: 'How sharing the learning process can create feedback loops, accountability and opportunities.',
      url: 'https://hackernoon.com/how-learning-in-public-speeds-up-developer-growth',
      tags: ['Learning', 'Developers', 'Personal Brand']
    },
    {
      platform: 'HackerNoon',
      title: 'Why Developers Can No Longer Afford to Be Invisible Online',
      excerpt: 'A case for making your work discoverable in an increasingly public technical ecosystem.',
      url: 'https://hackernoon.com/why-developers-can-no-longer-afford-to-be-invisible-online',
      tags: ['Personal Brand', 'Career', 'Developers']
    },
    {
      platform: 'HackerNoon',
      title: 'Google I/O 2026 Foreshadowed a World Without Traditional Apps',
      excerpt: 'Thoughts on the shift toward AI-native experiences and what it could mean for developers.',
      url: 'https://hackernoon.com/google-io-2026-foreshadowed-a-world-without-traditional-apps',
      tags: ['AI', 'Development', 'Technology']
    },
    {
      platform: 'HackerNoon',
      title: "We Built a Tech Conference Where No One Expected It — OpenHack'25 and a Campus in Interior Sindh",
      excerpt: "Featured story: organizing OpenHack'25 and helping bring a major developer event to MUET SZAB Campus in interior Sindh.",
      url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh',
      tags: ['Community', 'Events', 'Developers', 'Leadership']
    }
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));

  const allTags = ['All', ...[...new Set(posts.flatMap((post) => post.tags || []))].sort()];
  let activeTag = 'All';
  let searchTerm = '';

  const matches = (post) => {
    const haystack = [post.title, post.excerpt, post.platform, ...(post.tags || [])].join(' ').toLowerCase();
    return (!searchTerm || haystack.includes(searchTerm)) && (activeTag === 'All' || (post.tags || []).includes(activeTag));
  };

  function renderFilters() {
    const filters = document.querySelector('[data-blog-filters]');
    if (!filters) return;
    filters.innerHTML = allTags.map((tag) => `<button class="blog-filter${tag === activeTag ? ' active' : ''}" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('');
    filters.querySelectorAll('[data-tag]').forEach((button) => button.addEventListener('click', () => {
      activeTag = button.dataset.tag;
      renderFilters();
      render();
    }));
  }

  function card(post) {
    const tags = (post.tags || []).map((tag) => `<span class="article-tag">${escapeHtml(tag)}</span>`).join('');
    if (post.featured) {
      return `<a class="card article-card article-featured reveal" href="${escapeHtml(post.url)}" target="_self">
        <div class="article-featured-media"><img src="${escapeHtml(post.thumbnail)}" alt="${escapeHtml(post.title)} thumbnail" loading="eager"></div>
        <div class="article-featured-content"><span class="article-type">Featured · My Writing</span><h2 style="margin:0 0 10px">${escapeHtml(post.title)}</h2><p>${escapeHtml(post.excerpt)}</p><div class="article-tags">${tags}</div><div class="article-meta"><span>${escapeHtml(post.date)} · ${escapeHtml(post.readTime)}</span><span class="article-link">Read article →</span></div></div>
      </a>`;
    }
    return `<a class="card article-card external-card reveal" href="${escapeHtml(post.url)}" target="_blank" rel="noopener noreferrer">
      <div><span class="article-type external-platform">Published on ${escapeHtml(post.platform)}</span><h3 style="margin-top:6px">${escapeHtml(post.title)}</h3><p>${escapeHtml(post.excerpt)}</p><div class="article-tags">${tags}</div></div>
      <div class="article-meta"><span>Elsewhere</span><span class="article-link">Read on ${escapeHtml(post.platform)} ↗</span></div>
    </a>`;
  }

  function render() {
    const container = document.querySelector('[data-posts]');
    if (!container) return;
    const filtered = posts.filter(matches);
    const internal = filtered.filter((post) => post.internal);
    const external = filtered.filter((post) => !post.internal);
    const count = document.querySelector('[data-blog-count]');
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'}`;

    let html = '';
    if (internal.length) {
      html += `<section class="blog-section"><div class="blog-section-heading"><div><h2>My Writing</h2><p>Articles published on SafiullahKorai.com.</p></div></div>${internal.map(card).join('')}</section>`;
    }
    if (external.length) {
      html += `<section class="blog-section"><div class="blog-section-heading"><div><h2>Elsewhere</h2><p>Things I've written and published across the web.</p></div></div><div class="blog-grid">${external.map(card).join('')}</div></section>`;
    }
    container.innerHTML = html || '<div class="blog-empty">No articles matched your search. Try another keyword or tag.</div>';
    container.querySelectorAll('.reveal').forEach((element) => {
      if (window.observer) window.observer.observe(element);
      requestAnimationFrame(() => element.classList.add('visible'));
    });
  }

  const search = document.querySelector('[data-blog-search]');
  if (search) search.addEventListener('input', (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    render();
  });

  function init() { renderFilters(); render(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
