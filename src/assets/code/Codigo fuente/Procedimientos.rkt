;Implemente un procedimiento que reciba un numero e imprima
;si el numero es positivo o negativo, en caso de ser positivo
;debe analizar si es par o impar.
(define (analisis n)
	(if (> n 0)
        (begin
            (printf "\nEl numero ingresado es positivo.")
            (if (= (remainder n 2) 0)
                (printf "\nAdemas el numero es par.")
                (printf "\nAdemas el numero es impar.")
            )
        )
		(printf "\nEl numero ingresado es Negativo.")
	}
)

(define (main)
	(define numero 0)
	(printf "Ingrese un numero para analizar: ")
	(set! numero (read))
	(analisis numero)
)

(main)

;Implemente un procedimiento que dado un numero imprima en
;palabrasel mes del a�o correspondiente.