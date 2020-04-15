# week4_day3

> Express | Dynamic views, layout, partials
>
> Mongoose | Schemas, Models & Documents

## Main points: dynamic templating

- El método `.render()` recibe dos parámetros:
  * Nombre del archivo hbs sin extensión
  * **Objeto** con datos (opcional)
- Los archivos de HBS interpolan propiedades con dos llaves (solo mostrar) o tres (renderizar)


## Main points: layout

- El layout debe tener el nombre `layout.hbs`
- Debe contener la información dinámica en `{{{body}}}`


## Main points: partials

- Para usar partials es necesario:
  * Requerir `hbs`
  * Registrar su directorio a través de `hbs.registerPartials(path)`
  * Incluir los parciales (sin guiones medios en el nombre) en el directorio registrado (`views/partials`)
- Un partial puede ser incluido en un hbs mediante al sintaxis `{{> partialName}}`
- Puede recibir datos tras el nombre: `{{> partialName this}}`


## Main points: Mongoose

- Para gestionar una BBDD mediante mongoose es necesario:
  * Requerir `mongoose`
  * Conectarse a la BBDD mediante el método `.connect()`
  * Crear un modelo mediante el método `.model('Name', Schema)` en el directorio `models`, exportándolo mediante `module.exports`e importándolo en cualquier archivo mediante `require()`.
  * Utilizarlo con los métodos CRUD de Mongoose (todos retornan una promesa):
    * `.create()`
    * `.find()`
    * `.findOne()`
    * `.findById()`
    * `.updateOne()`
    * `.updateMany()`
    * `.findByIdAndUpdate()`
    * `.deleteOne()`
    * `.deleteMany()`
    * `.findByIdAndRemove()`
    * `.countDocuments()`
    

## Main points: chainable promises

- Las promesas permiten gestionar procesos asíncronos dependientes y secuenciales, donde un proceso no debe comenzar antes de que el anterior haya concluído.
- Pueden encadenarse tantos `.then()` como se deseen.
- Cuando uno de los `.then()` no puede cumplirse, salta automáticamente al próximo `.catch()`
- La función que recibe como argumento cada método `.then()` tiene como parámetro el retorno del anterior `.then()`

## Apuntes finales

- El comando `nodemon -e js,hbs,css app.js` levanta Nodemon con alcance de parciales.
- La propiedad `scripts` del `package.json` permite crear *shorthands* para comandos extensos.
