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
