// Code your solutions in this file
function writeCards(array, holiday) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `Thank you, ${array[i]}, for the wonderful ${holiday} gift!`;
    }
    return array;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}