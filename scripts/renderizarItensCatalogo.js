const listaItens = document.getElementById("itensNoCatalogo");

// Cria um novo item para a lista
function buildHtmlItem(dadosItem) {
  let strHTML;

  const imagem = dadosItem.imagem
    ? `<img class="img-fluid rounded bg-light border bg-secondary" loading="lazy" src= "${dadosItem.imagem}" alt="Sem Imagem"/>`
    : `<div class="bg-secondary"></div>`;

  strHTML = `
      <div 
        class="list-group-item list-group-item-action p-2 d-flex align-items-center" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#detalhesItem"
        style="cursor: pointer;"
      >

        <div class="d-flex align-items-center justify-content-center rounded text-muted flex-shrink-0" style="width: 64px; height: 64px;">
          ${imagem}
        </div>

        <div class="flex-grow-1 px-3" style="min-width: 0;">
          <h6 class="m-0 text-truncate" title="${dadosItem.nomeItem}">${dadosItem.nomeItem}</h6>
        </div>

        <div class="flex-shrink-0 text-end px-3">
          <span class="badge bg-secondary border ${!dadosItem.temEstoque ? "d-none" : ""}">${dadosItem.estoque}</span>
        </div>
      </div>
    `;

  return strHTML;
}

// Atualizar lista
export function renderizarLista(itens) {
  listaItens.innerHTML = "";

  let strHTML = "";
  itens.forEach((v) => (strHTML += buildHtmlItem(v)));

  listaItens.innerHTML = strHTML;
}
