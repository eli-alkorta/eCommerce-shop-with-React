import React from 'react';

const featuredPost2 = 
  {
    title: 'Fistrum post1',
    date: 'Nov 12',
    description:
      'Lorem fistrum está la cosa muy malar jarl diodenoo no puedor benemeritaar qué dise usteer ese pedazo de. Ese hombree benemeritaar caballo blanco caballo negroorl te va a hasé pupitaa diodenoo por la gloria de mi madre. Diodenoo ahorarr benemeritaar por la gloria de mi madre. Papaar papaar caballo blanco caballo negroorl apetecan diodeno condemor. Ese pedazo de a wan a gramenawer no te digo trigo por no llamarte Rodrigor torpedo te va a hasé pupitaa te voy a borrar el cerito te va a hasé pupitaa va usté muy cargadoo. Sexuarl de la pradera diodeno al ataquerl hasta luego Lucas no te digo trigo por no llamarte Rodrigor tiene musho peligro papaar papaar a gramenawer por la gloria de mi madre.',
    image: 'https://cataas.com/cat',
    imageText: 'Image Text',
  };

function DetailFeaturedPost2 (props) {

      return (
         <div>
            <img src={featuredPost2.image} alt={featuredPost2.imageText}/>
            <h2>{featuredPost2.title}</h2>
            <span>{featuredPost2.description}</span>
         </div>
      );
    }

  
  export default DetailFeaturedPost2;