import { useEffect, useState } from "react"
import { ButtonGrayMedium } from "../../Buttons"
import { ToastDone, ToastError } from "../../Toasts"
import { Container } from "./style"

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = currentSale.reduce((acc, { price }) => {
      acc += price
      return acc
    }, 0)
    setTotalPrice(total)
  }, [currentSale])

  function handleDeleteAll() {
    currentSale.length > 0
      ? ToastDone("O carrinho foi limpo") && setCurrentSale([])
      : ToastError("Não há itens no carrinho")
  }

  return (
    <>
      <Container>
        <div className="total">
          <h3 className="body600">Total</h3>
          <p className="body600">R${totalPrice.toFixed(2).replace(".", ",")}</p>
        </div>
        <ButtonGrayMedium
          text={"Remover Todos"}
          onClick={() => handleDeleteAll()}
        />
      </Container>
    </>
  )
}

export default CartTotal
