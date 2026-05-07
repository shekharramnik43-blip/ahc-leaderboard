const rows = document.getElementById("leaderboardRows");
const sortedStandings = [...standings].sort((a, b) => b.points - a.points || a.driver.localeCompare(b.driver));

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

document.getElementById("driverCount").textContent = sortedStandings.length;
document.getElementById("teamCount").textContent = new Set(sortedStandings.map((entry) => entry.team)).size;
document.getElementById("leaderName").textContent = sortedStandings[0]?.driver || "-";
document.getElementById("topScore").textContent = sortedStandings[0]?.points || "0";
