(() => {
  if (window.__safiullahBird) return;
  window.__safiullahBird = true;

  const bird = document.createElement('button');
  bird.className = 'site-bird';
  bird.type = 'button';
  bird.setAttribute('aria-label', 'Flutter bird');
  bird.innerHTML = '<img src="assets/flutter-bird.svg" alt="">';
  document.body.appendChild(bird);

  let x = Math.max(40, innerWidth * 0.72);
  let y = Math.max(100, innerHeight * 0.18);
  let targetX = x;
  let targetY = y;
  let vx = 0.45;
  let vy = 0;
  let state = 'flying';
  let nextDecision = performance.now() + 1400;
  let lastFrame = performance.now();
  let lastScroll = scrollY;
  let pointer = { x: -9999, y: -9999, active: false };
  let lastPointer = null;
  let fleeingUntil = 0;

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const bounds = () => ({ minX: 12, maxX: Math.max(20, innerWidth - 92), minY: 76, maxY: Math.max(110, innerHeight - 92) });

  function setTarget(nx, ny) {
    const b = bounds();
    targetX = clamp(nx, b.minX, b.maxX);
    targetY = clamp(ny, b.minY, b.maxY);
  }

  function chooseWander(now) {
    const b = bounds();
    setTarget(x + (Math.random() - 0.5) * 360, y + (Math.random() - 0.5) * 240);
    nextDecision = now + 1800 + Math.random() * 2800;
  }

  function visiblePerchTargets() {
    return [...document.querySelectorAll('.card, .feature, .feature-strip, .eyebrow, h1, h2, h3, .btn, .site-footer')]
      .map(el => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width > 80 && r.height > 24 && r.bottom > 70 && r.top < innerHeight - 20)
      .filter(({ r }) => r.left < innerWidth - 20 && r.right > 20);
  }

  function perch(now) {
    const targets = visiblePerchTargets();
    if (!targets.length) return false;
    const { r } = targets[Math.floor(Math.random() * targets.length)];
    const nx = clamp(r.left + Math.random() * Math.max(1, r.width - 55), 12, innerWidth - 92);
    const ny = clamp(r.top - 34, 70, innerHeight - 100);
    setTarget(nx, ny);
    state = 'perching';
    nextDecision = now + 2200 + Math.random() * 4200;
    return true;
  }

  function flee(px, py) {
    const dx = x + 28 - px;
    const dy = y + 20 - py;
    const d = Math.hypot(dx, dy) || 1;
    if (d > 210) return;
    const b = bounds();
    const strength = clamp((230 - d) / 230, 0, 1);
    setTarget(x + dx / d * (300 + strength * 260), y + dy / d * (180 + strength * 210));
    fleeingUntil = performance.now() + 1000;
    state = 'flying';
    nextDecision = fleeingUntil + 700;
  }

  function nearCorner(px, py) {
    const corners = [[0, 0], [innerWidth, 0], [0, innerHeight], [innerWidth, innerHeight]];
    return corners.some(([cx, cy]) => Math.hypot(px - cx, py - cy) < 155);
  }

  function hurtAndRecover() {
    if (state === 'falling' || state === 'waking') return;
    state = 'falling';
    bird.classList.add('bird-hurt');
    vx = 0;
    vy = 0;
    targetX = x;
    targetY = Math.min(innerHeight - 46, y + 150);
    setTimeout(() => {
      state = 'waking';
      bird.classList.remove('bird-hurt');
      bird.classList.add('bird-wake');
      setTimeout(() => {
        bird.classList.remove('bird-wake');
        state = 'flying';
        chooseWander(performance.now());
      }, 720);
    }, 920);
  }

  bird.addEventListener('click', (event) => {
    if (nearCorner(event.clientX, event.clientY)) hurtAndRecover();
    else flee(event.clientX, event.clientY);
  });

  window.addEventListener('pointermove', event => {
    pointer = { x: event.clientX, y: event.clientY, active: true };
    if (lastPointer) {
      const speed = Math.hypot(event.clientX - lastPointer.x, event.clientY - lastPointer.y);
      if (speed > 8) flee(event.clientX, event.clientY);
    }
    lastPointer = { x: event.clientX, y: event.clientY };
  }, { passive: true });

  window.addEventListener('scroll', () => {
    const delta = scrollY - lastScroll;
    lastScroll = scrollY;
    if (state !== 'falling' && state !== 'waking') {
      setTarget(targetX + (Math.random() - 0.5) * 100, targetY - delta * 0.32);
      state = 'flying';
      fleeingUntil = performance.now() + 480;
    }
  }, { passive: true });

  // When navigating through the site's pages, the bird enters from the opposite edge.
  document.querySelectorAll('a[href$=".html"], a[href="./"], a[href="/"]').forEach(link => {
    link.addEventListener('click', () => {
      const rect = link.getBoundingClientRect();
      sessionStorage.setItem('birdEntry', rect.left < innerWidth / 2 ? 'left' : 'right');
    });
  });

  const entry = sessionStorage.getItem('birdEntry');
  if (entry) {
    const fromLeft = entry === 'left';
    x = fromLeft ? -85 : innerWidth + 35;
    y = Math.max(100, innerHeight * (0.22 + Math.random() * 0.32));
    setTarget(fromLeft ? innerWidth * 0.48 : innerWidth * 0.52, y);
    sessionStorage.removeItem('birdEntry');
  } else {
    chooseWander(performance.now());
  }

  addEventListener('resize', () => {
    const b = bounds();
    x = clamp(x, b.minX, b.maxX);
    y = clamp(y, b.minY, b.maxY);
    setTarget(targetX, targetY);
  });

  function animate(now) {
    const dt = Math.min((now - lastFrame) / 16.67, 2);
    lastFrame = now;

    if (state === 'flying' && now > nextDecision) {
      if (Math.random() < 0.32 && perch(now)) {
        // intentionally sit for a while
      } else {
        chooseWander(now);
      }
    }

    const dx = targetX - x;
    const dy = targetY - y;
    const fast = now < fleeingUntil;
    const responsiveness = state === 'perching' ? 0.018 : state === 'falling' ? 0.12 : fast ? 0.095 : 0.035;
    vx += dx * responsiveness * dt;
    vy += dy * responsiveness * dt;
    vx *= Math.pow(state === 'perching' ? 0.84 : 0.91, dt);
    vy *= Math.pow(state === 'perching' ? 0.84 : 0.91, dt);

    if (state === 'falling') vy += 0.55 * dt;

    const maxSpeed = state === 'falling' ? 10 : fast ? 16 : state === 'perching' ? 1.4 : 6;
    const speed = Math.hypot(vx, vy);
    if (speed > maxSpeed) {
      vx = vx / speed * maxSpeed;
      vy = vy / speed * maxSpeed;
    }

    x += vx * dt;
    y += vy * dt;

    if (state === 'falling' && Math.abs(y - targetY) < 8) {
      vx *= 0.4;
      vy *= 0.25;
    }

    const facing = vx < -0.15 ? -1 : 1;
    const tilt = clamp(vy * 1.8, -20, 20);
    const bob = state === 'perching' ? Math.sin(now / 260) * 1.1 : Math.sin(now / 150) * 2.2;
    const scale = facing === -1 ? -1 : 1;
    bird.style.transform = `translate3d(${x}px, ${y + bob}px, 0) rotate(${tilt}deg) scaleX(${scale})`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
