/*
 * ===============================
 *  DATA CONFIG – EDIT THIS PART
 * ===============================
 * Add / remove levels & players here.
 * No other changes needed for basic usage.
 */

// List levels – edit / add your own
const levels = [
  {
    id: 1,
    name: "PLACEHOLDER",
    creator: "PLACEHOLDER",
    verifier: "PLACEHOLDER",
    difficulty: "PLACEHOLDER",
    requirement: "100%",
    position: 1,
    cps: 15,
    objectCount: 120000
  },
  {
    id: 2,
    name: "PLACEHOLDER",
    creator: "PLACEHOLDER",
    verifier: "PLACEHOLDER",
    difficulty: "PLACEHOLDER",
    requirement: "100%",
    position: 2,
    cps: 13,
    objectCount: 95000
  },
  {
    id: 3,
    name: "PLACEHOLDER",
    creator: "PLACEHOLDER",
    verifier: "PLACEHOLDER",
    difficulty: "PLACEHOLDER",
    requirement: "100%",
    position: 3,
    cps: 12,
    objectCount: 80000
  },
  {
    id: 4,
    name: "PLACEHOLDER",
    creator: "PLACEHOLDER",
    verifier: "PLACEHOLDER",
    difficulty: "PLACEHOLDER",
    requirement: "100%",
    position: 4,
    cps: 11,
    objectCount: 70000
  },
  {
    id: 5,
    name: "PLACEHOLDER",
    creator: "PLACEHOLDER",
    verifier: "PLACEHOLDER",
    difficulty: "PLACEHOLDERn",
    requirement: "100%",
    position: 5,
    cps: 10,
    objectCount: 60000
  }
];

// Player rankings – edit / add your own
const players = [
  {
    name: "zckMS",
    country: "UK",
    points: 0,
    listRecords: 0,
    hardest: "Yatagarasu",
    rank: 1
  },
  {
    name: "gw1pe",
    country: "PL",
    points: 0,
    listRecords: 0,
    hardest: "The Flawless",
    rank: 2
  },
  {
    name: "devski",
    country: "PL",
    points: 0,
    listRecords: 0,
    hardest: "Pyromaniac",
    rank: 3
  },
  {
    name: "JALURIS",
    country: "PL",
    points: 0,
    listRecords: 0,
    hardest: "Windy Landscape",
    rank: 4
  }
];

// Simple metrics simulation – hook this to real data later if you want
const metrics = {
  totalRecords: 0,
};

/*
 * ===============================
 *  TRANSLATIONS
 * ===============================
 */

