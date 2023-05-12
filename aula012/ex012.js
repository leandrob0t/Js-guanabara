var agora = new Date()  // horas do sistema
var horas = agora.getHours();  //horas do sistema
console.log(`São exatamente ${horas} horas.`)
if (horas <12){
    console.log('Bom dia!!')
}else if (horas <18){
    console.log('Boa tarde!!')
}else {
    console.log('Boa noite!!')
}