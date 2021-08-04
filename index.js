// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
function writeCards(names, surprise) {
    const newArray= []
    for (let i = 0; i < names.length; i++){
       newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
 return newArray;
}

let number = 10;
function countDown(number){
    while(number >= 0){
        console.log(number--);
    }
}