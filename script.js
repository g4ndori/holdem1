let pot = 0;
let chips = { 1: 5000, 2: 5000, 3: 5000, 4: 5000 };

function bet(player) {
    const amount = parseInt(document.getElementById("bet" + player).value);

    if (isNaN(amount) || amount <= 0 || amount > chips[player]) {
        alert("금액 오류");
        return;
    }

    chips[player] -= amount;
    pot += amount;

    document.getElementById("chips" + player).textContent = chips[player];
    document.getElementById("pot").textContent = pot;
}

function winner(player) {
    if (pot <= 0) return;

    chips[player] += pot;
    pot = 0;

    document.getElementById("chips" + player).textContent = chips[player];
    document.getElementById("pot").textContent = pot;
}

function resetGame() {
    if (!confirm("wanna RESET?")) return;

    for (let i = 1; i <= 4; i++) {
        chips[i] = 5000;
        document.getElementById("chips" + i).textContent = 5000;
        document.getElementById("bet" + i).value = 100;
    }
    pot = 0;
    document.getElementById("pot").textContent = 0;
}
