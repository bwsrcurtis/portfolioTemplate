'use client';

import matter from 'gray-matter'; import React from 'react';
import Card from './Card.js';

const CardCont = async () => {
  const content = await import('../../../content/pages/Cards/Cards.md');
  const local = matter(content.default);
  const data = local.data;

  let cards = Object.values(data);
  return (
    <div id='work' className='flex flex-row flex-wrap gap-4 mx-auto justify-center pt-24'>
      {cards.map((i, key) => {
        return (
          <Card key={key}
            title={i.title}
            description={i.description}
            image={i.image}
            alt='card image'>
          </Card>);
      })}
    </div >
  );
};

export default CardCont;
