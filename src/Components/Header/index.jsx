import Input from "./Input"
import { Container } from "./style"

import logo from "./assets/logo.svg"

const Header = ({ showProducts }) => {
  return (
    <Container>
      <div className="header-content">
        <img
          src={logo}
          alt="hamburguer logo"
          onClick={() => showProducts("")}
        />
        <Input onChange={showProducts} />
      </div>
    </Container>
  )
}

export default Header
