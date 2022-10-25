import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 15px;

  header {
    width: 90%;
    height: 65px;

    display: flex;
    align-items: center;

    border-radius: 5px 5px 0px 0px;

    background-color: var(--color-primary);

    h3 {
      margin-left: 10px;
      color: #fff;
    }
  }

  .cart-products {
    width: 90%;
    height: 100%;

    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 0px 5px 5px;

    background-color: var(--gray-0);
  }

  .no-products {
    width: 100%;
    height: 158px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 365px;

    margin-top: 15px;
    .cart-products {
      height: 158px;
    }
  }
`
export const CartList = styled.ul`
  width: 100%;

  padding: 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  background-color: var(--gray-0);
  border-radius: 0px 0px 5px 5px;

  li {
    width: 90%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      width: 70px;

      display: flex;
      justify-content: center;

      border-radius: 5px;
      background-color: var(--gray-20);
    }

    figure > img {
      width: 70px;
    }

    button {
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
`
