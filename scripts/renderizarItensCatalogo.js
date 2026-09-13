const listaItens = document.getElementById("itensNoCatalogo");

// Cria um novo item para a lista
function buildHtmlItem(dadosItem) {
  let strHTML;

  strHTML = `
      <div 
        class="border rounded-3 shadow-sm mb-2 list-group-item list-group-item-action p-3 d-flex align-items-center" 
        data-bs-toggle="modal" 
        data-bs-target="#modalEditar"
      >

        <div class="d-flex align-items-center justify-content-center bg-light rounded text-muted flex-shrink-0" style="width: 48px; height: 48px;">
          <a href="${dadosItem.imagem}" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-image fs-4"></i>
          </a>
        </div>

        <div class="flex-grow-1 px-3" style="min-width: 0;">
          <h6 class="m-0 text-truncate" title="${dadosItem.nomeItem}">${dadosItem.nomeItem}</h6>
        </div>

        <div class="flex-shrink-0 text-end">
          <span class="badge bg-light text-dark border">
            Total: <strong>${dadosItem.estoque}</strong>
          </span>
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
