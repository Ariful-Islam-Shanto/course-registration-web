import React from 'react';

const CartBox = ({name, index}) => {
    const childCount = index + 1;
    
    return (
      <div>
        <h1 className='md:text-xs lg:text-sm mt-4 text-gray-600 font-medium'>{childCount}. {name}</h1>
      </div>
    )
};

export default CartBox;