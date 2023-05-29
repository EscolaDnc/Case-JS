
function mostrarDivPai(opcao) {
    console.log(opcao)
    var DivWeb = document.getElementById('DivWeb');
    var DivMobile = document.getElementById('DivMobile');

    var divfilho1Web = document.getElementById('divfilho1Web');
    var divfilho1Mob = document.getElementById('divfilho1Mob');


    if (opcao === 'Mobile') {
    
        divfilho1Mob.style.display = 'block';
        // ta ocultando o mobile
        divfilho1Web.style.display = 'none';
        document.getElementById("webButton").disabled = true;
        // ta mostrando a primeira div do mobile
    } else {
        divfilho1Mob.style.display = 'none';
        // ta ocultando o mobile
        divfilho1Web.style.display = 'block';
        
        document.getElementById("mobileButton").disabled = true;

    }

}
// aqui vamos usar regra de negocio para poder mostrar as divs filho da parte web

function mostrarDivWeb(opcao){
    var divfilho2WebBack = document.getElementById('divfilho2WebBack');
    var divfilho2WebFront = document.getElementById('divfilho2WebFront');

    if (opcao === 'Back-end') {
    
        divfilho2WebBack.style.display = 'block';
        // ta ocultando o mobile
        divfilho2WebFront.style.display = 'none';
    } else  {
        
        divfilho2WebFront.style.display = 'block';
       
        divfilho2WebBack.style.display = 'none';


    }
}

function opcaoSelecionadaBackWeb(opcao){
    var divOpções = document.getElementById('divOpções');
    var opcao1 = document.getElementById('opcao1');
    var opcao2 = document.getElementById('opcao2');
    var opcao3 = document.getElementById('opcao3');

    // mostrar a div de opções
    if (opcao != null){
    divOpções.style.display = 'Block'
    }

    if (opcao === 'Rapidez') {
        

        opcao1.textContent  = 'C/C++';
        opcao2.innerHTML = 'Rust';
        opcao3.innerHTML = 'Go';

    } else if  (opcao === 'Programação') {


        opcao1.textContent  = 'Python';
        opcao2.innerHTML = 'JavaScript';
        opcao3.innerHTML = 'Scratch';

    } else  {
     
        opcao1.textContent  = 'Python';
        opcao2.innerHTML = 'JavaScript';
        opcao3.innerHTML = 'Java';


    }
}

function opcaoSelecionadaFrontWeb(opcao) {
        var divOpções = document.getElementById('divOpções');
        var opcao1 = document.getElementById('opcao1');
        var opcao2 = document.getElementById('opcao2');
        var opcao3 = document.getElementById('opcao3');
    
        // mostrar a div de opções
        if (opcao != null){
        divOpções.style.display = 'Block'
        } else {
            divOpções.style.display = 'none'
        }
    
        if (opcao === 'bibliotecas') {
    
            opcao1.textContent  = 'React (JavaScript)';
            opcao2.innerHTML = 'Vue (JavaScript)';
            opcao3.innerHTML = 'Angular (TypeScript)';
    
        } else if  (opcao === 'compreensão') {
    
            opcao1.textContent  = 'JavaScript';
            opcao2.innerHTML = 'Python';
            opcao3.innerHTML = 'TypeScript';
    
        } else {
            opcao1.textContent  = 'JavaScript';
            opcao2.innerHTML = 'Python';
            opcao3.innerHTML = 'React';
    
    
        }
    }

// PARTE MOBILE
function mostrarDivMob(opcao){
    var divfilho2WebBack = document.getElementById('divfilho2MobBack');
    var divfilho2WebFront = document.getElementById('divfilho2MobFront');

    if (opcao === 'Back-end') {
    
        divfilho2WebBack.style.display = 'block';
        // ta ocultando o mobile
        divfilho2WebFront.style.display = 'none';
    } else  {
        
        divfilho2WebFront.style.display = 'block';
       
        divfilho2WebBack.style.display = 'none';


    }
}

function opcaoSelecionadaBackMob(opcao){
    var divOpções = document.getElementById('divOpçõesMob');
    var opcao1 = document.getElementById('opcao1Mob');
    var opcao2 = document.getElementById('opcao2Mob');
    var opcao3 = document.getElementById('opcao3Mob');

    // mostrar a div de opções
    if (opcao != null){
    divOpções.style.display = 'Block'
    }

    if (opcao === 'Rapidez') {

        opcao1.textContent  = 'Dart (Flutter)';
        opcao2.innerHTML = 'React';
        opcao3.innerHTML = 'Java';

    } else if  (opcao === 'Programação') {

        opcao1.textContent  = 'Python';
        opcao2.innerHTML = 'JavaScript';
        opcao3.innerHTML = 'Dart (Flutter)';

    } else  {
        opcao1.textContent  = 'Java';
        opcao2.innerHTML = 'Dart (Flutter)';
        opcao3.innerHTML = 'Swift';


    }
}

function opcaoSelecionadaFrontMob(opcao){
    var divOpções = document.getElementById('divOpçõesMob');
    var opcao1 = document.getElementById('opcao1Mob');
    var opcao2 = document.getElementById('opcao2Mob');
    var opcao3 = document.getElementById('opcao3Mob');

    // mostrar a div de opções
    if (opcao != null){
    divOpções.style.display = 'Block'
    } else {
        divOpções.style.display = 'none'
    }

    if (opcao === 'bibliotecas') {
    
        opcao1.textContent  = 'Swift';
        opcao2.innerHTML = 'Java';
        opcao3.innerHTML = 'React Native';

    } else if  (opcao === 'compreensão') {

        opcao1.textContent  = 'Python (Kivy e o BeeWare)';
        opcao2.innerHTML = 'React Native';
        opcao3.innerHTML = 'Dart (Flutter)';

    } else {
        opcao1.textContent  = 'Java';
        opcao2.innerHTML = 'React Native';
        opcao3.innerHTML = 'Swift';


    }
}

