import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormControl, FormLabel } from '@material-ui/core';
import img from '../../assets/img/practica/help3.jpeg';
import './tab-style.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '40%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label= "Expresiones" {...a11yProps(0)} />
          <Tab label= "Estructuras de secuencia" {...a11yProps(1)} />
          <Tab label= "Estructuras de selección" {...a11yProps(2)} />
          <Tab label= "Estructuras de iteración" {...a11yProps(3)} />
          <Tab label= "Caracteres y Cadenas" {...a11yProps(4)} />
          <Tab label= "Vectores" {...a11yProps(5)} />
          <Tab label= "Matrices" {...a11yProps(6)} />
          <Tab label= "Estructuras de datos" {...a11yProps(7)} />
          <Tab label= "Funciones" {...a11yProps(8)} />
          <Tab label= "Composición de Funciones" {...a11yProps(9)} />
          <Tab label= "Procedimientos" {...a11yProps(10)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          <FormControl component = "fieldset">
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-green">Ejercicio 1</p>
                Transformar en código el pseudocódigo que se muestra a continuación, correspondiente a 
                proporcionar el precio medio de un producto, calculado a partir del precio del mismo en 
                tres establecimientos distintos. Los precios para el cálculo son introducidos por el 
                usuario.
              </div>
              <div>
                <ul>
                  1.Inicio<br/>
                  2.-  -Mostrar “Introduzca el precio del producto 1”: Pedir precio1 <br/>
                  3.-  -Mostrar “Introduzca el precio del producto 2”: Pedir precio2 <br/>
                  4.-  -Mostrar “Introduzca el precio del producto 3”: Pedir precio3 <br/>
                  5.-  -media = (precio1 + precio2 + precio3) / 3<br/>
                  6.-  -Mostrar “El precio medio del producto es”, media, “Euros” <br/>
                  7.Fin 
                </ul>
              </div>
            </FormLabel>
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-yellow">Ejercicio 2</p>
                Transformar en código el pseudocódigo que se muestra a continuación, correspondiente 
                al cálculo del volumen de un cilindro dados su altura y diámetro.
              </div>
              <div>
                <ul>
                  1.Inicio<br/>
                  2.-  -Mostrar “Introduzca el diámetro, en metros” : Pedir D <br/>
                  3.-  -Mostrar “Introduzca la altura, en metros” : Pedir H <br/>
                  4.-  -R = D/2 : Pi = 3,141593<br/>
                  5.-  -V = Pi * (R ^ 2) * H<br/>
                  6.-  -Mostrar “El volumen del cilindro es de”, V, “metros cúbicos”<br/>
                  7.Fin 
                </ul>
              </div>
            </FormLabel>
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-red">Ejercicio 3</p>
                Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, 
                ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso 
                contrario. Además por la compra de más de 3 docenas se obsequia una unidad del 
                producto por cada docena en exceso sobre 3. Diseñe un algoritmo que determine el 
                monto de la compra, el monto del descuento, el monto a pagar y el número de unidades 
                de obsequio por la compra de cierta cantidad de docenas del producto.
              </div>
            </FormLabel>
          </FormControl>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <FormControl component = "fieldset">
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-green">Ejercicio 1</p>
                Desarrolle un algoritmo que tenga tres valores y almacene las variables 
                a,b y c respectivamente. Debe indicar cual es el menor.
              </div>
            </FormLabel>
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-yellow">Ejercicio 2</p>
                Leer un número entero positivo y averiguar si es perfecto. Un número es perfecto c
                uando es igual a la suma de sus divisores excepto el mismo.
              </div>
            </FormLabel>
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-red">Ejercicio 3</p>
                Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te
                diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario 
                es 300 y el descuento 20, el programa dirá que el precio final con descuento es de 240. 
              </div>
            </FormLabel>
          </FormControl>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <FormControl component = "fieldset">
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-green">Ejercicio 1</p>
                  Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara
                  si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso
                  contrario.
              </div>
            </FormLabel>
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-yellow">Ejercicio 2</p>
                Construir un programa que realice descuentos en base a lo siguiente:
                <li>Si la compra es menor a 500 no hay descuento</li>
                <li>Si es entre 500 y 1000, 10% de descuento</li>
                <li>Si es entre 1000 y 2000, 20% de descuento</li>
                <li>Si es mayor a 2000, 30% de descuento</li>
              </div>
            </FormLabel>
            <FormLabel component = "legend"> 
              <div className = "description">
                <p className="Color-red">Ejercicio 3</p>
                Se quiere crear un programaque resuelva la ecuación cuadrática tipo ax2 + bx + c. 
                Para ello se ha estudiado el problema, que se ha planteado en pseudocódigo. Transformar 
                el pseudocódigo que se muestra a continuación en código C y comprobar que el programa 
                obtiene los resultados esperados para una serie de casos de prueba.<br/>
                <p className="p-align">Aqui te dejo una ayudita. ¡buena suerte!</p>
                <img src={img}/>
              </div>
            </FormLabel>
          </FormControl>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Una ONG tiene puntos de reparto de vacunas que se pretende funcionen de la siguiente manera.
              Cada día, empezar con 1000 vacunas disponibles y a través de un programa que controla las 
              entregas avisar si el inventario baja de 200 unidades.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              Diseñe un algoritmo que lea un número de tres cifras y determine si es igual al revés del 
              número. 
              Como el número tiene tres cifras, para que sea igual al revés, basta con que la 
              cifra de las unidades sea igual a la cifra de las centenas. Por ejemplo: 353, 878, etc.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              Crea un programa que usando bucles nos permita pedir un número par comprendido entre 100 y
              200 y nos muestre todos los números pares comprendidos entre el número facilitado y 200. 
              Por ejemplo si el número facilitado es 192 nos debería mostrar 192, 194, 196, 198 y 200.
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Escribir un programa que una frase, determinar qué caracteres se encuentran repetidos, y cuántas 
              veces aparece repetido cada carácter. Utilizar un vector con los caracteres que van apareciendo y 
              otro correspondiente a la misma posición con el número de repeticiones. 
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              Escribir un programa que dada una frase de tamaño máximo N, determine si es un palíndromo o no. Un
              palíndromo es una frase que, atendiendo sólo a sus letras e ignorando los espacios, acentos, signos de
              puntuación y tipo de letra (mayúscula o minúscula) expresa lo mismo leída de izquierda a derecha que
              de derecha a izquierda. “dábale arroz a la zorra el abad”. 
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              Un psiquiatra tiene un paciente que habla invirtiendo las frases completas. (por ejemplo: si quiere 
              decir “hola caracola”, lo que realmente dice es: “alocarac aloh”). Para poder comunicarse con el 
              paciente decide hacer un programa que traduzca lo que él dice al lenguaje del paciente. Implementar 
              dicho programa. Hacer dos versiones: 
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Desarrolle un programa para que un usuario pueda llenar dos vectores de 18 elementos cada 
              uno y almacenar el producto de estos en un tercer vector. Imprimir el tercer vector.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              El Instituto Leonardo Da Vinci, desea obtener las notas de todos los estudiantes del grado
              12do. Para esto, diseñe un programa que permita ingresarlas en un vector, determinar el 
              promedio de las mismas y luego imprimirlas. Imprima también el promedio obtenido.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              Diseñar  un  programa  en  C++  que  lea  N temperaturas. El usuario debe ingresar  N 
              (número total de temperaturas) y cada una de las temperaturas. El programa debe calcular  
              su media  y  encontrar  cuántas  temperaturas  son mayores o iguales a esa media
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Crear un array bidimensional de tamaño 7x7 y rellénalo de forma que los elementos de la 
              diagonal principal sean 1 y el resto 0. Muéstra el array por pantalla en forma de cuadrado.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              En la tienda María Shop desean crear un programa para conocer como han sido las ventas de cada 
              una de las últimas 4 semanas. Desarrolle un programa donde se ingresen en las ventas de cada día 
              en una matriz 4x7 y luego determine e imprima<br/>
              <li>El total de ventas de cada semana.</li>
              <li>El promedio de ventas de cada semana.</li>
              <li>Cual semana fue la de mayor venta.</li>
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              Queremos almacenar en una matriz las notas de informática de los alumnos de secundaria de una 
              escuela. Suponiendo que hay 4 grados distintos, 15 alumnos por grado, se pide:<br/>
              <li>Ingresar las notas que ha sacado cada alumno de cada grado.</li>
              <li>Imprimir cuál es la nota promedio de cada grado.</li>
              <li>Imprimir la mayor nota en general.</li>
              <li>Imprimir todas las notas.</li>
              <li>Imprimir cuántos alumnos aprobaron y cuántos reprobaron de cada grado.</li>
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Se requiere crear un programa con estrcturas para manejar la información de notas
              de un estudiante. Cree un struct llamada “estudiante”, calcula e imprime el promedio 
              de las 5 calificaciones de un estudiante. 
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              La información de todos los empleados de la empresa DATASYSTEM está almacenada
              en una variable de tipo struct llamada “empleado”. La información con que se
              cuenta de cada empleado es: nombre, sexo y sueldo.<br/>
              Por tanto se pide: Realizar un programa en C que lea en un array de estructuras los
              datos de los N trabajadores de la empresa y que imprima los datos del empleado con
              mayor y menor salario. 
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              El dueño del gimnasio “LYON GYM” desea automatizar la información de los deportistas 
              que asisten a su gimnasio para realizar ejercicios. Los datos con que se cuenta de 
              cada deportista es: nombre, edad, peso (kg), altura. Programa en C que permite 
              registrar un nuevo cliente del gimnasio e imprimir dichos datos. Nota: El peso se 
              leerá en kg y se imprimirá su valor correspondiente en libras. 
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Escribir un programa que reciba un numero del 1 al 12 desde el teclado y muestre el número de 
              días correspondiente al mes que corresponda con ese día (usar funciones).
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              Diseñe un programa, que dada una cifra entera y mayor que cero, sea elevada a una potencia 
              introducida por el usuario, la cual. (Ejemplo: 5^2=25).  Emplee una Función llamada Potencia.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              Realizar una función llamada media3, que toma tres números reales como parámetros, y no devuelve 
              nada. Esa función debe calcular la media de los tres números pasados como parámetros y mostrar 
              con un mensaje cuál es la media calculada.
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Escribir una función que calcule el número de horas, minutos y segundos que hay en N segundos.
              Ejemplo En 3601segundos equivale 1 hora 0 minutos 1 segundo.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              Construir un programa que permita leer 10 números enteros y determinar en cuántos de ellos 
              se encuentra el dígito 1, sacar su promedio, número mayor.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              Un alumno desea saber cuál será su promedio general en las tres materias que cursa y cuál será 
              el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestran a 
              continuación. 
              <li>La calificación de materias se obtiene de la siguiente manera:  Examen 90%, Promedio de 
                  las tareas 10%. En esta materia se pidió un total de tres tareas.</li>
              <li>La calificación de física se obtiene de la siguiente manera: Examen: 80%. Promedio de 
                  las tareas 10%. En esta materia se pidió un total de tres tareas.</li>
              <li>La calificación de química se obtiene de la siguiente manera: Examen: 85%. Promedio de 
                  las tareas 10%. En esta materia se pidió un total de tres tareas.</li>
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <FormControl component = "fieldset">
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-green">Ejercicio 1</p>
              Escriba un programa que tome como entrada desde teclado dos números naturales (mayores
              que cero) "N" e "i", e imprima en pantalla el dígito que ocupa la posición i-ésima del número
              N. Si i es mayor que el número de dígitos de N, se escribirá en pantalla -1. Por ejemplo, para N
              = 25064 e i = 2, el resultado es el dígito 6, y para i = 7, el resultado es -1.
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-yellow">Ejercicio 2</p>
              Escribe un programa que acepte como entrada desde teclado un número natural mayor que cero
              y dé como salida el resultado de sumar dos a dos los dígitos que aparecen en posiciones
              simétricas respecto al dígito central dentro del número dado como entrada. Por ejemplo :
              para el número : 2354869.<br/>
              la salida es: 2+9 = 11, 3 + 6 = 9, 5 + 8 = 13, 4<br/>
              para el número : 6582<br/>
              la salida es : 6 + 2 = 8, 5 + 8 = 13
            </div>
          </FormLabel>
          <FormLabel component = "legend"> 
            <div className = "description">
              <p className="Color-red">Ejercicio 3</p>
              El máximo común divisor (mcd) de dos números naturales p y q es el mayor entero d que
              divide a ambos. Un algoritmo muy conocido para calcularlo es el de Euclides. Éste utiliza
              dos variables, que contienen inicialmente a cada uno de los números, y trata de hacer que su
              contenido sea el mismo. Para ello, irá restando la menor a la mayor hasta que ambas
              contengan el mismo valor. En dicho momento, el valor obtenido en cualquiera de ellas es el
              máximo común divisor de los dos números iniciales. Por ejemplo, si P = 18 y Q = 12, el
              algoritmo hará que P y Q vayan tomando los siguientes valores:<br/><br/>
              Inicialmente P == 18 y Q == 12 (P > Q => P = P - Q)<br/>
              Después P == 6 y Q == 12 (Q > P => Q = Q - P)<br/>
              Después P == 6 y Q == 6 (P == Q => El mcd es 6)<br/>
              Diseña el algoritmo anterior siguiendo un enfoque recursivo:<br/>
              unsigned mcd(unsigned P, unsigned Q).
            </div>
          </FormLabel>
        </FormControl>
      </TabPanel>
    </div>
  );
}

