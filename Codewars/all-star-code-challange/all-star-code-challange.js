console.log(`hello from all-star-code-challange.js`);

function strCount(str, letter){
    //code here
    let counter = 0;
    for (const e of str) {
        if (e === letter) {
            counter ++;
        }
    }
    return counter;

}