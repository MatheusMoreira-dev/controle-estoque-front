const cards = document.getElementById("cardsItensCatalogo");

function buildCard(dadosItem) {
  let strHTML;

  strHTML = `
    <div class="col">
      <div class="card shadow p-2 p-md-3 rounded-3" data-bs-toggle="offcanvas" data-bs-target="#detalhesItem" aria-controls="detalhesItem" style="cursor: pointer;">
        <div class="card-header">
          <h6 class="card-title text-center m-0 text-truncate" title="${dadosItem.nomeItem}">${dadosItem.nomeItem}</h6>
        </div>
        
        <div 
          class="position-relative ratio ratio-1x1 w-100 bg-secondary-subtle rounded-3"
          style="background-image: url(${dadosItem.imagem || ""}); background-size: cover; background-position: center; background-repeat: no-repeat;"
        >
          
          <div>
            <span class="fs-6 position-absolute bottom-0 start-50 translate-middle-x mb-2 badge bg-info ${!dadosItem.temEstoque ? "d-none" : ""}">
              ${dadosItem.estoque}
            </span>
          </div>
        </div>
        
        <div class="card-footer bg-light p-0 mt-auto">
          <button class="py-md-3 btn btn-outline-secondary w-100 rounded-0 border-0">
            <i class="bi bi-arrow-left-right"></i>
          </button>
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
