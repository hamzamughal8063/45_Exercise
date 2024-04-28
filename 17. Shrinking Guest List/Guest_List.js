"use strict";
let Guest_List = ['Imran Khan', 'Bilawal Bhotto', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So We are inviting 3 Guest_List.');
//array me 3 guest add kiye hein.
Guest_List.unshift('sir Danial nagori');
Guest_List.splice(2, 0, 'Sir Ameen Alam');
Guest_List.push('Bilawal Bhutto Zardari');
//Yaha per mene 6 guest ke array ko print karwaya hn.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
// Sorry messege to guest for not invited.
console.log('Sorry we can not arrange big table, only two people will be invited.');
//Yaha per mene guest remove kiye hein.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
}
// Hamare bache huwe 2 invited guest.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank you!\n\n');
}
// Mene sary guest arry se remove kardiye.
Guest_List.splice(0, 2);
console.log(Guest_List);
