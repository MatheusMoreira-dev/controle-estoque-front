import { renderizarLista } from "./scripts/renderizarItensCatalogo.js";
import { fetchCatalogoPlanilha } from "./scripts/api.js";

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
    renderizarLista(catalogo.todos);
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener("DOMContentLoaded", carregarTelaInicial);

filtrosEstoque.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT") {
    const itens = catalogo[e.target.value];
    renderizarLista(itens);
  }
});
