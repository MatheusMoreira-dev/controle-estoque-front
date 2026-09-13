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

function salvarCatalogoEmCache(catalogo) {}

function getCatalogoEmCache() {}

// Criar um item no catalogo
async function criarItemCatalogo(item) {
  await createCatalogo(item);

  const catalogo = getCatalogoEmCache();
  catalogo.semEstoque.push(item);

  salvarCatalogoEmCache(catalogo);
}

// Atualizar lista atual
function atualizarLista(lista) {}

// Mostrar lista de itens
function mostrarCatalogo(statusEstoque, categorias = []) {}

const filtrosEstoque = document.querySelector(".filtrosEstoque");
filtrosEstoque.addEventListener("input", (e) => {
  if ((e.type = "INPUT")) {
    console.log(e.target.value);
  }
});
