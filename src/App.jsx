import { useEffect, useState } from "react"
import { Container, GlobalStyle } from "./style"
import ProductsList from "./components/ProductsList"
import { ToastContainer } from "react-toastify"

import Header from "./components/Header"
import { ToastError, ToastInfo } from "./components/Toasts"
import Cart from "./components/Cart"
import MyLoader from "./components/Loader"
import Footer from "./components/Footer"

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    setInterval(
      () =>
        fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
          .then((res) => res.json())
          .then((json) => setProducts(json))
          .catch((err) => err),
      1000
    )
  }, [])

  function showProducts(textValue) {
    const newArr = products.filter(({ name, category }) => {
      if (
        name.toLowerCase().includes(textValue.toLowerCase()) ||
        category.toLowerCase().includes(textValue.toLowerCase())
      ) {
        return true
      }
    })
    setFilteredProducts([...newArr])
    textValue.length > 0
      ? ToastInfo(`Listando produtos de acordo com a palavra: ${textValue}`)
      : ToastInfo(`Listando todos os produtos`)
  }

  function handleClick(id) {
    currentSale.some((product) => product.id === id)
      ? ToastError("Produto Duplicado")
      : products.find(
          (product) =>
            product.id === id && setCurrentSale([...currentSale, product])
        )
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Header showProducts={showProducts} />
      <Container>
        {products.length > 0 ? (
          <ProductsList
            products={products}
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
        ) : (
          MyLoader()
        )}
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default App
