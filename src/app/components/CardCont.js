import { getAllCards } from '@/utils/md.js';
import React from 'react';
import Card from './Card.js';

const CardCont = async () => {
  const content = getAllCards('Cards');


  let cards = Object.values(content);
  return (
    <div id='work' className='flex flex-row flex-wrap gap-4 mx-auto justify-center pt-24'>
      {cards.map((i, key) => {
        return (
          <Card key={key}
            title={i.data.title}
            description={i.data.description}
            image={i.data.image.slice(3)}
            alt='card image'>
          </Card>);
      })}
    </div >
  );
};

export default CardCont;
