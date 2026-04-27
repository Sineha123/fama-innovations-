gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

if (!prefersReducedMotion) {
  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    smoothTouch: false
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

const progressBar = document.querySelector(".scroll-progress__bar");
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("[data-section]");
const magneticItems = document.querySelectorAll(".magnetic");
const cursorOuter = document.querySelector(".cursor--outer");
const cursorInner = document.querySelector(".cursor--inner");
const heroPanel = document.querySelector(".hero-panel");
const heroPanelText = document.querySelector(".hero-panel__text-wrap");
const heroCanvas = document.getElementById("hero-canvas");
const serviceCards = document.querySelectorAll(".tilt-card");
const patternCards = document.querySelectorAll(".pattern-card");
const statNumbers = document.querySelectorAll("[data-count]");
const formLabels = document.querySelectorAll(".contact-form label");
const faqItems = document.querySelectorAll(".faq-item");
const heroOrbs = document.querySelectorAll(".hero-panel__orb");
const processNodes = document.querySelectorAll(".process-card__node");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 60);
};

window.addEventListener("scroll", updateHeader);
updateHeader();

gsap.to(progressBar, {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onToggle: ({ isActive }) => {
      if (!isActive) return;
      const id = section.id;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
});

if (!prefersReducedMotion) {
  const revealText = document.querySelectorAll(".reveal-text");
  revealText.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 28, clipPath: "inset(100% 0 0 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          once: true
        }
      }
    );
  });

  document.querySelectorAll(".reveal-group").forEach((group) => {
    gsap.fromTo(
      group.children,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: group,
          start: "top 82%",
          once: true
        }
      }
    );
  });

  document.querySelectorAll(".stat-card, .value-panel, .service-card, .industry-card, .feature-card, .testimonial-card, .faq-item").forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 26, boxShadow: "0 0 0 rgba(0,0,0,0)" },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4), 0 0 34px rgba(72, 112, 214, 0.06)",
        scrollTrigger: {
          trigger: card,
          start: "top 84%",
          once: true
        }
      }
    );
  });

  document.querySelectorAll(".section-kicker[data-typewriter]").forEach((kicker) => {
    const text = kicker.textContent;
    kicker.textContent = "";
    ScrollTrigger.create({
      trigger: kicker,
      start: "top 84%",
      once: true,
      onEnter: () => {
        let index = 0;
        const timer = window.setInterval(() => {
          kicker.textContent = text.slice(0, index);
          kicker.style.opacity = "1";
          index += 1;
          if (index > text.length) {
            clearInterval(timer);
          }
        }, 26);
      }
    });
  });

  document.querySelectorAll(".section-divider").forEach((divider) => {
    gsap.to(divider, {
      opacity: 1,
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: divider,
        start: "top 85%",
        once: true
      }
    });
  });

  document.querySelectorAll(".section__ghost").forEach((ghost) => {
    gsap.to(ghost, {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: ghost.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .fromTo(".hero__canvas", { opacity: 0 }, { opacity: 1, duration: 0.8 })
    .fromTo(".hero__beam", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.08 }, 0.15)
    .fromTo(".hero-panel", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.2)
    .fromTo(".hero-panel__line--top, .hero-panel__line--bottom", { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, duration: 0.8 }, 0.45)
    .fromTo(".hero-panel__line--left, .hero-panel__line--right", { scaleY: 0, transformOrigin: "center" }, { scaleY: 1, duration: 0.8 }, 0.45)
    .fromTo(".hero-panel__corner", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.35, stagger: 0.04 }, 1.05)
    .fromTo(".hero-panel__title", { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, 0.7)
    .fromTo(".hero-panel__eyebrow, .hero__pill, .hero__microcopy > *, .hero__subline, .hero__lede, .hero__actions > *, .hero__signals > *, .hero__scroll-indicator", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 1.0);

  heroOrbs.forEach((orb, index) => {
    gsap.to(orb, {
      y: index % 2 === 0 ? -10 : 10,
      x: index % 2 === 0 ? 6 : -6,
      scale: 1.08,
      duration: 2 + index * 0.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  gsap.to(".hero__scroll-indicator span", {
    y: 14,
    duration: 1.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

statNumbers.forEach((stat) => {
  const target = Number(stat.dataset.count);
  if (!target) return;
  ScrollTrigger.create({
    trigger: stat,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function onUpdate() {
            const value = Math.round(this.targets()[0].innerText);
            this.targets()[0].textContent = target === 96 ? `${value}%` : `${value}+`;
          }
        }
      );
    }
  });
});

if (!isTouchDevice && !prefersReducedMotion) {
  const cursorState = { outerX: window.innerWidth / 2, outerY: window.innerHeight / 2, innerX: window.innerWidth / 2, innerY: window.innerHeight / 2 };
  const mouse = { x: cursorState.outerX, y: cursorState.outerY };

  const renderCursor = () => {
    cursorState.outerX += (mouse.x - cursorState.outerX) * 0.16;
    cursorState.outerY += (mouse.y - cursorState.outerY) * 0.16;
    cursorState.innerX += (mouse.x - cursorState.innerX) * 0.34;
    cursorState.innerY += (mouse.y - cursorState.innerY) * 0.34;

    cursorOuter.style.transform = `translate(${cursorState.outerX}px, ${cursorState.outerY}px) translate(-50%, -50%)`;
    cursorInner.style.transform = `translate(${cursorState.innerX}px, ${cursorState.innerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  document.querySelectorAll("a, button, .tilt-card, .hero-panel").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const mode = item.dataset.cursor;
      document.body.classList.add("cursor-hover");
      document.body.classList.toggle("cursor-drag", mode === "drag");
      document.body.classList.toggle("cursor-move", mode === "move");
    });

    item.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover", "cursor-drag", "cursor-move");
    });
  });

  renderCursor();

  const handleMagnetic = (event, item) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(item, {
      x: x * 0.14,
      y: y * 0.14,
      duration: 0.3,
      ease: "power3.out"
    });
  };

  magneticItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => handleMagnetic(event, item));
    item.addEventListener("mouseleave", () => {
      gsap.to(item, { x: 0, y: 0, duration: 0.45, ease: "power3.out" });
    });
  });

  const updateHeroPanel = (event) => {
    const rect = heroPanel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(heroPanel, {
      rotateY: x * 16,
      rotateX: y * -16,
      x: x * 18,
      y: y * 18,
      duration: 0.6,
      ease: "power3.out"
    });

    gsap.to(heroPanelText, {
      x: x * 12,
      y: y * 12,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  heroPanel.addEventListener("mousemove", updateHeroPanel);
  heroPanel.addEventListener("mouseleave", () => {
    gsap.to(heroPanel, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.75, ease: "power3.out" });
    gsap.to(heroPanelText, { x: 0, y: 0, duration: 0.75, ease: "power3.out" });
  });

  serviceCards.forEach((card) => {
    const glare = card.querySelector(".service-card__glare");

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const rotateY = ((offsetX / rect.width) - 0.5) * 24;
      const rotateX = ((offsetY / rect.height) - 0.5) * -24;

      gsap.to(card, {
        rotateX,
        rotateY,
        y: -8,
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 1000
      });

      gsap.to(glare, {
        background: `radial-gradient(circle at ${offsetX}px ${offsetY}px, rgba(255,255,255,0.18), transparent 42%)`,
        duration: 0.2
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  });

  patternCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * -12;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -12;
      gsap.to(card, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: "power2.out" });
      card.style.setProperty("--pattern-shift-x", `${x}px`);
      card.style.setProperty("--pattern-shift-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { x: 0, y: 0, duration: 0.45, ease: "power3.out" });
      card.style.setProperty("--pattern-shift-x", "0px");
      card.style.setProperty("--pattern-shift-y", "0px");
    });
  });
}

formLabels.forEach((label) => {
  const field = label.querySelector("input, textarea");
  field.addEventListener("focus", () => {
    label.classList.remove("is-focused");
    void label.offsetWidth;
    label.classList.add("is-focused");
  });
});

faqItems.forEach((item) => {
  const content = item.querySelector("p");
  item.addEventListener("toggle", () => {
    if (prefersReducedMotion) return;
    gsap.fromTo(
      content,
      { opacity: 0, y: -10 },
      { opacity: item.open ? 1 : 0, y: 0, duration: 0.35, ease: "power2.out" }
    );
    gsap.to(item, {
      boxShadow: item.open
        ? "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0, 170, 255, 0.08)"
        : "0 24px 60px rgba(0,0,0,0.4)",
      duration: 0.35,
      ease: "power2.out"
    });
  });
});

const processPath = document.getElementById("process-path");
if (processPath && !prefersReducedMotion) {
  const length = processPath.getTotalLength();
  processPath.style.strokeDasharray = length;
  processPath.style.strokeDashoffset = length;

  gsap.to(processPath, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".process__line-wrap",
      start: "top 70%",
      end: "bottom 55%",
      scrub: true
    }
  });

  processNodes.forEach((node, index) => {
    gsap.fromTo(
      node,
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: ".process__line-wrap",
          start: `top+=${index * 60} 72%`,
          once: true
        }
      }
    );
  });
}

if (!prefersReducedMotion) {
  gsap.to(".marquee__track", {
    xPercent: -50,
    duration: 22,
    ease: "none",
    repeat: -1
  });

  gsap.to(".hero__pill", {
    boxShadow: "inset 0 0 20px rgba(72, 112, 214, 0.18), 0 0 34px rgba(64, 114, 255, 0.16)",
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

const initHeroCanvas = () => {
  if (!heroCanvas) return;

  const ctx = heroCanvas.getContext("2d");
  const bloomCanvas = document.createElement("canvas");
  const bloomCtx = bloomCanvas.getContext("2d");
  const codeFragments = ["CAN_Init()", "uint32_t", "#define ISO_26262", "RTOS_TASK()", "AUTOSAR", "PWM_SYNC", "LIN_FRAME", "ADC_READ()", "MOTOR_TORQUE"];
  let width = 0;
  let height = 0;
  let particles = [];
  let codeNodes = [];
  let ghosts = [];
  let frame = 0;

  const resize = () => {
    width = heroCanvas.width = window.innerWidth;
    height = heroCanvas.height = window.innerHeight;
    bloomCanvas.width = width;
    bloomCanvas.height = height;

    particles = Array.from({ length: isTouchDevice ? 50 : 92 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.8 + 0.8
    }));

    codeNodes = Array.from({ length: 20 }, () => ({
      text: codeFragments[Math.floor(Math.random() * codeFragments.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      opacity: Math.random() * 0.06 + 0.03
    }));

    ghosts = Array.from({ length: 5 }, (_, index) => ({
      x: width * (0.1 + index * 0.17),
      y: height * (0.12 + (index % 2) * 0.18),
      w: width * 0.24,
      h: height * 0.2
    }));
  };

  const drawGrid = (targetCtx) => {
    targetCtx.save();
    targetCtx.strokeStyle = "rgba(255,255,255,0.08)";
    targetCtx.lineWidth = 1;
    const horizon = height * 0.52;
    const spacing = 42;
    const drift = (frame * 0.8) % spacing;

    for (let i = -20; i < 24; i += 1) {
      const x = width / 2 + i * 70;
      targetCtx.beginPath();
      targetCtx.moveTo(x, horizon);
      targetCtx.lineTo(width / 2 + i * 220, height);
      targetCtx.stroke();
    }

    for (let y = 0; y < 18; y += 1) {
      const depth = (y * spacing + drift) / (18 * spacing);
      const lineY = horizon + Math.pow(depth, 1.6) * (height - horizon);
      targetCtx.beginPath();
      targetCtx.moveTo(0, lineY);
      targetCtx.lineTo(width, lineY);
      targetCtx.stroke();
    }

    targetCtx.restore();
  };

  const drawGhostPanels = (targetCtx) => {
    targetCtx.save();
    targetCtx.strokeStyle = "rgba(255,255,255,0.06)";
    targetCtx.lineWidth = 1;
    ghosts.forEach((ghost, index) => {
      const floatY = ghost.y + Math.sin(frame * 0.01 + index) * 8;
      targetCtx.strokeRect(ghost.x, floatY, ghost.w, ghost.h);
      targetCtx.strokeRect(ghost.x, floatY, ghost.w, 26);
      targetCtx.strokeRect(ghost.x + 18, floatY + 42, ghost.w * 0.16, ghost.h - 58);
    });
    targetCtx.restore();
  };

  const drawCode = (targetCtx) => {
    targetCtx.save();
    targetCtx.font = "14px 'IBM Plex Mono', monospace";
    codeNodes.forEach((node) => {
      node.x += node.vx;
      node.y -= 0.06;
      if (node.x > width + 100) node.x = -100;
      if (node.x < -120) node.x = width + 60;
      if (node.y < -20) node.y = height + 20;
      targetCtx.fillStyle = `rgba(255,255,255,${node.opacity})`;
      targetCtx.fillText(node.text, node.x, node.y);
    });
    targetCtx.restore();
  };

  const drawParticles = (targetCtx) => {
    targetCtx.save();
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      targetCtx.beginPath();
      targetCtx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      targetCtx.fillStyle = "rgba(255,255,255,0.72)";
      targetCtx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const next = particles[j];
        const dx = particle.x - next.x;
        const dy = particle.y - next.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 120) {
          targetCtx.beginPath();
          targetCtx.moveTo(particle.x, particle.y);
          targetCtx.lineTo(next.x, next.y);
          targetCtx.strokeStyle = `rgba(255,255,255,${(1 - distance / 120) * 0.18})`;
          targetCtx.stroke();
        }
      }
    });
    targetCtx.restore();
  };

  const render = () => {
    frame += 1;
    ctx.clearRect(0, 0, width, height);
    bloomCtx.clearRect(0, 0, width, height);

    drawGrid(ctx);
    drawGhostPanels(ctx);
    drawCode(ctx);
    drawParticles(ctx);

    bloomCtx.filter = "blur(14px)";
    bloomCtx.globalAlpha = 0.75;
    bloomCtx.drawImage(heroCanvas, 0, 0);
    bloomCtx.filter = "none";

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = 0.45;
    ctx.drawImage(bloomCanvas, 0, 0);
    ctx.restore();

    requestAnimationFrame(render);
  };

  resize();
  render();
  window.addEventListener("resize", resize);
};

if (!prefersReducedMotion) {
  initHeroCanvas();
}
