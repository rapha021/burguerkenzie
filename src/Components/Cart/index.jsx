import { ToastDone } from "../Toasts"
import CartTotal from "./CartTotal"
import { CartList, Container } from "./style"

const Cart = ({ currentSale, setCurrentSale }) => {
  function handleRemove(id, name) {
    ToastDone(`O produto: ${name} foi removido do carrinho`)
    const newArr = currentSale.filter((product) => product.id !== id)
    setCurrentSale([...newArr])
  }

  return (
    <Container>
      <header>
        <h3 className="heading3">Carrinho de Compras</h3>
      </header>
      <div className="cart-products">
        {currentSale.length < 1 ? (
          <div className="no-products">
            <h3 className="heading3">Sua sacola está vazia</h3>
            <p className="body">Adicione Itens</p>
          </div>
        ) : (
          <CartList>
            {currentSale.map(({ id, name, category, price, img }) => (
              <li key={id} className="cart-product">
                <figure>
                  <img src={img} alt={name} />
                </figure>
                <div className="product-info">
                  <h3 className="heading3">{name}</h3>
                  <p className="body">{category}</p>
                  <p className="caption">
                    R${price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
                <button
                  className="caption"
                  onClick={() => handleRemove(id, name)}
                >
                  Remover
                </button>
              </li>
            ))}
            <CartTotal
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </CartList>
        )}
      </div>
    </Container>
  )
}

export default Cart
