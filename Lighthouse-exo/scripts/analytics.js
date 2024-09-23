// Script d'analyse fictif qui alourdit la page sans réel besoin
function trackUserActivity() {
    console.log("Tracking user activity...");
    // Boucle inutile pour simuler une charge
    for (let i = 0; i < 500000000; i++) {}
}

trackUserActivity();
