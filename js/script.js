const navbar = document.getElementById('navbar');
function openSideBar(){
  navbar.classList.add('show');
}
function closeSideBar(){
    navbar.classList.remove('show');
}
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggles = document.querySelectorAll("#theme-toggle"); // Selectionner tous les éléments avec id theme-toggle
  let themeIndex = 0;

  const themes = [
      { "--couleur1": "#036", "--couleur2": "#ffd700", "--couleur3": "#ffcc007f" }, // Mode jaune (défaut)
      { "--couleur1": "#edf9ffe9", "--couleur2": "#07090ad8", "--couleur3": "rgba(99, 103, 105, 0.748)" }, // Mode jour (1')
      { "--couleur1": "#07090ad8", "--couleur2": "#edf9ffe9", "--couleur3": "rgba(99, 103, 105, 0.748)" }  // Mode nuit (1'')
  ];

  themeToggles.forEach(toggle => { // Pour chaque élément avec id "theme-toggle"
      toggle.addEventListener("click", () => {
          themeIndex = (themeIndex + 1) % themes.length; // Passe au mode suivant

          // Applique les nouvelles couleurs
          Object.keys(themes[themeIndex]).forEach(variable => {
              root.style.setProperty(variable, themes[themeIndex][variable]);
          });

          console.log(`Mode actuel : ${themeIndex}`); // Vérifier dans la console
      });
  });
});



