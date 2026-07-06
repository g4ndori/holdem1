let pot = 0;

let chips = {
    1: 5000,
    2: 5000,
    3: 5000,
    4: 5000
};

function bet(player) {
    const amount = parseInt(document.getElementById("bet" + player).value);

    if (isNaN(amount) || amount <= 0 || amount > chips[player]) {
        alert("베팅 금액이 올바르지 않습니다.");
        return;
    }

    chips[player] -= amount;
    pot += amount;

    document.getElementById("chips" + player).textContent = chips[player];
    document.getElementById("pot").textContent = pot;
}

function winner(player) {
    if (pot <= 0) {
        alert("팟에 칩이 없습니다.");
        return;
    }

    chips[player] += pot;

    alert(`플레이어 ${player} 승리!\n팟 ${pot}칩을 획득했습니다.`);

    pot = 0;

    document.getElementById("chips" + player).textContent = chips[player];
    document.getElementById("pot").textContent = pot;
}

function resetGame() {
    if (!confirm("게임을 초기화하시겠습니까?")) return;

    for (let i = 1; i <= 4; i++) {
        chips[i] = 5000;
        document.getElementById("chips" + i).textContent = 5000;
        document.getElementById("bet" + i).value = 100;
    }

    pot = 0;
    document.getElementById("pot").textContent = 0;
}
