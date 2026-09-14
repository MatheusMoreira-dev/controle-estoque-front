const cards = document.getElementById("cardsItensCatalogo");

function buildCard(dadosItem) {
  let strHTML;

  strHTML = `
    <div class="col" data-bs-toggle="offcanvas" data-bs-target="#detalhesItem" aria-controls="detalhesItem" style="cursor: pointer;">
      <div class="card">
        <div class="card-header d-flex gap-2 align-items-center">
          <span class="badge bg-secondary border ${!dadosItem.temEstoque ? "d-none" : ""}">${dadosItem.estoque}</span>
          <h6 class="card-title m-0 text-truncate" title="${dadosItem.nomeItem}">${dadosItem.nomeItem}</h6>
        </div>

        <img src=${dadosItem.imagem} class="card-img-top" alt="Sem Imagem">
        <div class="card-body"></div>

        <div class="card-footer container">
          <div class="row gap-1">
            <button class="col btn btn-outline-success">
              <i class="bi bi-plus"></i>
              <span class="d-none d-md-inline">Entrada</span>
            </button>
            <button class="col btn btn-outline-danger">
              <i class="bi bi-x"></i>
              <span class="d-none d-md-inline">Saída</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `;

  return strHTML;
}

// Atualizar lista
export function renderizarLista(itens) {
  cards.innerHTML = "";

  let strHTML = "";
  itens.forEach((v) => (strHTML += buildCard(v)));

  cards.innerHTML = strHTML;
}
