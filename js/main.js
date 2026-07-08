document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.navbar');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const fighters = {
    ajagba: { name: 'Efe Ajagba', country: 'Nigeria', record: '21-1-1 (14 KOs)', weight: 'Heavyweight', height: "6'6\"", reach: '85"', age: '32', stance: 'Orthodox', img: './images/ajagba.svg', titles: 'WBA Africa Heavyweight Champion', bio: 'Efe Ajagba is a Nigerian professional boxer who represented Nigeria at the 2016 Rio Olympics. Known for his knockout power and impressive 85-inch reach, he has quickly risen through the heavyweight ranks. Nicknamed "The Silent Roller," Ajagba has stopped 14 of his 21 opponents and is currently ranked among the top heavyweights in Africa.' },
    lerena: { name: 'Kevin Lerena', country: 'South Africa', record: '31-4 (15 KOs)', weight: 'Bridgerweight / Heavyweight', height: "6'1\"", reach: '74"', age: '34', stance: 'Southpaw', img: './images/lerena.svg', titles: 'WBC Bridgerweight World Champion', bio: 'Kevin Lerena is a South African southpaw who currently holds the WBC Bridgerweight title. He has fought and defeated top competition across cruiserweight and heavyweight divisions. Lerena knocked down Daniel Dubois three times in their 2022 bout before being stopped, showcasing his world-class power.' },
    bakole: { name: 'Martin Bakole', country: 'DR Congo', record: '21-1-1 (15 KOs)', weight: 'Heavyweight', height: "6'6\"", reach: '80"', age: '33', stance: 'Orthodox', img: './images/bakole.svg', titles: 'WBA Africa Heavyweight Champion', bio: 'Martin Bakole is a Congolese heavyweight contender trained in Scotland. He holds a notable victory over Tony Yoka and has fought to a draw with Efe Ajagba. Bakole is known for his durability, power, and relentless pressure style.' },
    dogboe: { name: 'Isaac Dogboe', country: 'Ghana', record: '26-4 (15 KOs)', weight: 'Featherweight', height: "5'6\"", reach: '68"', age: '31', stance: 'Orthodox', img: './images/dogboe.jpg', titles: 'Former WBO Super Bantamweight Champion', bio: 'Isaac Dogboe is Ghana\'s former WBO Super Bantamweight world champion. Known as "The Royal Storm," he won the title in 2018 and successfully defended it before moving up in weight.' },
    nontshinga: { name: 'Sivenathi Nontshinga', country: 'South Africa', record: '13-1 (10 KOs)', weight: 'Light Flyweight', height: "5'3\"", reach: '64"', age: '26', stance: 'Orthodox', img: './images/nontshinga.svg', titles: 'IBF Light Flyweight World Champion', bio: 'Sivenathi Nontshinga is the IBF Light Flyweight world champion from South Africa. At just 26 years old, he has already defended his world title twice.' },
    akpejiori: { name: 'Raphael Akpejiori', country: 'Nigeria', record: '16-1 (15 KOs)', weight: 'Heavyweight', height: "6'8\"", reach: '86"', age: '33', stance: 'Orthodox', img: './images/akpejiori.jpg', titles: 'WBA Africa #5 Heavyweight', bio: 'Raphael Akpejiori is a Nigerian heavyweight with a devastating 94% knockout ratio. A former standout basketball player at the University of Miami, he transitioned to boxing and has quickly made an impact.' }
  };

  const events = {
    'ajagba-bakole': { title: 'Ajagba vs Bakole 2', date: 'August 29, 2026', venue: 'Wembley Stadium, London, UK', promoter: 'Queensberry Promotions', fighters: ['Efe Ajagba (Nigeria)', 'Martin Bakole (DR Congo)'], ticket: 'Available via DAZN Box Office', details: 'The highly anticipated rematch between Nigerian powerhouse Efe Ajagba and Congolese warrior Martin Bakole. After their first fight ended in a draw, these two African heavyweights will settle the score on one of boxing\'s biggest stages.' },
    'lerena-okolie': { title: 'Lerena vs Okolie', date: 'July 25, 2026', venue: 'Wembley, London, UK', promoter: 'Matchroom Boxing', fighters: ['Kevin Lerena (South Africa)', 'Lawrence Okolie (UK)'], ticket: 'Available via DAZN', details: 'South African WBC Bridgerweight champion Kevin Lerena moves up to heavyweight to face former cruiserweight world champion Lawrence Okolie.' },
    'nontshinga-defense': { title: 'Nontshinga Title Defense', date: 'September 12, 2026', venue: 'East London, South Africa', promoter: 'Boxing SA', fighters: ['Sivenathi Nontshinga (South Africa)', 'TBA (Mandatory Challenger)'], ticket: 'Available via SuperSport', details: 'IBF Light Flyweight world champion Sivenathi Nontshinga returns to South Africa for his mandatory title defense.' }
  };

  const news = {
    'usyk-relinquishes': { title: 'Oleksandr Usyk Relinquishes Heavyweight Titles, Plans Last Dance', date: 'June 12, 2026', category: 'Breaking', img: './images/Hero_section.jpg', content: 'Oleksandr Usyk has relinquished his heavyweight world titles but still plans a farewell fight before retirement. The Ukrainian star vacated the WBC, WBA, and WBO belts, paving the way for Agit Kabayel to be elevated to full WBC heavyweight champion.<br><br>Usyk\'s team confirmed he is in direct discussions with Zuffa Boxing about a potential farewell bout against Deontay Wilder. "The Cat" leaves the division with an undefeated 25-0 record and is widely regarded as one of the greatest fighters of this generation.' },
    'ajagba-bakole-rematch': { title: 'Ajagba vs Bakole 2 — All-African Heavyweight Showdown Confirmed for Wembley', date: 'July 1, 2026', category: 'Fight Announcement', img: './images/Hero_section.jpg', content: 'The rematch between Nigerian powerhouse Efe Ajagba and Congolese warrior Martin Bakole is confirmed for August 29 at Wembley Stadium. The first fight ended in a majority draw in May 2025, and both men are determined to settle the score.<br><br>Ajagba enters off a knockout win over former champion Charles Martin. Bakole has been training in Scotland and promises a definitive victory. The card features multiple African fighters and will be broadcast globally on DAZN.' },
    'joshua-fury': { title: 'Anthony Joshua vs Tyson Fury Venue Talks — Wembley Available on One Condition', date: 'June 30, 2026', category: 'Heavyweight', img: './images/Anthony Joshua\'s Heavyweight Training Tips.jpg', content: 'Turki Alalshikh has confirmed that Wembley Stadium can host the long-awaited Anthony Joshua vs Tyson Fury showdown — but on one condition. The mega-fight, which has been talked about for years, may finally come together in late 2026 or early 2027.<br><br>Joshua faces Martin Bakole\'s conqueror a tune-up bout while Fury continues his comeback trail. The British heavyweight clash would be the biggest in domestic boxing history.' },
    'ennis-zayas': { title: 'Jaron Ennis Stops Xander Zayas in Seven — Calls Out Vergil Ortiz', date: 'June 25, 2026', category: 'Fight Recap', img: './images/bright.jpg', content: 'Jaron "Boots" Ennis delivered a career-best performance, stopping Xander Zayas in seven rounds at the Barclays Center. The welterweight star showcased his full arsenal before the referee waved off the fight in a brutal seventh round.<br><br>Ennis immediately called out Vergil Ortiz Jr in the post-fight interview. "I want the best. Vergil, let\'s make it happen," Ennis said. Manager Rick Glaser confirmed talks are already underway for a potential fall showdown.' },
    'canelo-postponed': { title: 'Canelo vs Mbilli Showdown Postponed to Late October', date: 'June 28, 2026', category: 'Championship', img: './images/Boxing.jpg', content: 'The highly anticipated clash between Canelo Alvarez and Christian Mbilli has been pushed back to late October. Sources indicate the delay allows both camps additional preparation time for what promises to be a grueling super middleweight contest.<br><br>Canelo, the unified champion, will look to cement his legacy against the hard-hitting French-Cameroonian contender. Mbilli has been on a tear in the division and presents a genuine threat to Canelo\'s throne.' },
    'kabayel-elevated': { title: 'Agit Kabayel Elevated to WBC Heavyweight Champion After Usyk Vacates', date: 'June 22, 2026', category: 'Title News', img: './images/Hero_section.jpg', content: 'Agit Kabayel has been officially elevated to WBC heavyweight world champion following Oleksandr Usyk\'s decision to vacate the title. The German heavyweight becomes the first boxer of African descent born in Europe to hold a major heavyweight world title.<br><br>Kabayel, whose parents are from DR Congo, has been on a remarkable run and now sits atop the heavyweight division. A potential unification clash with the winner of Ajagba-Bakole 2 could determine Africa\'s true heavyweight king.' },
    'teofimo-romero': { title: 'Teofimo Lopez vs Rolly Romero Set for August 22 at T-Mobile Arena', date: 'June 20, 2026', category: 'Fight Announcement', img: './images/ryan.jpg', content: 'Two-division champions Teofimo Lopez and Rolly Romero have agreed to terms for a WBA welterweight title bout on August 22 at T-Mobile Arena in Las Vegas. The fight promises fireworks between two of boxing\'s most entertaining personalities.<br><br>Both fighters have verbally agreed, with officials confirming the date. The card will be a summer blockbuster on ESPN pay-per-view.' },
    'joshua-prenga': { title: 'Joshua vs Prenga — Fight Week Weigh-In and Predictions', date: 'June 18, 2026', category: 'Fight Week', img: './images/Anthony Joshua\'s Heavyweight Training Tips.jpg', content: 'Anthony Joshua faces Iman Prenga in a scheduled 10-round heavyweight bout this weekend. The former two-time champion looks to build momentum as he eyes a potential showdown with Tyson Fury in 2027.<br><br>Joshua weighed in at 247 pounds, his lightest in years, signaling a return to the speed-focused style that made him a champion. Prenga, known for his durability, has vowed to spoil Joshua\'s plans.' }
  };

  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');

  function openModal(html) {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
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
  if (counters.length) {
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
          }, 75);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      openModal(`
        <h2>Search BoxArena</h2>
        <div class="form-group">
          <input type="text" id="search-input" placeholder="Search fighters, events, news..." autofocus>
        </div>
        <div class="search-results" id="search-results">
          <p style="color:var(--gray-400);font-size:14px;">Type to search...</p>
        </div>
      `);
      const input = document.getElementById('search-input');
      const results = document.getElementById('search-results');
      input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        if (!q) { results.innerHTML = '<p style="color:var(--gray-400);font-size:14px;">Type to search...</p>'; return; }
        let html = '';
        Object.values(fighters).forEach(f => {
          if (f.name.toLowerCase().includes(q) || f.country.toLowerCase().includes(q)) {
            html += `<div class="search-result-item"><img src="${f.img}"><div class="result-info"><strong>${f.name}</strong><span>${f.country} &middot; ${f.weight}</span></div></div>`;
          }
        });
        Object.values(events).forEach(e => {
          if (e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q) || e.fighters.some(f => f.toLowerCase().includes(q))) {
            html += `<div class="search-result-item"><div class="result-info"><strong>${e.title}</strong><span>${e.date} &middot; ${e.venue}</span></div></div>`;
          }
        });
        Object.values(news).forEach(n => {
          if (n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)) {
            html += `<div class="search-result-item"><div class="result-info"><strong>${n.title}</strong><span>${n.category} &middot; ${n.date}</span></div></div>`;
          }
        });
        results.innerHTML = html || '<p style="color:var(--gray-400);font-size:14px;">No results found.</p>';
      });
    });
  }

  const signupBtn = document.getElementById('signup-btn');
  if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
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
          closeModal();
          document.getElementById('login-btn').click();
        });
      }
    });
  }

  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
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
          closeModal();
          document.getElementById('signup-btn').click();
        });
      }
    });
  }

  const watchLinks = document.querySelectorAll('.watch-link');
  if (watchLinks.length) {
    watchLinks.forEach(link => {
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
              <div class="youtube-embed"><iframe src="https://www.youtube.com/embed/videoseries?list=UUT7Mm-aRWBZ1Zd2bIXIEsyg" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe></div>
              <div class="watch-channel-footer"><a href="https://www.youtube.com/@ProBoxTV" target="_blank">Visit ProBox TV &rarr;</a></div>
            </div>
            <div class="watch-channel">
              <div class="watch-channel-header">
                <i class="fi fi-brands-youtube" style="color:var(--red);font-size:1.5rem;"></i>
                <div><h3>DAZN Boxing</h3><span>The Global Home of Boxing</span></div>
              </div>
              <div class="youtube-embed"><iframe src="https://www.youtube.com/embed/videoseries?list=UUrvRE5fGcdUgCYWgh-BDsg" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe></div>
              <div class="watch-channel-footer"><a href="https://www.youtube.com/@DAZNBoxing" target="_blank">Visit DAZN Boxing &rarr;</a></div>
            </div>
          </div>
          <button class="btn btn-primary modal-btn" onclick="closeModal()" style="margin-top:24px;">Close</button>
        `);
      });
    });
  }
});
