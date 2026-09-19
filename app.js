document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".menu button");

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      const section = button.innerText.trim();

      if (section.includes("Cours")) {
        alert("📚 Cours EPS\n\nLes cours seront bientôt disponibles.");
      }

      else if (section.includes("Fiches")) {
        alert("📝 Fiches de séances\n\nVous pourrez créer et consulter vos fiches.");
      }

      else if (section.includes("Évaluations")) {
        alert("🏆 Évaluations\n\nLes évaluations seront disponibles ici.");
      }

      else if (section.includes("Emploi")) {
        alert("📅 Emploi du temps\n\nVotre emploi du temps sera affiché ici.");
      }

      else if (section.includes("professeur")) {
        alert("👨‍🏫 Espace professeur\n\nConnexion professeur à venir.");
      }

      else if (section.includes("Rechercher")) {
        alert("🔎 Recherche\n\nLa recherche sera bientôt disponible.");
      }

    });

  });

});

// ==// ===== MENU HAMBURGER =====
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const topNav = document.querySelector(".top-nav");

  menuToggle.addEventListener("click", function () {
    topNav.classList.toggle("active");
  });
});
