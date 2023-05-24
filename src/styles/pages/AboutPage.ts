import { ActionIcon, Box, Text } from "@mantine/core";
import styled, { css } from "styled-components";
import { ICustomChip } from "../../interfaces/IAboutPage";

export const AboutPageContainer = styled.section`
  height: 100vh;
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
          background-color: #e8590c;
        `
      : css`
          background-color: rgb(253, 126, 20);
        `};

  width: fit-content;
  border-radius: 2rem;
  padding: 0;
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
          color: #fff;
        `
      : css`
          color: #fff;
        `};

  :last-child {
    margin-right: 6px;
  }
`;
