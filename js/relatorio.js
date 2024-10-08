// Selecionando elementos
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const tabela = document.getElementById("pontosTabela").getElementsByTagName("tbody")[0];
let pontoEditando = null;

// Função para editar um ponto
function editarPonto(id) {
    const linha = document.querySelector(`tr[data-id='${id}']`);
    const celulas = linha.getElementsByTagName("td");

    // Preencher o formulário com os dados
    document.getElementById("data").value = celulas[0].innerText;
    document.getElementById("entrada").value = celulas[1].innerText;
    document.getElementById("intervalo").value = celulas[2].innerText;
    document.getElementById("volta").value = celulas[3].innerText;
    document.getElementById("saida").value = celulas[4].innerText;

    // Exibir o formulário de edição
    editForm.style.display = "block";
    pontoEditando = id;
}

// Função para excluir um ponto
function excluirPonto(id) {
    const linha = document.querySelector(`tr[data-id='${id}']`);
    linha.remove();
}

// Salvando os dados do ponto editado
saveBtn.addEventListener("click", function() {
    if (pontoEditando) {
        const linha = document.querySelector(`tr[data-id='${pontoEditando}']`);
        const dados = [
            document.getElementById("data").value,
            document.getElementById("entrada").value,
            document.getElementById("intervalo").value,
            document.getElementById("volta").value,
            document.getElementById("saida").value
        ];

        // Atualizando os dados na tabela
        const celulas = linha.getElementsByTagName("td");
        dados.forEach((dado, index) => {
            celulas[index].innerText = dado;
        });

        // Fechar o formulário de edição
        editForm.style.display = "none";
        pontoEditando = null;
    }
});

// Cancelando a edição
cancelBtn.addEventListener("click", function() {
    editForm.style.display = "none";
    pontoEditando = null;
});

// Adicionando eventos de edição e exclusão nas ações
tabela.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit")) {
        const id = e.target.closest("tr").getAttribute("data-id");
        editarPonto(id);
    } else if (e.target.classList.contains("delete")) {
        const id = e.target.closest("tr").getAttribute("data-id");
        excluirPonto(id);
    }
});
