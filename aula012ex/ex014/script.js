function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manhap.png'; 
        document.body.style.backgroundColor = '#F2D852';
    }else if (hora > 12 && hora <= 18){
        img.src = 'tardep.png';
        document.body.style.backgroundColor = '#F29985';
    }else {
        img.src = 'noitep.png';
        document.body.style.backgroundColor = '#8C72A6';
    }
}

