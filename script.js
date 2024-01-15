const button = document.querySelector("button");
button.addEventListener("click", mojeFunkce);

function myFunction() {
    alert("Nová hra");
    
  }
  function otocitKarticku(karta) {
    karta.classList.toggle("zadni");
  }
  
  document.querySelector(".karta").addEventListener("click", otocitKarticku);