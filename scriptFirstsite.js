
const c = (e) => document.querySelector(e);









function calcular()
{
    let altura = c('#altura').value;
    let peso = c('#peso').value;
    let imc =  (peso / (altura * altura)).toFixed(2);
    let resultado = document.getElementById('res');
    
    if( imc <= 18.5)
    {
        resultado.innerHTML = (`O seu IMC é ${imc}<br/>`);
        resultado.innerHTML += ("Seu peso esta abaixo do normal.");
    }
    else if( imc > 18.5 && imc <= 24.9)
    {
        resultado.innerHTML = (`O seu IMC é ${imc}<br/>`);
        resultado.innerHTML += ("Seu peso está Normal.");
    }
    else if( imc > 24.9 && imc <= 29.9)
    {
        resultado.innerHTML = (`O seu IMC é ${imc}<br/>`)  ;
        resultado.innerHTML += ("Você está com excesso de peso.");
    }
    else if( imc > 29.9 && imc <= 34.9)
    {
        resultado.innerHTML = (`O seu IMC é ${imc}<br/>`);
        resultado.innerHTML += ("Você está com Obesidade grau I.");
    }
    else if( imc > 34.9 && imc <= 39.9)
    {
        resultado.innerHTML = (`O seu IMC é ${imc}<br/>`);
        resultado.innerHTML += ("Você está com Obesidade grau II.");
    }
    else
    {
        resultado.innerHTML = (`O seu IMC é ${imc}<br/>`);
        resultado.innerHTML += ("Você está com Obesidade Morbida.");
    }
    
    
}

function limpar()
{
    window.location.reload();
}



