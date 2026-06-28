const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll("[data-panel]");
const title = document.querySelector("h1");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    panels.forEach((panel) => {
      panel.classList.toggle("is-hidden", panel.id !== target);
    });

    title.textContent =
      target === "drivers"
        ? "APEX HORIZON Drivers' Standings"
        : "APEX HORIZON Team Standings";
  });
});
