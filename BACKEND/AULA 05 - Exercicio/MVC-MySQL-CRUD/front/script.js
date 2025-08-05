const form = document.querySelector("#produtoForm")
const tabelaProdutos = document.querySelector('#tabelaProdutos')
let nomeBotao = document.querySelector('#produtoForm button')
nomeBotao.innerText = 'Adicionar Produto'
const apiUrl = 'http://localhost:3005/produtos'


function alternarNome() {
    if (nomeBotao.innerText === 'Adicionar Produto') {
        nomeBotao.innerText = 'Editar Produto'
    } else {
        nomeBotao.innerText = 'Adicionar Produto'
    }
}

function getProdutos() {
    fetch(apiUrl)
        .then(produtos => produtos.json())
        .then(produto => {
            console.log(produto)
            if (!produto) {
                tabelaProdutos.innerHTML = `Nenhum produto cadastrado`
                return
            }
            tabelaProdutos.innerHTML = ''
            produto.forEach(p => {
                const linha = document.createElement('tr')
                linha.innerHTML = `
                <td>${p.id}</td>
                <td>${p.nome}</td>
                <td>${p.preco}</td>
                <td>${p.estoque}</td>
                
                <td>
                    <button onclick="editar(${p.id},'${p.nome}','${p.preco}','${p.estoque}',)"><img src="./assets/fundo/penaP.png"></button>
                    <button>❌</button>
                </td>
            `
            tabelaProdutos.appendChild(linha)
            });
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const idInput = document.querySelector('#id').value
    const nomeInput = document.querySelector('#nome').value
    const precoInput = document.querySelector('#preco').value
    const estoqueInput = document.querySelector('#estoque').value

    let produto = { nome:nomeInput, preco: precoInput, estoque: estoqueInput }

    const metodo = idInput ? 'PUT' : 'POST'; // se existe id o metodo é PUT
    const url = idInput ? `${apiUrl}/${idInput}` : apiUrl;

    fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    })
        .then(() => {
            form.reset()
            nomeBotao.innerText = 'Adicionar Produto'
            getProdutos()
        })
})

function editar(id, nome, preco, estoque) {
    console.log(id, nome, preco, estoque)
    document.querySelector('#id').value = id
    document.querySelector('#nome').value = nome
    document.querySelector('#preco').value = preco
    document.querySelector('#estoque').value = estoque
    alternarNome()
}

function excluir(id) {
    if (confirm('Tem certeza que deseja excluir?')) {
        fetch(`${apiUrl}/${id}`, {
            method: 'delete'
        }).then(() => getProdutos());
    }
}

getProdutos();
