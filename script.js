// Função para abrir o conteúdo da aba selecionada
function openTab(evt, tabName) {
  // Oculta todos os conteúdos das abas
  var i, contentTabs, tabButtons;
  contentTabs = document.getElementsByClassName("content-tab");
  for (i = 0; i < contentTabs.length; i++) {
    contentTabs[i].style.display = "none";
  }

  // Remove a classe 'active' de todos os botões
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Exibe o conteúdo da aba atual e adiciona a classe 'active' ao botão clicado
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Inicializa a página mostrando o conteúdo de 'MeuFuturo'
document.addEventListener("DOMContentLoaded", () => {
  // Mostra 'Meu Futuro' (ou 'Sobre Mim', dependendo da sua preferência)
  // Eu defini 'MeuFuturo' como padrão no HTML, mas aqui o JS garante o estado inicial:
  document.getElementById("MeuFuturo").style.display = "block";
  document.querySelector(".tab-button:nth-child(3)").classList.add("active");
  
  // Chamada da função para o 'Sobre Mim' ser o inicial (se preferir)
  // openTab({ currentTarget: document.querySelector(".tab-button:nth-child(1)") }, 'SobreMim');


  // Efeito de zoom nas imagens (código original mantido, mas ajustei a seleção)
  const zoomElements = document.querySelectorAll(
    ".honra img, .card img, .icons img, .turma-slot img"
  );

  zoomElements.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transition = "transform 0.3s ease";
      img.style.transform = "scale(1.15)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});

console.log("Página carregada com sucesso e animações de abas e zoom aplicadas!");