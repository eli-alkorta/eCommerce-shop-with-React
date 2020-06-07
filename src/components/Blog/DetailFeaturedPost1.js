import React from 'react';

const featuredPost1 = 
  {
    title: 'Fistrum post1',
    date: 'Nov 12',
    description:
      'Lorem fistrum ese que llega te voy a borrar el cerito jarl diodeno. Al ataquerl tiene musho peligro fistro condemor te va a hasé pupitaa apetecan al ataquerl quietooor ese que llega ese que llega. Diodenoo de la pradera no te digo trigo por no llamarte Rodrigor papaar papaar de la pradera ese hombree amatomaa me cago en tus muelas llevame al sircoo. Llevame al sircoo condemor la caidita condemor jarl al ataquerl por la gloria de mi madre al ataquerl va usté muy cargadoo. Te voy a borrar el cerito sexuarl está la cosa muy malar está la cosa muy malar diodenoo a peich mamaar apetecan de la pradera diodenoo. Pupita benemeritaar diodeno papaar papaar mamaar se calle ustée condemor se calle ustée a peich a wan.',
    image: 'https://cataas.com/cat',
    imageText: 'Image Text',
  };

function DetailFeaturedPost1 (props) {

      return (
         <div>
            <img src={featuredPost1.image} alt={featuredPost1.imageText}/>
            <h2>{featuredPost1.title}</h2>
            <span>{featuredPost1.description}</span>
         </div>
      );
    }

  
  export default DetailFeaturedPost1;