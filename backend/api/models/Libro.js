/**
 * Libro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    icbn:{
      type: 'string',
      required: true
    },
    nombre:{
      type:'string',
      required:true
    },
    numeroPaginas:{
      type:'string',
      required:true
    },
    edicion:{
      type:'string',
      required:true
    },
    fechaPublicacion:{
      type:'string',
      required:true
    },
    nombreEditorial:{
      type:'string',
      required:true
    },
    autorId:{
      type:'string',
      required:true
    },
    estado:{
      type:'boolean',
      required:true
    },
    imgLibro:{
      type:'string',
      required:false
    }

},

};

