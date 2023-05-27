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
//check why this loop don't work with tutor! 
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].color === 'orange') {
        console.log(pokemonList[i].name + ' has pretty look');
    } if (pokemonList[i].color === 'blue') {
        console.log(pokemonList[i].name);
    } if (pokemonList[i].color === 'yellow') {
        console.log(pokemonList[i].name);
    }
};

for (let i = 0; i < pokemonList.length; i++) {
    document.write ('<p class=pokemon>' + pokemonList[i].name + '-' + pokemonList[i].height + "<br>" + "</p>")
}



pokemonList.forEach(function(pokemon) {
    document.write ( '<p class=pokemon1>' + pokemon.name + ' ' + 'is' + ' ' + pokemon.color + ' ' + "color" +'<br>'+'</p>');
});


pokemonList.forEach(function(pokemon) {
    console.log ( pokemon.name + ' ' + 'is' +' ' + pokemon.height +' ' + 'm')

});
