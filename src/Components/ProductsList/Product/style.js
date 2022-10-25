import styled from "styled-components"

export const Container = styled.li`
  width: 300px;
  height: 346px;

  display: flex;
  flex-direction: column;

  border: 2px solid var(--gray-20);
  border-radius: 5px;

  figure {
    width: 100%;

    display: flex;
    justify-content: center;

    background-color: var(--gray-0);
  }

  figure > img {
    width: 177px;
  }

  .product-info {
    height: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`
