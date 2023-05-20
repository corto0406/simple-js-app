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
for (let i=0; i< pokemonList.length; i++) {
    if (pokemonList[i].height <11 && pokemonList[i].height >5){
        console.log(pokemonList[i].name + " (height:9)");
    }else if (pokemonList[i].height<5){
        console.log(pokemonList[i].name + " (height:3)");
    }else {
        console.log(pokemonList[i].name + " (height:12)-Wow,that's big!")
    }
    };
//check why this loop don't work with tutor! 
for (let i=0; i<= pokemonList.color; i++) {
    if (pokemonList[i].color === orange){
        console.log(pokemonList.name + " has pretty look");
    }if (pokemonList[i].color === blue){
        console.log(pokemonList.name);
    }if (pokemonList[i].color === yellow){
        console.log(pokemonList.name);
    }
};

let name=['Pikachu','Snorlax','Charizard'];
document.write (name); 


