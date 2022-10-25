import { ButtonPrimaryMedium } from "../../Buttons"
import { Container } from "./style"

const Product = ({ id, name, category, price, img, handleClick }) => {
  return (
    <Container>
      <figure>
        <img src={img} alt={`${name} catalog product`} />
      </figure>

      <div className="product-info">
        <h3 className="heading3">{name}</h3>
        <p className="caption">{category}</p>
        <p className="heading4">R${price.toFixed(2).replace(".", ",")}</p>
        <ButtonPrimaryMedium
          text={"Adicionar"}
          onClick={() => handleClick(id)}
        />
      </div>
    </Container>
  )
}

export default Product