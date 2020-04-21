//Escribir un programa que detecte si un número introducido 
//desde el teclado es positivo o negativo.
#include <stdio.h>
int main()
{
    int num = 5;
    if(num < 0){
        printf("Numero negativo %i",num);
    }else{
        printf("Numero positivo %i",num);
    }
}


//Escribir un programa que tome dos números y diga si ambos son 
//pares o impares.
#include <stdio.h>
int main()
{
    int num1=4,num2=8;
    if (num1%2==0 && num2%2==0) {
       printf("Ambos son pares.\n");
    }else{
       printf("Ambos numeros, o uno de ellos, no es par.\n");
    }
}


//Escribir un programa que lea dos números por teclado y nos diga 
//cuál es el mayor.
#include <stdio.h>
int main()
{
    int num1=4,num2=8;
    if (num1 > num2) {
       printf("El número mayor es: %i",num1);
    }else{
       printf("El número mayor es: %i",num2);
    }
}


//Escribir un programa que dado un número del 1 a 7 escriba el 
//correspondiente nombre del día de la semana.
#include <stdio.h>
int main()
{
    int num1=4;
    if (num1 = 1) {
       printf("Lunes");
    }else{
        if(num1 = 2) {
            printf("Martes");
        }else{
            if(num1 = 3) {
                printf("Miercoles");
            }else{
                if(num1 = 4) {
                    printf("Jueves");
                }else{
                    if(num1 = 5) {
                        printf("Viernes");
                    }else{
                        if(num1 = 6) {
                            printf("Sabado");
                        }else{
                            if(num1 = 7) {
                                printf("Domingo");
                            }else{
                                printf("Ingrese un dia valido");
                            }
                        }
                    }
                }
            }
        }
    }
}


//Escribir un programa que calcule el sueldo que le corresponde al 
//trabajador de una empresa que cobra 40.000  dólares  anuales, el 
//programa debe realizar los cálculos en función de los siguientes 
//criterios.
//a.  Si lleva más de 15 años en la empresa se le aplica un aumento 
//    del 12%.
//b.  Si lleva menos de 15 años pero más  que  10  se  le aplica un 
//    aumento del 8%.
//c.  Si lleva menos de 10 años pero  más  que  5  se  le aplica un 
//    aumento del 5%.
//d.  Si lleva menos de 5 años se le aplica un aumento del 3%.