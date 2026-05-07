const rows = document.getElementById("leaderboardRows");
const teamRows = document.getElementById("teamStandingsRows");
const driverPodium = document.getElementById("driverPodium");
const teamPodium = document.getElementById("teamPodium");
const raceResultsGrid = document.getElementById("raceResults");
const driverStatsGrid = document.getElementById("driverStats");
const viewCards = document.querySelectorAll("[data-view-target]");
const viewSections = document.querySelectorAll("[data-view]");
const teamLeaderCard = document.getElementById("teamLeaderName").parentElement;
const sortedStandings = [...standings].sort((a, b) => b.points - a.points || a.driver.localeCompare(b.driver));
const teamTotals = teamsList
  .map((team) => ({
    team,
    points: standings
      .filter((entry) => entry.team === team)
      .reduce((total, entry) => total + entry.points, 0)
  }))
  .sort((a, b) => b.points - a.points || a.team.localeCompare(b.team));
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

function renderTeamLogo(team) {
  const mark = teamMarks[team] || team.slice(0, 2).toUpperCase();
  const logoUrl = teamLogoUrls[team];

  if (logoUrl) {
    return `<span class="team-logo" aria-hidden="true"><img src="${logoUrl}" alt=""></span>`;
  }

  return `<span class="team-logo" aria-hidden="true">${mark}</span>`;
}

rows.innerHTML = driverStats
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const rank = index + 1;
    const podiumClass = rank <= 3 ? "podium" : "";

    return `
      <tr class="${podiumClass}" style="--team-rgb: ${rgb}">
        <td class="rank">#${rank}</td>
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

    return `
      <tr class="${podiumClass}" style="--team-rgb: ${rgb}">
        <td class="rank">#${rank}</td>
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
document.getElementById("battleHeadline").textContent = `${sortedStandings[0]?.driver || "-"} vs ${sortedStandings[1]?.driver || "-"}`;
document.getElementById("battleSubline").textContent = `${sortedStandings[0]?.driver || "-"} leads the standings with ${sortedStandings[0]?.points || 0} points.`;
document.getElementById("battleLeaderName").textContent = sortedStandings[0]?.driver || "-";
document.getElementById("battleLeaderPoints").textContent = `${sortedStandings[0]?.points || 0} pts`;
document.getElementById("battleChaserName").textContent = sortedStandings[1]?.driver || "-";
document.getElementById("battleChaserPoints").textContent = `${sortedStandings[1]?.points || 0} pts`;
document.getElementById("battleGap").textContent = `${(sortedStandings[0]?.points || 0) - (sortedStandings[1]?.points || 0)} pts`;

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
  viewSections.forEach((section) => {
    section.classList.toggle("is-hidden", section.dataset.view !== viewName);
  });

  viewCards.forEach((card) => {
    const isActive = card.dataset.viewTarget === viewName;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

viewCards.forEach((card) => {
  card.addEventListener("click", () => showView(card.dataset.viewTarget));
});

showView("drivers");
