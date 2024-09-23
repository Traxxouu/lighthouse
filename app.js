// Script basique avec des éléments inutiles
console.log("Bienvenue sur notre site Web lourd");

function simulateHeavyTask() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
}

simulateHeavyTask();
