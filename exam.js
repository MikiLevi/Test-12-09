// 1
function Mission1(arr) {
    const double = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            double.push(arr[i]);
        }
    }
    return double;
}

// 2
function Mission2(str) {
    const words = str.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 4) {
            count++;
        }
    }
    return count;
}

// 3
function Mission3(arr) {
    const Dime = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            Dime.push(arr[i][j]);
        }
    }
    return Dime;
}

// 4
function Mission4(arr) {
    let isUp = true;
    let isDown = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            isDown = false;
        } else if (arr[i] < arr[i - 1]) {
            isUp = false;
        }
    }
    if (isUp) { return 1; } else if (isDown) { return 2; } else { return 0; }
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}