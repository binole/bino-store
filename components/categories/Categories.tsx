import Link from 'next/link';

const Categories = ({ categories, activeCategories }) => {
  return (
    <ul className="flex space-x-4 items-baseline sm:flex-col sm:space-x-0">
      <li className="mb-3">
        <Link href={{ pathname: '/products' }}>
          <a className="font-bold">All Categories</a>
        </Link>
      </li>
      {categories.map(({ id, name, slug, itemsSlugs }) => {
        const isActive = activeCategories?.includes(slug);

        return (
          <li key={id} className="mb-3">
            <Link href={{ pathname: '/products', query: { category: [slug, ...itemsSlugs] } }}>
              <a className={`text-black ${isActive ? 'underline' : 'text-opacity-50 hover:text-opacity-100'}`}>{name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}

export default Categories
