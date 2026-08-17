(() => {
  const bird = document.createElement('div');
  bird.className = 'site-bird';
  bird.setAttribute('aria-hidden', 'true');
  bird.innerHTML = `
    <svg viewBox="0 0 120 80" role="presentation">
      <path class="bird-body" d="M20 42c10-13 26-17 42-10 8-11 22-16 34-9-8 4-12 10-14 17 10 2 18 7 23 14-12-2-22-5-31-11-9 10-24 15-38 10-7-2-12-6-16-11z"/>
      <path class="bird-wing" d="M48 34C35 16 25 11 13 15c10 8 17 16 22 27 5-1 9-4 13-8z"/>
      <circle class="bird-eye" cx="78" cy="30" r="2.2"/>
      <path class="bird-beak" d="M91 34l16 4-14 5z"/>
    </svg>`;
  document.body.appendChild(bird);

  let x = window.innerWidth * .72;
  let y = Math.max(90, window.innerHeight * .18);
  let targetX = x;
  let targetY = y;
  let velocityX = .35;
  let velocityY = 0;
  let lastScroll = window.scrollY;
  let lastPointerX = null;
  let lastPointerY = null;
  let fleeingUntil = 0;
  let nextWander = performance.now() + 1200;
  let lastFrame = performance.now();

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const bounds = () => ({
    minX: 20,
    maxX: Math.max(80, window.innerWidth - 80),
    minY: 80,
    maxY: Math.max(110, window.innerHeight - 100)
  });

  function chooseWander(now) {
    const b = bounds();
    targetX = clamp(x + (Math.random() - .5) * 260, b.minX, b.maxX);
    targetY = clamp(y + (Math.random() - .5) * 180, b.minY, b.maxY);
    nextWander = now + 1500 + Math.random() * 2300;
  }

  function flee(pointerX, pointerY) {
    const dx = x - pointerX;
    const dy = y - pointerY;
    const distance = Math.hypot(dx, dy) || 1;
    const force = clamp((190 - distance) / 190, 0, 1);
    if (force <= 0) return;

    const b = bounds();
    targetX = clamp(x + (dx / distance) * (260 + force * 260), b.minX, b.maxX);
    targetY = clamp(y + (dy / distance) * (190 + force * 180), b.minY, b.maxY);
    fleeingUntil = performance.now() + 950;
  }

  window.addEventListener('pointermove', (event) => {
    if (lastPointerX !== null) {
      const pointerSpeed = Math.hypot(event.clientX - lastPointerX, event.clientY - lastPointerY);
      if (pointerSpeed > 5) flee(event.clientX, event.clientY);
    }
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
  }, { passive: true });

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastScroll;
    lastScroll = window.scrollY;
    targetY = clamp(targetY - delta * .22, 70, window.innerHeight - 90);
    targetX = clamp(targetX + (Math.random() - .5) * 90, 20, window.innerWidth - 80);
    fleeingUntil = performance.now() + 350;
  }, { passive: true });

  window.addEventListener('resize', () => {
    const b = bounds();
    x = clamp(x, b.minX, b.maxX);
    y = clamp(y, b.minY, b.maxY);
    targetX = clamp(targetX, b.minX, b.maxX);
    targetY = clamp(targetY, b.minY, b.maxY);
  });

  function animate(now) {
    const dt = Math.min((now - lastFrame) / 16.67, 2);
    lastFrame = now;

    if (now > nextWander && now > fleeingUntil) chooseWander(now);

    const dx = targetX - x;
    const dy = targetY - y;
    const responsiveness = now < fleeingUntil ? .085 : .035;

    velocityX += dx * responsiveness * dt;
    velocityY += dy * responsiveness * dt;
    velocityX *= Math.pow(.91, dt);
    velocityY *= Math.pow(.91, dt);

    const maxSpeed = now < fleeingUntil ? 15 : 5.5;
    const speed = Math.hypot(velocityX, velocityY);
    if (speed > maxSpeed) {
      velocityX = velocityX / speed * maxSpeed;
      velocityY = velocityY / speed * maxSpeed;
    }

    x += velocityX * dt;
    y += velocityY * dt;

    const angle = clamp(velocityY * 2.2, -18, 18);
    const facing = velocityX < -0.15 ? -1 : 1;
    const scale = facing === -1 ? -1 : 1;
    const bob = Math.sin(now / 180) * 2.5;

    bird.style.transform = `translate3d(${x}px, ${y + bob}px, 0) rotate(${angle}deg) scaleX(${scale})`;
    bird.classList.add('is-visible');
    requestAnimationFrame(animate);
  }

  chooseWander(performance.now());
  requestAnimationFrame(animate);
})();
