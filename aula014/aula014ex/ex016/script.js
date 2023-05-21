function contar(){
    let ini = document.getElementById('initxt');
    let fim = document.getElementById('fimtxt');
    let pas = document.getElementById('pastxt');
    let res = document.getElementById('res');

    if (ini.value.length ==0 || fim.value.length ==0 || pas.value.length ==0){
        alert('[ERRO] Faltam dados..')
    }else {
        res.innerHTML = 'Contando: ';
        i = Number(ini.value);
        f = Number(fim.value);
        p = Number(pas.value);
    }
    
    for (let c=i; c<=f; c+=p){
        res.innerHTML+= ` ${c} \u{1F449}`
    }
}