let pokemonList = [
    {
        name: 'Pikachu',
        height: 3,
        color: 'yellow'
    },
    {
        name: 'Snorlax',
        height: 9,
        color: 'blue'
    },
    {
        name: 'Charizard',
        height: 12,
        color: 'orange'
    }

];
//checking height of each pokemon
//also include solutions for third part of task
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 11 && pokemonList[i].height > 5) {
        console.log(pokemonList[i].name + ' (height:9)');
    } else if (pokemonList[i].height < 5) {
        console.log(pokemonList[i].name + ' (height:3)');
    } else {
        console.log(pokemonList[i].name + " (height:12)-Wow,that's big!")
    }
};
//implementation equality in for loop
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].color === 'orange') {
        console.log(pokemonList[i].name + ' has pretty look');
    } if (pokemonList[i].color === 'blue') {
        console.log(pokemonList[i].name);
    } if (pokemonList[i].color === 'yellow') {
        console.log(pokemonList[i].name);
    }
};



let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: 'Pikachu',
            height: 3,
            color: 'yellow'
        },
        {
            name: 'Snorlax',
            height: 9,
            color: 'blue'
        },
        {
            name: 'Charizard',
            height: 12,
            color: 'orange'
        }

    ]

    function getAll() {
        return pokemonList;
    }
    function add(name) {
        pokemonList.push(name);
    }
    function add(color) {
        pokemonList.push(color);
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        let click = document.querySelector('.click');
    }
    
      function addEventListener(pokemon) {
       console.log(pokemon);
      }

    function showDetails(pokemon) {
        console.log(pokemon);

    }
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        addEventListener: addEventListener
    }

})()

console.log(pokemonRepository.getAll())

console.log(pokemonRepository.add({ name: 'Snorlax' }))
console.log(pokemonRepository.add({ color: 'Snorlax is blue' }))


pokemonRepository.getAll().forEach(function (pokemon) {

    pokemonRepository.addListItem(pokemon);


});





