let nota;
nota = 55;
switch(nota){
    case (nota >= 80):
        console.log('Aprovado!');
        break;
    case (nota <=79):
        console.log('Lista');
        break;
    case (nota >=60):
        console.log('Lista');
        break;    
    case nota < 60 && nota > 0:
        console.log('Reprovado');
        break;
        default:
            console.log('Valor Inválido');
}