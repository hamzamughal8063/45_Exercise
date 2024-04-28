"use strict";
// Store the location in a array. Make sure the array is not in alphabetical order.
let places = ['Italy, Germany, agra, Efel Tower, Times Square'];
// Print your array in its orignol order.
console.log('orignol ' + places);
// Prit yur array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//Show that your array is still in its orignol order by printing it.
console.log('orignol ' + places);
// Print your array in reverse alphabetical order without changing the order of the orignol list.
console.log('copy ' + [...places].sort().reverse());
// Show that your arra is still in its orignol order by printing it again.
console.log('orignol ' + places);
//Reverse the order of your list. print the array to show thar its order has changed.
console.log('orignol ' + places.reverse());
// Reverse the order of yur list. print the list to show it's back to its orignol order.
console.log('orignol ' + places.reverse());
// Sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log('orignol ' + places.sort());
//Sort to change your array so it's stored in reverse alphabetical order. print the array to show that its order has been changed.
console.log('orignol ' + places.sort().reverse());
//
