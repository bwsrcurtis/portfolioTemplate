import React from 'react';
import Card from './Card.js';
import artSplash from '../../../public/artSplash.jpg';
import face from '../../../public/face.jpg';
import tile from '../../../public/tile.jpg';

const CardCont = () => {
  console.log();
  return (
    <div id='work' className='flex flex-row flex-wrap gap-4 mx-auto justify-center pt-24'>
      <Card
        title='A Splash of Color'
        description='Multimedia painting done on canvas.'
        image={artSplash}
        alt='card image'>
      </Card>
      <Card
        title='Eye Contact'
        description='Multimedia painting done on canvas.'
        image={face}
        alt='card image'>
      </Card>
      <Card
        title='Beach Tiling'
        description='Colorful pattern of mosaic tiling.'
        image={tile}
        alt='card image'>
      </Card>

    </div>
  );
};

export default CardCont;
