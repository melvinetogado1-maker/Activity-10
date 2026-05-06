/* ============================================================
   Cineframe — interactivity
   ============================================================ */

const MOVIES = [
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan",
    runtime: "175 min",
    rating: 4.9,
    poster: "https://image.tmdb.org/t/p/w780/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    synopsis:
      "The aging patriarch of an organized crime dynasty in postwar New York transfers control of his clandestine empire to his reluctant youngest son. A study of family, loyalty, and the price of power."
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Thriller, Drama",
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    runtime: "132 min",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    synopsis:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    title: "Spirited Away",
    year: 2001,
    genre: "Animation, Fantasy",
    director: "Hayao Miyazaki",
    cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
    runtime: "125 min",
    rating: 4.9,
    poster: "https://image.tmdb.org/t/p/w780/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts."
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi, Drama",
    director: "Denis Villeneuve",
    cast: "Ryan Gosling, Harrison Ford, Ana de Armas",
    runtime: "164 min",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    synopsis:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who has been missing for thirty years."
  },
  {
    title: "In the Mood for Love",
    year: 2000,
    genre: "Romance, Drama",
    director: "Wong Kar-wai",
    cast: "Tony Leung, Maggie Cheung",
    runtime: "98 min",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg",
    synopsis:
      "Two neighbors form a strong bond after both suspect extramarital activities of their spouses. However, they agree to keep their bond platonic so as not to commit similar wrongs."
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime, Drama",
    director: "Quentin Tarantino",
    cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
    runtime: "154 min",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    synopsis:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Sci-Fi, Comedy",
    director: "Daniels",
    cast: "Michelle Yeoh, Ke Huy Quan, Stephanie Hsu",
    runtime: "139 min",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    synopsis:
      "An aging Chinese immigrant is swept up in an insane adventure where she alone can save existence by exploring other universes and connecting with the lives she could have led."
  },
  {
    title: "Whiplash",
    year: 2014,
    genre: "Drama, Music",
    director: "Damien Chazelle",
    cast: "Miles Teller, J.K. Simmons",
    runtime: "106 min",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    synopsis:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action, Adventure",
    director: "George Miller",
    cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    runtime: "120 min",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    synopsis:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max."
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy, Drama",
    director: "Wes Anderson",
    cast: "Ralph Fiennes, Tony Revolori",
    runtime: "100 min",
    rating: 4.5,
    poster: "https://image.tmdb.org/t/p/w780/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    synopsis:
      "A writer encounters the owner of an aging high-class hotel, who tells of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi, Adventure",
    director: "Denis Villeneuve",
    cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
    runtime: "166 min",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    synopsis:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. He must choose between the love of his life and the fate of the universe."
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: "Romance, Sci-Fi",
    director: "Michel Gondry",
    cast: "Jim Carrey, Kate Winslet",
    runtime: "108 min",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/5MwkWH9tYHv3mV9OdYBMMPLxpyc.jpg",
    synopsis:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories. As they relive their love story, they discover what they cannot bear to forget."
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
  document.body.classList.add("modal-open");
}
function closeModal() {
  modal.hidden = true;
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
  { name: "Mara Lim", movie: "Spirited Away", rating: 5, comment: "A film that grows with you. I see something different every time I rewatch it." },
  { name: "Diego Cruz", movie: "Whiplash", rating: 5, comment: "The final ten minutes of this movie are the most exhilarating in modern cinema. Full stop." }
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
  if (!data.name || !data.movie || !data.rating || !data.comment) {
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
