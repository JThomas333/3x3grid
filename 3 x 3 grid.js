const eredeti = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Kiirasa(szamok) {
    const grid = document.getElementById("szamGrid");
    grid.innerHTML = '';
    szamok.forEach(szam => {
        const div = document.createElement("div");
        div.textContent = szam;
        grid.appendChild(div);
    });
}

function Keveres() {
    const kevert = [...eredeti];
    for (let i = kevert.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kevert[i], kevert[j]] = [kevert[j], kevert[i]];
    }
    Kiirasa(kevert);
}

