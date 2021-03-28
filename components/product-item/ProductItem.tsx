
const ProductItem = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} alt="" className='w-full rounded' />
      <h2 className='mt-3'>{name}</h2>
      <div className='font-bold'>${price}</div>
    </div>
  )
}

export default ProductItem
