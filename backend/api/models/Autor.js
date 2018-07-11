/**
 * Autor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres:{
      type: 'string',
      required: true
    },
    apellidos:{
      type:'string',
      required:true
    },
    fechaNacimiento:{
      type: 'string',
      required: true
    },
    numeroLibros:{
      type:'string',
      required:true
    },
    ecuatoriano:{
      type:'string',
      required:true
    },
    imgAutor:{
      type:'string',
      required:false
    }

  },

};