const translations = {
  en: {
    brand_title: "Private Server Demonlist",
    brand_sub: "Geometry Dash records & rankings",
    nav_list: "The List",
    nav_players: "Player Rankings",
    nav_submit: "Record Submissions",
    nav_account: "Account Creation",
    nav_guidelines: "Guidelines",
    nav_contact: "Contact",
    lang_label: "Language",
    header_indicator: "Online demon submissions enabled",
    metrics_title: "Server Overview",
    metrics_levels: "levels tracked",
    metrics_active_players: "Active players:",
    metrics_total_records: "Total records:",
    metrics_highlight: "Highlight",
    metrics_highlight_tip: "Submit a record to claim a spot on the list.",
    card_left_list: "The List",
    card_left_sub: "Ranked demons for this private server.",
    card_right_players: "Top Players",
    card_right_players_sub: "Ranking based on weighted demon list completions.",
    card_right_submit: "Submit a Record",
    card_right_submit_sub: "Fill out the form below. A list moderator will review your submission.",
    submit_player_name: "Player name",
    submit_level_name: "Level name",
    submit_percentage: "Percent (100% for completions)",
    submit_video: "Video link (YouTube, Twitch)",
    submit_fps: "FPS / Hz",
    submit_notes: "Extra notes (optional)",
    submit_button: "Send submission",
    submit_reset: "Reset",
    card_right_account: "Create Account",
    card_right_account_sub: "Accounts are used for submissions and player profiles.",
    account_username: "Username",
    account_email: "Email",
    account_password: "Password",
    account_password2: "Confirm password",
    account_create_button: "Create account",
    account_note: "This is a frontend-only demo. Hook this form into your private server backend to store real accounts securely.",
    card_right_guidelines: "Submission Guidelines",
    card_right_guidelines_sub: "Please read carefully before submitting any records.",
    guide_1: "Only records from this private server are accepted (no main server copies).",
    guide_2: "Records must be 100% or the highest verified percentage on the list.",
    guide_3: "Video must clearly show level name, attempt, and endscreen.",
    guide_4: "No hacked clients, speed hacks, or physics modifications.",
    guide_5: "FPS bypass is allowed within server rules; always state your FPS / Hz.",
    guide_6: "Raw or lightly edited footage is preferred; do not cut gameplay.",
    guide_7: "If your in-game name is different from your list account, specify that in notes.",
    guide_8: "List moderators may request additional proof (clicks, live streams, etc.).",
    guide_9: "Toxic behavior or harassment may result in your records being removed.",
    card_right_contact: "Contact & Support",
    card_right_contact_sub: "Join our Discord to talk with list mods and the community.",
    contact_discord_label: "Official Demonlist Discord:",
    contact_discord_note: "Use the #submissions channel for records and #support for any questions.",
    contact_email_title: "Business / staff contact",
    contact_email_text: "For staff applications or larger projects, contact the head list moderator:",
    footer_made_by: "Made for Geometry Dash private server demonlist.",
    footer_version: "Frontend v1.0",
    footer_status: "Status: beta"
  },
  pl: {
    brand_title: "Demonlista Prywatnego Serwera",
    brand_sub: "Rekordy i rankingi Geometry Dash",
    nav_list: "Lista",
    nav_players: "Ranking Graczy",
    nav_submit: "Zgłoszenie Rekordu",
    nav_account: "Tworzenie konta",
    nav_guidelines: "Zasady",
    nav_contact: "Kontakt",
    lang_label: "Język",
    header_indicator: "Zgłoszenia demonów online włączone",
    metrics_title: "Podgląd serwera",
    metrics_levels: "poziomów na liście",
    metrics_active_players: "Aktywni gracze:",
    metrics_total_records: "Łącznie rekordów:",
    metrics_highlight: "Wyróżniony poziom",
    metrics_highlight_tip: "Wyślij rekord, aby zdobyć miejsce na liście.",
    card_left_list: "Lista Demonów",
    card_left_sub: "Ranking demonów na tym prywatnym serwerze.",
    card_right_players: "Najlepsi gracze",
    card_right_players_sub: "Ranking oparty na przejściach demonów z listy.",
    card_right_submit: "Wyślij rekord",
    card_right_submit_sub: "Wypełnij formularz. Moderator listy sprawdzi zgłoszenie.",
    submit_player_name: "Nazwa gracza",
    submit_level_name: "Nazwa poziomu",
    submit_percentage: "Procent (100% dla przejść)",
    submit_video: "Link do nagrania (YouTube, Twitch)",
    submit_fps: "FPS / Hz",
    submit_notes: "Dodatkowe informacje (opcjonalne)",
    submit_button: "Wyślij zgłoszenie",
    submit_reset: "Wyczyść",
    card_right_account: "Utwórz konto",
    card_right_account_sub: "Konta są używane do zgłoszeń i profili graczy.",
    account_username: "Nazwa użytkownika",
    account_email: "E-mail",
    account_password: "Hasło",
    account_password2: "Potwierdź hasło",
    account_create_button: "Utwórz konto",
    account_note: "To tylko demo frontendu. Podłącz formularz do backendu serwera, aby bezpiecznie przechowywać konta.",
    card_right_guidelines: "Zasady zgłoszeń",
    card_right_guidelines_sub: "Przeczytaj dokładnie przed wysłaniem rekordu.",
    guide_1: "Akceptujemy tylko rekordy z tego prywatnego serwera (bez kopii z main serwera).",
    guide_2: "Rekordy muszą być 100% lub najwyższym potwierdzonym procentem na liście.",
    guide_3: "Nagranie musi wyraźnie pokazywać nazwę poziomu, próbę i ekran końcowy.",
    guide_4: "Zakaz cheatów, speedhacków i modyfikacji fizyki.",
    guide_5: "FPS bypass dozwolony w ramach zasad serwera – zawsze podaj FPS / Hz.",
    guide_6: "Preferowane są surowe nagrania – nie wycinaj gameplayu.",
    guide_7: "Jeśli nazwa w grze różni się od konta na liście, napisz to w uwagach.",
    guide_8: "Moderatorzy listy mogą poprosić o dodatkowy dowód (kliki, stream itp.).",
    guide_9: "Toksyczne zachowanie może skończyć się usunięciem rekordów.",
    card_right_contact: "Kontakt i wsparcie",
    card_right_contact_sub: "Dołącz do Discorda, aby porozmawiać z moderatorami listy.",
    contact_discord_label: "Oficjalny Discord demonlisty:",
    contact_discord_note: "Użyj kanału #submissions do rekordów i #support do pytań.",
    contact_email_title: "Kontakt dla spraw technicznych",
    contact_email_text: "W sprawie rekrutacji lub projektów napisz do głównego moderatora listy:",
    footer_made_by: "Stworzone dla demonlisty prywatnego serwera Geometry Dash.",
    footer_version: "Frontend v1.0",
    footer_status: "Status: beta"
  },
  ru: {
    brand_title: "Демонлист приватного сервера",
    brand_sub: "Рекорды и рейтинги Geometry Dash",
    nav_list: "Список",
    nav_players: "Рейтинг игроков",
    nav_submit: "Отправить рекорд",
    nav_account: "Создать аккаунт",
    nav_guidelines: "Правила",
    nav_contact: "Контакты",
    lang_label: "Язык",
    header_indicator: "Онлайн-отправка рекордов включена",
    metrics_title: "Обзор сервера",
    metrics_levels: "уровней в списке",
    metrics_active_players: "Активные игроки:",
    metrics_total_records: "Всего рекордов:",
    metrics_highlight: "Лучший уровень",
    metrics_highlight_tip: "Отправьте рекорд, чтобы попасть в список.",
    card_left_list: "Список демонов",
    card_left_sub: "Ранжированные демоны этого приватного сервера.",
    card_right_players: "Топ игроков",
    card_right_players_sub: "Рейтинг основан на прохождениях демонов из списка.",
    card_right_submit: "Отправить рекорд",
    card_right_submit_sub: "Заполните форму. Модератор списка проверит ваш рекорд.",
    submit_player_name: "Ник игрока",
    submit_level_name: "Название уровня",
    submit_percentage: "Процент (100% для прохождений)",
    submit_video: "Ссылка на видео (YouTube, Twitch)",
    submit_fps: "FPS / Гц",
    submit_notes: "Дополнительная информация (необязательно)",
    submit_button: "Отправить рекорд",
    submit_reset: "Сбросить",
    card_right_account: "Создание аккаунта",
    card_right_account_sub: "Аккаунты используются для заявок и профилей игроков.",
    account_username: "Имя пользователя",
    account_email: "E-mail",
    account_password: "Пароль",
    account_password2: "Подтвердите пароль",
    account_create_button: "Создать аккаунт",
    account_note: "Это только фронтенд-демо. Подключите эту форму к backend-части сервера для безопасного хранения аккаунтов.",
    card_right_guidelines: "Правила отправки рекордов",
    card_right_guidelines_sub: "Пожалуйста, внимательно прочитайте перед отправкой.",
    guide_1: "Принимаются только рекорды с этого приватного сервера (без копий с основного).",
    guide_2: "Рекорды должны быть 100% или максимальным подтверждённым процентом в списке.",
    guide_3: "На видео должны быть видны название уровня, попытка и экран конца.",
    guide_4: "Запрещены читы, спидхаки и моды физики.",
    guide_5: "FPS-bypass разрешён в рамках правил сервера; всегда указывайте FPS / Гц.",
    guide_6: "Желательно сырое или слабо отредактированное видео; не обрезайте геймплей.",
    guide_7: "Если ник в игре отличается от ника в списке, укажите это в заметках.",
    guide_8: "Модераторы списка могут запросить дополнительное доказательство (клики, стрим и т. д.).",
    guide_9: "Токсичное поведение может привести к удалению рекордов.",
    card_right_contact: "Контакты и поддержка",
    card_right_contact_sub: "Заходите в Discord, чтобы общаться с модераторами и игроками.",
    contact_discord_label: "Официальный Discord демонлиста:",
    contact_discord_note: "Используйте канал #submissions для рекордов и #support для вопросов.",
    contact_email_title: "Контакт для важных вопросов",
    contact_email_text: "По заявкам в стафф или крупным проектам пишите главному модератору списка:",
    footer_made_by: "Сайт для демонлиста приватного сервера Geometry Dash.",
    footer_version: "Фронтенд v1.0",
    footer_status: "Статус: бета"
  }
};

