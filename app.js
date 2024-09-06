function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("pesquisa-input").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = `<p style="text-align:center">Nada foi encontrado.</p>`;
        return;
    }

    // Converte a pesquisa para letras minúsculas para busca case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Converte título, descrição e tags para letras minúsculas
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tagsArray = dado.tags.toLowerCase().split(",").map(tag => tag.trim());

        // Se título, descrição ou qualquer tag incluir o campo de pesquisa
        if (
            titulo.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            tagsArray.some(tag => tag.includes(campoPesquisa))
        ) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = `<p style="text-align:center">Nada foi encontrado.</p>`;
    }

    // Se nenhum resultado foi encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
