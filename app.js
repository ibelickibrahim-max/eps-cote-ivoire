document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".res-item, .showcase-card");

  buttons.forEach(function (button) {

    button.addEventListener("click", function (e) {
      e.preventDefault();

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
else if (section.includes("Athlétisme")) {
  alert("🏃 Athlétisme\n\nCourses, sauts et lancers : fiches et exercices à venir.");
}

else if (section.includes("Sports collectifs")) {
  alert("⚽ Sports collectifs\n\nFootball, handball, basketball, volleyball : contenus à venir.");
}

else if (section.includes("Sports individuels")) {
  alert("🤸 Sports individuels\n\nGymnastique, natation, judo : contenus à venir.");
}

else if (section.includes("Conseils")) {
  alert("💡 Conseils pour les enseignants\n\nAstuces pédagogiques à venir.");
}

else if (section.includes("Ressources")) {
  alert("📂 Ressources pédagogiques\n\nDocuments et supports à télécharger, bientôt disponibles.");
}
else if (section.includes("ressources")) {
  document.getElementById("ressources")?.scrollIntoView({ behavior: "smooth" });
}

else if (section.includes("savoir")) {
  alert("ℹ️ EPS Côte d'Ivoire\n\nDes cours, fiches de séance et activités pour les enseignants et élèves.");
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
