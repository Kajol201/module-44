
import React from 'react';

const Links = ({ link }) => {
  const { name, path } = link;

  return (
    <li className='mr-10'>
      <a href={path}>{name}</a>
    </li>
  );
};

export default Links;
