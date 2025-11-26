// ====================================================
//  LEVEL DATA (original functional version)
// ====================================================

const levels = [
  {
    id: 1,
    name: "Crimson Impact",
    creator: "Nova",
    verifier: "Flux",
    difficulty: "Extreme Demon",
    requirement: "100%",
    position: 1,
    cps: 15,
    objectCount: 120000,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Azure Collapse",
    creator: "Rift",
    verifier: "Hikari",
    difficulty: "Extreme Demon",
    requirement: "100%",
    position: 2,
    cps: 13,
    objectCount: 95000,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Mechanical Storm",
    creator: "Bolt",
    verifier: "Raiku",
    difficulty: "Insane Demon",
    requirement: "100%",
    position: 3,
    cps: 11,
    objectCount: 83000,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

// ====================================================
//  PLAYER DATA (original functional version)
// ====================================================

const players = [
  {
    rank: 1,
    name: "Flux",
    country: "US",
    points: 3892,
    listRecords: 12,
    hardest: "Crimson Impact"
  },
  {
    rank: 2,
    name: "Hikari",
    country: "JP",
    points: 2714,
    listRecords: 9,
    hardest: "Azure Collapse"
  },
  {
    rank: 3,
    name: "Nova",
    country: "SE",
    points: 1985,
    listRecords: 6,
    hardest: "Mechanical Storm"
  }
];

// ====================================================
//  METRICS
// ====================================================

const metrics = {
  totalRecords: 27,
  season: "Season 1"
};

// ====================================================
//  RENDER LIST TABLE
// ====================================================

function getDifficultyClass(diff) {
  const d = diff.toLowerCase();
  if (d.includes("extreme")) return "difficulty-extreme";
  if (d.includes("insane")) return "difficulty-insane";
  if (d.includes("hard")) return "difficulty-hard";
  if (d.includes("medium")) return "difficulty-medium";
  if (d.includes("easy")) return "difficulty-easy";
  return "";
}

function renderListTable() {
  const container = document.getElementById("list-table-container");
  const sorted = [...levels].sort((a, b) => a.position - b.position);

  const rows = sorted
    .map(level => {
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
    })
    .join("");

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

  // CLICK TO OPEN VERIFICATION VIDEO
  const clickableRows = container.querySelectorAll("tbody tr.level-clickable");
  clickableRows.forEach(row => {
    row.addEventListener("click", () => {
      const url = row.dataset.videoUrl;
      if (url) window.open(url, "_blank", "noopener");
    });
  });
}

// ====================================================
//  PLAYER RANKINGS TABLE
// ====================================================

function renderPlayersTable() {
  const container = document.getElementById("players-table-container");

  const rows = players
    .map(player => {
      return `
        <tr>
          <td>#${player.rank}</td>
          <td>${player.name}</td>
          <td>${player.country}</td>
          <td>${player.points}</td>
          <td>${player.listRecords}</td>
          <td>${player.hardest}</td>
        </tr>
      `;
    })
    .join("");

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
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ====================================================
//  UPDATE METRICS
// ====================================================

function updateMetrics() {
  document.getElementById("metrics-level-count").textContent = levels.length;
  document.getElementById("metrics-player-count").textContent = players.length;
  document.getElementById("metrics-record-count").textContent = metrics.totalRecords;
  document.getElementById("metrics-season").textContent = metrics.season;
  document.getElementById("nav-list-count").textContent = levels.length;

  const top = [...levels].sort((a, b) => a.position - b.position)[0];
  if (top) {
    document.getElementById("highlight-level-name").textContent = top.name;
    document.getElementById("highlight-level-meta").textContent =
      `Position #${top.position} • ${top.difficulty} • Verifier: ${top.verifier}`;
  }
}

// ====================================================
//  NAVIGATION
// ====================================================

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-link");
  const views = document.querySelectorAll(".page-view");

  function showPage(pageName) {
    navButtons.forEach(btn =>
      btn.classList.toggle("active", btn.dataset.page === pageName)
    );

    views.forEach(view => {
      const viewName = view.getAttribute("data-view");

      let show = false;
      if (pageName === "list") show = viewName === "players";
      if (pageName === "players") show = viewName === "players";
      if (pageName === "submit") show = viewName === "submit";
      if (pageName === "account") show = viewName === "account";
      if (pageName === "guidelines") show = viewName === "guidelines";
      if (pageName === "contact") show = viewName === "contact";

      view.classList.toggle("active", show);
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showPage(btn.dataset.page);
    });
  });

  showPage("list");
}

// ====================================================
//  ACCOUNT FORM LOGIC (FRONTEND ONLY)
// ====================================================

function setupAccountForm() {
  const form = document.getElementById("account-form");
  const feedback = document.getElementById("account-feedback");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("account-username").value.trim();
    const email = document.getElementById("account-email").value.trim();
    const pw1 = document.getElementById("account-password").value;
    const pw2 = document.getElementById("account-password2").value;

    if (!username || !email || !pw1 || !pw2) {
      feedback.textContent = "Please fill out all fields.";
      feedback.style.color = "#ff4d7a";
      return;
    }

    if (pw1 !== pw2) {
      feedback.textContent = "Passwords do not match.";
      feedback.style.color = "#ff4d7a";
      return;
    }

    feedback.textContent = "Account created locally (demo only).";
    feedback.style.color = "#3ad18b";
    form.reset();
  });
}

// ====================================================
//  INIT
// ====================================================

document.addEventListener("DOMContentLoaded", () => {
  renderListTable();
  renderPlayersTable();
  updateMetrics();
  setupNavigation();
  setupAccountForm();
});
