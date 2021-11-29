import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Row = styled.div`
  ${(props) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(1) {
      div {
        border-top: solid 4px ${props.theme.colors.black};
      }
    }

    &:nth-child(3),
    &:nth-child(6) {
      div {
        border-bottom: solid 3px ${props.theme.colors.black};
      }
    }

    &:nth-child(9) {
      div {
        border-bottom: solid 4px ${props.theme.colors.black};
      }
    }

    div {
      &:nth-child(1) {
        border-left: solid 4px ${props.theme.colors.black};
      }

      &:nth-child(3),
      &:nth-child(6) {
        border-right: solid 3px ${props.theme.colors.black};
      }

      &:nth-child(9) {
        border-right: solid 4px ${props.theme.colors.black};
      }
    }
  `}
`;