/*
 * ===============================
 *  RENDERING FUNCTIONS
 * ===============================
 */

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

  const rows = sorted.map(level => {
    const diffClass = getDifficultyClass(level.difficulty);
    return `
      <tr>
        <td>#${level.position}</td>
        <td class="level-name">${level.name}</td>
        <td>${level.creator}</td>
        <td>${level.verifier}</td>
        <td class="level-difficulty ${diffClass}">${level.difficulty}</td>
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
}

function renderPlayersTable() {
  const container = document.getElementById("players-table-container");
  const sorted = [...players].sort((a, b) => a.rank - b.rank);

  const rows = sorted.map(player => {
    return `
      <tr>
        <td class="player-rank">#${player.rank}</td>
        <td>
          <div class="player-name-main">${player.name}</div>
          <div class="player-sub">${player.country}</div>
        </td>
        <td>${player.points}</td>
        <td>${player.listRecords}</td>
        <td>${player.hardest}</td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
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

function updateMetrics() {
  document.getElementById("nav-list-count").textContent = levels.length;
  document.getElementById("metrics-level-count").textContent = levels.length;
  document.getElementById("metrics-player-count").textContent = players.length;
  document.getElementById("metrics-record-count").textContent = metrics.totalRecords;
  document.getElementById("metrics-season").textContent = metrics.season;

  const top = [...levels].sort((a, b) => a.position - b.position)[0];
  if (top) {
    document.getElementById("highlight-level-name").textContent = top.name;
    document.getElementById("highlight-level-meta").textContent =
      `#${top.position} • ${top.difficulty} • Verifier: ${top.verifier}`;
    document.getElementById("highlight-status").textContent = "#1 Demon";
  }
}

/*
 * ===============================
 *  NAVIGATION & PAGES
 * ===============================
 */

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-link");
  const rightViews = document.querySelectorAll(".page-view");
  const leftCardTitle = document.getElementById("left-card-title");
  const leftCardSubtitle = document.getElementById("left-card-subtitle");

  function setActivePage(page) {
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === page);
    });

    rightViews.forEach(view => {
      const viewName = view.getAttribute("data-view");
      let show = false;
      if (page === "players") show = viewName === "players";
      if (page === "submit") show = viewName === "submit";
      if (page === "account") show = viewName === "account";
      if (page === "guidelines") show = viewName === "guidelines";
      if (page === "contact") show = viewName === "contact";
      if (page === "list") show = viewName === "players"; // default right side on list

      view.classList.toggle("active", show);
    });

    // Left card always shows the list (can still be translated)
    leftCardTitle.dataset.i18n = "card_left_list";
    leftCardSubtitle.dataset.i18n = "card_left_sub";

    applyTranslations(currentLang);
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => setActivePage(btn.dataset.page));
  });

  setActivePage("list");
}

