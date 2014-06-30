WoldTour
========

Ejercicio para resolver usando AngularJS

Crear un SPA con dos vistas

##/region.html
  - Muestra un desplegable con una lista fija de continentes
  - Al seleccionarlos debe cargar una lista de paises desde el api
    - http://restcountries.eu/rest/v1/region/africa
  - Se muestra la bandera del país usando el CC (Country code de 2 letras)
    - http://www.geonames.org/flags/x/CC.gif
  - Se muestra el nombre y la población del país
  - Se enlaza el nombre de la capital a la página que muestra su clima
    - /city/:country_code/:city_name
  - Se puede filtrar la lista de paises, y ordenarla según población y nombre
  
##/city.html
  - Se llega desde un enlace desde la página principal
  - En la URL recibe los parámetros *country_code* y *city_name*
  - Llama al API de OpenWeather y muestra el icono y la predicción del día
    - http://api.openweathermap.org/data/2.5/weather?q=city_Name,Country_code&units=metric&callback=JSON_CALLBACK
  - Poner un botón para navegar de vuelta a la lista de paises
  
## Recursos
  - El material del curso visto hasta ahora.
    - https://github.com/AgoraBinaria/CursoAngularJS
  - El ejemplo visto de acceso a OpenWeather
    - https://github.com/AgoraBinaria/openweatherVSbackbone
    