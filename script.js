const cSend = document.getElementById('cSend');

cSend.addEventListener('click', function(e) {
    e.preventDefault();
    cSend.style.display = 'none';

    a = cA.value; parseInt(a); b = cB.value; parseInt(b); c = cC.value; parseInt(c);
    delta = (b**2) - (4 * a * c);
    raizqDelta = Math.sqrt(delta); console.log(`A raiz quadrada de ${delta} é: ${raizqDelta}`)

    if (!a || !b || !c) {
        cEquacao.innerHTML = "Insira valores para a função";
        reload.innerHTML = "Tente Novamente";

    } else if ((a == 0) || (a === 0)) {
        cEquacao.innerHTML = "Não é função. <br/> Pois <b>a</b> não pode ser Zero";
        cEquacao.style.background = "rgb(220, 20, 60)";
        
    } else {
        cEquacao.innerHTML = `Equação: ${a}X<sup>2</sup>${b}X ${c}`;
        if (a > 0) {
            cConcavidade.innerHTML = 'Gráfico: Concavidade para cima. Pois <b>a</b> é positivo.';

        } else if (a < 0) {
            cConcavidade.innerHTML = 'Gráfico: Concavidade para baixo. Pois <b>a</b> é negativo.';
        }

        if (raizqDelta < 0 || raizqDelta === NaN) {
            cDelta.innerHTML = `Delta Δ = ${delta}. <br/> Não existem raízes para delta negativo.`;
        } else if (raizqDelta == 0) {
            cDelta.innerHTML = `Delta Δ = ${delta} ZERO`;
        } else {
            cDelta.innerHTML = `Delta Δ = ${delta}`;

            if (raizqDelta >= 0) {
                x1 = (-b + raizqDelta) / (2*a);
            console.log(`X' é igual a: ${x1}`);
                cX1.innerHTML = `X<sup>1</sup> = ${x1}`;
        
            x2 = (-b - raizqDelta) / (2*a);
            console.log(`X" é igual a: ${x2}`)
                cX2.innerHTML = `X<sup>2</sup> = ${x2}`;
            }
        }
    }
    reload.classList.add('show');
})

function novaOperacao() {
    window.location.reload();
}