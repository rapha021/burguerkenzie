import Product from "./Product"
import { Container } from "./style"

const ProductsList = ({ products, filteredProducts, handleClick }) => {
  function handleRender(products) {
    const arr = products.map(({ id, name, category, price, img }) => {
      return (
        <Product
          key={id}
          id={id}
          name={name}
          category={category}
          price={price}
          img={img}
          handleClick={handleClick}
        />
      )
    })

    return arr
  }

  return (
    <>
      <Container>
        <ul>
          {filteredProducts.length > 0
            ? handleRender(filteredProducts)
            : handleRender(products)}
        </ul>
      </Container>
    </>
  )
}

export default ProductsList
