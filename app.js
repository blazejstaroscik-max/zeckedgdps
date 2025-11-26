// ---------- DATA (all text = "Placeholder") ----------

// You can change these later to real data.
// If you add a real videoUrl, clicking the row will open it.
const levels = [
  {
    id: 1,
    name: "Placeholder",
    creator: "Placeholder",
    verifier: "Placeholder",
    difficulty: "Placeholder",
    requirement: "100%",
    position: 1,
    objectCount: 0,
    videoUrl: "" // put YouTube/Twitch link here
  }
];

const players = [
  {
    rank: 1,
    name: "Placeholder",
    country: "Placeholder",
    points: 0,
    listRecords: 0,
    hardest: "Placeholder"
  }
];

const metrics = {
  totalRecords: 0,
  season: "Season 1"
};

// ---------- RENDER LIST TABLE ----------

function getDifficultyClass(diff) {
  const d = (diff || "").toLowerCase();
  if (d.includes("extreme")) return "difficulty-extreme";
  if (d.includes("insane")) return "difficulty-insane";
  if (d.includes("hard")) return "difficulty-hard";
  if (d.includes("medium")) return "difficulty-medium";
  if (d.includes("easy")) return "difficulty-easy";
  return "";
}

function renderListTable() {
  const container = document.getElementById("list-table-container");
  if (!container) return;

  const sorted = [...levels].sort((a, b) => a.position - b.position);

  const rows = sorted.map(level => {
    const diffClass = getDifficultyClass(level.difficulty);
    const clickableClass = level.videoUrl ? "level-clickable" : "";
    const videoAttr = level.videoUrl ? ` data-video-url="${level.videoUrl}"` : "";

    return `
      <tr class="${clickableClass}"${videoAttr}>
        <td>#${level.position}</td>
        <td class="level-name">${level.name}</td>
        <td>${level.creator}</td>
        <td>${level.verifier}</td>
        <td class="${diffClass}">${level.difficulty}</td>
        <td>${level.requirement}</td>
        <td>${level.objectCount.toLocaleString()}</td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Level</th>
          <th>Creator</th>
          <th>Verifier</th>
          <th>Difficulty</th>
          <th>Req.</th>
          <th>Objects</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;

  // Click to open verification video
  const clickableRows = container.querySelectorAll("tbody tr.level-clickable");
  clickableRows.forEach(row => {
    const url = row.dataset.videoUrl;
    if (!url) return;
    row.addEventListener("click", () => {
      window.open(url, "_blank", "noopener");
    });
  });
}

// ---------- RENDER PLAYERS TABLE ----------

function renderPlayersTable() {
  const container = document.getElementById("players-table-container");
  if (!container) return;

  const sorted = [...players].sort((a, b) => a.rank - b.rank);

  const rows = sorted.map(p => {
    return `
      <tr>
        <td>#${p.rank}</td>
        <td>${p.name}</td>
        <td>${p.country}</td>
        <td>${p.points}</td>
        <td>${p.listRecords}</td>
        <td>${p.hardest}</td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Country</th>
          <th>Points</th>
          <th>Records</th>
          <th>Hardest</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

// ---------- METRICS ----------

function updateMetrics() {
  const levelCountEl = document.getElementById("metrics-level-count");
  const playerCountEl = document.getElementById("metrics-player-count");
  const recordCountEl = document.getElementById("metrics-record-count");
  const seasonEl = document.getElementById("metrics-season");
  const navListCount = document.getElementById("nav-list-count");
  const highlightName = document.getElementById("highlight-level-name");
  const highlightMeta = document.getElementById("highlight-level-meta");
  const highlightStatus = document.getElementById("highlight-status");

  const levelCount = levels.length;
  const playerCount = players.length;

  if (levelCountEl) levelCountEl.textContent = levelCount;
  if (playerCountEl) playerCountEl.textContent = playerCount;
  if (recordCountEl) recordCountEl.textContent = metrics.totalRecords;
  if (seasonEl) seasonEl.textContent = metrics.season;
  if (navListCount) navListCount.textContent = levelCount;

  const top = [...levels].sort((a, b) => a.position - b.position)[0];
  if (top) {
    if (highlightName) highlightName.textContent = top.name;
    if (highlightMeta) {
      highlightMeta.textContent = `Position #${top.position} • ${top.difficulty} • Verifier: ${top.verifier}`;
    }
    if (highlightStatus) highlightStatus.textContent = "Top Demon";
  }
}

// ---------- NAVIGATION ----------

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-link");
  const views = document.querySelectorAll(".page-view");

  function showPage(page) {
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === page);
    });

    views.forEach(view => {
      const name = view.getAttribute("data-view");
      let show = false;
      if (page === "list") show = name === "players";        // default right view
      if (page === "players") show = name === "players";
      if (page === "submit") show = name === "submit";
      if (page === "account") show = name === "account";
      if (page === "guidelines") show = name === "guidelines";
      if (page === "contact") show = name === "contact";
      view.classList.toggle("active", show);
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => showPage(btn.dataset.page));
  });

  showPage("list");
}

// ---------- ACCOUNT FORM (DEMO ONLY) ----------

function setupAccountForm() {
  const form = document.getElementById("account-form");
  const feedback = document.getElementById("account-feedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("account-username").value.trim();
    const email = document.getElementById("account-email").value.trim();
    const pw1 = document.getElementById("account-password").value;
    const pw2 = document.getElementById("account-password2").value;

    if (!username || !email || !pw1 || !pw2) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "#ff4d7a";
      return;
    }

    if (pw1 !== pw2) {
      feedback.textContent = "Passwords do not match.";
      feedback.style.color = "#ff4d7a";
      return;
    }

    feedback.textContent = "Account created locally (demo). Hook this to your backend.";
    feedback.style.color = "#3ad18b";
    form.reset();
  });
}

// ---------- INIT ----------

document.addEventListener("DOMContentLoaded", () => {
  renderListTable();
  renderPlayersTable();
  updateMetrics();
  setupNavigation();
  setupAccountForm();
});
