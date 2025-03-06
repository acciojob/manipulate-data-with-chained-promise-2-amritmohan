//your JS code here. If required.

const output = document.getElementById("output");

function manipulateArray() {
    // Step 1: Return a promise that resolves with [1, 2, 3, 4] after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        // Step 2: Filter out odd numbers after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                output.innerText = evenNumbers.join(","); // Update output div
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Step 3: Multiply even numbers by 2 after 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                output.innerText = doubledNumbers.join(","); // Update output div
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}

manipulateArray();
