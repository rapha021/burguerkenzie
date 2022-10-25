import styled from "styled-components"

export const Container = styled.header`
  height: 139px;
  width: 100%;

  background-color: var(--gray-0);

  img {
    cursor: pointer;
  }

  .header-content {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    height: 80px;
    .header-content {
      margin: 0 115px;

      flex-direction: row;
      justify-content: space-between;
    }
  }
`
