import { useState } from "react"
import { ButtonPrimaryMedium } from "../../Buttons"
import { Container, ContainerInput } from "./style"

const Input = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("")
  return (
    <Container>
      <ContainerInput>
        <input
          className="headline"
          type="text"
          placeholder="Pesquise"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          onKeyDown={(ev) => {
            ev.key === "Enter" && onChange(inputValue)
          }}
        />
        <ButtonPrimaryMedium
          text={"Pesquisar"}
          onClick={() => onChange(inputValue)}
        />
      </ContainerInput>
    </Container>
  )
}

export default Input
