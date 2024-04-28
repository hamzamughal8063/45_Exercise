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
Guest_List.unshift('sir Danial nagori');
Guest_List.splice(2, 0, 'Sir Ameen Alam');
Guest_List.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
