(() => {
  const A='assets/achievements/';
  const awards=[
    {title:'Academic & Extracurricular Honors',meta:'Academic & Extracurricular',text:'A collection of academic and extracurricular honors received across different stages of my journey.',images:[`${A}awards/Academic & Extracurricular Honors 01.jpg`,`${A}awards/Academic & Extracurricular Honors 02.jpg`,`${A}awards/Academic & Extracurricular Honors 03.jpg`]},
    {title:'Best Performance Award of the Year',meta:'School Recognition',images:[`${A}awards/Best Performance Award of The Year in School.jpg`]},
    {title:"OpenHack'25 Event Organizer Award",meta:"OpenHack'25",images:[`${A}awards/OpenHack25 Event Organizor Award.jpeg`]},
    {title:'Poster Competition Winner',meta:'Competition Award',images:[`${A}awards/Poster Competition Winner Award.jpeg`]},
    {title:'ETL Ambassador — Sponsorship Honor',meta:'ETL Online',images:[`${A}awards/Sponsor Honor Award as an ETL Ambassador for Bringing the Sponsorship from Community ETL Online.jpeg`]},
    {title:'ETL Online Sponsorship Honor Shield',meta:'ETL Online',images:[`${A}awards/Sponsor Honor Shield on Behalf of ETL Online as Being ETL Ambassador for Bringing the Sponsorship from My Community.jpeg`]},
    {title:'Zindigi Prize — First Runner-Up',meta:'MUET SZAB · Zindigi Prize',images:['assets/Safiullah-Korai-And-Team-Recieving-First-Runner-Up-Award-At-MUETSZAB-Zindigi-Prize-Event.jpg']}
  ];
  const badges=[
    ['Postman API Fundamentals Student Expert',`${A}badges/Postman_API_Fundamentals_Student_Expert.png`,'https://badges.parchment.com/public/assertions/TyCya8kbRvSjs-ZZzw9p2A'],
    ['Microsoft Learn Student Ambassadors — Cloud Skills Challenge Event Host',`${A}badges/microsoft-learn-student-ambassadors-cloud-skills-ch.png`,'https://www.credly.com/badges/b84b5b92-c11c-4960-b6b5-8c9110d62b14/public_url'],
    ['Azure Responsible AI Workshop — Coach',`${A}badges/azure-responsible-ai-workshop-coach.png`,'https://www.credly.com/badges/9702d39b-f963-453a-a849-f90f8d2f15ae'],
    ['Azure Database for MySQL — Emerald Contributor',`${A}badges/azure-database-for-mysql-emerald-contributor.png`,'https://www.credly.com/badges/195233f0-8dc0-487c-b2c1-646c197163f5/public_url'],
    ['Azure Database for MySQL — Gold Contributor',`${A}badges/azure-database-for-mysql-gold-contributor.png`,'https://www.credly.com/badges/5432d7fd-ac57-4249-991e-b636754bb62c/public_url'],
    ['Prompt Design in Vertex AI Skill Badge',`${A}badges/prompt-design-in-vertex-ai-skill-badge.png`,'https://www.credly.com/badges/cd1db20d-3031-4ad7-a481-77a917398acd/public_url'],
    ['Aspire Leaders — Module 1',`${A}badges/safiullah_korai_module_1_badge___2024_09_13_18_28_22.png`],
    ['Aspire Leaders — Module 2',`${A}badges/safiullah_korai_module_2_badge___2024_10_11_16_26_19.png`],
    ['Aspire Leaders — Module 3',`${A}badges/safiullah_korai_module_3_badge___2024_11_19_18_24_34.png`]
  ].map(([title,image,verify])=>({title,images:[image],verify}));
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const data=document.querySelector('[data-all-awards]')?awards:badges;
  const mount=document.querySelector('[data-all-awards]')||document.querySelector('[data-all-badges]');
  if(!mount)return;
  const allImages=data.flatMap(x=>x.images);
  mount.innerHTML=data.map((x,i)=>`<article class="card all-card"><div class="all-media"><img src="${esc(encodeURI(x.images[0]))}" data-index="${allImages.indexOf(x.images[0])}" alt="${esc(x.title)}"></div><div class="all-body"><span class="all-meta">${esc(x.meta||'Digital Recognition')}</span><h2>${esc(x.title)}</h2>${x.text?`<p>${esc(x.text)}</p>`:''}${x.verify?`<a class="all-verify" href="${esc(x.verify)}" target="_blank" rel="noopener">Verify ↗</a>`:''}</div></article>`).join('');
  const box=document.createElement('div');box.className='all-lightbox';box.innerHTML='<button class="all-close">×</button><button class="all-prev">‹</button><img alt=""><button class="all-next">›</button><div class="all-caption"></div>';document.body.appendChild(box);
  let current=0;const show=()=>{box.querySelector('img').src=encodeURI(allImages[current]);box.querySelector('img').alt=data.find(x=>x.images.includes(allImages[current]))?.title||'';box.querySelector('.all-caption').textContent=box.querySelector('img').alt};
  mount.querySelectorAll('.all-media img').forEach(img=>img.addEventListener('click',()=>{current=Number(img.dataset.index);box.classList.add('open');show()}));
  box.querySelector('.all-close').onclick=()=>box.classList.remove('open');box.querySelector('.all-prev').onclick=()=>{current=(current-1+allImages.length)%allImages.length;show()};box.querySelector('.all-next').onclick=()=>{current=(current+1)%allImages.length;show()};box.addEventListener('click',e=>{if(e.target===box)box.classList.remove('open')});document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')box.classList.remove('open');if(e.key==='ArrowLeft')box.querySelector('.all-prev').click();if(e.key==='ArrowRight')box.querySelector('.all-next').click()});
})();
