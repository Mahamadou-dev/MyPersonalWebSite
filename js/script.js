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
      { "--couleur1": "#036", "--couleur2": "#ffd700", "--couleur3": "#ffcc007f" },
      { "--couleur1": "#ffd700", "--couleur2": "#036", "--couleur3": "#ffcc007f" },  // Mode jaune (défaut)
      { "--couleur1": "#fff", "--couleur2": "#010101e6", "--couleur3": "rgba(99, 103, 105, 0.748)" }, // Mode jour (1')
      { "--couleur1": "#010101e6", "--couleur2": "#fff", "--couleur3": "rgba(99, 103, 105, 0.748)" },
      { "--couleur1": "red", "--couleur2": "#010101e6", "--couleur3" : "rgba(152, 22, 22, 0.75)"   },
      { "--couleur1": "#010101e6", "--couleur2": "red", "--couleur3" : "rgba(152, 22, 22, 0.75)"   }, 
      { "--couleur1": "rgb(0, 213, 255)", "--couleur2": "#fff", "--couleur3" : "rgba(0, 213, 255, 0.5)"},
      { "--couleur1": "rgb(0, 213, 255)", "--couleur2": "#010101e6", "--couleur3" : "rgba(0, 213, 255, 0.5)"} // Mode nuit (1'')
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



