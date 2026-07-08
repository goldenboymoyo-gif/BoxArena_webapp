document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.navbar');
  const links = document.querySelectorAll('.nav-link');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    let currentSection = '';
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        currentSection = section.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  const fighters = {
    ajagba: { name: 'Efe Ajagba', country: 'Nigeria', record: '21-1-1 (14 KOs)', weight: 'Heavyweight', height: "6'6\"", reach: '85"', age: '32', stance: 'Orthodox', img: './images/Anthony Joshua\'s Heavyweight Training Tips.jpg', titles: 'WBA Africa Heavyweight Champion', bio: 'Efe Ajagba is a Nigerian professional boxer who represented Nigeria at the 2016 Rio Olympics. Known for his knockout power and impressive 85-inch reach, he has quickly risen through the heavyweight ranks. Nicknamed "The Silent Roller," Ajagba has stopped 14 of his 21 opponents and is currently ranked among the top heavyweights in Africa.' },
    lerena: { name: 'Kevin Lerena', country: 'South Africa', record: '31-4 (15 KOs)', weight: 'Bridgerweight / Heavyweight', height: "6'1\"", reach: '74"', age: '34', stance: 'Southpaw', img: './images/bright.jpg', titles: 'WBC Bridgerweight World Champion', bio: 'Kevin Lerena is a South African southpaw who currently holds the WBC Bridgerweight title. He has fought and defeated top competition across cruiserweight and heavyweight divisions. Lerena knocked down Daniel Dubois three times in their 2022 bout before being stopped, showcasing his world-class power. He successfully defended his WBC title in South Africa in 2025.' },
    bakole: { name: 'Martin Bakole', country: 'DR Congo', record: '21-1-1 (15 KOs)', weight: 'Heavyweight', height: "6'6\"", reach: '80"', age: '33', stance: 'Orthodox', img: './images/Hero_section.jpg', titles: 'WBA Africa Heavyweight Champion', bio: 'Martin Bakole is a Congolese heavyweight contender trained in Scotland. He holds a notable victory over Tony Yoka and has fought to a draw with Efe Ajagba. Bakole is known for his durability, power, and relentless pressure style.' },
    dogboe: { name: 'Isaac Dogboe', country: 'Ghana', record: '26-4 (15 KOs)', weight: 'Featherweight', height: "5'6\"", reach: '68"', age: '31', stance: 'Orthodox', img: './images/Boxing.jpg', titles: 'Former WBO Super Bantamweight Champion', bio: 'Isaac Dogboe is Ghana\'s former WBO Super Bantamweight world champion. Known as "The Royal Storm," he won the title in 2018 and successfully defended it before moving up in weight. Dogboe represented Ghana at the 2012 Olympics and remains one of Africa\'s most celebrated active boxers.' },
    nontshinga: { name: 'Sivenathi Nontshinga', country: 'South Africa', record: '13-1 (10 KOs)', weight: 'Light Flyweight', height: "5'3\"", reach: '64"', age: '26', stance: 'Orthodox', img: './images/Pitius.jpg', titles: 'IBF Light Flyweight World Champion', bio: 'Sivenathi Nontshinga is the IBF Light Flyweight world champion from South Africa. At just 26 years old, he has already defended his world title twice. Known for his speed, accuracy, and ring IQ, Nontshinga represents the new generation of African boxing talent.' },
    akpejiori: { name: 'Raphael Akpejiori', country: 'Nigeria', record: '16-1 (15 KOs)', weight: 'Heavyweight', height: "6'8\"", reach: '86"', age: '33', stance: 'Orthodox', img: './images/ryan.jpg', titles: 'WBA Africa #5 Heavyweight', bio: 'Raphael Akpejiori is a Nigerian heavyweight with a devastating 94% knockout ratio. A former standout basketball player at the University of Miami, he transitioned to boxing and has quickly made an impact.' }
  };

  const events = {
    'ajagba-bakole': { title: 'Ajagba vs Bakole 2', date: 'August 29, 2026', venue: 'Wembley Stadium, London, UK', promoter: 'Queensberry Promotions', fighters: ['Efe Ajagba (Nigeria)', 'Martin Bakole (DR Congo)'], ticket: 'Available via DAZN Box Office', details: 'The highly anticipated rematch between Nigerian powerhouse Efe Ajagba and Congolese warrior Martin Bakole. After their first fight ended in a draw, these two African heavyweights will settle the score on one of boxing\'s biggest stages.' },
    'lerena-okolie': { title: 'Lerena vs Okolie', date: 'July 25, 2026', venue: 'Wembley, London, UK', promoter: 'Matchroom Boxing', fighters: ['Kevin Lerena (South Africa)', 'Lawrence Okolie (UK)'], ticket: 'Available via DAZN', details: 'South African WBC Bridgerweight champion Kevin Lerena moves up to heavyweight to face former cruiserweight world champion Lawrence Okolie.' },
    'nontshinga-defense': { title: 'Nontshinga Title Defense', date: 'September 12, 2026', venue: 'East London, South Africa', promoter: 'Boxing SA', fighters: ['Sivenathi Nontshinga (South Africa)', 'TBA (Mandatory Challenger)'], ticket: 'Available via SuperSport', details: 'IBF Light Flyweight world champion Sivenathi Nontshinga returns to South Africa for his mandatory title defense.' }
  };

  const news = {
    'ajagba-bakole-rematch': { title: 'Ajagba vs Bakole Rematch Set for August 29 at Wembley', date: 'July 1, 2026', category: 'Fight Announcement', img: './images/Hero_section.jpg', content: 'The all-African heavyweight showdown between Efe Ajagba and Martin Bakole has been officially announced for August 29, 2026, at Wembley Stadium in London. The bout will headline a Queensberry Promotions card and comes after their first encounter ended in a majority draw in May 2025.<br><br>Both fighters have expressed confidence in securing a definitive victory. Ajagba, coming off a knockout win over former champion Charles Martin, believes his power will be the difference. Bakole, training in Scotland under renowned coaches, has been preparing for this moment since the draw.' },
    'lerena-title': { title: 'Lerena Defends WBC Bridgerweight Title Against Okolie', date: 'June 28, 2026', category: 'Title Fight', img: './images/bright.jpg', content: 'South Africa\'s Kevin Lerena will defend his WBC Bridgerweight title against Lawrence Okolie on July 25 at Wembley as part of a massive Matchroom Boxing card. The fight will take place at heavyweight, making it a significant step up in weight for both men.' },
    'nbf-calendar': { title: 'Nigeria Boxing Federation Unveils 2026 Development Roadmap', date: 'June 20, 2026', category: 'Development', img: './images/Boxing.jpg', content: 'The Nigeria Boxing Federation (NBF) has unveiled an extensive programme of activities for the 2026 sporting calendar, outlining a roadmap aimed at repositioning Nigerian boxing for sustained growth and international success.' },
    'nontshinga-defense': { title: 'Nontshinga to Defend IBF Light Flyweight Title in September', date: 'June 15, 2026', category: 'Championship', img: './images/Pitius.jpg', content: 'IBF Light Flyweight world champion Sivenathi Nontshinga will make his next title defense on September 12, 2026, in East London, South Africa. The mandatory defense marks the champion\'s return to his home province of Eastern Cape.' }
  };

  function openModal(html) {
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('.fighter-card[data-fighter]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.fighter;
      const f = fighters[key];
      if (!f) return;
      openModal(`
        <img src="${f.img}" alt="${f.name}">
        <div class="modal-country">${f.country}</div>
        <h2>${f.name}</h2>
        <div class="modal-record">${f.record}</div>
        <div class="modal-stats">
          <div class="modal-stat"><span>${f.weight}</span><span>Weight</span></div>
          <div class="modal-stat"><span>${f.height}</span><span>Height</span></div>
          <div class="modal-stat"><span>${f.reach}</span><span>Reach</span></div>
          <div class="modal-stat"><span>${f.stance}</span><span>Stance</span></div>
        </div>
        <p class="modal-bio">${f.bio}</p>
        <p class="modal-bio" style="font-weight:600;color:var(--red);margin-top:8px;">${f.titles}</p>
        <button class="btn btn-primary modal-btn" onclick="closeModal()">Close</button>
      `);
    });
  });

  document.querySelectorAll('.event-card[data-event]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.event;
      const ev = events[key];
      if (!ev) return;
      openModal(`
        <h2>${ev.title}</h2>
        <div class="event-full-details">
          <div><span>Date</span><span>${ev.date}</span></div>
          <div><span>Venue</span><span>${ev.venue}</span></div>
          <div><span>Promoter</span><span>${ev.promoter}</span></div>
          <div><span>Main Event</span><span>${ev.fighters[0]} vs ${ev.fighters[1]}</span></div>
          <div><span>Tickets</span><span>${ev.ticket}</span></div>
        </div>
        <p class="news-full">${ev.details}</p>
        <button class="btn btn-primary modal-btn" onclick="closeModal()">Close</button>
      `);
    });
  });

  document.querySelectorAll('.news-card[data-news]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.news;
      const n = news[key];
      if (!n) return;
      openModal(`
        <span class="news-cat" style="position:static;display:inline-block;margin-bottom:8px;">${n.category}</span>
        <h2>${n.title}</h2>
        <div class="news-meta" style="border:none;padding:0;margin:8px 0 16px;"><time>${n.date}</time></div>
        <p class="news-full">${n.content}</p>
        <button class="btn btn-primary modal-btn" onclick="closeModal()">Close</button>
      `);
    });
  });

  const counters = document.querySelectorAll('.metric-value[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));

  document.getElementById('search-btn').addEventListener('click', () => {
    openModal(`
      <h2>Search BoxArena</h2>
      <div class="form-group">
        <input type="text" id="search-input" placeholder="Search fighters, events, news..." autofocus>
      </div>
      <div class="search-results" id="search-results">
        <p style="color:var(--gray-400);font-size:14px;">Type to search fighters, events, and news...</p>
      </div>
    `);
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (!q) { results.innerHTML = '<p style="color:var(--gray-400);font-size:14px;">Type to search fighters, events, and news...</p>'; return; }
      let html = '';
      Object.values(fighters).forEach(f => {
        if (f.name.toLowerCase().includes(q) || f.country.toLowerCase().includes(q)) {
          html += `<div class="search-result-item" data-search="fighter-${f.name}"><img src="${f.img}"><div class="result-info"><strong>${f.name}</strong><span>${f.country} &middot; ${f.weight}</span></div></div>`;
        }
      });
      Object.values(events).forEach(e => {
        if (e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q) || e.fighters.some(f => f.toLowerCase().includes(q))) {
          html += `<div class="search-result-item" data-search="event-${e.title}"><div class="result-info"><strong>${e.title}</strong><span>${e.date} &middot; ${e.venue}</span></div></div>`;
        }
      });
      Object.values(news).forEach(n => {
        if (n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)) {
          html += `<div class="search-result-item" data-search="news-${n.title}"><div class="result-info"><strong>${n.title}</strong><span>${n.category} &middot; ${n.date}</span></div></div>`;
        }
      });
      results.innerHTML = html || '<p style="color:var(--gray-400);font-size:14px;">No results found.</p>';
    });
  });

  document.getElementById('signup-btn').addEventListener('click', (e) => {
    e.preventDefault();
    openModal(`
      <h2>Create Account</h2>
      <p style="color:var(--gray-500);margin-bottom:20px;">Join the African boxing community.</p>
      <div class="form-group"><label>Full Name</label><input type="text" id="signup-name" placeholder="Your full name"></div>
      <div class="form-group"><label>Email</label><input type="email" id="signup-email" placeholder="you@example.com"></div>
      <div class="form-group"><label>Password</label><input type="password" id="signup-password" placeholder="Create a password"></div>
      <button class="btn btn-primary form-btn" id="signup-submit">Create Account</button>
      <div class="form-footer">Already have an account? <a id="form-switch-login">Log in</a></div>
    `);
    document.getElementById('signup-submit').addEventListener('click', () => {
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      if (name && email) {
        closeModal();
        openModal(`<h2>Welcome, ${name}!</h2><p class="news-full">Your account has been created. Check your email for verification.</p><button class="btn btn-primary modal-btn" onclick="closeModal()">Done</button>`);
      }
    });
    const switchLink = document.getElementById('form-switch-login');
    if (switchLink) {
      switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-btn').click();
      });
    }
  });

  document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    openModal(`
      <h2>Welcome Back</h2>
      <p style="color:var(--gray-500);margin-bottom:20px;">Log in to your BoxArena account.</p>
      <div class="form-group"><label>Email</label><input type="email" id="login-email" placeholder="you@example.com"></div>
      <div class="form-group"><label>Password</label><input type="password" id="login-password" placeholder="Your password"></div>
      <button class="btn btn-primary form-btn" id="login-submit">Log In</button>
      <div class="form-footer">Don't have an account? <a id="form-switch-signup">Sign up</a></div>
    `);
    document.getElementById('login-submit').addEventListener('click', () => {
      const email = document.getElementById('login-email').value;
      if (email) {
        closeModal();
        openModal(`<h2>Logged In</h2><p class="news-full">Welcome back! You are now signed in.</p><button class="btn btn-primary modal-btn" onclick="closeModal()">Done</button>`);
      }
    });
    const switchLink = document.getElementById('form-switch-signup');
    if (switchLink) {
      switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('signup-btn').click();
      });
    }
  });

  document.querySelectorAll('.watch-link, a[href="#watch"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(`
        <h2>Watch Fights</h2>
        <p style="color:var(--gray-500);margin-bottom:16px;">Latest boxing action from top channels.</p>
        <div class="watch-grid" style="display:grid;grid-template-columns:1fr;gap:24px;">
          <div class="watch-channel">
            <div class="watch-channel-header">
              <i class="fi fi-brands-youtube" style="color:var(--red);font-size:1.5rem;"></i>
              <div><h3>ProBox TV</h3><span>Latest Fights & Highlights</span></div>
            </div>
            <div class="youtube-embed">
              <iframe src="https://www.youtube.com/embed/videoseries?list=UUT7Mm-aRWBZ1Zd2bIXIEsyg" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="watch-channel-footer">
              <a href="https://www.youtube.com/@ProBoxTV" target="_blank">Visit ProBox TV &rarr;</a>
            </div>
          </div>
          <div class="watch-channel">
            <div class="watch-channel-header">
              <i class="fi fi-brands-youtube" style="color:var(--red);font-size:1.5rem;"></i>
              <div><h3>DAZN Boxing</h3><span>The Global Home of Boxing</span></div>
            </div>
            <div class="youtube-embed">
              <iframe src="https://www.youtube.com/embed/videoseries?list=UUrvRE5fGcdUgCYWgh-BDsg" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="watch-channel-footer">
              <a href="https://www.youtube.com/@DAZNBoxing" target="_blank">Visit DAZN Boxing &rarr;</a>
            </div>
          </div>
        </div>
        <button class="btn btn-primary modal-btn" onclick="closeModal()" style="margin-top:24px;">Close</button>
      `);
    });
  });

});
