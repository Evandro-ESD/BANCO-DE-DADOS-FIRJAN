fetch('http://localhost:3008/clientes')
    .then(res => res.json())
    .then(clientes => {
        const container = document.getElementById('clientes-container');
        clientes.forEach(cliente => {
            const div = document.createElement('div')

            div.className = 'cliente'
            div.innerHTML = ` <p>Nome: <strong>${cliente.nome}</strong></p>  <p>CPF: ${cliente.cpf}</p>`
            container.appendChild(div)
        });
    }).catch(err => console.log('Erro ao conectar ao cliente', err))