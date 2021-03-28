import React from 'react';

const ProductList = ({ items, activeCategories, renderItem }) => {
  return (
    <ol className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      {items.map((item) => {
        const cats = item.categories.map(({ slug }) => slug);
        const isVisible = activeCategories.length ? cats.some(c => activeCategories.includes(c)) : true;
        const classNames = isVisible ? 'block' : 'hidden'

        return (
          <li key={item.id} data-testid='product-item' className={classNames}>
            {renderItem(item)}
          </li>
        );
      })}
    </ol>
  )
}

export default ProductList
