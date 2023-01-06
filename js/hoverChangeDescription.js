export function hoverChangeDescription(nameCard, text) {
  var changeDescription = document.querySelector(".alterar_descricao");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;
  });
}
