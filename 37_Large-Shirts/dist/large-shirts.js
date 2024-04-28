"use strict";
function make_shirt(size = 'LArge', text = 'I love Typescript.') {
    console.log(`Creating a ${size} shirt with the messege: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I love python');
