// let menu = document.querySelector("menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

    // se o menu esta fechado
    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar o icone x
        iconeX.style.display = "inline"

        // Esconder icone de Barras
        iconeBarras.style.display = "none"

    } else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder o icone X
        iconeX.style.display = "none"

        // Mostrar icone barras
        iconeBarras.style.display = "inline"
    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}


const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-telefone").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        telefone: valorDescricao
    }

    // Enviar requisicao para a api
    // 127.0.0.1 -> localhost
    // Metodo HTTP POST - Creat
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)
        // Limpar os campos (inputs)
        document.querySelector("#contato form").reset()
        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    // CASO ERRO - alert com msg erro
    .catch(erro => {
        console.error(erro)
        alert("Erro desconhecido")
    })

    event.preventDefault()
}