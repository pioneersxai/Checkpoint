/**
 * ============================================================
 *  BRAND CONFIG — CheckPoint Cafe
 *  8 Years of Coffee Magic — Sohag
 * ============================================================
 */

const BRAND = {

  name:        "CheckPoint",
  tagline:     "Life Happens. Coffee Helps.",
  description: "كافيه تشيك بوينت — ٨ سنين من سحر القهوة في سوهاج. تجربة قهوة مختلفة داخل بنزينة موبيل، سوهاج الجديدة.",
  keywords:    "تشيك بوينت, كافيه, قهوة, سوهاج, checkpoint, cafe, coffee, sohag",
  author:      "CheckPoint Cafe",

  primaryColor:     "#6366f1",
  primaryColorDark: "#4f46e5",
  faviconLetter:    "C",
  faviconColor:     "%236366f1",

  lang: "ar",
  dir:  "rtl",

  phone:    "+20 100 642 2263",
  whatsapp: "201006422263",
  email:    "checkpoint@coffee.com",
  city:     "سوهاج الجديدة — داخل بنزينة موبيل، أمام أزاليا هاب",
  hours:    "يومياً: ٩:٠٠ ص — ٢:٠٠ ص",

  apiBase: "",
  domain:  "https://pioneersxai.github.io/Checkpoint",

  social: {
    twitter:   "",
    linkedin:  "",
    instagram: "https://www.instagram.com/checkpoint18/",
    youtube:   "",
    tiktok:    "",
  },

  sections: ["hero", "stats", "features", "services", "testimonials", "cta", "contact"],

  showAuthButtons: false,

  navLinks: [
    { label: "الرئيسية",  href: "#home" },
    { label: "منيونا",    href: "#section-services" },
    { label: "عن تشيك",  href: "#section-features" },
    { label: "تواصل معنا", href: "#section-contact" },
  ],

  hero: {
    image:       "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80",
    tag:         "☕ ٨ سنين من سحر القهوة",
    title:       "Life Happens.\nCoffee Helps.",
    tagline:     "تشيك بوينت — سوهاج الجديدة",
    description: "مش مجرد كافيه — تشيك بوينت وجهة. قهوة مختصة، أجواء سينمائية، وخدمة بتفرق. داخل بنزينة موبيل، سوهاج.",
    buttons: [
      { text: "احجز طاولتك",   href: "whatsapp", style: "primary", icon: "fab fa-whatsapp" },
      { text: "اكتشف المنيو",  href: "#section-services", style: "secondary" },
    ],
  },

  stats: [
    { number: "٨+",    label: "سنوات من القهوة" },
    { number: "4,300+", label: "متابع إنستغرام" },
    { number: "#١٣",   label: "أفضل كافيه في سوهاج" },
    { number: "٦٦٠+",  label: "منشور وذكرى" },
  ],

  features: {
    title:    "ليه تشيك بوينت؟",
    subtitle: "لأن القهوة مش مشروب — هي تجربة",
    items: [
      { icon: "fas fa-coffee",      title: "قهوة مختصة",        description: "حبوب مختارة بعناية، باريستا محترف، وكل كوب بيتعمل بحب وخبرة ٨ سنين." },
      { icon: "fas fa-moon",        title: "أجواء سينمائية",    description: "إضاءة هادئة، ديكور navy وبنفسجي، وجو بيخليك تفضل أطول ما تقدر." },
      { icon: "fas fa-car",         title: "موقع مميز",          description: "داخل بنزينة موبيل، سوهاج الجديدة — تقاطع شارع الخلاء مع الشبان المسلمين." },
      { icon: "fas fa-child",       title: "مساحة للعيلة",      description: "Kids play area، outdoor seating، ومساحة مريحة للعيلة والأصدقاء." },
      { icon: "fas fa-parking",     title: "باركينج مجاني",     description: "موقف سيارات مجاني وواسع — مفيش هم من الزحمة." },
      { icon: "fas fa-star",        title: "تقييم ٥ نجوم",      description: "المكان تحفه حرفياً من حيث الخدمة والجودة والمكان نفسه — كلام زباينا." },
    ],
  },

  services: {
    title:    "منيونا",
    subtitle: "كل حاجة بتحبها، بأسلوب تشيك بوينت",
    items: [
      {
        image:       "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
        icon:        "fas fa-coffee",
        title:       "☕ القهوة المختصة",
        description: "إسبريسو، كابوتشينو، لاتيه، فلات وايت — كل كوب بيتعمل بدقة",
        features:    ["إسبريسو كلاسيك", "كابوتشينو", "كريمي لاتيه", "فلات وايت", "كولد برو"],
      },
      {
        image:       "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
        icon:        "fas fa-glass-cheers",
        title:       "🧋 المشروبات الباردة",
        description: "مشروبات باردة ومنعشة لكل الأوقات",
        features:    ["فرابيه", "آيس لاتيه", "سموذي", "ليموناضة", "عصائر طازجة"],
      },
      {
        image:       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        icon:        "fas fa-pizza-slice",
        title:       "🍕 الأكل",
        description: "وجبات خفيفة وأكل كامل لكل الأوقات",
        features:    ["بيتزا", "سندوتشات", "سلطات", "شاورما", "فريز"],
      },
      {
        image:       "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
        icon:        "fas fa-birthday-cake",
        title:       "🍰 الحلويات",
        description: "حلويات طازجة بتكمل تجربة القهوة",
        features:    ["تشيز كيك", "براونيز", "كيك", "وافل", "بانكيك"],
      },
      {
        image:       "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
        icon:        "fas fa-smoking",
        title:       "💨 الشيشة",
        description: "شيشة بنكهات متنوعة في جو مريح",
        features:    ["توفاحيين", "نكهات متنوعة", "outdoor seating", "خدمة مميزة"],
      },
      {
        image:       "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80",
        icon:        "fas fa-star",
        title:       "⭐ تجارب خاصة",
        description: "حجز مناسبات، تجمعات، وأوقات مميزة",
        features:    ["حجز صالة", "مناسبات خاصة", "kids area", "outdoor events"],
      },
    ],
  },

  testimonials: {
    title:    "زبايننا بيقولوا إيه؟",
    subtitle: "كلام حقيقي من ناس جربت تشيك بوينت",
    items: [
      {
        text:   "المكان تحفه حرفياً من حيث الخدمة والجودة والمكان نفسه. القهوة عندهم مختلفة تماماً والجو بيخليك مش عارف تمشي.",
        avatar: "م.أ", name: "محمد أحمد", role: "زبون منتظم — سوهاج",
      },
      {
        text:   "٨ سنين وكل مرة أجي ألاقي نفس الجودة وأحسن خدمة. تشيك بوينت مش بس كافيه — ده تجربة كاملة. الموقع جامد وهادي.",
        avatar: "س.م", name: "سارة محمود", role: "زبونة منتظمة — سوهاج",
      },
      {
        text:   "أحسن كافيه في سوهاج من غير مجاملة. الأجواء سينمائية، القهوة ممتازة، والفريق محترم. بنيجي هنا كل أسبوع.",
        avatar: "ع.ح", name: "علي حسن", role: "زبون — سوهاج الجديدة",
      },
    ],
  },

  cta: {
    image:    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80",
    title:    "تعالى عيش التجربة بنفسك",
    subtitle: "احجز طاولتك دلوقتي أو تعالى على طول — إحنا موجودين ٩ ص لـ ٢ ص",
    buttons: [
      { text: "احجز على واتساب", href: "whatsapp", style: "primary", icon: "fab fa-whatsapp" },
      { text: "اكتشف المنيو",   href: "#section-services", style: "secondary" },
    ],
  },

  contact: {
    title:           "تعالى أو تواصل معانا",
    subtitle:        "إحنا في سوهاج الجديدة — داخل بنزينة موبيل",
    formTitle:       "ابعت رسالتك",
    formPlaceholder: "احجز طاولة، استفسر عن المنيو، أو قولنا أي حاجة...",
    formButton:      "ابعت",
    inquiries: [
      { value: "reservation", label: "☕ حجز طاولة" },
      { value: "event",       label: "🎉 مناسبة خاصة" },
      { value: "menu",        label: "🍕 استفسار عن المنيو" },
      { value: "other",       label: "💬 أخرى" },
    ],
  },

  footer: {
    about:     "CheckPoint Cafe — ٨ سنين من سحر القهوة في سوهاج. Life Happens. Coffee Helps.",
    copyright: `© ${new Date().getFullYear()} CheckPoint Cafe. جميع الحقوق محفوظة. صُمّم بواسطة PioneersX ⚡`,
    columns: [
      {
        title: "المنيو",
        links: [
          { label: "☕ القهوة المختصة",   href: "#section-services" },
          { label: "🧋 المشروبات الباردة", href: "#section-services" },
          { label: "🍕 الأكل",             href: "#section-services" },
          { label: "🍰 الحلويات",          href: "#section-services" },
        ],
      },
      {
        title: "روابط سريعة",
        links: [
          { label: "الرئيسية",     href: "#home" },
          { label: "ليه تشيك",    href: "#section-features" },
          { label: "آراء الزباين", href: "#section-testimonials" },
          { label: "تواصل معنا",  href: "#section-contact" },
        ],
      },
    ],
  },

};