/*
 * ===============================
 *  LANGUAGE SWITCH
 * ===============================
 */

let currentLang = "en";

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function setupLanguageSwitcher() {
  const select = document.getElementById("lang-select");
  select.value = currentLang;

  select.addEventListener("change", () => {
    currentLang = select.value;
    applyTranslations(currentLang);
  });

  applyTranslations(currentLang);
}

/*
 * ===============================
 *  FORM HANDLERS (DEMO ONLY)
 * ===============================
 */

function setupForms() {
  const submitForm = document.getElementById("submit-form");
  const submitFeedback = document.getElementById("submit-feedback");

  if (submitForm) {
    submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitFeedback.textContent =
        currentLang === "pl"
          ? "Zgłoszenie zapisane lokalnie (demo). Podłącz backend, aby je naprawdę wysłać."
          : currentLang === "ru"
          ? "Рекорд сохранён локально (демо). Подключите backend, чтобы отправлять его на сервер."
          : "Record saved locally (demo). Connect a backend to actually submit it.";
      submitFeedback.style.color = "#3ad18b";
      submitForm.reset();
    });
  }

  const accountForm = document.getElementById("account-form");
  const accountFeedback = document.getElementById("account-feedback");

  if (accountForm) {
    accountForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const pw1 = document.getElementById("account-password").value;
      const pw2 = document.getElementById("account-password2").value;
      if (pw1 !== pw2) {
        accountFeedback.textContent =
          currentLang === "pl"
            ? "Hasła nie są takie same."
            : currentLang === "ru"
            ? "Пароли не совпадают."
            : "Passwords do not match.";
        accountFeedback.style.color = "#ff4d7a";
        return;
      }

      accountFeedback.textContent =
        currentLang === "pl"
          ? "Konto utworzone lokalnie (demo)."
          : currentLang === "ru"
          ? "Аккаунт создан локально (демо)."
          : "Account created locally (demo).";
      accountFeedback.style.color = "#3ad18b";
      accountForm.reset();
    });
  }
}

/*
 * ===============================
 *  INIT
 * ===============================
 */

document.addEventListener("DOMContentLoaded", () => {
  renderListTable();
  renderPlayersTable();
  updateMetrics();
  setupNavigation();
  setupLanguageSwitcher();
  setupForms();
});

