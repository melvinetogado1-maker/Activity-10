/* ============================================================
   Cineframe — interactivity
   ============================================================ */

const MOVIES = [
  {
    title: "Phantom Lawyer",
    year: 2026,
    genre: "Fantasy, Law",
    director: "Shin Joong-hoon",
    cast: "Yoo Yeon-seok, Esom, Kim Kyung-nam",
    runtime: "70 min",
    rating: 4.8,
    poster: "https://upload.wikimedia.org/wikipedia/en/c/ca/Phantom_Lawyer_poster.png", // courtroom law books
    synopsis:
      "A small-firm lawyer who can see ghosts gets possessed by them to uncover the truth and resolve unfinished business."
  },
  {
    title: "Squid Game 2",
    year: 2024,
    genre: "Thriller, Drama",
    director: "Hwang Dong-hyuk",
    cast: "Lee Jung-jae, Lee Byung-hun, Wi Ha-jun",
    runtime: "60 min",
    rating: 4.7,
    poster: "https://i.pinimg.com/1200x/e4/c7/ed/e4c7ed019776a4139dd0a555c5ecd78c.jpg", // dramatic red lighting mask
    synopsis:
      "Seong Gi-hun abandons his plans to go to the US and starts a chase with a motive after the mysterious events of the first game."
  },
  {
    title: "Weak Hero Class 1",
    year: 2022,
    genre: "Action, Drama",
    director: "Yoo Soo-min",
    cast: "Park Ji-hoon, Choi Hyun-wook, Hong Kyung",
    runtime: "40 min",
    rating: 4.8,
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3e/Weak_Hero_Class_1.jpeg", // school hallway lockers
    synopsis:
      "A model student uses his intellect and wits to fight back against the violence that plagues his school."
  },
  {
    title: "Twinkling Watermelon",
    year: 2023,
    genre: "Fantasy, Romance, Coming-of-age",
    director: "Son Jeong-hyeon",
    cast: "Ryeoun, Choi Hyun-wook, Seol In-ah",
    runtime: "70 min",
    rating: 4.9,
    poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Twinkling_Watermelon.jpg", // electric guitar stage lights
    synopsis:
      "A CODA student travels back in time to 1995, where he forms a band with his father as a high schooler."
  },
  {
    title: "Alice in Borderland",
    year: 2020,
    genre: "Sci-Fi, Thriller",
    director: "Shinsuke Sato",
    cast: "Kento Yamazaki, Tao Tsuchiya, Nijiro Murakami",
    runtime: "60 min",
    rating: 4.6,
    poster: "https://static.wikia.nocookie.net/aliceinborderland/images/a/a2/Alice_in_Borderland_%28Netflix%29_Season_1_Poster_03.jpg/revision/latest/scale-to-width-down/1000?cb=20201211074318", // empty Tokyo city streets
    synopsis:
      "An aimless gamer and his friends find themselves in a parallel, empty Tokyo, forced to compete in deadly games to survive."
  },
  {
    title: "Spirited Away",
    year: 2001,
    genre: "Animation, Fantasy",
    director: "Hayao Miyazaki",
    cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
    runtime: "125 min",
    rating: 4.9,
    poster: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png", // Japanese lanterns bathhouse
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts."
  },
  {
    title: "Chainsaw Man",
    year: 2022,
    genre: "Action, Dark Fantasy",
    director: "Ryū Nakayama",
    cast: "Kikunosuke Toya, Fairouz Ai, Tomori Kusunoki",
    runtime: "24 min",
    rating: 4.7,
    poster: "https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg", // dark gritty urban night chainsaw
    synopsis:
      "A teenage boy merges with his pet devil dog to become Chainsaw Man, joining a public safety group to hunt devils."
  },
  {
    title: "Young Sheldon",
    year: 2017,
    genre: "Comedy",
    director: "Chuck Lorre, Steven Molaro",
    cast: "Iain Armitage, Zoe Perry, Lance Barber",
    runtime: "22 min",
    rating: 4.5,
    poster: "https://upload.wikimedia.org/wikipedia/en/6/68/Young_Sheldon_title_card.png", // Texas suburban home warm family
    synopsis:
      "Follows the life of the child genius Sheldon Cooper as he navigates his unique, conventional family in Texas."
  }
];

/* ============================================================
   Render gallery
   ============================================================ */
