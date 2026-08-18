(() => {
  const organizations = [
    {name:'Microsoft Learn Student Ambassadors',short:'MS',role:'Student Ambassador',text:'A major part of my community journey, where I organized learning activities, collaborated with other communities and helped students explore technology.'},
    {name:'Data Seekho',short:'DS',role:'Ambassador',text:'Worked around data learning and educational initiatives, including the Tafreeh-e-Data Power BI collaboration.'},
    {name:'GirlScript Summer of Code',short:'GS',role:'Mentor & Ambassador',text:'Contributed through mentorship, ambassador activities and open-source learning initiatives.'},
    {name:'Empowerment Through Learning',short:'ETL',role:'Community involvement',text:'Contributed to learning-focused community activities and cross-community initiatives, including Winter Microsoft Learning.'},
    {name:'Hult Prize — MUET SZAB',short:'HP',role:'Community / team involvement',text:'Worked with the university entrepreneurship community around student-led initiatives and activities.'},
    {name:'Google Developer Student Community',short:'GDSC',role:'Community involvement',text:'Participated in the student developer ecosystem around technology, learning and peer collaboration.'},
    {name:'WTM Hyderabad Community',short:'WTM',role:'Community involvement',text:'Part of the wider Women Techmakers community ecosystem and its technology-focused activities.'},
    {name:'ASME',short:'ASME',role:'Member / involvement',text:'Connected with the engineering community through university and professional activities.'},
    {name:'Pakistan Freelancers Association',short:'PA',role:'Member',text:'Professional membership connecting my work with Pakistan’s freelancing and digital-work ecosystem.'},
    {name:'IAENG',short:'IA',role:'Member',text:'Professional membership with the International Association of Engineers.'}
  ];

  const roles = [
    {title:'Microsoft Learn Student Ambassador',text:'Represented the Microsoft learning ecosystem while organizing workshops, learning initiatives and cross-community collaborations.',meta:'Microsoft · Student Ambassador'},
    {title:'Data Seekho Ambassador',text:'Supported data-learning initiatives and helped bring practical sessions such as the Power BI workshop to a student audience.',meta:'Data Seekho'},
    {title:'GSSoC Mentor & Ambassador',text:'Supported open-source learning and mentorship while contributing to community outreach and event activities.',meta:'GirlScript Summer of Code · 2024'},
    {title:'ETL Community Contributor',text:'Worked through community collaborations that connected technology learning with broader student communities across Pakistan.',meta:'Empowerment Through Learning'},
    {title:'Hult Prize Community Involvement',text:'Contributed to the student entrepreneurship ecosystem at MUET SZAB through team and community activities.',meta:'Hult Prize · MUET SZAB'},
    {title:'PAFLA Member',text:'Joined a professional community focused on Pakistan’s freelancing ecosystem and the growth of digital professionals.',meta:'Pakistan Freelancers Association · 2026'}
  ];

  const impact = [
    {number:'01',title:'Tafreeh-e-Data with Power BI',text:'Organized and led a two-day hands-on Power BI workshop through MLSA and Data Seekho, with Fawad Khan as speaker and support from communities across Pakistan.',meta:'Data Seekho × MLSA · 09–10 Nov'},
    {number:'02',title:'Winter Microsoft Learning',text:'Organized a 15-day Microsoft learning initiative through my MLSA role, delivered with ETL Online and supported by communities across Pakistan.',meta:'MLSA × ETL Online · 15 days'},
    {number:'03',title:'Open Source Contribution Workshop',text:'Helped organize and contribute to a practical open-source workshop through the MLSA and GSSoC ecosystem, combining speaker and ambassador roles.',meta:'GSSoC × MLSA · 2024'}
  ];

  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const orgMount=document.querySelector('[data-community-organizations]');
  if(orgMount){orgMount.innerHTML=organizations.map((o,i)=>`<article class="card community-org reveal"><div class="org-mark">${esc(o.short)}</div><h3>${esc(o.name)}</h3><p>${esc(o.text)}</p><span class="role">${esc(o.role)}</span></article>`).join('');}
  const roleMount=document.querySelector('[data-community-roles]');
  if(roleMount){roleMount.innerHTML=roles.map((r,i)=>`<article class="card community-role reveal"><div class="role-index">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p><span class="role-meta">${esc(r.meta)}</span></div></article>`).join('');}
  const impactMount=document.querySelector('[data-community-impact]');
  if(impactMount){impactMount.innerHTML=impact.map(x=>`<article class="card reveal"><span class="mini-label">${esc(x.number)} · Impact</span><h3 style="margin-top:10px">${esc(x.title)}</h3><p>${esc(x.text)}</p><span class="role-meta">${esc(x.meta)}</span></article>`).join('');}
})();
