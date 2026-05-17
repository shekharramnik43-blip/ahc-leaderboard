const rows = document.getElementById("leaderboardRows");
const teamRows = document.getElementById("teamStandingsRows");
const driverPodium = document.getElementById("driverPodium");
const teamPodium = document.getElementById("teamPodium");
const raceResultsGrid = document.getElementById("raceResults");
const driverStatsGrid = document.getElementById("driverStats");
const constructorStrip = document.getElementById("constructorStrip");
const driverSearch = document.getElementById("driverSearch");
const viewCards = document.querySelectorAll("[data-view-target]");
const viewSections = document.querySelectorAll("[data-view]");
const seasonButtons = document.querySelectorAll("[data-season]");
const seasonNotice = document.getElementById("seasonNotice");
const teamLeaderCard = document.getElementById("teamLeaderName").parentElement;
const sortedStandings = [...standings].sort((a, b) => b.points - a.points || a.driver.localeCompare(b.driver));
const teamTotals = [...teamStandings].sort((a, b) => b.points - a.points || a.team.localeCompare(b.team));
const driverStats = standings
  .map((entry) => {
    const wins = raceResults.reduce((count, race) => count + (race.results?.some((result) => result.position === 1 && result.driver === entry.driver) ? 1 : 0), 0);
    const podiums = raceResults.reduce((count, race) => count + (race.results?.some((result) => result.position <= 3 && result.driver === entry.driver) ? 1 : 0), 0);
    return { ...entry, wins, podiums };
  })
  .sort((a, b) => b.points - a.points || a.driver.localeCompare(b.driver));

const winLeader = [...driverStats].sort((a, b) => b.wins - a.wins || b.points - a.points || a.driver.localeCompare(b.driver))[0];
const podiumLeader = [...driverStats].sort((a, b) => b.podiums - a.podiums || b.points - a.points || a.driver.localeCompare(b.driver))[0];
const hotStreakDriver = [...driverStats].sort((a, b) => (b.wins + b.podiums) - (a.wins + a.podiums) || b.points - a.points || a.driver.localeCompare(b.driver))[0];
let activeView = "drivers";

function renderTeamLogo(team) {
  const mark = teamMarks[team] || team.slice(0, 2).toUpperCase();
  const logoUrl = teamLogoUrls[team];

  if (logoUrl) {
    return `<span class="team-logo" aria-hidden="true"><img src="${logoUrl}" alt=""></span>`;
  }

  const wordmarkClass = mark.length > 2 ? " wordmark" : "";
  return `<span class="team-logo${wordmarkClass}" aria-hidden="true">${mark}</span>`;
}

function medalClassForRank(rank) {
  if (rank === 1) {
    return "medal-gold";
  }
  if (rank === 2) {
    return "medal-silver";
  }
  if (rank === 3) {
    return "medal-bronze";
  }
  return "";
}

function renderDriverRows(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredDrivers = normalizedQuery
    ? driverStats.filter((entry) => {
        const displayTeam = (teamDisplayNames[entry.team] || entry.team).toLowerCase();
        return entry.driver.toLowerCase().includes(normalizedQuery) || displayTeam.includes(normalizedQuery) || entry.team.toLowerCase().includes(normalizedQuery);
      })
    : driverStats;

  rows.innerHTML = filteredDrivers
    .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const rank = index + 1;
    const podiumClass = rank <= 3 ? "podium" : "";
    const medalClass = medalClassForRank(rank);

    return `
      <tr class="${podiumClass} rank-${rank}" style="--team-rgb: ${rgb}">
        <td class="rank ${medalClass}">#${rank}</td>
        <td>
          <div class="driver-cell">
            ${renderTeamLogo(entry.team)}
            <span>${entry.driver}</span>
          </div>
        </td>
        <td><span class="team-badge">${renderTeamLogo(entry.team)}${entry.team}</span></td>
        <td class="stat">${entry.wins}</td>
        <td class="stat">${entry.podiums}</td>
        <td class="points">${entry.points}</td>
      </tr>
    `;
  })
  .join("");
}

renderDriverRows();

driverPodium.innerHTML = sortedStandings
  .slice(0, 3)
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const displayTeam = teamDisplayNames[entry.team] || entry.team;

    return `
      <article class="podium-card" style="--team-rgb: ${rgb}">
        <span class="podium-rank">#${index + 1}</span>
        <div class="podium-meta">
          ${renderTeamLogo(entry.team)}
          <span class="podium-title">${entry.driver}</span>
          <span class="podium-subtitle">${displayTeam}</span>
        </div>
        <span class="podium-points">${entry.points}</span>
      </article>
    `;
  })
  .join("");

