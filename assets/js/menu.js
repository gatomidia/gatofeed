/**
 * Armazena as class [burger], [nav] e [header] nas variaveis correspondentes
 */
let burguer = document.querySelector(".burguer");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let body = document.querySelector("body");

/**
 * Observa se o elemento com a class [burguer] vai ser clicado
 */
burguer.addEventListener("click", () => {
  /**
   * Se o [burguer] for clicado, adiciona class [change]
   * no mesmo elemento da class [header]
   */
  header.classList.toggle("change");
  body.classList.toggle("change")
  /**
   * Verifica se a class [change] foi adicionada no mesmo elemento da class [header]
   */
  if (header.classList.contains("change")) {
    /**
     * Se a class [change] foi adicionada no
     * mesmo elemento da class [header], o nav aparece
     */
    nav.style.display = "flex";
    //Troca o icone do [burguer]
    burguer.innerHTML = `  
            <i class="fa-solid fa-xmark"></i>
            `;
  } else {
    /**
     * Se a class [change] não foi adicionada no mesmo elemento
     * da class [header], a lista do [nav] fica escondida
     */
    nav.style.display = "none";
    // Troca o icone do [burguer]
    burguer.innerHTML = `  
            <i class="fa-solid fa-bars"></i>
            `;
  }
});
