// localStorage.setItem('modo-daltonico', 'false');



//     function enviar() {

//         let item = localStorage.getItem('modo-daltonico');
//         let cssDaltonismo = document.getElementById('batata');

//         console.log('inicial', item);

//         if (item === 'false') {

//             localStorage.setItem('modo-daltonico', 'true');
//             console.log('veio false, a gente ta trocando pra true aq meu parça', item);
//             cssDaltonismo.href = 'css/daltonismo.css'
//         }


//         else if (item === 'true') {

//             localStorage.setItem('modo-daltonico', 'false');
//             console.log('veio true, a gente ta trocando pra false aq meu parça', item);
//             cssDaltonismo.href = 'css/style.css'
//         } 


// }

const modo = localStorage.getItem('modo')


const background = (valor) => document.body.style.backgroundImage = valor
const color = (valor) => document.body.style.color = valor
const button = (valor) => document.querySelector('.botao-modoDaltonico').textContent = valor

const themeON = () => {
    button('desligar')
    
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'daltonismo.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);

    localStorage.setItem('modo', 'true')
}

const themeOFF = () => {
    button('Modo Daltônico')
    
    localStorage.setItem('modo', 'false')
};

if (modo !== null){

    if (modo === 'true') {
        themeON()
    } else {
        themeOFF()
    }
} else {
    themeOFF()
}

/*  fofoqueiro mandado para escutar toda vez q dá um click addEventListener */

document.querySelector('.botao-modoDaltonico').addEventListener('click', () => {

    if (localStorage.getItem('modo') === 'false') {
        themeON()
    } else {
        themeOFF()
    }

})