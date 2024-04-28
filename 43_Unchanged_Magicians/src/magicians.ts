

let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];


function copyArray(arr:string[]){
   return [...arr]

}


function make_great (magicianArray:string[] ){

     for(let i=0; i<magicianArray.length; i++){

        magicianArray[i]= 'the great ' + magicianArray[i]
     }

}

function show_magicians(magicians: string[]){


    magicians.forEach(element => {
        console.log(element);
    });
}


const copymagicianArray = copyArray(magician)

make_great(copymagicianArray);

console.log('\n\nThis is my orignol array:');
show_magicians(magician);


console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianArray);