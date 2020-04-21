;Escribir un programa que detecte si un número introducido 
;desde el teclado es positivo o negativo.
(define (main num)
    (if (< num 0)
        (begin
            (display "Numero negativo ")
            (display num)
        )
        (begin
            (display "Numero positivo")
            (display num)
        )
    )
)

(main 9)
(main -5)


;Escribir un programa que tome dos números y diga si ambos son 
;pares o impares.
(define (Pares? num1 num2)
    (if (and (= (remainder num1 2) 0)(= (remainder num2 2) 0))
        (display "Ambos son pares.")
        (display "Ambos numeros, o uno de ellos, no es par.")
    )
)

(Pares? 6 12)


;Escribir un programa que lea dos números por teclado y nos diga 
;cuál es el mayor.
(define (Mayor? num1 num2)
    (if (> num1 num2)
        (begin
            (display "El número mayor es: ")
            (display num1)
        )
        (begin
            (display "El número mayor es: ")
            (display num2)
        )
    )
)

(Mayor? 14 9)

;Escribir un programa que dado un número del 1 a 7 escriba el 
;correspondiente nombre del día de la semana.

(define (Dias dia)
    (if (= dia 1)
        (display "Lunes")
        (if (= dia 2)
            (display "Martes")
            (if (= dia 3)
                (display "Miercoles")
                (if (= dia 4)
                    (display "Jueves")
                    (if (= dia 5)
                        (display "Viernes")
                        (if (= dia 6)
                            (display "Sabado")
                            (if (= dia 7)
                                (display "Domingo")
                                (display "Ingrese un dia valido")
                            )
                        )
                    )
                )
            )
        )
    )
)

(Dias 5)


;Escribir un programa que calcule el sueldo que le corresponde al 
;trabajador de una empresa que cobra 40.000  dólares  anuales, el 
;programa debe realizar los cálculos en función de los siguientes 
;criterios.
;a.  Si lleva más de 15 años en la empresa se le aplica un aumento 
;    del 12%.
;b.  Si lleva menos de 15 años pero más  que  10  se  le aplica un 
;    aumento del 8%.
;c.  Si lleva menos de 10 años pero  más  que  5  se  le aplica un 
;    aumento del 5%.
;d.  Si lleva menos de 5 años se le aplica un aumento del 3%.

