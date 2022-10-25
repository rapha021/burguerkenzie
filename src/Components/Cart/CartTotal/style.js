import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  height: 100px;

  padding-top: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  border-top: 2px solid var(--gray-20);

  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
