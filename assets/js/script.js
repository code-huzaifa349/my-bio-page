const profile = {
  name: "Huzaifa Khan",
  bio: "Creator • Developer • Designer",
  avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHjHmBBIOcWKQ/profile-displayphoto-crop_800_800/B4DaC4DC8UGsAI-/0/1789794203015?e=1795651200&v=beta&t=yWuY1NIcJlBhTOEEwyEmqdfNbXvHh3iL2wOb2hCsYf0",
  links: [
    { label: "Portfolio", url: "https://huzaifa-portfolio40.vercel.app/", icon: "🌐" },
    { label: "GitHub", url: "https://github.com/code-huzaifa349", icon: '<i class="fa-brands fa-github"></i>' },
    { label: "TikTok", url: "https://www.tiktok.com/@code.huzaifa?lang=en", icon: '<i class="fa-brands fa-tiktok"></i>' },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/huzaifa-khan-bb3660435/", icon: '<i class="fa-brands fa-linkedin"></i>' },
  ],
};

let els = {};

function cacheEls() {
  els = {
    avatar: document.getElementById("avatar"),
    name: document.getElementById("name"),
    bio: document.getElementById("bio"),
    links: document.getElementById("links"),
    share: document.getElementById("shareBtn"),
    copy: document.getElementById("copyBtn"),
    toast: document.getElementById("toast"),
  };
}

function renderProfile() {
  if (!els.avatar || !els.name || !els.bio || !els.links) return;
  els.avatar.src = profile.avatar;
  els.avatar.alt = profile.name;
  els.name.textContent = profile.name;
  els.bio.textContent = profile.bio;
  els.links.innerHTML = profile.links
    .map(
      (l) =>
        `<a class="link-btn" href="${l.url}" target="_blank" rel="noopener noreferrer">
          <span>${l.icon} ${l.label}</span>
          <span class="icon">↗</span>
        </a>`
    )
    .join("");
}

function showToast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(els.toast._t);
  els.toast._t = setTimeout(() => els.toast.classList.remove("show"), 2200);
}

async function shareProfile() {
  const data = { title: profile.name, text: profile.bio, url: location.href };
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (err) {
      if (err && err.name !== "AbortError") showToast("Share failed");
      return;
    }
  }
  await copyLink();
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(location.href);
    showToast("Link copied");
  } catch (e) {
    showToast("Copy failed");
  }
}

function init() {
  cacheEls();
  renderProfile();
  els.share?.addEventListener("click", shareProfile);
  els.copy?.addEventListener("click", copyLink);
}

document.addEventListener("DOMContentLoaded", init);
