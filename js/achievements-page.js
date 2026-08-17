(() => {
  const programs = [
    { label: 'Leadership Program', title: 'Aspire Leaders Program', text: 'Completed the 2024 Aspire Leaders Program, including its three stages focused on personal and professional development, educator-led masterclasses, and Aspire Horizons.', meta: 'Aspire Institute · 2024', image: 'assets/achievements/certificates/safiullah_korai_alp_2024_certificate_of_completion.pdf', linkText: 'View completion certificate ↗' },
    { label: 'Fellowship', title: 'Savvy Fellowship', text: 'Selected for the Savvy global fellowship program for entrepreneurs.', meta: 'Savvy · Fellowship' },
    { label: 'AI Program', title: 'ACT AI — Cycle 1', text: 'Completed the eight-week ACT AI National AI Training Programme covering AI foundations, generative AI, agentic AI, AI tools and productivity, and freelancing with AI.', meta: 'AI SkillBridge / ACT AI · 2026' },
    { label: 'AI Learning', title: '1 Million Prompters', text: 'Completed the One Million Prompters initiative focused on developing prompt-engineering skills for AI systems under the Dubai Universal Blueprint for Artificial Intelligence.', meta: 'Dubai Future Foundation · UAE' },
    { label: 'Learning Initiative', title: 'Winter Microsoft Learning', text: 'A 15-day learning initiative delivered with Empowerment Through Learning and Microsoft Learn Student Ambassadors.', meta: 'ETL × MLSA' }
  ];

  const certifications = [
    { label: 'Membership', title: 'Pakistan Freelancers Association', text: 'Membership credential with PAFLA, connecting professional development with Pakistan’s freelancing ecosystem.', meta: 'PAFLA · Member', image: 'assets/Safiullah-Korai.png' },
    { label: 'Participation', title: 'MUET Model United Nations 2024', text: 'Participated as a delegate representing Kyrgyzstan in OIC at MUET Model United Nations 2024.', meta: 'MUET MUN · March 2024', image: 'assets/Safiullah-Korai-Pic-3.jpg' },
    { label: 'Recognition', title: 'Microsoft Learn Student Ambassador', text: 'Recognition for hard work and dedication as a member of the Microsoft Learn Student Ambassadors community.', meta: 'Microsoft · 2023', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { label: 'Recognition', title: 'Microsoft Student Ambassador', text: 'Recognition for continued contribution as a member of the Microsoft Student Ambassadors community.', meta: 'Microsoft · 2026', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { label: 'Participation', title: 'Good Pakistani Quiz', text: 'Certificate received for participation in the Good Pakistani Quiz activity.', meta: 'Certificate' },
    { label: 'Recognition', title: 'Zindigi Prize — First Runner-Up', text: 'Recognition connected with the Zindigi Prize journey at MUET SZAB, including pitching and the team’s first runner-up award.', meta: 'MUET SZAB · Zindigi Prize', image: 'assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg' }
  ];

  const badges = [
    { title: 'Azure Database for MySQL — Emerald Contributor', image: 'assets/achievements/badges/azure-database-for-mysql-emerald-contributor.png' },
    { title: 'Azure Database for MySQL — Gold Contributor', image: 'assets/achievements/badges/azure-database-for-mysql-gold-contributor.png' },
    { title: 'Azure Responsible AI Workshop Coach', image: 'assets/achievements/badges/azure-responsible-ai-workshop-coach.png' },
    { title: 'Microsoft Learn Student Ambassadors — Cloud Skills Challenge', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { title: 'Prompt Design in Vertex AI', image: 'assets/achievements/badges/prompt-design-in-vertex-ai-skill-badge.png' },
    { title: 'Aspire Leaders — Module 1', image: 'assets/achievements/badges/safiullah_korai_module_1_badge___2024_09_13_18_28_22.png' },
    { title: 'Aspire Leaders — Module 2', image: 'assets/achievements/badges/safiullah_korai_module_2_badge___2024_10_11_16_26_19.png' },
    { title: 'Aspire Leaders — Module 3', image: 'assets/achievements/badges/safiullah_korai_module_3_badge___2024_11_19_18_24_34.png' }
  ];

  const community = [
    { label: 'Led by me', title: 'Tafreeh-e-Data with Power BI', text: 'A two-day hands-on Power BI workshop delivered through the Data Seekho × Microsoft Learn Student Ambassadors collaboration. I organized/led this as part of my MLSA and Data Seekho Ambassador work.', meta: 'Data Seekho × MLSA · 09–10 Nov', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { label: 'Led by me', title: '15-Day Winter Microsoft Learning', text: 'A 15-day learning initiative delivered through Empowerment Through Learning × Microsoft Learn Student Ambassadors. This was one of the community initiatives I worked on through my MLSA and ETL Online roles.', meta: 'ETL × MLSA · 15 days', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { label: 'Led by me', title: 'Open Source Contribution Workshop', text: 'A two-day hands-on workshop presented through the GirlScript Summer of Code × Microsoft Learn Student Ambassadors collaboration. I contributed as an MLSA and GSSoC Mentor/Ambassador.', meta: 'GSSoC × MLSA · 2024', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { label: 'Community Role', title: 'Microsoft Learn Student Ambassador', text: 'Served as an MLSA, using the role not only as a credential but as a platform to organize learning initiatives, workshops and collaborations with other communities.', meta: 'Microsoft · Student Ambassador', image: 'assets/achievements/badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png' },
    { label: 'Community Role', title: 'Data Seekho Ambassador', text: 'Community ambassador work around data learning and educational initiatives, including collaboration with MLSA on the Power BI workshop.', meta: 'Data Seekho' },
    { label: 'Community Role', title: 'GSSoC Mentor & Ambassador', text: 'Community contribution through GirlScript Summer of Code, including mentorship, ambassador activity and the open-source workshop collaboration.', meta: 'GSSoC · 2024' },
    { label: 'Membership', title: 'PAFLA', text: 'Member of the Pakistan Freelancers Association.', meta: 'Professional Membership' },
    { label: 'Membership', title: 'IAENG', text: 'Member of the International Association of Engineers.', meta: 'Professional Membership' },
    { label: 'Community Role', title: 'ETL Online', text: 'Community involvement with Empowerment Through Learning, including online learning initiatives carried out through the MLSA × ETL collaboration.', meta: 'Empowerment Through Learning' },
    { label: 'Community Story', title: "OpenHack'25", text: 'A student-led multi-day hackathon and technology conference at MUET SZAB Campus Khairpur. I worked heavily on partnerships, sponsorship communication, branding direction and strategic outreach, and helped connect ETL with the event as an official sponsor and support partner.', meta: 'MUET SZAB Campus · October 2025', image: 'assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg', url: 'https://hackernoon.com/we-built-a-tech-conference-where-no-one-expected-it-openhack25-and-a-campus-in-interior-sindh', linkText: 'Read the full HackerNoon story ↗' }
  ];

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));

  const card = (item, kind) => `
    <article class="card achievement-detail-card reveal">
      ${item.image ? `<div class="achievement-card-media"><img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy"></div>` : ''}
      <div class="achievement-detail-top"><span class="mini-label">${esc(item.label || kind)}</span>${item.meta ? `<span class="achievement-detail-meta">${esc(item.meta)}</span>` : ''}</div>
      <h3>${esc(item.title)}</h3>
      ${item.text ? `<p>${esc(item.text)}</p>` : ''}
      ${item.linkText && item.url ? `<a class="text-link" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.linkText)}</a>` : ''}
    </article>`;

  const badgeCard = (item) => `<article class="card badge-card reveal"><div class="badge-image"><img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy"></div><h3>${esc(item.title)}</h3><a class="text-link" href="https://www.credly.com/users/safiullah-korai" target="_blank" rel="noopener">Verify on Credly ↗</a></article>`;

  const section = (kicker, title, intro, content) => `<section class="section achievement-section"><div class="container"><div class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${esc(title)}</h2></div></div>${intro ? `<p class="section-intro achievement-section-intro">${esc(intro)}</p>` : ''}${content}</div></section>`;

  function render() {
    const mount = document.querySelector('[data-achievement-sections]');
    if (!mount) return;
    mount.innerHTML = [
      section('Programs', 'Programs', 'Fellowships, leadership programs and selective learning initiatives that became meaningful parts of the journey.', `<div class="grid-3">${programs.map((item) => card(item, 'Program')).join('')}</div>`),
      section('Certifications', 'Certifications & recognition', 'Certificates and formal recognition, kept inside the same Achievements page rather than separated into another page.', `<div class="grid-3">${certifications.map((item) => card(item, 'Certification')).join('')}</div>`),
      section('Badges', 'Digital badges', 'A visual collection of credentials with verification kept on Credly.', `<div class="badge-grid">${badges.map(badgeCard).join('')}</div><div class="achievement-profile-links"><a class="btn btn-secondary" href="https://www.credly.com/users/safiullah-korai" target="_blank" rel="noopener">View all badges on Credly ↗</a></div>`),
      section('Community', 'Community & leadership', 'This is where the work behind the roles belongs. These initiatives were not simply events I attended. They were things I organized, led or contributed to through MLSA, ETL Online, Data Seekho and GSSoC.', `<div class="grid-3">${community.map((item) => card(item, 'Community')).join('')}</div><div class="achievement-profile-links"><a class="btn btn-secondary" href="https://www.linkedin.com/in/safiullah-korai" target="_blank" rel="noopener">More community experience on LinkedIn ↗</a><a class="btn btn-secondary" href="https://www.instagram.com/safiullah.korai" target="_blank" rel="noopener">Event updates on Instagram ↗</a></div>`)
    ].join('');
    mount.querySelectorAll('.reveal').forEach((element) => { if (window.observer) window.observer.observe(element); requestAnimationFrame(() => element.classList.add('visible')); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true }); else render();
})();
