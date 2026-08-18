(() => {
  const A = 'assets/achievements/';

  const awards = [
    {
      title: 'Academic & Extracurricular Honors',
      meta: 'Academic & Extracurricular',
      text: 'A collection of academic and extracurricular honors received across different stages of my journey.',
      images: [
        `${A}awards/Academic & Extracurricular Honors 01.jpg`,
        `${A}awards/Academic & Extracurricular Honors 02.jpg`,
        `${A}awards/Academic & Extracurricular Honors 03.jpg`
      ]
    },
    {
      title: 'Best Performance Award of the Year',
      meta: 'School Recognition',
      images: [`${A}awards/Best Performance Award of The Year in School.jpg`]
    },
    {
      title: "OpenHack'25 Event Organizer Award",
      meta: "OpenHack'25",
      images: [`${A}awards/OpenHack25 Event Organizor Award.jpeg`]
    },
    {
      title: 'Poster Competition Winner',
      meta: 'Competition Award',
      images: [`${A}awards/Poster Competition Winner Award.jpeg`]
    },
    {
      title: 'ETL Ambassador — Sponsorship Honor',
      meta: 'ETL Online',
      images: [`${A}awards/Sponsor Honor Award as an ETL Ambassador for Bringing the Sponsorship from Community ETL Online.jpeg`]
    },
    {
      title: 'ETL Online Sponsorship Honor Shield',
      meta: 'ETL Online',
      images: [`${A}awards/Sponsor Honor Shield on Behalf of ETL Online as Being ETL Ambassador for Bringing the Sponsorship from My Community.jpeg`]
    },
    {
      title: 'Zindigi Prize — First Runner-Up',
      meta: 'MUET SZAB · Zindigi Prize',
      images: ['assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg']
    }
  ];

  const badges = [
    ['Postman API Fundamentals Student Expert', `${A}badges/Postman_API_Fundamentals_Student_Expert.png`, 'https://badges.parchment.com/public/assertions/TyCya8kbRvSjs-ZZzw9p2A'],
    ['Microsoft Learn Student Ambassadors — Cloud Skills Challenge Event Host', `${A}badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png`, 'https://www.credly.com/badges/b84b5b92-c11c-4960-b6b5-8c9110d62b14/public_url'],
    ['Azure Responsible AI Workshop — Coach', `${A}badges/azure-responsible-ai-workshop-coach.png`, 'https://www.credly.com/badges/9702d39b-f963-453a-a849-f90f8d2f15ae'],
    ['Azure Database for MySQL — Emerald Contributor', `${A}badges/azure-database-for-mysql-emerald-contributor.png`, 'https://www.credly.com/badges/195233f0-8dc0-487c-b2c1-646c197163f5/public_url'],
    ['Azure Database for MySQL — Gold Contributor', `${A}badges/azure-database-for-mysql-gold-contributor.png`, 'https://www.credly.com/badges/5432d7fd-ac57-4249-991e-b636754bb62c/public_url'],
    ['Prompt Design in Vertex AI Skill Badge', `${A}badges/prompt-design-in-vertex-ai-skill-badge.png`, 'https://www.credly.com/badges/cd1db20d-3031-4ad7-a481-77a917398acd/public_url'],
    ['Aspire Leaders — Module 1', `${A}badges/safiullah_korai_module_1_badge___2024_09_13_18_28_22.png`],
    ['Aspire Leaders — Module 2', `${A}badges/safiullah_korai_module_2_badge___2024_10_11_16_26_19.png`],
    ['Aspire Leaders — Module 3', `${A}badges/safiullah_korai_module_3_badge___2024_11_19_18_24_34.png`]
  ].map(([title, image, verify]) => ({ title, images: [image], verify }));

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));

  const mount = document.querySelector('[data-all-awards]') || document.querySelector('[data-all-badges]');
  if (!mount) return;

  const data = document.querySelector('[data-all-awards]') ? awards : badges;

  mount.innerHTML = data.map((item, index) => {
    const multiple = item.images.length > 1;
    const controls = multiple ? `
      <button class="award-carousel-prev" type="button" aria-label="Previous image">‹</button>
      <button class="award-carousel-next" type="button" aria-label="Next image">›</button>
      <span class="award-carousel-count" aria-live="polite">1 / ${item.images.length}</span>
    ` : '';

    return `
      <article class="card all-card" data-award-index="${index}">
        <div class="all-media${multiple ? ' has-carousel' : ''}">
          <img src="${esc(encodeURI(item.images[0]))}" alt="${esc(item.title)}" data-image-index="0">
          ${controls}
        </div>
        <div class="all-body">
          <span class="all-meta">${esc(item.meta || 'Digital Recognition')}</span>
          <h2>${esc(item.title)}</h2>
          ${item.text ? `<p>${esc(item.text)}</p>` : ''}
          ${item.verify ? `<a class="all-verify" href="${esc(item.verify)}" target="_blank" rel="noopener">Verify ↗</a>` : ''}
        </div>
      </article>
    `;
  }).join('');

  const lightbox = document.createElement('div');
  lightbox.className = 'all-lightbox';
  lightbox.innerHTML = `
    <button class="all-close" type="button" aria-label="Close image viewer">×</button>
    <button class="all-prev" type="button" aria-label="Previous image">‹</button>
    <img alt="">
    <button class="all-next" type="button" aria-label="Next image">›</button>
    <div class="all-caption"></div>
    <div class="all-lightbox-count" aria-live="polite"></div>
  `;
  document.body.appendChild(lightbox);

  let activeAward = 0;
  let activeImage = 0;

  const getImages = () => data[activeAward]?.images || [];

  const renderCard = awardIndex => {
    const card = mount.querySelector(`[data-award-index="${awardIndex}"]`);
    if (!card) return;

    const item = data[awardIndex];
    const image = card.querySelector('img');
    image.src = encodeURI(item.images[activeImage]);
    image.dataset.imageIndex = String(activeImage);

    const count = card.querySelector('.award-carousel-count');
    if (count) count.textContent = `${activeImage + 1} / ${item.images.length}`;
  };

  const renderLightbox = () => {
    const images = getImages();
    const item = data[activeAward];
    const image = lightbox.querySelector('img');

    image.src = encodeURI(images[activeImage]);
    image.alt = item?.title || '';
    lightbox.querySelector('.all-caption').textContent = item?.title || '';
    lightbox.querySelector('.all-lightbox-count').textContent = images.length > 1
      ? `${activeImage + 1} / ${images.length}`
      : '';

    const multi = images.length > 1;
    lightbox.querySelector('.all-prev').hidden = !multi;
    lightbox.querySelector('.all-next').hidden = !multi;
  };

  const move = direction => {
    const images = getImages();
    if (images.length < 2) return;
    activeImage = (activeImage + direction + images.length) % images.length;
    renderCard(activeAward);
    renderLightbox();
  };

  mount.querySelectorAll('.all-card').forEach((card, awardIndex) => {
    const item = data[awardIndex];
    const image = card.querySelector('img');
    const prev = card.querySelector('.award-carousel-prev');
    const next = card.querySelector('.award-carousel-next');

    const open = () => {
      activeAward = awardIndex;
      activeImage = Number(image.dataset.imageIndex || 0);
      renderLightbox();
      lightbox.classList.add('open');
      document.body.classList.add('lightbox-open');
    };

    image.addEventListener('click', open);

    if (item.images.length > 1) {
      prev.addEventListener('click', event => {
        event.stopPropagation();
        activeAward = awardIndex;
        activeImage = (Number(image.dataset.imageIndex || 0) - 1 + item.images.length) % item.images.length;
        renderCard(awardIndex);
      });

      next.addEventListener('click', event => {
        event.stopPropagation();
        activeAward = awardIndex;
        activeImage = (Number(image.dataset.imageIndex || 0) + 1) % item.images.length;
        renderCard(awardIndex);
      });
    }
  });

  lightbox.querySelector('.all-close').addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-open');
  });
  lightbox.querySelector('.all-prev').addEventListener('click', () => move(-1));
  lightbox.querySelector('.all-next').addEventListener('click', () => move(1));

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      lightbox.classList.remove('open');
      document.body.classList.remove('lightbox-open');
    }
  });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') lightbox.querySelector('.all-close').click();
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });
})();
