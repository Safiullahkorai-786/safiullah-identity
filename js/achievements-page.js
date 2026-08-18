(() => {
  const A = 'assets/achievements/';
  const G = 'assets/gallery/community/';

  const awards = [
    {
      label: 'Award',
      title: 'Zindigi Prize — First Runner-Up',
      text: 'Recognized as First Runner-Up at the Zindigi Prize event at MUET SZAB Campus.',
      meta: 'MUET SZAB · Zindigi Prize',
      image: 'assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg'
    }
  ];

  const programs = [
    { label: 'Leadership Program', title: 'Aspire Leaders Program', text: 'Completed the 2024 Aspire Leaders Program across its three stages, with personal and professional development, educator-led masterclasses and Aspire Horizons.', meta: 'Aspire Institute · 2024', image: `${A}programs/safiullah_korai_alp_2024_certificate_of_completion.png` },
    { label: 'AI Program', title: 'ACT AI — Cycle 1', text: 'Completed the eight-week ACT AI National AI Training Programme covering AI foundations, generative AI, agentic AI, AI tools and productivity, and freelancing with AI.', meta: 'ACT AI · 2026', image: `${A}programs/ACT AI Certificate.png` },
    { label: 'Fellowship', title: 'Savvy Fellowship', text: 'Selected for the Savvy global fellowship program for entrepreneurs.', meta: 'Savvy · Fellowship' },
    { label: 'AI Learning', title: '1 Million Prompters', text: 'Completed the One Million Prompters initiative focused on practical prompt-engineering skills under the UAE AI initiative.', meta: 'Dubai Future Foundation · UAE' }
  ];

  const certifications = [
    { label: 'Membership', title: 'Pakistan Freelancers Association', text: 'Professional membership with PAFLA, connecting my work with Pakistan’s freelancing ecosystem.', meta: 'PAFLA · Member · 2026', image: `${A}community/Safiullah_Korai_PAFLA_Certificate_of_Membership_2026.png` },
    { label: 'Community Recognition', title: 'Microsoft Learn Student Ambassador', text: 'Recognition from my MLSA journey. The different certificates are grouped together instead of creating repetitive cards.', meta: 'Microsoft · MLSA', images: [`${A}community/Safiullah-Korai-Alpha-Microsoft-Student-Ambassador-Certificate.png`, `${A}community/Safiullah-Korai-Beta-Microsoft-Student-Ambassador-Certificate.png`, `${A}community/Safiullah-Korai-New-Microsoft-Student-Ambassador-Certificate.jpg`, `${A}community/Safiullah-Korai-Onboarding-Certificate-for-MLSA-YE.jpg`] }
  ];

  const badges = [
    { title: 'Azure Database for MySQL — Emerald Contributor', image: `${A}badges/azure-database-for-mysql-emerald-contributor.png` },
    { title: 'Azure Database for MySQL — Gold Contributor', image: `${A}badges/azure-database-for-mysql-gold-contributor.png` },
    { title: 'Azure Responsible AI Workshop Coach', image: `${A}badges/azure-responsible-ai-workshop-coach.png` },
    { title: 'Microsoft Learn Student Ambassadors — Cloud Skills Challenge', image: `${A}badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png` },
    { title: 'Prompt Design in Vertex AI', image: `${A}badges/prompt-design-in-vertex-ai-skill-badge.png` },
    { title: 'Aspire Leaders — Module 1', image: `${A}badges/safiullah_korai_module_1_badge___2024_09_13_18_28_22.png` },
    { title: 'Aspire Leaders — Module 2', image: `${A}badges/safiullah_korai_module_2_badge___2024_10_11_16_26_19.png` },
    { title: 'Aspire Leaders — Module 3', image: `${A}badges/safiullah_korai_module_3_badge___2024_11_19_18_24_34.png` }
  ];

  const community = [
    { label: 'Led by me', title: 'Tafreeh-e-Data with Power BI', text: 'A two-day hands-on Power BI workshop I organized and led through my MLSA and Data Seekho Ambassador roles, with Fawad Khan as speaker and support from communities across Pakistan.', meta: 'Data Seekho × MLSA · 09–10 Nov', images: [`${G}Tafreeeh-e-Data With Power BI Speakers Safiullah Korai and Fawad Khan brought by Data Seekho X Microsoft Learn Student Ambassador_01.png`, `${G}Main Poster Tafreeeh-e-Data With Power BI Two Days Hands on workshop Presented by Data Seekho X Microsoft Learn Student Ambassador_02.jpg`, `${G}Tafreeh-e-Data With Power BI Supported by 7 Communities across Pakistan 03.jpg`] },
    { label: 'Led by me', title: 'Winter Microsoft Learning', text: 'A 15-day Microsoft learning initiative organized by me through my MLSA role, delivered with ETL Online and supported by communities across Pakistan.', meta: 'MLSA × ETL Online · 15 days', images: [`${G}Main Poster Winter Microsoft Learning Organized by MLSA Safiullah Korai_01.jpg`, `${G}Poster Winter Microsoft Learning Organized by MLSA Safiullah Korai and Supported by 8 Communities Across Pakistan_02.jpg`, `${G}Winter Microsoft Learning Organized by MLSA Safiullah Korai and Sponsored by MLSA and ETl online_03.jpg`] },
    { label: 'Led by me', title: 'Open Source Contribution Workshop', text: 'A hands-on open-source contribution workshop where I contributed as an MLSA and GSSoC Mentor/Ambassador, including the speaker session and event organization.', meta: 'GSSoC × MLSA · 2024', images: [`${G}OpenSourceContribution Main Poster.jpg`, `${G}Open Source Contribution Speaker Safiullah Korai.jpg`, `${G}Speaker Safiullah Korai for Open Source Ka Safar Organized by MLSA YE.jpg`] },
    { label: 'Community Role', title: 'Microsoft Learn Student Ambassador', text: 'My MLSA role became a platform for organizing workshops, learning initiatives and cross-community collaborations rather than being only a credential.', meta: 'Microsoft · Student Ambassador', images: [`${A}community/Safiullah-Korai-New-Microsoft-Student-Ambassador-Certificate.jpg`, `${A}community/Safiullah-Korai-Alpha-Microsoft-Student-Ambassador-Certificate.png`, `${A}community/Safiullah-Korai-Beta-Microsoft-Student-Ambassador-Certificate.png`, `${A}community/Safiullah-Korai-Onboarding-Certificate-for-MLSA-YE.jpg`] },
    { label: 'Community Role', title: 'Data Seekho Ambassador', text: 'Ambassador work around data learning and educational initiatives, including the Power BI collaboration with MLSA.', meta: 'Data Seekho' },
    { label: 'Community Role', title: 'GSSoC Mentor & Ambassador', text: 'Mentorship and ambassador work through GirlScript Summer of Code, including the open-source workshop collaboration.', meta: 'GSSoC · 2024' },
    { label: 'Community Role', title: 'ETL Online', text: 'Community involvement with Empowerment Through Learning, including the Winter Microsoft Learning initiative carried out through the MLSA × ETL collaboration.', meta: 'Empowerment Through Learning' },
    { label: 'Membership', title: 'IAENG', text: 'Member of the International Association of Engineers.', meta: 'Professional Membership' },
    { label: 'Community Story', title: "OpenHack'25", text: 'A student-led technology conference and hackathon at MUET SZAB Campus Khairpur. My work included partnerships, sponsorship communication, branding direction and strategic outreach. I also helped connect ETL with the event as an official sponsor and support partner.', meta: 'MUET SZAB Campus · October 2025', url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh', linkText: 'Read the full HackerNoon story ↗' }
  ];

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));
  const asset = (value) => encodeURI(value);
  let carouselCounter = 0;
  const carousel = (images, title) => {
    if (!images?.length) return '';
    const id = `achievement-carousel-${carouselCounter++}`;
    return `<div class="achievement-carousel" data-carousel="${id}" aria-label="${esc(title)} photo carousel"><div class="achievement-carousel-track">${images.map((image, index) => `<img class="achievement-slide ${index === 0 ? 'is-active' : ''}" src="${esc(asset(image))}" alt="${esc(title)} — photo ${index + 1}" loading="lazy">`).join('')}</div>${images.length > 1 ? `<button class="carousel-control carousel-prev" type="button" data-carousel-prev="${id}" aria-label="Previous photo">‹</button><button class="carousel-control carousel-next" type="button" data-carousel-next="${id}" aria-label="Next photo">›</button><div class="carousel-dots">${images.map((_, index) => `<button class="carousel-dot ${index === 0 ? 'is-active' : ''}" type="button" data-carousel-dot="${id}" data-slide="${index}" aria-label="Show photo ${index + 1}"></button>`).join('')}</div>` : ''}</div>`;
  };
  const card = (item, kind) => `<article class="card achievement-detail-card reveal">${item.images ? carousel(item.images, item.title) : item.image ? `<div class="achievement-card-media"><img src="${esc(asset(item.image))}" alt="${esc(item.title)}" loading="lazy"></div>` : ''}<div class="achievement-detail-top"><span class="mini-label">${esc(item.label || kind)}</span>${item.meta ? `<span class="achievement-detail-meta">${esc(item.meta)}</span>` : ''}</div><h3>${esc(item.title)}</h3>${item.text ? `<p>${esc(item.text)}</p>` : ''}${item.linkText && item.url ? `<a class="text-link" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.linkText)}</a>` : ''}</article>`;
  const badgeCard = (item) => `<article class="card badge-card reveal"><div class="badge-image"><img src="${esc(asset(item.image))}" alt="${esc(item.title)}" loading="lazy"></div><h3>${esc(item.title)}</h3><a class="text-link" href="https://www.credly.com/users/safiullah-korai" target="_blank" rel="noopener">Verify on Credly ↗</a></article>`;
  const section = (kicker, title, intro, content) => `<section class="section achievement-section"><div class="container"><div class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${esc(title)}</h2></div></div>${intro ? `<p class="section-intro achievement-section-intro">${esc(intro)}</p>` : ''}${content}</div></section>`;
  function setupCarousels() { document.querySelectorAll('.achievement-carousel').forEach((carouselEl) => { const slides = [...carouselEl.querySelectorAll('.achievement-slide')]; const dots = [...carouselEl.querySelectorAll('.carousel-dot')]; let current = 0; const show = (next) => { current = (next + slides.length) % slides.length; slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current)); dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current)); }; carouselEl.querySelector('[data-carousel-prev]')?.addEventListener('click', () => show(current - 1)); carouselEl.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(current + 1)); dots.forEach((dot) => dot.addEventListener('click', () => show(Number(dot.dataset.slide)))); }); }
  function render() { const mount = document.querySelector('[data-achievement-sections]'); if (!mount) return; mount.innerHTML = [
    section('Awards', 'Awards & wins', 'A dedicated place for awards, prizes and competitive achievements.', `<div class="grid-3">${awards.map((item) => card(item, 'Award')).join('')}</div>`),
    section('Programs', 'Programs', 'Fellowships, leadership programs and selective learning initiatives that became meaningful parts of the journey.', `<div class="grid-3">${programs.map((item) => card(item, 'Program')).join('')}</div>`),
    section('Certifications', 'Certifications & recognition', 'Formal credentials and recognition, grouped here instead of being pushed onto a separate certificates page.', `<div class="grid-3">${certifications.map((item) => card(item, 'Certification')).join('')}</div>`),
    section('Badges', 'Digital badges', 'The actual badge artwork stored in the repository, with verification available through Credly.', `<div class="badge-grid">${badges.map(badgeCard).join('')}</div><div class="achievement-profile-links"><a class="btn btn-secondary" href="https://www.credly.com/users/safiullah-korai" target="_blank" rel="noopener">View all badges on Credly ↗</a></div>`),
    section('Community', 'Community & leadership', 'The work behind the roles. These initiatives were not simply events I attended. They are things I organized, led, spoke at or contributed to through MLSA, ETL Online, Data Seekho and GSSoC.', `<div class="grid-3">${community.map((item) => card(item, 'Community')).join('')}</div><div class="achievement-profile-links"><a class="btn btn-secondary" href="https://www.linkedin.com/in/safiullah-korai" target="_blank" rel="noopener">More community experience on LinkedIn ↗</a><a class="btn btn-secondary" href="https://www.instagram.com/safiullah.korai" target="_blank" rel="noopener">Event updates on Instagram ↗</a></div>`)
  ].join(''); setupCarousels(); mount.querySelectorAll('.reveal').forEach((element) => { if (window.observer) window.observer.observe(element); requestAnimationFrame(() => element.classList.add('visible')); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true }); else render();
})();