teamRows.innerHTML = teamTotals
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const displayTeam = teamDisplayNames[entry.team] || entry.team;
    const rank = index + 1;
    const podiumClass = rank <= 3 ? "podium" : "";
    const medalClass = medalClassForRank(rank);

    return `
      <tr class="${podiumClass} rank-${rank}" style="--team-rgb: ${rgb}">
        <td class="rank ${medalClass}">#${rank}</td>
        <td>
          <div class="team-cell">
            <span class="team-badge">${renderTeamLogo(entry.team)}${displayTeam}</span>
          </div>
        </td>
        <td class="points">${entry.points}</td>
      </tr>
    `;
  })
  .join("");

constructorStrip.innerHTML = teamTotals
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const displayTeam = teamDisplayNames[entry.team] || entry.team;

    return `
      <article class="constructor-card" style="--team-rgb: ${rgb}">
        <div class="constructor-top">
          ${renderTeamLogo(entry.team)}
          <strong>${displayTeam}</strong>
        </div>
        <div class="constructor-bottom">
          <span>P${index + 1}</span>
          <span>${entry.points} pts</span>
        </div>
      </article>
    `;
  })
  .join("");

teamPodium.innerHTML = teamTotals
  .slice(0, 3)
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const displayTeam = teamDisplayNames[entry.team] || entry.team;

    return `
      <article class="podium-card" style="--team-rgb: ${rgb}">
        <span class="podium-rank">#${index + 1}</span>
        <div class="podium-meta">
          ${renderTeamLogo(entry.team)}
          <span class="podium-title">${displayTeam}</span>
          <span class="podium-subtitle">Constructor standings</span>
        </div>
        <span class="podium-points">${entry.points}</span>
      </article>
    `;
  })
  .join("");

driverStatsGrid.innerHTML = [winLeader, podiumLeader, hotStreakDriver]
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const labels = [
      { title: "Wins Leader", value: `${entry.wins} wins` },
      { title: "Podium Leader", value: `${entry.podiums} podiums` },
      { title: "Hot Streak", value: `${entry.wins + entry.podiums} top results` }
    ];
    const current = labels[index];

    return `
      <article class="driver-stat-card" style="--team-rgb: ${rgb}">
        ${renderTeamLogo(entry.team)}
        <div class="driver-stat-copy">
          <span>${current.title}</span>
          <strong>${entry.driver}</strong>
          <span>${current.value}</span>
        </div>
      </article>
    `;
  })
  .join("");

raceResultsGrid.innerHTML = raceResults.length
  ? raceResults
      .map((result) => {
        const rgb = teamColors[result.team] || "140, 148, 160";
        const displayTeam = teamDisplayNames[result.team] || result.team;
        const podium = (result.results || [])
          .filter((entry) => entry.position <= 3)
          .map((entry) => `
            <span class="race-podium-chip">
              <strong>P${entry.position}</strong>
              <span>${entry.driver}</span>
            </span>
          `)
          .join("");
        const resultRows = (result.results || [])
          .map((entry) => `
            <li>
              <span class="race-position">P${entry.position}</span>
              <span class="race-driver">${entry.driver}</span>
              <span class="race-points">${entry.racePoints ? `${entry.racePoints} pts` : ""}</span>
            </li>
          `)
          .join("");

        return `
          <article class="race-card" style="--team-rgb: ${rgb}">
            <span class="race-round">${result.round}</span>
            <span class="race-track">${result.track}</span>
            <span class="race-meta">${displayTeam} winner</span>
            <span class="race-winner">${renderTeamLogo(result.team)}${result.winner}</span>
            <div class="race-podium">${podium}</div>
            <ol class="race-list">${resultRows}</ol>
          </article>
        `;
      })
      .join("")
  : '<div class="race-empty">Race results will appear here once you add them.</div>';

