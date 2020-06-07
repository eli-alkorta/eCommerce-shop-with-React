import React from 'react';

const mainFeaturedPost = {
   title: 'Lorem fistrum por la gloria de mi madre',
   description:
     'Lorem fistrum quietooor al ataquerl diodenoo ese pedazo de torpedo papaar papaar pecador llevame al sircoo está la cosa muy malar. Por la gloria de mi madre te va a hasé pupitaa llevame al sircoo pecador. Ese pedazo de no te digo trigo por no llamarte Rodrigor por la gloria de mi madre jarl diodeno caballo blanco caballo negroorl hasta luego Lucas de la pradera. Hasta luego Lucas de la pradera papaar papaar se calle ustée pupita se calle ustée ese pedazo de. Apetecan sexuarl hasta luego Lucas quietooor ese hombree por la gloria de mi madre ese pedazo de ahorarr. Benemeritaar ahorarr papaar papaar sexuarl jarl a peich. Al ataquerl sexuarl me cago en tus muelas quietooor está la cosa muy malar no puedor ese hombree. Te va a hasé pupitaa hasta luego Lucas ese pedazo de está la cosa muy malar diodenoo pupita sexuarl.',
   image: 'https://cataas.com/cat',
   imgText: 'main image description',
   linkText: 'Continue reading…',
 };

function DetailMainPost (props) {

      return (
         <div>
            <img src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText}/>
            <h2>{mainFeaturedPost.title}</h2>
            <span>{mainFeaturedPost.description}</span>
         </div>
      );
    }

  
  export default DetailMainPost;