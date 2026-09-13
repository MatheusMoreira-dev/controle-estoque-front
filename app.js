const listaItensCatalogo = document.getElementById("itensNoCatalogo");
const filtrosEstoque = document.querySelector(".filtrosEstoque");

let catalogo = {
  todos: [],
  comEstoque: [],
  semEstoque: [],
};

const badgesTotal = {
  todos: document.getElementById("total-todos"),
  semEstoque: document.getElementById("total-sem-estoque"),
  comEstoque: document.getElementById("total-com-estoque"),
};

async function inserirHTML(url, selectorContainer) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Não foi possível encontrar o arquivo!");

    const text = await response.text();
    document.querySelector(selectorContainer).innerHTML = text;
  } catch (err) {
    throw err;
  }
}

inserirHTML("./components/formNovoItem.html", "#modalFormCadastro");

// Cria um novo item para a lista
function criarItem(dadosItem) {
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
function atualizarLista(itens) {
  listaItensCatalogo.innerHTML = "";

  let strHTML = "";
  itens.forEach((v) => (strHTML += criarItem(v)));

  listaItensCatalogo.innerHTML = strHTML;
}

function fetchCatalogoPlanilha() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        nomeItem: "Teste",
        categoria: "Lápis",
        descricao: "",
        imagem: "",
        estoque: "",
        temEstoque: true,
      },
    ]);
  });
}

async function salvarCatalogo() {
  const dados = await fetchCatalogoPlanilha();

  catalogo.todos = dados;
  catalogo.semEstoque = dados.filter((v) => !v["temEstoque"]);
  catalogo.comEstoque = dados.filter((v) => v["temEstoque"]);

  badgesTotal.todos.innerHTML = catalogo.todos.length;
  badgesTotal.semEstoque.innerHTML = catalogo.semEstoque.length;
  badgesTotal.comEstoque.innerHTML = catalogo.comEstoque.length;
}

async function carregarTelaInicial() {
  try {
    await salvarCatalogo();
    atualizarLista(catalogo.todos);
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener("DOMContentLoaded", carregarTelaInicial);

filtrosEstoque.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT") {
    const itens = catalogo[e.target.value];
    atualizarLista(itens);
  }
});
