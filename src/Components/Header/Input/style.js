import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    width: max-content;
  }
`

export const ContainerInput = styled.div`
  width: 90%;
  max-width: 382px;
  padding: 8px;

  border: 2px solid var(--gray-20);
  border-radius: 8px;
  background-color: var(--gray-0);

  display: flex;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    background-color: transparent;
    width: 60%;
  }
`
