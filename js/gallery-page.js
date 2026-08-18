(() => {
  const galleryGroups = [
    {
      category: 'Events & Community',
      items: [
        {
          title: "OpenHack'25",
          description: 'A student-led technology conference and hackathon at MUET SZAB Campus Khairpur.',
          images: ['assets/achievements/community/OpenHack25_event_Main_Poster.jpg']
        },
        {
          title: 'Tafreeh-e-Data with Power BI',
          description: 'A two-day hands-on Power BI workshop organized and led through the Data Seekho × Microsoft Learn Student Ambassador collaboration.',
          images: [
            'assets/gallery/community/Tafreeeh-e-Data With Power BI Speakers Safiullah Korai and Fawad Khan brought by Data Seekho X Microsoft Learn Student Ambassador_01.png',
            'assets/gallery/community/Main Poster Tafreeeh-e-Data With Power BI Two Days Hands on workshop Presented by Data Seekho X Microsoft Learn Student Ambassador_02.jpg',
            'assets/gallery/community/Tafreeh-e-Data With Power BI Supported by 7 Communities across Pakistan 03.jpg'
          ]
        },
        {
          title: 'Winter Microsoft Learning',
          description: 'A 15-day Microsoft learning initiative organized through MLSA and delivered with ETL Online and community partners.',
          images: [
            'assets/gallery/community/Main Poster Winter Microsoft Learning Organized by MLSA Safiullah Korai_01.jpg',
            'assets/gallery/community/Poster Winter Microsoft Learning Organized by MLSA Safiullah Korai and Supported by 8 Communities Across Pakistan_02.jpg',
            'assets/gallery/community/Winter Microsoft Learning Organized by MLSA Safiullah Korai and Sponsored by MLSA and ETl online_03.jpg'
          ]
        },
        {
          title: 'Open Source Contribution Workshop',
          description: 'Open-source learning and contribution sessions connected with MLSA and GSSoC.',
          images: [
            'assets/gallery/community/OpenSourceContribution Main Poster.jpg',
            'assets/gallery/community/Open Source Contribution Speaker Safiullah Korai.jpg',
            'assets/gallery/community/Speaker Safiullah Korai for Open Source Ka Safar Organized by MLSA YE.jpg'
          ]
        },
        {
          title: 'WTM Event',
          description: 'Event moments from the Women Techmakers community.',
          images: [
            'assets/gallery/events/Safiullah_Korai_at_WTM_Pic_One.webp',
            'assets/gallery/events/Safiullah_Korai_at_WTM_Pic_Two.webp'
          ]
        }
      ]
    },
    {
      category: 'Speaking & Presentations',
      items: [
        {
          title: 'EXAI Final Year Project Presentation',
          description: 'Final-year project presentation and pitch to judges, including team presentation moments.',
          images: [
            'assets/gallery/presentations/Safiullah_Korai_standing_confident_and_explaining_the_EXAI_pitch_to_the_Judges_1.webp',
            'assets/gallery/presentations/Samad_Kandhro_teammate_of_Safiullah_Korai_presenting_EXAI_2.webp',
            'assets/gallery/presentations/Safiullah_Korai_standing_confident_and_presenting_the_EXAI_pitch_to_the_Judges_during_finalyear_presentation_3.webp',
            'assets/gallery/presentations/HasnainKK_teammate_of_Safiullah_Korai_presenting_EXAI_4.webp'
          ]
        }
      ]
    },
    {
      category: 'Competitions & Hackathons',
      items: [
        {
          title: 'Zindigi Prize',
          description: 'Competition journey from campus pitching and regional participation to the first runner-up result at MUET Khairpur.',
          images: [
            'assets/gallery/competitions/Safiullah_Korai_Presenting_an_idea_on_stage_at_Zindigi_Prize_at_MUET_Khairpur_during_Campus_Round_1.webp',
            'assets/gallery/competitions/Safiullah_Korai_ID_Badge_Pass_of_Zindigi_Prize_Regional_Round_one.jpg',
            'assets/gallery/competitions/Safiullah_Korai_With_His_Team_Mates_Sitting_at_Auditorium_of_MUET_Zindigi_Prize_Regional_Round_Pic_Two.webp',
            'assets/gallery/competitions/Safiullah_Korai_With_His_Team_Mates_Sitting_at_Auditorium_of_MUET_Zindigi_Prize_Regional_Round_Pic_Threee.webp',
            'assets/gallery/competitions/Safiullah_Korai_Along_With_Teammates_Recieivng_The_First?_Runner_Up_Award_on_stage_at_Zindigi_Prize_at_MUET_Khairpur_during_Campus_Round_2.webp',
            'assets/gallery/competitions/Safiullah_Korai_and_Team_Earned_Trophy_at_Zindigi_Prize_Close_Up_Look_3.webp'
          ]
        }
      ]
    },
    {
      category: 'Conferences & Events',
      items: [
        {
          title: 'Conferences, Summits & University Events',
          description: 'This collection is reserved for conferences, summits and university events. New event sets can be added without changing the page structure.',
          images: []
        }
      ]
    },
    {
      category: 'Memberships',
      items: [
        {
          title: 'Pakistan Freelancers Association',
          description: 'Membership credential and professional affiliation.',
          images: ['assets/achievements/community/Safiullah_Korai_PAFLA_Certificate_of_Membership_2026.png']
        },
        {
          title: 'IAENG',
          description: 'International Association of Engineers membership. Add the membership image to the achievements/community folder when available and it will be included here.',
          images: []
        }
      ]
    },
    {
      category: 'Moments',
      items: []
    }
  ];

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));
  const encode = (value) => encodeURI(value);
  let carouselId = 0;
  let activeLightbox = null;

  function groupCard(group, item) {
    const images = item.images || [];
    const id = `gallery-carousel-${carouselId++}`;
    return `<article class="gallery-story-card reveal" data-gallery-story="${esc(id)}">
      <div class="gallery-story-media ${images.length ? '' : 'is-empty'}" data-gallery-open="${esc(id)}">
        ${images.length ? `<div class="gallery-story-track">${images.map((src, index) => `<img class="gallery-story-slide ${index === 0 ? 'is-active' : ''}" src="${esc(encode(src))}" alt="${esc(item.title)} — photo ${index + 1}" loading="lazy">`).join('')}</div><button class="gallery-arrow gallery-prev" type="button" data-gallery-prev="${esc(id)}" aria-label="Previous photo">‹</button><button class="gallery-arrow gallery-next" type="button" data-gallery-next="${esc(id)}" aria-label="Next photo">›</button><span class="gallery-view-hint">Click to view full size</span>` : `<div class="gallery-empty-state"><span>Photos coming soon</span></div>`}
      </div>
      <div class="gallery-story-body"><span class="mini-label">${esc(group.category)}</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p>${images.length > 1 ? `<div class="gallery-dots">${images.map((_, index) => `<button type="button" class="gallery-dot ${index === 0 ? 'is-active' : ''}" data-gallery-dot="${esc(id)}" data-slide="${index}" aria-label="Show photo ${index + 1}"></button>`).join('')}</div>` : ''}</div>
    </article>`;
  }

  function render() {
    const mount = document.querySelector('[data-gallery-page]');
    if (!mount) return;
    mount.innerHTML = galleryGroups.map((group) => `<section class="section gallery-category"><div class="container"><div class="section-head"><div><span class="kicker">${esc(group.category)}</span><h2>${esc(group.category)}</h2></div></div>${group.items.length ? `<div class="gallery-story-grid">${group.items.map((item) => groupCard(group, item)).join('')}</div>` : `<div class="gallery-coming-soon"><strong>More ${esc(group.category.toLowerCase())} can come later.</strong><span>Add the photos to the matching <code>assets/gallery/</code> folder and they can be added without changing the layout.</span></div>`}</div></section>`).join('');
    bindCarousels();
  }

  function bindCarousels() {
    document.querySelectorAll('[data-gallery-story]').forEach((card) => {
      const id = card.dataset.galleryStory;
      const slides = [...card.querySelectorAll('.gallery-story-slide')];
      const dots = [...card.querySelectorAll('.gallery-dot')];
      if (!slides.length) return;
      let current = 0;
      const show = (next) => {
        current = (next + slides.length) % slides.length;
        slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
        dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current));
      };
      card.querySelector('[data-gallery-prev]')?.addEventListener('click', (event) => { event.stopPropagation(); show(current - 1); });
      card.querySelector('[data-gallery-next]')?.addEventListener('click', (event) => { event.stopPropagation(); show(current + 1); });
      dots.forEach((dot) => dot.addEventListener('click', (event) => { event.stopPropagation(); show(Number(dot.dataset.slide)); }));
      card.querySelector('[data-gallery-open]')?.addEventListener('click', (event) => {
        if (event.target.closest('button')) return;
        openLightbox(slides.map((slide) => ({ src: slide.src, alt: slide.alt })), current, card.querySelector('h3')?.textContent || 'Gallery');
      });
    });
    document.querySelectorAll('.reveal').forEach((element) => { if (window.observer) window.observer.observe(element); requestAnimationFrame(() => element.classList.add('visible')); });
  }

  function ensureLightbox() {
    if (document.getElementById('gallery-lightbox')) return;
    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'gallery-lightbox';
    lightbox.innerHTML = `<div class="gallery-lightbox-backdrop" data-lightbox-close></div><div class="gallery-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Full-size gallery photo"><button class="gallery-lightbox-close" type="button" data-lightbox-close aria-label="Close">×</button><button class="gallery-lightbox-nav gallery-lightbox-prev" type="button" data-lightbox-prev aria-label="Previous photo">‹</button><div class="gallery-lightbox-image-wrap"><img id="gallery-lightbox-image" alt=""></div><button class="gallery-lightbox-nav gallery-lightbox-next" type="button" data-lightbox-next aria-label="Next photo">›</button><div class="gallery-lightbox-footer"><strong id="gallery-lightbox-title"></strong><span id="gallery-lightbox-counter"></span></div></div>`;
    document.body.appendChild(lightbox);
    lightbox.querySelectorAll('[data-lightbox-close]').forEach((button) => button.addEventListener('click', closeLightbox));
    lightbox.querySelector('[data-lightbox-prev]').addEventListener('click', () => moveLightbox(-1));
    lightbox.querySelector('[data-lightbox-next]').addEventListener('click', () => moveLightbox(1));
    document.addEventListener('keydown', (event) => {
      if (!activeLightbox) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    });
  }

  function openLightbox(images, index, title) {
    ensureLightbox();
    activeLightbox = { images, index, title };
    updateLightbox();
    document.getElementById('gallery-lightbox').classList.add('open');
    document.body.classList.add('modal-open');
  }

  function updateLightbox() {
    if (!activeLightbox) return;
    const modal = document.getElementById('gallery-lightbox');
    const image = modal.querySelector('#gallery-lightbox-image');
    image.src = activeLightbox.images[activeLightbox.index].src;
    image.alt = activeLightbox.images[activeLightbox.index].alt;
    modal.querySelector('#gallery-lightbox-title').textContent = activeLightbox.title;
    modal.querySelector('#gallery-lightbox-counter').textContent = `${activeLightbox.index + 1} / ${activeLightbox.images.length}`;
  }

  function moveLightbox(direction) {
    if (!activeLightbox) return;
    activeLightbox.index = (activeLightbox.index + direction + activeLightbox.images.length) % activeLightbox.images.length;
    updateLightbox();
  }

  function closeLightbox() {
    document.getElementById('gallery-lightbox')?.classList.remove('open');
    document.body.classList.remove('modal-open');
    activeLightbox = null;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true }); else render();
})();
