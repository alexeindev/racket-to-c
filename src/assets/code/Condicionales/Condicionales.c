//Escribir un programa que detecte si un número introducido\n
//desde el teclado es positivo o negativo.\n
int main (){\n
    \tint num;\n
    \tscanf(\"%d\", &num);\n
    \tif (num < 0){\n
        \t\tprintf (\"Numero negativo: %d\", num);\n
        \t\tprintf (\"Numero positivo: %d\", num);\n
    \t}\n
}\n

//Escribir un programa que lea tres números por teclado y nos diga 
//cuál es el mayor.
int main(){\n
    \tint num1, num2, num3;\n
    \tscanf(\"%d %d %d\", num1, num2, num3);\n
    \tif((num1 > num2) && (num1 > num3)){\n
        \t\tprintf (\"El número mayor es: %d\", num1);\n
    \t}\n
    \tif((num2 > num1) && (num2 > num3)){\n
        \t\tprintf (\"El número mayor es: %d\", num2);\n
    \t}\n
    \tif((num1 > num2) && (num1 > num3)){\n
        \t\tprintf (\"El número mayor es: %d\", num3);\n
    \t}\n
}

//Escribir un programa que nos diga si un estudiante  aprobó la\n 
//materia, el programa debe realizar los cálculos en función de\n
//los siguientes criterios.\n
//a. Apruba si las tres notas suman  3.5 o mas\n
//b. Presenta pruba de validacion si la nota estan entre 3 y 3.4\n
//c. Reprueba si la nota es menor a 3\n
#include <stdio.h>\n
int main()\n
{\n
    \tint nota;\n
    \tprintf(\"ingrese la nota: \");\n
    \tscanf(\"%s\", &nota);\n
    \tif(nota >= 3.5){\n
        \t\tprintf (\"Aprobó la materia\");\n
    \t}else{\n
        \t\tif ((nota >= 3) && (nota < 3.4)){\n
            \t\t\tprintf (\"Presenta prueba de validación\");\n
        \t\t}else{\n
           \t\t\tif ((nota >= 0) && (nota < 3)){\n
                \t\t\t\tprintf (\"Reprobó la materia\");\n
            \t\t\t}else{\n
                \t\t\t\tprintf (\"ingrese una nota valida\");\n
            \t\t\t}\n
        \t\t}\n
    \t}\n
}\n


//Escribir un programa que muestre un menú donde las opciones sean \n
//“Equilátero”, “Isósceles” y “Escaleno”, pida una opción y calcule \n
//el perímetro del triángulo seleccionado.\n
#include <stdio.h>\n
#include <stdlib.h>\n
int main()\n
{\n
    \tint lado, lado2, lado3, base, opcion;\n
    \tprintf(\"Seleccione opción:\");\n
    \tprintf(\"1 – Equilátero\");\n
    \tprintf(\"2 – Isósceles\");\n
    \tprintf(\"3 – Escaleno\");\n
    \tscanf(\"%d\",&opcion);\n
    \tswitch (opcion)\n
    \t{\n
        \t\tcase 1:\n
            \t\t\tprintf(\"Introduzca lado del triángulo:\");\n
            \t\t\tscanf(\"%d\",&lado);\n
            \t\t\tprintf(\"El perímetro es: %d\",3*lado);\n
            \t\t\tbreak;\n
        \t\tcase 2:\n
            \t\t\tprintf(\"Ingrese el lado y la base: \");\n
            \t\t\tscanf(\"%d %d\", &lado, &base);\n
            \t\t\tprintf(\"El perímetro es: %d\",(2*lado)+base);\n
            \t\t\tbreak;\n
        \t\tcase 3:\n
            \t\t\tprintf (\"Ingrese los 3 lados: \");\n
            \t\t\tscanf(\"%d %d %d\", &lado, &lado2, &lado3);\n
            \t\t\tprintf(\"perimetro: %d\", (lado3 + (lado + lado2)));\n
            \t\t\tbreak;\n
        \t\tdefault:\n
            \t\t\tprintf(\"Opción no válida.\");\n
            \t\t\tbreak;\n
    \t}\n
}\n

//Escribir un programa que nos muestre un menu con las opciones de:\n
//1.  Dia  corespondiente,  2. listar  dias,  crear  las  funciones\n
//respectivas  a  las  opciones.\n
#include <stdio.h>\n
#include <stdlib.h>\n
int main()\n
{\n
    \tint opcion, dia;\n
    \tprintf(\"1. Dia corespondiente\");\n
    \tprintf(\"2. listar dias\");\n
    \tswitch (opcion)\n
    \t{\n
        \t\tcase 1: printf(\"ingrese un numero entre 1 y 7: \");\n
            \t\t\tswitch (dia)\n
            \t\t\t{\n
           \t\t\tcase 1:\n
                \t\t\t\tprintf(\"Lunes\");\n
                \t\t\t\tbreak;\n
            \t\t\tcase 2:\n
                \t\t\t\tprintf(\"Martes\");\n
                \t\t\t\tbreak;\n
            \t\t\tcase 3:\n
                \t\t\t\tprintf(\"Miercoles\");\n
                \t\t\t\tbreak;\n
            \t\t\tcase 4:\n
                \t\t\t\tprintf(\"Jueves\");\n
                \t\t\t\tbreak;\n
            \t\t\tcase 5:\n
                \t\t\t\tprintf(\"Viernes\");\n
                \t\t\t\tbreak;\n
            \t\t\tcase 6:\n
                \t\t\t\tprintf(\"Sabado\");\n
                \t\t\t\tbreak;\n
            \t\t\tcase 7:\n
                \t\t\t\tprintf(\"Domingo\");\n
                \t\t\t\tbreak;\n
            \t\t\tdefault:\n
                \t\t\t\tprintf(\"Ingrese una opción valida\");\n
                \t\t\t\tbreak;\n
            \t\t\t}\n
            \t\t\tbreak;\n
        \t\tcase 2:\n
            \t\t\tprintf(\"Lunes\");\n
            \t\t\tprintf(\"Martes\");\n
            \t\t\tprintf(\"Miercoles\");\n
            \t\t\tprintf(\"Jueves\");\n
            \t\t\tprintf(\"Viernes\");\n
            \t\t\tprintf(\"Sabado\");\n
            \t\t\tprintf(\"Domingo\");\n
            \t\t\tbreak;\n
        \t\tdefault:\n
            \t\t\tprintf(\"Ingrese una opción valida\");\n
            \t\t\tbreak;\n
    \t}\n
}

//Escribir un programa que calcule el sueldo que le corresponde al \n
//trabajador de una empresa que cobra 40.000  dólares  anuales, el \n
//programa debe realizar los cálculos en función de los siguientes \n
//criterios.\n
//a.Si lleva más de 15 años en la empresa obtiene un aumento del 12%.\n
//b.Si lleva más de 10  y menos de 15 años obtiene un aumento del 8%.\n
//c.Si lleva más de  5  y menos de 10 años obtiene un aumento del 5%.\n
//d.  Si lleva menos de 5 años se le aplica un aumento del 3%.\n
#include <stdio.h>\n
#include <stdlib.h>\n
int main()\n
{\n
    \tint anios, opcion;\n
    \tprintf(\"Seleccione opción:\");\n
    \tprintf(\"1. Calcular sueldo anual\");\n
    \tprintf(\"2. Ver aumentos anuales\");\n
    \tscanf(\"%d\",&opcion);\n
    \tswitch (opcion)\n
    \t{\n
        \t\tcase 1:\n
            \t\t\tif (anios > 15){\n
                \t\t\t\tprintf (\"Salario anual de: ~a\" ((40000 * 1.2) + 40000));\n
            \t\t\t}else{\n
                \t\t\t\tif ((anios < 15) && (anios > 10)){\n
                    \t\t\t\t\tprintf (\"Salario anual de: ~a\" ((40000 * 0.8) + 40000));\n
                \t\t\t\t}else{\n
                    \t\t\t\t\tif ((anios < 10) && (anios > 5)){\n
                        \t\t\t\t\t\tprintf (\"Salario anual de: ~a\" ((40000 * 0.5) + 40000));\n
                    \t\t\t\t\t}else{\n
                        \t\t\t\t\t\tif ((anios < 5) && (anios > 0)){\n
                            \t\t\t\t\t\t\tprintf (\"Salario anual de: ~a\" ((40000 * 0.3) + 40000));\n
                        \t\t\t\t\t\t}else{\n
                            \t\t\t\t\t\t\tprintf (\"Ingrese una año valido\");\n
                        \t\t\t\t\t\t}\n
                    \t\t\t\t\t}\n
                \t\t\t\t}\n
            \t\t\t}\n
            \t\t\tbreak;\n
        \t\tcase 2:\n
            \t\t\tprintf (\"Si lleva más de 15 años en la empresa 12%\");\n
            \t\t\tprintf (\"Si lleva menos de 15 pero más de 10 años 8%\");\n
            \t\t\tprintf (\"Si lleva menos de 10 pero más de 5 años 5%\");\n
            \t\t\tprintf (\"Si lleva menos de 5 años 3%\");\n
            \t\t\tbreak;\n
        \t\t\tdefault:\n
            \t\t\tprintf(\"Opción no válida.\");\n
            \t\t\tbreak;\n
    }\n
}