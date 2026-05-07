const rows = document.getElementById("leaderboardRows");
const teamRows = document.getElementById("teamStandingsRows");
const driverPodium = document.getElementById("driverPodium");
const teamPodium = document.getElementById("teamPodium");
const raceResultsGrid = document.getElementById("raceResults");
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

rows.innerHTML = sortedStandings
  .map((entry, index) => {
    const rgb = teamColors[entry.team] || "140, 148, 160";
    const rank = index + 1;
    const podiumClass = rank <= 3 ? "podium" : "";

    return `
      <tr class="${podiumClass}" style="--team-rgb: ${rgb}">
        <td class="rank">#${rank}</td>
        <td>
          <div class="driver-cell">
            <span class="team-stripe" aria-hidden="true"></span>
            <span>${entry.driver}</span>
          </div>
        </td>
        <td><span class="team-badge">${entry.team}</span></td>
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
            <span class="team-stripe" aria-hidden="true"></span>
            <span class="team-badge">${displayTeam}</span>
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
          <span class="podium-title">${displayTeam}</span>
          <span class="podium-subtitle">Constructor standings</span>
        </div>
        <span class="podium-points">${entry.points}</span>
      </article>
    `;
  })
  .join("");

raceResultsGrid.innerHTML = raceResults.length
  ? raceResults
      .map((result) => {
        const rgb = teamColors[result.team] || "140, 148, 160";
        const displayTeam = teamDisplayNames[result.team] || result.team;
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
            <span class="race-winner">${result.winner}</span>
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

if (teamTotals[0]?.team) {
  teamLeaderCard.classList.add("is-team-highlight");
  teamLeaderCard.style.setProperty("--team-rgb", teamColors[teamTotals[0].team] || "140, 148, 160");
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
