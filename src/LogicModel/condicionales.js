
export default class Condicionales{
    uno(input){
        return (input > 0)? "Numero negativo" : "Numero positivo" ;
    }

    dos(input, input2, input3){
        return ((input < input2) && (input < input3))? input : ((input2 < input) && (input2 < input3))? input2 : input3;
    }

    tres(input){
        return (input >= 3.5) ? "Aprobó la materia" : ((nota >= 3) && (nota < 3.4))? "Presenta prueba de validación" : ((nota >= 0) && (nota < 3))? "Reprobó la materia" : "ingrese una nota valida";
    }
    
    cuatro(input){
        var datos;
        return dat;
    }

    cinco(){
        return  "Edad: " ;
    }

    seis(input){
        return dat;
    }
}