// ============================================================
//  ENGINE
// ============================================================
(function () {

  function applyColors() {
    const r = document.documentElement.style;
    r.setProperty('--primary',      BRAND.primaryColor);
    r.setProperty('--primary-dark', BRAND.primaryColorDark);
    r.setProperty('--primary-red',  BRAND.primaryColor);
    r.setProperty('--accent',       BRAND.primaryColor);
    r.setProperty('--success-green','#25d366');
  }

  function buildTicker() {
    const t = document.getElementById('cp-ticker');
    if (!t) return;
    const items = ['☕ CheckPoint', '8 Years of Coffee Magic', 'Life Happens', 'Coffee Helps ☕', 'سوهاج الجديدة', '☕ قهوة مختصة', 'داخل موبيل', '4,300+ متابع', '☕ CheckPoint'];
    const html = items.map(i => `<span>${i}</span>`).join('');
    t.innerHTML = html + html;
  }

  function applySections() {
    const all = ['stats','features','services','products','team','process','casestudies','clients','testimonials','cta','contact'];
    all.forEach(id => {
      const el = document.getElementById('section-' + id);
      if (!el) return;
      el.style.display = BRAND.sections.includes(id) ? '' : 'none';
    });
  }

  function buildNav() {
    document.querySelectorAll('.brand-logo').forEach(el => el.textContent = BRAND.name);
    const authEl = document.getElementById('nav-auth');
    if (authEl) authEl.style.display = 'none';
    const navEl = document.getElementById('navLinks');
    if (navEl) {
      navEl.innerHTML = BRAND.navLinks.map(l =>
        `<li><a href="${l.href}">${l.label}</a></li>`
      ).join('');
    }
  }

  function buildHero() {
    const heroEl = document.querySelector('.hero');
    if (heroEl && BRAND.hero.image) {
      heroEl.style.backgroundImage = [
        'linear-gradient(135deg, rgba(15,25,41,0.92) 0%, rgba(99,102,241,0.25) 50%, rgba(15,25,41,0.95) 100%)',
        `url('${BRAND.hero.image}')`
      ].join(', ');
      heroEl.style.backgroundSize = 'cover';
      heroEl.style.backgroundPosition = 'center';
    }
    const tagEl = document.querySelector('.hero-tag');
    if (tagEl) tagEl.innerHTML = BRAND.hero.tag || '';
    document.querySelectorAll('.hero-title').forEach(el => el.innerHTML = BRAND.hero.title.replace('\n', '<br>'));
    document.querySelectorAll('.hero-tagline').forEach(el => el.innerHTML = BRAND.hero.tagline);
    document.querySelectorAll('.hero-description').forEach(el => el.innerHTML = BRAND.hero.description);
    const btns = document.querySelector('.hero-buttons');
    if (btns) {
      btns.innerHTML = BRAND.hero.buttons.map(b => {
        const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style === 'whatsapp' ? 'btn btn-wa' : b.style === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href === 'whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  function buildStats() {
    const grid = document.querySelector('.stats-grid');
    if (!grid) return;
    grid.innerHTML = BRAND.stats.map(s =>
      `<div class="stat-item fade-in"><div class="stat-number">${s.number}</div><div class="stat-label">${s.label}</div></div>`
    ).join('');
  }

  function buildFeatures() {
    const sec = document.getElementById('section-features');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.features.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.features.subtitle;
    const grid = sec.querySelector('.medical-grid');
    if (grid) {
      grid.innerHTML = BRAND.features.items.map(f =>
        `<div class="medical-card fade-in">
          <i class="${f.icon} medical-icon"></i>
          <h3 class="medical-title">${f.title}</h3>
          <p class="medical-description">${f.description}</p>
        </div>`
      ).join('');
    }
  }

  function buildServices() {
    const sec = document.getElementById('section-services');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.services.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.services.subtitle;
    const grid = sec.querySelector('.services-grid');
    if (grid) {
      grid.innerHTML = BRAND.services.items.map(s =>
        `<div class="service-card fade-in">
          ${s.image ? `<div class="svc-img"><img src="${s.image}" alt="${s.title}" loading="lazy"></div>` : ''}
          <div class="svc-body">
            <h3 class="svc-title">${s.title}</h3>
            <p class="svc-desc">${s.description}</p>
            <ul class="svc-list">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
            <a href="https://wa.me/${BRAND.whatsapp}?text=مرحباً، عايز أعرف أكثر عن ${s.title}" class="svc-btn" target="_blank"><i class="fab fa-whatsapp"></i> احجز دلوقتي</a>
          </div>
        </div>`
      ).join('');
    }
  }

  function buildTestimonials() {
    const sec = document.getElementById('section-testimonials');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.testimonials.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.testimonials.subtitle;
    const grid = sec.querySelector('.testimonials-grid');
    if (grid) {
      grid.innerHTML = BRAND.testimonials.items.map(t =>
        `<div class="testimonial fade-in">
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${t.avatar}</div>
            <div class="author-info"><h4>${t.name}</h4><p>${t.role}</p></div>
          </div>
        </div>`
      ).join('');
    }
  }

  function buildCTA() {
    const sec = document.getElementById('section-cta');
    if (!sec) return;
    sec.querySelector('.cta-title').textContent   = BRAND.cta.title;
    sec.querySelector('.cta-subtitle').textContent = BRAND.cta.subtitle;
    if (BRAND.cta.image) {
      sec.style.backgroundImage    = `linear-gradient(135deg,rgba(15,25,41,0.92),rgba(99,102,241,0.4)),url('${BRAND.cta.image}')`;
      sec.style.backgroundSize     = 'cover';
      sec.style.backgroundPosition = 'center';
      sec.querySelector('.cta-title').style.color   = '#fff';
      sec.querySelector('.cta-subtitle').style.color = 'rgba(255,255,255,0.8)';
    }
    const btns = sec.querySelector('.hero-buttons');
    if (btns) {
      btns.innerHTML = BRAND.cta.buttons.map(b => {
        const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style === 'whatsapp' ? 'btn btn-wa' : b.style === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href === 'whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  function buildContact() {
    const sec = document.getElementById('section-contact');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.contact.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.contact.subtitle;
    const p=sec.querySelector('.contact-phone');    if(p) p.textContent=BRAND.phone;
    const e=sec.querySelector('.contact-email');    if(e){e.textContent=BRAND.email;e.href=`mailto:${BRAND.email}`;}
    const w=sec.querySelector('.contact-wa');       if(w){w.textContent=BRAND.phone;w.href=`https://wa.me/${BRAND.whatsapp}`;}
    const c=sec.querySelector('.contact-city');     if(c) c.textContent=BRAND.city;
    const h=sec.querySelector('.contact-hours');    if(h) h.textContent=BRAND.hours;
    const ft=sec.querySelector('.form-title');      if(ft) ft.textContent=BRAND.contact.formTitle;
    const sel=sec.querySelector('#service');
    if(sel){sel.innerHTML=`<option value="">نوع الطلب</option>`+BRAND.contact.inquiries.map(i=>`<option value="${i.value}">${i.label}</option>`).join('');}
    const ta=sec.querySelector('textarea'); if(ta) ta.placeholder=BRAND.contact.formPlaceholder;
    const sb=sec.querySelector('.contact-form button[type="submit"]'); if(sb) sb.textContent=BRAND.contact.formButton;
  }

  function buildFooter() {
    const ft=document.querySelector('footer'); if(!ft) return;
    const ab=ft.querySelector('.footer-about'); if(ab) ab.textContent=BRAND.footer.about;
    ft.querySelectorAll('.footer-brand-name').forEach(el=>el.textContent=BRAND.name);
    const socMap={'footer-instagram':BRAND.social.instagram,'footer-twitter':BRAND.social.twitter,'footer-linkedin':BRAND.social.linkedin,'footer-youtube':BRAND.social.youtube,'footer-tiktok':BRAND.social.tiktok};
    Object.entries(socMap).forEach(([id,url])=>{const el=ft.querySelector(`#${id}`);if(!el)return;if(!url)el.style.display='none';else el.href=url;});
    const fc=ft.querySelector('.footer-contact-phone'); if(fc) fc.textContent=BRAND.phone;
    const fe=ft.querySelector('.footer-contact-email'); if(fe){fe.textContent=BRAND.email;fe.href=`mailto:${BRAND.email}`;}
    const fw=ft.querySelector('.footer-contact-wa');    if(fw){fw.textContent=BRAND.phone;fw.href=`https://wa.me/${BRAND.whatsapp}`;}
    const fx=ft.querySelector('.footer-contact-city'); if(fx) fx.textContent=BRAND.city;
    const cols=ft.querySelector('.footer-dynamic-cols');
    if(cols&&BRAND.footer.columns){cols.innerHTML=BRAND.footer.columns.map(col=>`<div class="footer-col"><h4>${col.title}</h4><ul>${col.links.map(l=>`<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul></div>`).join('');}
    const cp=ft.querySelector('.footer-copyright'); if(cp) cp.textContent=BRAND.footer.copyright;
  }

  function buildWhatsApp() {
    const wa=document.querySelector('.whatsapp-float');
    if(wa) wa.href=`https://wa.me/${BRAND.whatsapp}`;
  }

  function buildMeta() {
    document.title=`${BRAND.name} - ${BRAND.tagline}`;
    document.documentElement.lang=BRAND.lang;
    document.documentElement.dir=BRAND.dir;
    const sm=(sel,val)=>{const m=document.querySelector(sel);if(m)m.content=val;};
    sm('meta[name="description"]',BRAND.description);
    sm('meta[name="keywords"]',BRAND.keywords);
    sm('meta[property="og:title"]',`${BRAND.name} - ${BRAND.tagline}`);
    sm('meta[property="og:description"]',BRAND.description);
    const fav=document.getElementById('favicon');
    if(fav) fav.href=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='75' font-family='Arial,sans-serif' font-size='90' font-weight='bold' text-anchor='middle' fill='${BRAND.faviconColor}'%3E${BRAND.faviconLetter}%3C/text%3E%3C/svg%3E`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyColors();
    buildMeta();
    buildNav();
    buildHero();
    buildTicker();
    buildStats();
    buildFeatures();
    buildServices();
    buildTestimonials();
    buildCTA();
    buildContact();
    buildFooter();
    buildWhatsApp();
    applySections();

    // Smooth scroll
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id) || document.getElementById('section-' + id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
        document.getElementById('navLinks')?.classList.remove('open');
      }
    });

    // Nav scroll + scroll-top
    window.addEventListener('scroll', () => {
      document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 60);
      document.getElementById('scrollTop')?.classList.toggle('visible', window.scrollY > 400);
    });

    // Mobile menu
    document.getElementById('mobileMenu')?.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.toggle('open');
    });

    // Fade in observer
    setTimeout(() => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        else obs.observe(el);
      });
    }, 100);
  });

})();