document.getElementById("leaderName").textContent = sortedStandings[0]?.driver || "-";
document.getElementById("teamLeaderName").textContent = teamDisplayNames[teamTotals[0]?.team] || teamTotals[0]?.team || "-";
document.getElementById("teamCount").textContent = teamTotals.length;
document.getElementById("topScore").textContent = sortedStandings[0]?.points || "0";
document.getElementById("lastUpdated").textContent = siteMeta.lastUpdated;
document.getElementById("upcomingTitle").textContent = upcomingRace.title;
document.getElementById("upcomingTrack").textContent = upcomingRace.track;
document.getElementById("upcomingRound").textContent = upcomingRace.round;
document.getElementById("upcomingDate").textContent = upcomingRace.date;
document.getElementById("upcomingConditions").textContent = upcomingRace.conditions;
document.getElementById("battleHeadline").textContent = `${sortedStandings[0]?.driver || "-"} vs ${sortedStandings[1]?.driver || "-"}`;
document.getElementById("battleSubline").textContent = `${sortedStandings[0]?.driver || "-"} leads the standings with ${sortedStandings[0]?.points || 0} points.`;
document.getElementById("battleLeaderName").textContent = sortedStandings[0]?.driver || "-";
document.getElementById("battleLeaderPoints").textContent = `${sortedStandings[0]?.points || 0} pts`;
document.getElementById("battleChaserName").textContent = sortedStandings[1]?.driver || "-";
document.getElementById("battleChaserPoints").textContent = `${sortedStandings[1]?.points || 0} pts`;
document.getElementById("battleGap").textContent = `${(sortedStandings[0]?.points || 0) - (sortedStandings[1]?.points || 0)} pts`;
document.getElementById("battleProgressLeader").textContent = `${sortedStandings[0]?.driver || "-"} • ${sortedStandings[0]?.points || 0}`;
document.getElementById("battleProgressChaser").textContent = `${sortedStandings[1]?.driver || "-"} • ${sortedStandings[1]?.points || 0}`;
document.getElementById("battleProgressFill").style.width = `${sortedStandings[0]?.points ? Math.max(18, ((sortedStandings[1]?.points || 0) / sortedStandings[0].points) * 100) : 0}%`;

if (teamTotals[0]?.team) {
  teamLeaderCard.classList.add("is-team-highlight");
  teamLeaderCard.style.setProperty("--team-rgb", teamColors[teamTotals[0].team] || "140, 148, 160");
}

if (sortedStandings[0]?.team) {
  document.getElementById("battleLeaderCard").style.setProperty("--team-rgb", teamColors[sortedStandings[0].team] || "140, 148, 160");
}

if (sortedStandings[1]?.team) {
  document.getElementById("battleChaserCard").style.setProperty("--team-rgb", teamColors[sortedStandings[1].team] || "140, 148, 160");
}

function showView(viewName) {
  if (viewName === activeView) {
    return;
  }

  viewSections.forEach((section) => {
    const shouldShow = section.dataset.view === viewName;

    if (shouldShow) {
      section.classList.remove("is-hidden", "is-leaving");
      section.classList.add("is-entering");
      window.setTimeout(() => section.classList.remove("is-entering"), 360);
      return;
    }

    if (!section.classList.contains("is-hidden")) {
      section.classList.add("is-leaving");
      window.setTimeout(() => {
        section.classList.add("is-hidden");
        section.classList.remove("is-leaving");
      }, 220);
      return;
    }

    section.classList.add("is-hidden");
  });

  viewCards.forEach((card) => {
    const isActive = card.dataset.viewTarget === viewName;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });

  activeView = viewName;
}

viewCards.forEach((card) => {
  card.addEventListener("click", () => showView(card.dataset.viewTarget));
});

driverSearch.addEventListener("input", () => {
  renderDriverRows(driverSearch.value);
});

const motionPanels = document.querySelectorAll(".topbar, .battle-card, .podium-panel, .board, .summary > div, .view-card");

motionPanels.forEach((panel) => {
  panel.classList.add("motion-panel");

  panel.addEventListener("pointermove", (event) => {
    const rect = panel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    panel.style.setProperty("--glow-x", `${(x / rect.width) * 100}%`);
    panel.style.setProperty("--glow-y", `${(y / rect.height) * 100}%`);
    panel.classList.add("is-hovered");
  });

  panel.addEventListener("pointerleave", () => {
    panel.classList.remove("is-hovered");
  });
});

const revealSections = document.querySelectorAll(".battle-card, .podium-grid, .board, .race-board, footer");

revealSections.forEach((section) => {
  section.classList.add("reveal-section");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.18,
  rootMargin: "0px 0px -40px 0px"
});

revealSections.forEach((section) => {
  revealObserver.observe(section);
});

let seasonNoticeTimer;

seasonButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isSeasonTwo = button.dataset.season === "season2";

    seasonButtons.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.season === "season1");
      item.classList.toggle("is-soon", item.dataset.season === "season2");
    });

    if (!isSeasonTwo) {
      seasonNotice.classList.remove("is-visible");
      seasonNotice.textContent = "";
      return;
    }

    seasonNotice.textContent = "Season 2 is coming soon!";
    seasonNotice.classList.add("is-visible");
    window.clearTimeout(seasonNoticeTimer);
    seasonNoticeTimer = window.setTimeout(() => {
      seasonNotice.classList.remove("is-visible");
    }, 2400);
  });
});

window.requestAnimationFrame(() => {
  document.body.classList.add("is-loaded");
});

viewSections.forEach((section) => {
  section.classList.toggle("is-hidden", section.dataset.view !== activeView);
});

viewCards.forEach((card) => {
  const isActive = card.dataset.viewTarget === activeView;
  card.classList.toggle("is-active", isActive);
  card.setAttribute("aria-pressed", String(isActive));
});
