import { CatalogoRoutes } from "./api.js";

const formNovoItem = document.getElementById("formNovoItem");

async function getDadosNovoItem(form) {
  const formData = new FormData(form);
  const dados = Object.fromEntries(formData);
  //const dadosAnexo = await obterArquivo();
  const dadosAnexo = {};

  if (dadosAnexo) dadosAnexo.nomeArquivo = dados.nomeItem;

  return { ...dados, ...dadosAnexo };
}

async function cadastrarItem(dados) {}

formNovoItem.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = await getDadosNovoItem(e.target);
  cadastrarItem(dados);
});
