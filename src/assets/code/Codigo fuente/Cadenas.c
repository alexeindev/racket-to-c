/*Cree en programa que capture una cadena y luego
convierta cada uno de los caracteres a letras may�sculas.*/
#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main(){
	int i, j;
	char cadena[20];
	char cadenaMayus[20];
	printf("Ingrese una cadena:  ");	
	scanf("%s", cadena);
	
	for(i=0; i<strlen(cadena); i++){
		cadenaMayus[i] =toupper(cadena[i]);
	}
	printf("\nLa cadena en mayusculas es: %s", cadenaMayus);
}
/*Construya un programa en C que capture una cadena y almacene 
en otra variable la cadena invertida.*/
#include <stdio.h>
#include <string.h>
 int main(){
 	int i,tam;
 	char cadena[20];
 	char cadena_invertida[20]={};
 	printf("Ingrese una cadena de caracteres: ");
 	gets(cadena);
 	tam=strlen(cadena)-1;
 	for(i=0; i<strlen(cadena); i++){
 		cadena_invertida[tam]=cadena[i];
		tam--;
	}
	printf("\nCADENA INVERTIDA: ");
	printf("\n%s", cadena_invertida);
 }
/*Cree un programa que analice cuantas letras may�suclas y 
cuantas letras min�sculas tiene una cadena ingresada por
el usuario. Nota: Puede usar ciclos anidados y codigo ASCII.*/
#include <stdio.h>
#include <string.h>
int main(){
	int contador_mayus=0, contador_minus=0, j, i;
	char cadena[20];
	printf("Ingrese una cadena: ");
	scanf("%s", cadena);
	for(i=0; i<strlen(cadena); i++){
		for(j=65; j<=90; j++){
			if(cadena[i]==j)contador_mayus++;
		}
		for(j=97; j<=122; j++){
			if(cadena[i]==j)contador_minus++;
		}
	}
	printf("\nCantidad de Mayusculas: %d.", contador_mayus);
	printf("\nCantidad de Minusculas: %d.", contador_minus);
	
}
/*Cree un programa en C que reciba una cadena de m�ximo 20
caracteres escrita por el usuario, el programa debe contar
cuantos n�meros, y espacios en blanco contiene dicha cadena.
Nota: Una buena manera de realizar el ejercicio es usando el
c�digo ASCII*/
#include <stdio.h>
#include <string.h>
 int main(){
 	int i,j, contador_numeros=0, contador_espacios=0;
 	char cadena[20];
 	printf("Ingrese una cadena maximo de 20 caracteres: ");
 	gets(cadena);
 	for(i=0; i<strlen(cadena); i++){
		for(j=48; j<58; j++){
			if(cadena[i]==j){
				contador_numeros++;
			}
		}
		if(cadena[i]==32){
			contador_espacios++;
		}
	}
	printf("\nLa Cadena ingresada tiene:\n\t%d valores numericos.\n\t%d espacios en blanco. ", contador_numeros, contador_espacios);
 }
/*Cree una simulaci�n de una base de datos que guarde el 
nombre de 3 personas, el programa debe pedir al usuario 
ingresar los nombres. Adem�s se puede realizar busquedas 
dentro de la base de datos.*/

#include <stdio.h>
#include <string.h>

int main(){
	char nombres[3][20], iguales, i, encontrado;
	int buscar=1;
	for(i=0; i<3; i++){
		printf("Ingrese el nombre de la persona %d: ", i+1);
		gets(nombres[i]);
	}
	char nombre_buscar[20];
	printf("\n\nIngrese el nombre a buscar: ");
	gets(nombre_buscar);
	while(buscar==1){
		for(i=0; i<3; i++){
			iguales=strcmp(nombre_buscar, nombres[i]);
			if(iguales==0){		
				encontrado=1;
				buscar=0;
			}
		}
		buscar=0;
	}
	if(encontrado==1){
		printf("El nombre esta en la base de datos. ");	
	}else{
		printf("El nombre NO esta en la base de datos. ");	
	}
}
/*Basandose en el ejemplo se simulaci�n de base de datos,
cree un programa que capture nombre y c�digo de 3 estudiantes, 
el usuario es quien llena la informaci�n, se debe validar la 
condici�n de que no pueden haber dos c�digos iguales.*/
#include <stdio.h>
#include <string.h>
int main(){
	int i, iguales;
	char estudiantes[3][80];
	char codigos[3][10];
	for(i=0; i<3; i++){
		printf("\n\nIngrese el nombre del estudiante # %d: ", i+1);
		scanf("%s", estudiantes[i]);	
		printf("Codigo del estudiante # %d: ", i+1);
		scanf("%s", codigos[i]);
		do{
			iguales=strcmp(codigos[i-1], codigos[i]);
			if(iguales==0){
				printf("\nEl codigo ya esta en uso. ");
				printf("\n\tCodigo del estudiante # %d: ", i+1);
				scanf("%s", codigos[i]);
			}
		}while(iguales==0);
	}
}
