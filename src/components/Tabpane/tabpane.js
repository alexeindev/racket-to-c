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
    width: '42%',
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
        <div>
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
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
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
                obtiene los resultados esperados para una serie de casos de prueba.
                Aqui te dejo una ayudita. ¡buena suerte!
                <img src={img}/>
              </div>
            </FormLabel>
          </FormControl>
        </div>
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
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item 7
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item 8
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item 9
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item 10
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item 1
      </TabPanel>
    </div>
  );
}

