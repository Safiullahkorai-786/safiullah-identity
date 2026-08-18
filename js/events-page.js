(() => {
  const base='assets/';
  const events=[
    {type:'organized',title:'Tafreeh-e-Data with Power BI',date:'09–10 Nov',year:'2024',role:'Organizer & Community Lead',org:'Data Seekho × Microsoft Learn Student Ambassadors',image:base+'Safiullah-Korai-Pic-10.jpg',text:'A two-day hands-on Power BI workshop created to turn data concepts into practical learning for students and community members.'},
    {type:'organized',title:'Winter Microsoft Learning',date:'15-day initiative',year:'2024',role:'Organizer',org:'Microsoft Learn Student Ambassadors × ETL Online',image:base+'Safiullah-Korai-Pic-11.jpg',text:'A focused Microsoft learning initiative built with ETL Online and supported by communities across Pakistan.'},
    {type:'organized',title:'OpenHack\'25',date:'2025',year:'2025',role:'Event Organizer',org:'OpenHack\'25',image:base+'achievements/community/OpenHack25_event_Main_Poster.jpg',text:'Contributed to organizing OpenHack\'25, bringing students and technology enthusiasts together around practical learning and collaboration.'},
    {type:'participated',title:'Zindigi Prize — MUET SZAB',date:'2024',year:'2024',role:'Finalist / First Runner-up',org:'MUET SZAB × Zindigi',image:base+'Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg',text:'A university entrepreneurship event where our team pitched an idea and received the First Runner-up award.'},
    {type:'participated',title:'Zindigi Prize — Pitching Session',date:'2024',year:'2024',role:'Pitcher / Team Member',org:'MUET SZAB',image:base+'Safiullah-Korai-Pitching-Idea-At-MUETSZAB-Zindigi-Prize-Event.jpg',text:'Presented our idea during the pitching stage, turning an early concept into a structured entrepreneurial proposal.'}
  ];
  const gallery=[
    {src:base+'Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg',caption:'Zindigi Prize — First Runner-up'},
    {src:base+'Safiullah-Korai-Pitching-Idea-At-MUETSZAB-Zindigi-Prize-Event.jpg',caption:'Pitching our idea at MUET SZAB'},
    {src:base+'achievements/community/OpenHack25_event_Main_Poster.jpg',caption:'OpenHack\'25 event poster'},
    {src:base+'Safiullah-Korai-Pic-10.jpg',caption:'Community event moment'},
    {src:base+'Safiullah-Korai-Pic-11.jpg',caption:'Community learning moment'}
  ];
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const mount=document.querySelector('[data-events]');
  const render=(filter='all')=>{if(!mount)return; const list=events.filter(e=>filter==='all'||e.type===filter); mount.innerHTML=list.map(e=>`<article class="card event-card reveal"><div class="event-media"><img src="${esc(e.image)}" alt="${esc(e.title)}" loading="lazy"></div><div class="event-content"><div class="event-meta"><span class="event-tag">${esc(e.year)}</span><span>${esc(e.date)}</span></div><h3>${esc(e.title)}</h3><span class="event-role">${esc(e.role)}</span><p>${esc(e.text)}</p><div class="event-meta"><span>${esc(e.org)}</span></div></div></article>`).join('');};
  render();
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter);}));
  const gm=document.querySelector('[data-event-gallery]');
  if(gm)gm.innerHTML=gallery.map(g=>`<figure class="event-photo reveal"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><figcaption>${esc(g.caption)}</figcaption></figure>`).join('');
})();
