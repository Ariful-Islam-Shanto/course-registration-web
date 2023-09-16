import React from 'react';

const CartBox = ({name, index}) => {
    const childCount = index + 1;
    
    return (
      <div>
        <h1 className='text-sm mt-4 text-black font-bold'>{childCount} {name}</h1>
      </div>
    )
};

export default CartBox;