const grid = document.getElementById("movieGrid");
MOVIES.forEach((m, i) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "movie-card";
  card.setAttribute("aria-label", `Open details for ${m.title}`);
  card.innerHTML = `
    <div class="poster-wrap">
      <img src="${m.poster}" alt="Poster of ${m.title}" loading="lazy" />
      <div class="poster-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:14px;height:14px;">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/>
        </svg>
        View details
      </div>
    </div>
    <div class="movie-meta">
      <h3 class="movie-title">${m.title}</h3>
      <span class="movie-year">${m.year}</span>
    </div>
    <p class="movie-genre">${m.genre}</p>
  `;
  card.addEventListener("click", () => openModal(m));
  grid.appendChild(card);
});

/* ============================================================
   Modal
   ============================================================ */
const modal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalSynopsis = document.getElementById("modalSynopsis");
const modalRating = document.getElementById("modalRating");
const modalPoster = document.getElementById("modalPoster");
const modalCredits = document.getElementById("modalCredits");

function openModal(m) {
  modalTitle.textContent = m.title;
  modalMeta.textContent = `${m.genre} · ${m.year}`;
  modalSynopsis.textContent = m.synopsis;
  modalPoster.style.backgroundImage = `url("${m.poster}")`;
  modalRating.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:14px;height:14px;">
      <path d="M12 2l2.95 6.32 6.95.62-5.27 4.78 1.62 6.78L12 17.27 5.75 20.5l1.62-6.78L2.1 8.94l6.95-.62L12 2z"/>
    </svg>
    ${m.rating.toFixed(1)} / 5
  `;
  modalCredits.innerHTML = `
    <div><dt>Director</dt><dd>${m.director}</dd></div>
    <div><dt>Cast</dt><dd>${m.cast}</dd></div>
    <div><dt>Runtime</dt><dd>${m.runtime}</dd></div>
    <div><dt>Genre</dt><dd>${m.genre}</dd></div>
    <div><dt>Year</dt><dd>${m.year}</dd></div>
  `;
  
  modal.hidden = false;
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.hidden = true;
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

modal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

/* ============================================================
   Show more / less essay
   ============================================================ */
const toggleEssay = document.getElementById("toggleEssay");
const essayMore = document.getElementById("essayMore");
toggleEssay.addEventListener("click", () => {
  const isHidden = essayMore.hasAttribute("hidden");
  if (isHidden) {
    essayMore.removeAttribute("hidden");
    toggleEssay.textContent = "Show less";
    toggleEssay.setAttribute("aria-expanded", "true");
  } else {
    essayMore.setAttribute("hidden", "");
    toggleEssay.textContent = "Show more";
    toggleEssay.setAttribute("aria-expanded", "false");
  }
});

/* ============================================================
   Back to top
   ============================================================ */
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 480) toTop.hidden = false;
  else toTop.hidden = true;
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ============================================================
   Review form
   ============================================================ */
const form = document.getElementById("reviewForm");
const list = document.getElementById("reviewList");
const empty = document.getElementById("emptyReviews");
const hint = document.getElementById("formHint");

const SEED_REVIEWS = [
  { name: "Neil Togado", movie: "Spirited Away", rating: 5, comment: "A film that grows with you. I see something different every time I rewatch it." },
  { name: "Karl Duenas", movie: "Spirited Away", rating: 5, comment: "The final ten minutes of this movie are the most exhilarating in modern cinema. Full stop." }
];

function stars(n) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= n ? "★" : '<span class="dim">★</span>';
  }
  return html;
}
function renderReview(r, prepend = false) {
  empty.hidden = true;
  const li = document.createElement("li");
  li.className = "review-item";
  li.innerHTML = `
    <div class="review-head">
      <h4 class="review-name">${escapeHtml(r.name)}</h4>
      <div class="review-stars" aria-label="${r.rating} out of 5">${stars(r.rating)}</div>
    </div>
    <p class="review-movie">${escapeHtml(r.movie)}</p>
    <p class="review-comment">${escapeHtml(r.comment)}</p>
  `;
  if (prepend) list.prepend(li);
  else list.appendChild(li);
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

SEED_REVIEWS.forEach((r) => renderReview(r));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value.trim(),
    movie: form.movie.value.trim(),
    rating: Number(form.rating.value),
    comment: form.comment.value.trim()
  };
  if (!data.name || !data.movie || isNaN(data.rating) || !data.comment) {
    hint.textContent = "Please fill out every field before publishing.";
    hint.className = "form-hint is-error";
    return;
  }
  renderReview(data, true);
  form.reset();
  hint.textContent = "Review published. Thank you for sharing.";
  hint.className = "form-hint is-success";
  setTimeout(() => { hint.textContent = ""; hint.className = "form-hint"; }, 3500);
});
