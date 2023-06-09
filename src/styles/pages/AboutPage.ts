import { Box, Text } from "@mantine/core";
import styled, { css } from "styled-components";
import { ICustomChip } from "../../interfaces/IAboutPage";

export const AboutPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const AboutHeaderText = styled(Text)`
  font-size: 14px;
  margin: 20px 0;
  font-weight: 700;
`;

export const GithubContainer = styled(Box)<ICustomChip>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.color
      ? css`
          background-color: #343a40;
        `
      : css`
          background-color: #868e96;
        `};
  width: fit-content;
  border-radius: 2rem;
  padding: 0;
`;

export const StackOverflowContainer = styled(Box)<ICustomChip>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.color
      ? css`
          background-color: rgba(232, 89, 12, 0.2);
        `
      : css`
          background-color: rgba(255, 244, 230, 1);
        `};

  width: fit-content;
  border-radius: 0.5rem;
  padding: 0;

  button {
    background-color: unset;
  }
`;

export const GithubIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GithubText = styled(Text)<ICustomChip>`
  color: white;
  font-weight: 800;
  font-size: 14px;
  margin: 0 4px;

  ${(props) =>
    props.color
      ? css`
          color: #fd7e14;
        `
      : css`
          color: #ffd8a8;
        `};

  :last-child {
    margin-right: 6px;
  }
`;
