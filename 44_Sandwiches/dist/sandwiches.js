"use strict";
function makeSandwiche(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !\n');
}
makeSandwiche(['Ham', 'Chees', 'lettuce']);
makeSandwiche(['Turkey', 'Bacon']);
makeSandwiche(['Peanut butter', 'jelly']);
