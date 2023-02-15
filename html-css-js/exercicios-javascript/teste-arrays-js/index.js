const listaDeEstados = new Array(
    'Minas Gerais',
    'São Paulo',
    'Rio Grande do Sul'
)

listaDeEstados.push('Baiha') // adiciona item na lista
listaDeEstados.splice(1,1) // remove item da lista na posição 1

console.log(listaDeEstados);