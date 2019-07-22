<a  href="https://carolgmonteiro.github.io/SCL010-data-lovers/src/index.html"><img  src="https://i.ibb.co/YDTS0JQ/logo-poket-Mon-r01-02-07.png" alt="logo-poket-Mon-r01-02-07" border="0"></a>

<a href="https://ibb.co/DwDNqtB"><img src="https://i.ibb.co/j3vdpTC/PokeTGo.png" alt="PokeTGo" border="0"></a>

## **Índice**
*  [1. Resumen del proyecto](#resumen-del-proyecto)
*  [2. Resumen del producto](#poketmon-resumen-del-producto)
*  [3. Planificación](#planificacion)
*  [4. Proceso de Diseño](#proceso-de-diseno)
    *  [4.1. Definición de usuario](#definición-de-usuario)
    *  [4.2. Encuesta On line](#encuesta-on-line)
    *  [4.3. Historias de usuario](#historias-de-usuario)
*  [5. Proceso Diseño de la Interfaz de Usuario](#proceso-diseno-de-la-interfaz-de-usuario)
    *  [5.1. Diagrama de flujo](#diagrama-de-flujo)
    *  [5.2. Prototipo de baja y media fidelidad](#prototipo-de-baja-y-media-fidelidad)
    *  [5.3. Test de usuario](#test-de-usuario)
    *  [5.4. Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
    *  [5.5. Decisiones de diseño](#decisiones-de-diseno)
    *  [5.6. Test de usuario](#test-de-usuario)
    *  [5.7. Interfaz final](#interfaz-final)
    *  [5.8. Pruebas unitarias](#pruebas-unitarias)
    *  [5.9. Herramientas utilizadas](#herramientas-utilizadas)
*  [6. Conclusión](#conclusion)
*  [7. Checklist](#checklist)

## **1. Resumen del proyecto**

En el Proyecto Data Lovers, se pide construir una página web para visualizar un set de datos que se adecúe a las necesidades de un potencial usuario.

Se proponen 6 set de datos de diferentes temáticas, de la cuál se debe elegir una para trabajar. El set elegido por nuestro equipo fue la data ”POKEMON”.

Una vez definida el área de interés se debe determinar quien es el usuario, y que necesita saber o ver exactamente, luego construir una interfaz que le ayude a interactuar y entender mejor esos datos.

Como entregable final se pide una página web que permita visualizar la data, filtrarla, ordenarla y hacer algún cálculo agregado.

El plazo del proyecto fue de 3 semanas.

## **2. PoketMon - Resumen del producto**

[PoketMon](https://carolgmonteiro.github.io/SCL010-data-lovers/src/index.html), es una página web que entrega información sobre los 151 pokemones pertenecientes a la Liga “Kanto” (primera generación liberada en el juego pokémon Go).

En esta plataforma puedes filtrar los pokemones por tipo, saber sus debilidades, y obtener otro tipo de información más básica como nombres y números de la pokedéx. 

Además el jugador principiante puede acceder a otras informaciones sobre el juego en +PoketGo, una mini guía sobre el juego Pokemon Go que muestra tips para los combates, los tipos de pokemones y links de otros sitios interesantes para conectarse con otros jugadores.

<a href="https://ibb.co/mFqnGSh"><img src="https://i.ibb.co/4gTb7J4/1-Poketmon-Home.png" alt="1-Poketmon-Home" border="0"></a>

## **3. Planificación**

- En la planificación cronológica de nuestro proyecto utilizamos el método "Kaban", ordenado las tareas a realizar a partir del Readme del proyecto presentado. Fue actualizado diariamente, almacenando los materiales producidos por el equipo, sitios referentes y material de estudio. Todo este registro se encuentra en Trello, el cuál puedes revisar haciendo click aquí: [Trello Poketmon](https://trello.com/b/CZnczp1y/laboratoria-dl-pokemon).

<a href="https://ibb.co/42ggp4V"><img src="https://i.ibb.co/ypBBqgQ/2-Planificacion-en-Trello.png" alt="2-Planificacion-en-Trello" border="0"></a>

***
## **4. Proceso de Diseño**

### **4.1. Definición de usuario**

Nuestros Usuarios son jugadores iniciales de pokémon Go, que requieren de cierta información para optimizar su experiencia como jugador y poder encontrar con mayor facilidad algún pokemon en particular.
  ***

### **4.2. Encuesta On line**

Realizamos una encuesta a través de un sitio on-line, y fue respondida por un total de 32 personas. Los principales datos obtenidos fueron los siguientes:

<a href="https://ibb.co/hFQtvtp"><img src="https://i.ibb.co/m5ZM7MQ/3-Graficos-encuesta-01.png" alt="3-Graficos-encuesta-01" border="0"></a>

<a href="https://ibb.co/2K74qSx"><img src="https://i.ibb.co/VBW4VxR/4-Graficos-encuesta-01.png" alt="4-Graficos-encuesta-01" border="0"></a>
- El 64.5% de los encuestados considera que el dato más relevante para ellos, es buscar los pokemones por tipo. El segundo dato de mayor valor para los usuarios son las fortalezas y debilidades de cada pokemon.
- El 53.3% revela entrar a algún sitio con información sobre pokémon, para obtener información sobre algún pokémon en particular.
- Al 86.2% de los encuestados le gustaría buscar información adicional de pokémon en alguna aplicación o sitio web.
- 36.7% de los jugadores se considera jugador inicial.
- El 71% son jugadores ocasionales.
- El 46 % de los jugadores tiene entre 30-34 años, seguido por el 25% que tiene entre 24-29 años.

 ***
### **4.3. Historias de usuario**
-  **HU01** - **YO COMO** jugador principiante de pokémon Go, **QUIERO** saber los datos básicos(nombre y número de la pokedex) de cada pokémon, **PARA** saber cuáles me faltan capturar.
<a href="https://ibb.co/x6fLnXq"><img src="https://i.ibb.co/w4wgnBh/5-Historia-de-Usuario.png" alt="5-Historia-de-Usuario" border="0"></a>

-  **HU02** - **YO COMO** jugador principiante de pokemon go, **QUIERO** poder ordenar la lista de pokemones alfabéticamente y por número de la pokedex, **PARA** encontrar el personaje que busco con mayor rapidez.
-  **HU03**- **YO COMO** jugador intermedio de Pokémon Go, quiero conocer las debilidades de cada pokemon**PARA** saber cuál utilizar y lograr vencer en una batalla.
-  **HU04** - **YO COMO** usuario intermedio **QUIERO** saber cuál es el porcentaje de pokemones que hay por tipo, **PARA** tener una idea de que probabilidades tengo de encontrarlo en estado salvaje.

***
## **5. Proceso Diseño de la Interfaz de Usuario**

### **5.1. Diagrama de flujo**
Nuestro sitio cuenta con un flujo simple, para que sea de rápido acceso para los usuarios.

<a href="https://ibb.co/DKgbQVv"><img src="https://i.ibb.co/KyzGW0f/6-Diagrama-de-flujo.png" alt="6-Diagrama-de-flujo" border="0"></a>

Cuenta con un “Home” o página principal con 4 opciones de interacción (botones):
1.  **Botón PoketDex:** Lleva a una galería con un card para cada pokémon. En este sitio a su vez se encuentran 3 botones de interacción:
- Input para ordenar ascendente o decrecientemente los pokemones por Número o Alfabéticamente.
- Input para filtrar los pokemones por tipo (Elemento).
- Input para Filtrar los pokemones por la debilidad que presentan frente a determinado elemento o tipo.
2.  **Botón +PoketGo:** Lleva a una página donde de muestran algunos tips para enfrentar el juego.
3.  **Botón Facebook:** Link a la red Facebook oficial de Pokemon Go Chile.
4.  **Botón Instagram:** Link a la red Instagram oficial de Pokemon Go Chile.
  
***
### **5.2. Prototipo de baja y média fidelidad**
Nuestro prototipo de baja fidelidad, es una representación gráfica simple de lo descrito en nuestro diagrama de flujo:

<a href="https://ibb.co/5MqCnfP"><img src="https://i.ibb.co/p0CNR9S/7-Prototipo-Baja-Fidelidad.png" alt="7-Prototipo-Baja-Fidelidad" border="0"></a>

  
Fue más desarrollado en Balsamiq creando en un prototipo de media fidelidad, el cuál fue testeado:

<a href="https://ibb.co/237z7y9"><img src="https://i.ibb.co/F4bQbKr/8-Prototipo-Media-Fidelidad.png" alt="8-Prototipo-Media-Fidelidad" border="0"></a>

***
### **5.3. Test de usuario**

Hicimos las pruebas (utilizando Loom) con 5 usuarios (grabamos 4) utilizando el prototipo hecho en Balsamiq. Evaluamos los seguientes puntos:

- Percepcion de los colores y fuentes: preguntamos que sensación le causaban los colores causaba.

- Si el diseño de la interfaz le parece intuitivo: Fue propuesto el recorrido de la historia del usuario - ingresando en al página, para que filtrara los pokemones que tuvieran la debilidad de Agua e ingresar en el card.

- Evaluar si la información del card es interesante y cumplen con las necesidades al usuario.

- Si es intuitiva la manera de volver a la pantalla principal, o recorrer la galería de pokemones.

A continuación se encuentran los links de los tests:

<a href="https://ibb.co/PNTvypk"><img src="https://i.ibb.co/G0s4Dwm/9-Test-con-usuario-con-Loom-y-Balsamiq.png" alt="9-Test-con-usuario-con-Loom-y-Balsamiq" border="0"></a>

- Link para [Test 01](https://www.loom.com/share/b08482d987734f7d8389376f47ab3eb3)

- Link para [Test 02](https://www.loom.com/share/5f6e592fbde24c809c8823804b3e30ce)

- Link para [Test 03](https://www.loom.com/share/2c58a113d96a4e35a2e9eb1deff01ac5)

- Link para [Test 04](https://www.loom.com/share/8e5339b590b541008a088dd1dfa1c5d8)

Recibimos algunos feedbacks, con los que decidimos hacer los siguientes cambios al diseño:

- Sacar pantalla input donde el usuario debía ingresar su nombre de entrenador, porque no íbamos a tener un registro de esto, y no cumplía realmente con alguna función de utilidad.

- Simplificar la pantalla “Home”.

- Eliminar opción para ver gráfico de datos en pantalla “Home”.

<a href="https://ibb.co/sjKsyfx"><img src="https://i.ibb.co/ZdBcWj4/10-Prototipo-M-dia-Fidelidad-revisado.png" alt="10-Prototipo-M-dia-Fidelidad-revisado" border="0"></a>

  ***

### **5.4. Prototipo de alta fidelidad**

Después de realizar un estudio de “benchmark” consultando a los potenciales usuarios sobre cuáles son los principales sitios y/o aplicaciones que utilizan para obtener información de pokemon Go, tomamos como referentes las páginas que ellos nos mencionaron para armar nuestro sitio. 
Los sitios que visitamos sobre el tema, tenian un diseño entretenido pero cargado de información, lo que encontramos excesivo para el usuario. Además todos utilizaban colores muy fuertes:

<a href="https://ibb.co/8DdgWcF"><img src="https://i.ibb.co/N6m28Sw/11-Estudio-de-Benchmark.png" alt="11-Estudio-de-Benchmark" border="0"></a>

<a href="https://ibb.co/ngvrqYL"><img src="https://i.ibb.co/HFs7LbH/12-Estudio-de-Benchmark.png" alt="12-Estudio-de-Benchmark" border="0"></a>
  
Los sitios que usamos finalmente como referencia fueron los siguientes:

-  [Pokemon Go](https://www.pokemon.com/es/pokedex/) Página oficial del juego (nos basámos específicamente en el sitio “pokedex” que se encuentra dentro de la página).
-  [Pokémon Go info](https://pokemon.gameinfo.io/pt-br/tools/iv-calculator) Dentro de este sitio web se encuentra una aplicación llamada IV calculator. Esta utilidad calcula el potencial que tiene un pokémon específico para enfrentar un combate. Solo nos pide proporcionar los datos de PC (Puntos de combate), PS (Puntos de salud) y cantidad de polvos estelares que requiere para aumentar su PC.
-  [Poke Genie](https://andro4all.com/2018/07/iv-pokemon-go-que-es) Aplicación IV calculator disponible en Google play.
Básicamente calculadora de los “valores individuales” (ataque, defensa y salud) de los pokemones. Información de alta utilidad a la hora de elegir que pokémon utilizar en incursiones y combates en gimnasios.

### **5.5. Decisión de diseño**

Como decisión final del diseño, quisimos basárnos en la Pokedex original de la serie, eligiendo colores similares como rojo, azul y gris (en tonalidades más suaves), sumado al estilo "manga" que utilizamos en los íconos e imagenes de nuestro sítio. Optamos por un diseño minimalista enfocado en el juego Pokemon Go.

<a href="https://ibb.co/djsq2Gn"><img src="https://i.ibb.co/gmbpTzs/13-Estudio-de-colores-y-fuente.png" alt="13-Estudio-de-colores-y-fuente" border="0"></a>

Acá pueden ver el prototipo realizado en figma [el proyecto en Zeplin](https://zpl.io/bJGBw83):

<a href="https://ibb.co/CMWJPVW"><img src="https://i.ibb.co/yYVh4gV/14-Prototipo-de-Alta-Fidelidad-Mobile.png" alt="14-Prototipo-de-Alta-Fidelidad-Mobile" border="0"></a>

<a href="https://ibb.co/gJ6vYrc"><img src="https://i.ibb.co/bX7Ht6G/15-Prototipo-de-Alta-Fidelidad-Desktop.png" alt="15-Prototipo-de-Alta-Fidelidad-Desktop" border="0"></a>

  ***

### **5.6. Test de usuario**

Realizamos una prueba de usuario con el prototipo de alta fidelidad, y el feedback recibido fue el siguiente:

<a href="https://ibb.co/swWws5f"><img src="https://i.ibb.co/NjTjW1v/16-Test-Prototipo-Alta-Fidelidad.png" alt="16-Test-Prototipo-Alta-Fidelidad" border="0"></a>

Link para el [Test Prototipo de Alta Fidelidad](https://www.loom.com/share/b64c9f3d81ca4de4a66d734da4c5959d) en loom

- A los usuarios les agrada la paleta de colores utilizada en el proyecto.
- La interfaz les parece amigable.
- Les gusta que haya una miniguía con tips para jugadores principiantes.
Nos suguieren añadir lo siguiente:
- Entregar más información de los filtros.
- Cruzar datos entre filtros.
- Asignarle a los card un modal, para mostrar más información.
- Incluir un botón para volver a arriba automáticamente.
- Incluir un Campo de Búsqueda. 
  
***
### **5.7. Interfaz final**

la interfaz final quedó similar al prototipo de alta fidelidad, variando en algunos detalles muy pequeños, cómo por ejemplo la localización de los links de las redes sociales y el buscador. El sitio todavía no es responsivo para mobile, lo cuál es una de las mejoras que pretendemos hacer.

<a href="https://ibb.co/QdKGbRW"><img src="https://i.ibb.co/GT5jxLZ/17-Pagina-Home.png" alt="17-Pagina-Home" border="0"></a>

<a href="https://ibb.co/0rsV5Xd"><img src="https://i.ibb.co/qpJF6nP/18-Pagina-Poket-Dex.png" alt="18-Pagina-Poket-Dex" border="0"></a>

<a href="https://ibb.co/kDF7tNC"><img src="https://i.ibb.co/B6Rp90M/19-Pagina-Poket-Go.png" alt="19-Pagina-Poket-Go" border="0"></a>
  
***
### **5.8. Pruebas unitarias**

El _boilerplate_ de este proyecto incluye pruebas unitarias:
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Para ello implementamos las siguientes funciones en el archivo`src/data.js`:
-  `filterData(data, condition)`: esta función `filter` o filtrar recibe la data, y nos debe retornar aquellos datos que sí cumplan con la condición.
-  `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar recibe tres parámetros. El primer parámetro, `data`, nos entrega los datos. El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera ascendente o descendente.
-  `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
Fueron realizadas las pruebas para las 3 funciones requeridas en el proyecto. Los resultados de las pruebas unitarias son los siguientes:

<a href="https://ibb.co/1n6GzFh"><img src="https://i.ibb.co/YWZB0HY/20-Pruebas-unit-rias.png" alt="20-Pruebas-unit-rias" border="0"></a>

  
***
### **5.9. Herramientas utilizadas**

- Visual Studio (HTML5, CSS, JAVASCRIPT)

-  [Trello](https://trello.com)

-  [Stackedit](https://stackedit.io)

-  [Balsamiq](https://balsamiq.com/)

-  [Figma](https://www.figma.com/)

-  [Zeplin](https://zeplin.io/)

- Illustrator

-  [Loom](https://www.loom.com)

-  [Git](https://git-scm.com/)

-  [GitHub](https://github.com/)

-  [GitHub Pages](https://pages.github.com/)

-  [Node.js](https://nodejs.org/)

***
## **6. Conclusión**

Nuestro proyecto cumple con los requisitos solicitados. La investigación y realización del proyecto en ningún momento pierde como foco las necesidades y opiniones del usuario, el cuál es un jugador principiante a intermedio, que necesita cierta información sobre los pokemones.

Optamos por armar un sitio minimalista y de búsqueda rápida con información centrada solo en el juego y no en todo el universo pokémon como lo hacen la mayoría de los sitios similares, pero que contenga las herramientas necesarias para conectar a los usuarios con sitios que proporcionan mayor información.

Pensamos que aún podemos añadir algunas mejoras a nuestro proyecto como:

- Implementación de un Modal.
- Añadir más información a través del modal.
- Herramienta de búsqueda por texto.
- Hacerlo Responsivo.
- Cruce de datos entre filtros y orden.
- Añadir filtros de aparición por horario.
- Añadir una función para cargar contenidos por parte.
***
## **7. Checklist**

*  [x] Usa VanillaJS.
*  [x] No hace uso de `this`.
*  [x] Pasa linter (`npm pretest`)
*  [x] Pasa tests (`npm test`)
*  [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
*  [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
*  [x] Incluye historias de usuario en `README.md`.
*  [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en `README.md`.
*  [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad) en `README.md`.
*  [x] Incluye link a Zeplin en `README.md`.
*  [x] Incluye el listado de problemas que detectaste a través de tests de usabilidad en el `README.md`.
*  [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
*  [x] UI: Permite ordenar data por uno o más campos (asc y desc).
*  [x] UI: Permite filtrar data en base a una condición.

<a href="https://ibb.co/61xg18D"><img src="https://i.ibb.co/QCRrCkY/PokeTdex.png" alt="PokeTdex" border="0"></a>
