document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("yearSelect");
  const rosterDivs = document.querySelectorAll(".roster-year");

  if (yearSelect) {
    yearSelect.addEventListener("change", () => {
      const selectedYear = yearSelect.value;

      rosterDivs.forEach((div) => {
        div.style.display = div.id === `roster-${selectedYear}` ? "block" : "none";
      });
    });
  }
}); 