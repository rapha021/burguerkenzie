import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  background-color: var(--gray-100);

  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: var(--color-primary);
  }
`
