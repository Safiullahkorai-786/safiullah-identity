(() => {
  const posts = [
    {
      platform: 'Medium',
      title: 'Who Is Safiullah Korai? Flutter Developer Today, AI Engineer Tomorrow.',
      excerpt: 'A personal introduction to my work, direction and journey toward AI Engineering.',
      url: 'https://medium.com/@safiullahkorai/who-is-safiullah-korai-flutter-developer-today-ai-engineer-tomorrow-8c49ba9847e6'
    },
    {
      platform: 'Medium',
      title: 'The Experience Trap Is Breaking the Next Generation of Talent',
      excerpt: 'Thoughts on experience, opportunity and how the next generation of talent gets overlooked.',
      url: 'https://medium.com/@safiullahkorai/the-experience-trap-is-breaking-the-next-generation-of-talent-b6a64dff79ba'
    },
    {
      platform: 'Medium',
      title: 'Bento Me: The Website Without Coding',
      excerpt: 'A look at building a personal web presence without starting from a traditional coding workflow.',
      url: 'https://medium.com/@safiullahkorai/bento-me-the-website-without-coding-37ef4ed15626'
    },
    {
      platform: 'HackerNoon',
      title: 'How Stitch Helps Flutter Developers Design Faster',
      excerpt: 'Exploring how Google Stitch can speed up interface ideation for Flutter developers.',
      url: 'https://hackernoon.com/how-stitch-helps-flutter-developers-design-faster'
    },
    {
      platform: 'HackerNoon',
      title: 'Google Stitch Is Changing UI/UX Design in 2026',
      excerpt: 'A look at how AI-assisted design workflows are changing the way developers think about interfaces.',
      url: 'https://hackernoon.com/google-stitch-is-changing-uiux-design-in-2026'
    },
    {
      platform: 'HackerNoon',
      title: 'How Writing Helps Developers Think Clearly',
      excerpt: 'Why turning technical ideas into words can sharpen engineering thinking.',
      url: 'https://hackernoon.com/how-writing-helps-developers-think-clearly'
    },
    {
      platform: 'HackerNoon',
      title: 'A Practical Guide to Technical Writing for Developers Who Want to Start Sharing What They Know',
      excerpt: 'A practical starting point for developers who want to turn what they learn into useful writing.',
      url: 'https://hackernoon.com/a-practical-guide-to-technical-writing-for-developers-who-want-to-start-sharing-what-they-know'
    },
    {
      platform: 'HackerNoon',
      title: 'How to Choose the Right Writing Platform as a Developer When There Are So Many Options',
      excerpt: 'Comparing the trade-offs developers face when choosing where to publish technical work.',
      url: 'https://hackernoon.com/how-to-choose-the-right-writing-platform-as-a-developer-when-there-are-so-many-options'
    },
    {
      platform: 'HackerNoon',
      title: 'How Building a Personal Brand Early Opens Doors for Student Developers',
      excerpt: 'Why building a visible body of work early can create opportunities before graduation.',
      url: 'https://hackernoon.com/how-building-a-personal-brand-early-opens-doors-for-student-developers'
    },
    {
      platform: 'HackerNoon',
      title: 'How Learning in Public Speeds Up Developer Growth',
      excerpt: 'How sharing the learning process can create feedback loops, accountability and opportunities.',
      url: 'https://hackernoon.com/how-learning-in-public-speeds-up-developer-growth'
    },
    {
      platform: 'HackerNoon',
      title: 'Why Developers Can No Longer Afford to Be Invisible Online',
      excerpt: 'A case for making your work discoverable in an increasingly public technical ecosystem.',
      url: 'https://hackernoon.com/why-developers-can-no-longer-afford-to-be-invisible-online'
    },
    {
      platform: 'HackerNoon',
      title: 'Google I/O 2026 Foreshadowed a World Without Traditional Apps',
      excerpt: 'Thoughts on the shift toward AI-native experiences and what it could mean for developers.',
      url: 'https://hackernoon.com/google-io-2026-foreshadowed-a-world-without-traditional-apps'
    },
    {
      platform: 'HackerNoon',
      title: "We Built a Tech Conference Where No One Expected It — OpenHack'25 and a Campus in Interior Sindh",
      excerpt: "Featured story: organizing OpenHack'25 and helping bring a major developer event to MUET SZAB Campus in interior Sindh.",
      url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh',
      featured: true
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
    const orderedPosts = [...posts].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

    document.querySelectorAll('[data-posts]').forEach((container) => {
      container.innerHTML = orderedPosts.map((post) => `
        <a class="card article-card reveal${post.featured ? ' article-featured' : ''}" href="${escapeHtml(post.url)}" target="_blank" rel="noopener">
          <div>
            <span class="kicker article-platform">${escapeHtml(post.platform)}${post.featured ? ' · Featured' : ''}</span>
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
