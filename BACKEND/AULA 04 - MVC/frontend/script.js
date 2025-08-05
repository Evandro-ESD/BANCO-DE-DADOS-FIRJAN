const apiUrl = 'http://localhost:3001/clientes'

const form = document.getElementById('cliente-form')
const tabela = document.getElementById('tabela-clientes')

function carregarClientes() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(clientes => {
            tabela.innerHTML = '';
            clientes.forEach(cliente => {
                const linha = document.createElement('tr')
                linha.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.sexo}</td>
                
                <td>
                    <button onclick="editar(${cliente.id},'${cliente.nome}','${cliente.cpf}','${cliente.sexo}')">Editar</button>
                    <button onclick="excluir(${cliente.id})">Excluir</button>
                </td>  
            `
                tabela.appendChild(linha)
            });
        })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('cliente-id').value;
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const sexo = document.getElementById('sexo').value;

  const cliente = { nome, cpf, sexo };

  const metodo = id ? 'PUT' : 'POST';
  const url = id ? `${apiUrl}/${id}` : apiUrl;

  fetch(url, {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente)
  })
    .then(() => {
      form.reset();
      carregarClientes();
    });
});

function editar(id, nome, cpf, sexo) {
  document.getElementById('cliente-id').value = id;
  document.getElementById('nome').value = nome;
  document.getElementById('cpf').value = cpf;
  document.getElementById('sexo').value = sexo;
}

function excluir(id) {
  if (confirm('Tem certeza que deseja excluir?')) {
    fetch(`${apiUrl}/${id}`, {
      method: 'delete'
    }).then(() => carregarClientes());
  }
}

carregarClientes()


// function abrirModal() {
//     document.getElementById("meuModal").style.display = "block";
// }

// function fecharModal() {
//     document.getElementById("meuModal").style.display = "none";
// }

// function enviarFormulario(event) {
//     event.preventDefault(); // impede o recarregamento

//     const nome = document.getElementById("nome").value;
//     const email = document.getElementById("email").value;
//     const cpf = document.getElementById("cpf").value;

//     console.log("Nome:", nome);
//     console.log("Email:", email);
//     console.log("CPF:", cpf);

//     alert("Dados enviados com sucesso!");
//     fecharModal();
// }