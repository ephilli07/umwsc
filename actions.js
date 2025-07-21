document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("yearSelect");
  const roster2024 = document.getElementById("roster-2024");
  const roster2025 = document.getElementById("roster-2025");

  function updateRosterDisplay() {
    const selected = yearSelect.value;
    roster2024.style.display = selected === "2024" ? "block" : "none";
    roster2025.style.display = selected === "2025" ? "block" : "none";
  }

  yearSelect.addEventListener("change", updateRosterDisplay);
  updateRosterDisplay(); // Set correct view on page load
});
