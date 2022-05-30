validator()

// cadatro de usuario
myUser.onclick = () => {
    const UserFuncaoQuadratica = window.prompt('Qual o seu nome?');
    // const estado = window.prompt('Estado natal');
    // const pais = window.prompt('País');
    // const email = window.prompt('E-mail:')

    localStorage.setItem('pessoa', `${UserFuncaoQuadratica}`);
    // localStorage.setItem('estado', `${estado}`);
    // localStorage.setItem('pais', `${pais}`);
    // localStorage.setItem('email', email);

    novaOperacao();
}

// validacao de existência de usuário
function validator() {
    if (localStorage.pessoa && localStorage.pessoa !== 'null') {
        cUser.innerHTML = 'Bem-vindo(a)&nbsp;' + localStorage.pessoa;
        // myUser.style.display = 'none';
    }
}

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
        cEquacao.innerHTML = `Equação: f(x) = ${a}X<sup>2</sup>${b}X ${c}`;
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
                // console.log(`X' é igual a: ${x1}`);      
                x2 = (-b - raizqDelta) / (2*a);
                // console.log(`X" é igual a: ${x2}`)
                cRaizes.innerHTML = `X<sup>1</sup> = ${x1} e X<sup>2</sup> = ${x2}`;
            }

            Vertice();
        }
    }
    reload.classList.add('show');
})

function Vertice() {
    Xv = (-b / (2*a));
    Yv = (-delta / (4*a));
    console.log(`X do vertice: ${Xv}`);
    console.log(`Y do vertice: ${Yv}`);
    cVertice.innerText = `Vértice = (${Xv}, ${Yv})`;
}

function User() {    
    const nameLocalStorage = window.prompt('Qual o seu nome');
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('usuariobr', `${nameLocalStorage}`);
        cUser.innerHTML = localStorage.getItem('usuariobr');
    }

    const emailLocalStorage = window.prompt('Qual o seu melhor email?');
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('emailbr', `${emailLocalStorage}`);
        cEmail.innerHTML = localStorage.getItem('emailbr');
    }
}

function novaOperacao() {
    window.location.reload();
}

function capturar() {
    window.print();
}