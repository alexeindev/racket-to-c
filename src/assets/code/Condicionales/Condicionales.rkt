;Escribir un programa que detecte si un número introducido\n
;desde el teclado es positivo o negativo.\n
(define (main num)\n
    \t(if (< num 0)\n
        \t\t(printf \"Numero negativo: ~a\" num)\n
        \t\t(printf \"Numero positivo: ~a\" num)\n
    \t)\n
)\n
\n
(main (read))

;Escribir un programa que lea tres números por teclado y nos diga \n
;cuál es el mayor.\n
(define (Mayor? num1 num2 num3)\n
    \t(if (and (> num1 num2) (> num1 num3))\n
        \t\t(printf \"El número mayor es: ~a\" num1)\n
    \t)\n
    \t(if (and (> num2 num1) (> num2 num3))\n
        \t\t(printf \"El número mayor es: ~a\" num2)\n
    \t)\n
    \t(if (and (> num3 num1) (> num3 num2))\n
        \t\t(printf \"El número mayor es: ~a\" num3)\n
    \t)\n
)\n
\n
(Mayor? (read) (read) (read))

;Escribir un programa que nos diga si un estudiante  aprobó la \n
;materia, el programa debe realizar los cálculos en función de \n
;los siguientes criterios.\n
;a. Apruba si las tres notas suman  3.5 o mas\n
;b. Presenta pruba de validacion si la nota estan entre 3 y 3.4\n
;c. Reprueba si la nota es menor a 3\n

(define (aprobo? nota)\n
    \t(if (>= nota 3.5)\n
        \t\t(printf \"Aprobó la materia\")\n
        \t\t(if (and (>= nota 3) (< nota 3.4))\n
            \t\t\t(printf \"Presenta prueba de validación\")\n
            \t\t\t(if (and (>= nota 0) (< nota 3))\n
                \t\t\t\t(printf \"Reprobó la materia\")\n
                \t\t\t\t(printf \"ingrese una nota valida\")\n
            \t\t\t)\n
        \t\t)\n
    \t)\n
)\n
\n
(aprobo? (read))


;Escribir un programa que muestre un menú donde las opciones sean \n
;“Equilátero”, “Isósceles” y “Escaleno”, pida una opción y calcule \n
;el perímetro del triángulo seleccionado.\n
(define (perimetro)\n
    \t(printf \"1. Equilátero\")\n
    \t(printf \"2. Isósceles\")\n
    \t(printf \"3. Escaleno\")\n
    \t(define opc (read))\n
    \t(cond\n
      \t\t[(= opc 1)(printf \"Ingrese el lado: \")\n
                \t\t\t(printf \"perimetro: ~a\" (* 3 (read)))]\n
      \t\t[(= opc 2)(printf \"Ingrese el lado y la base: \")\n
                \t\t\t(printf \"perimetro: ~a\" (+ (* 2 (read)) (read)))]\n
      \t\t[(= opc 3)(printf \"Ingrese los 3 lados: \")\n
                \t\t\t(printf \"perimetro: ~a\" (+(+ (read)(read))(read)))]\n
      \t\t[else (printf \"Ingrese una opción valida\")]\n
    \t)\n
)\n
\n
(perimetro)

;Escribir un programa que nos muestre un menu con las opciones de:\n
;1.  Dia  corespondiente,  2. listar  dias,  crear  las  funciones\n
;respectivas  a  las  opciones.\n
(define (dias)\n
    \t(printf \"Seleccione una opción\")\n
    \t(printf \"1. Dia corespondiente\")\n
    \t(printf \"2. listar dias\")\n
    \t(define opc (read))\n
    \t(cond\n
        \t\t[(= opc 1) (printf \"ingrese un numero entre 1 y 7: \")(define (dia (read)))\n
                    \t\t\t(cond\n
                        \t\t\t\t[(= opc 1)(printf \"Lunes\")]\n
                        \t\t\t\t[(= opc 2)(printf \"Martes\")]\n
                        \t\t\t\t[(= opc 3)(printf \"Miercoles\")]\n
                        \t\t\t\t[(= opc 4)(printf \"Jueves\")]\n
                        \t\t\t\t[(= opc 5)(printf \"Viernes\")]\n
                        \t\t\t\t[(= opc 6)(printf \"Sabado\")]\n
                        \t\t\t\t[(= opc 7)(printf \"Domingo\")]\n
                        \t\t\t\t[else (printf \"Ingrese una opción valida\")]\n
                    \t\t\t)\n
        \t\t]\n
        \t\t[(= opc 2)\n
            \t\t\t(printf \"Lunes\")\n
            \t\t\t(printf \"Martes\")\n
            \t\t\t(printf \"Miercoles\")\n
            \t\t\t(printf \"Jueves\")\n
            \t\t\t(printf \"Viernes\")\n
            \t\t\t(printf \"Sabado\")\n
            \t\t\t(printf \"Domingo\")\n
        \t\t]\n
        \t\t[else (printf \"Ingrese una opción valida\")]\n
    \t)\n
)\n
\n
(dias)

;Escribir un programa que calcule el sueldo que le corresponde al \n
;trabajador de una empresa que cobra 40.000  dólares  anuales, el \n
;programa debe realizar los cálculos en función de los siguientes \n
;criterios.\n
;a.Si lleva más de 15 años en la empresa obtiene un aumento del 12%.\n
;b.Si lleva más de 10  y menos de 15 años obtiene un aumento del 8%.\n
;c.Si lleva más de  5  y menos de 10 años obtiene un aumento del 5%.\n
;d.  Si lleva menos de 5 años se le aplica un aumento del 3%.\n
(define (salario)\n
  \t(printf \"seleccione una opcion\")\n
  \t(printf \"1. Calcular sueldo anual\")\n
  \t(printf \"2. Ver aumentos anuales\")\n
  \t(define opc (read))\n
  \t(printf \"Ingrese la cantidad de años que lleva en la empresa\")\n
  \t(define anios (read))\n
  \t(cond\n
    \t\t[(= opc 1)\n
      \t\t\t(if (> anios 15)\n
        \t\t\t\t(printf \"Salario anual de: ~a\" (+ (* 40000 1.2) 40000))\n
        \t\t\t\t(if (and (< anios 15) (> anios 10))\n
          \t\t\t\t(printf \"Salario anual de: ~a\" (+ (* 40000 0.8) 40000))\n
          \t\t\t\t(if (and (< anios 10) (> anios 5))\n
            \t\t\t\t\t(printf \"Salario anual de: ~a\" (+ (* 40000 0.5) 40000))\n
            \t\t\t\t\t(if (and (< anios 5) (> anios 0))\n
              \t\t\t\t\t(printf \"Salario anual de: ~a\" (+ (* 40000 0.3) 40000))\n
              \t\t\t\t\t(printf \"Ingrese una año valido\")\n
            \t\t\t\t\t)\n
          \t\t\t\t)\n
        \t\t\t\t)\n
      \t\t\t)\n
    \t\t]\n
    \t\t[(= opc 2)\n
        \t\t\t(printf \"Si lleva más de 15 años en la empresa 12%\")\n
        \t\t\t(printf \"Si lleva menos de 15 pero más de 10 años 8%\")\n
        \t\t\t(printf \"Si lleva menos de 10 pero más de 5 años 5%\")\n
        \t\t\t(printf \"Si lleva menos de 5 años 3%\")\n
    \t\t]\n
    \t\t[else (printf \"Ingrese una opción valida\")]\n
  \t)\n
)\n
\n
(salario)


