
// A primeira deve receber um array de números, e retornar um novo array com todos os números do array original  multiplicados por 3.

const multiplicaPor3 = (array) => {
  const novoArray = []
  for (let i = 0; i < array.length; i++) {
    const numeroMultiplicado = array[i] * 3
    novoArray.push(numeroMultiplicado)
  }
  return novoArray
}

const arrNumeros = [0,8,5,7,2,1]
console.log("arrNumeros", arrNumeros)
console.log("multiplicaPor3", multiplicaPor3(arrNumeros))

// A segunda deve receber um array de números, e retornar um novo array apenas com os números pares do array original.

const retornaPares = (array) => {
  const novoArray = []
  for (let elemento of array) {
    if (elemento % 2 === 0) {
      novoArray.push(elemento)
    }
  }
  return novoArray
}

console.log("retornaPares", retornaPares(arrNumeros))

// Usando o map(), percorra um array de números, calcule o triplo de cada número e retorne um novo array com os valores triplicados.

const arraymultiplicadoPor3 = arrNumeros.map((elemento, indice, arrayInteiro) => {
  return elemento * 3
})

console.log(arraymultiplicadoPor3)

// Usando o filter(), percorra um array de números e retorne um novo array que contenha apenas os números pares presentes no array original.

const arrayPares = arrNumeros.filter((elemento => {
  if (elemento % 2 === 0){
    return true
  }
}))

console.log(arrayPares)

// Com o array de pokémons disponibilizado, faça o que se pede:
// Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.
// Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
// Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde o novo array numa variável pokemonsDeFogo.

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

//COM FUNÇÃO
// function VidaCheia (poke){
//   const vidaCem = {
//     nome: poke.nome, tipo: poke.tipo, vida: poke.vida = 100
//   }
//   return vidaCem
// }
// const pokemonsVidaCheia = pokemons.map(VidaCheia)

const  pokemonsVidaCheia = pokemons.map((pokemons) => { 
  //SOMENTE MAP
  const vidaCheia = {
    nome: pokemons.nome, tipo: pokemons.tipo, vida: pokemons.vida = 100
  }
  return vidaCheia
})
console.log(pokemonsVidaCheia)

//COM FUNÇÃO
// function pokeFogo (item){
//   if(item.tipo === 'fogo'){
//     return item
//   }
// }
// const pokemonsDeFogo = pokemons.filter(pokeFogo)

const pokemonsDeFogo = pokemons.filter((pokemons) => {
  //SOMENT FILTER
  if(pokemons.tipo === 'fogo')
    return pokemons
})
  
  
console.log(pokemonsDeFogo)
