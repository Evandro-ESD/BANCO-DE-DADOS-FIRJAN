const apiUrl = 'http://localhost:3001/clientes';

function buscar() {
    const filtro = document.getElementById('filtro-nome').value.toLowerCase();
    const tabela = document.getElementById('resultado-tabela');
    tabela.innerHTML = ''

    fetch(apiUrl)
        .then(res => res.json())
        .then(clientes => {

            if(filtro === ''){
                tabela.innerHTML = `<tr><td colspan="4">Nenhum cliente encontrado!</td></tr>`
                return
            }
            const resultado = clientes.filter(c => c.nome.toLowerCase().startsWith(filtro))

            if (resultado.length === 0) {
                tabela.innerHTML = `<tr><td colspan="4">Nenhum cliente encontrado!</td></tr>`
                return
            }

            resultado.forEach(c => {
                const linha = document.createElement('tr')
                linha.innerHTML = `
                    <td>${c.id}</td>
                    <td>${c.nome}</td>
                    <td>${c.cpf}</td>
                    <td>${c.sexo}</td>
                `
                tabela.appendChild(linha)
            })
            filtro.innerHTML = ''
        })
        .catch(error => {
            console.error('Erro ao buscar clientes:', error)
            tabela.innerHTML = `<tr><td colspan="4">Erro ao buscar dados!</td></tr>`
        })
}
