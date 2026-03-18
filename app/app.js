  const zineData = { 
    past: {
      emoji: '🕰️',
      title: 'the past',
      tag: 'love · 2 min',
      tagStyle: 'background:#FEFCE8;color:#4A3000;border:1.5px solid #C8A800;',
      content: ' It all started with my bear phone case and two people quietly scrutinizing each other like mildly suspicious zoo animals. I thought you were a genius. You couldn\’t hear me speaking English. Naturally, we were destined to be besties.',
      quote: '"the best memories live rent-free forever" 🐑'
    },
    present: {
      emoji: '🎂',
      title: 'the present',
      tag: 'celeb scene · 3 min',
      tagStyle: 'background:#BDE8F5;color:#1A5570;border:1.5px solid #2A7FA8;',
      content: 'Right now, on this birthday, the world is a little brighter just because you exist in it. Today is yours the celebrations, the chaos, the confetti. Soak it all in. You deserve every single candle. 🎉',
      quote: '"today is your main character moment" 🎊'
    },
    future: {
      emoji: '✨',
      title: 'the future',
      tag: 'surreal · 4 min',
      tagStyle: 'background:#EDE9FE;color:#5B21B6;border:1.5px solid #9333EA;',
      content: 'There are so many pages still unwritten, new places, new jokes only we\'ll understand, new versions of us figuring it all out. Whatever comes next, know that the best chapters are still ahead. 🚀',
      quote: '"the sequel is always better" 🌟'
    }
  };

  function openZine(type) {
    const d = zineData[type];
    document.getElementById('zineEmoji').textContent = d.emoji;
    document.getElementById('zineTitle').textContent = d.title;
    document.getElementById('zineTag').textContent = d.tag;
    document.getElementById('zineTag').style.cssText += d.tagStyle;
    document.getElementById('zineContent').textContent = d.content;
    document.getElementById('zineQuote').textContent = d.quote;
    const overlay = document.getElementById('zineOverlay');
    overlay.style.display = 'flex';
    // re-trigger animation
    const modal = document.getElementById('zineModal');
    modal.style.animation = 'none';
    modal.offsetHeight;
    modal.style.animation = 'popIn .3s cubic-bezier(.34,1.56,.64,1)';
  }
  function closeZine(e) {
    if (!e || e.target === document.getElementById('zineOverlay') || (e.currentTarget && e.currentTarget.tagName === 'BUTTON')) {
      document.getElementById('zineOverlay').style.display = 'none';
    }
  }

  function openWish() {
    const overlay = document.getElementById('wishOverlay');
    overlay.style.display = 'flex';
  }
  function closeWish(e) {
    if (!e || e.target === document.getElementById('wishOverlay') || e.currentTarget && e.currentTarget.tagName === 'BUTTON') {
      document.getElementById('wishOverlay').style.display = 'none';
    }
  }

  // Gallery
  let currentSlide = 0;
  const slides = document.querySelectorAll('.gslide');
  const dots = document.querySelectorAll('.gdot');

  function openGallery() {
    currentSlide = 0;
    updateSlide();
    document.getElementById('galleryOverlay').style.display = 'flex';
  }
  function closeGallery(e) {
    if (!e || e.target === document.getElementById('galleryOverlay') || (e.currentTarget && e.currentTarget.tagName === 'BUTTON')) {
      document.getElementById('galleryOverlay').style.display = 'none';
    }
  }
  function changeSlide(dir) {
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    updateSlide();
  }
  function goToSlide(n) {
    currentSlide = n;
    updateSlide();
  }
  function updateSlide() {
    slides.forEach((s, i) => {
      s.style.display = i === currentSlide ? 'flex' : 'none';
    });
    dots.forEach((d, i) => {
      d.style.background = i === currentSlide ? '#F5D800' : '#BDE8F5';
      d.style.borderColor = i === currentSlide ? '#C8A800' : '#7EC8E3';
    });
  }

  // Swipe support
  let touchStartX = 0;
  document.getElementById('gallerySlides') && document.addEventListener('DOMContentLoaded', () => {
    const gs = document.getElementById('gallerySlides');
    gs.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
    gs.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) changeSlide(diff > 0 ? 1 : -1);
    });
  });