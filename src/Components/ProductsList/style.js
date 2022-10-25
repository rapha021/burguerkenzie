import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 360px;

  margin-top: 15px;

  overflow-x: scroll;

  ul {
    width: max-content;

    margin: 0 10px;

    display: flex;
    gap: 20px;

    list-style: none;
  }

  @media (min-width: 1024px) {
    height: 100%;

    overflow-x: hidden;

    ul {
      width: 100%;
      margin-bottom: 25px;

      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
`
