# PROYECTO de paginación con DB JSON

El proyécto consiste en crear una seccicón de productos de un eccomerce con paginación.
La pagina debe poder filtrar entre productos y paginár entre 3 paginas, ademas debe haber un boton
de agregar vehiculo para que el "admin" tenga la posibilidad de agregar items.

## Requisitos
- Opción de paginación de 3 paginas
- Opciones de filtrado por (km, condicion)
- Las imagenes y datos deben ser dinamicos traidos de un archivo .JSON.
- Añadir paginación traida de Boostrap.

## Pasos a seguir
- Crear estructura HTML.
- Hacer reset Css
- Crear base de datos con todos los items.
- Hacer codigo de la paginación con JavaScript.
- Crear estilos CSS
- Llamar a la base de datos con JS y hacer la paginación funcional.



## Estructura HTML
En la parte de los items, el container debe ser display Flex y el item-container en donde estaran los items, debe ser hecha con grid. Debabjo del item-container iran las opciones de paginacion.

Del lado izquierdo del contenedor de items, ira la seccion de filtros. Esta seccion debe ser sencilla. Debe
contar con un filtrador por Kilometraje y por condicion. Ademas debe tener un boton de filtrar y limpiar filtros.