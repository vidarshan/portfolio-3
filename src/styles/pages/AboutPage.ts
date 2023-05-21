import { ActionIcon, Box, Text } from "@mantine/core";
import styled from "styled-components";

export const AboutPageContainer = styled.section`
  height: 100vh;
`;

export const AboutHeaderText = styled(Text)`
  font-size: 14px;
  margin: 20px 0;
  font-weight: 700;
`;

export const GithubContainer = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #868e96;
  width: fit-content;
  border-radius: 2rem;
  padding: 0;
  :hover {
    background-color: #25262b;
  }
`;

export const StackOverflowContainer = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #fd7e14;
  width: fit-content;
  border-radius: 2rem;
  padding: 0;
  :hover {
    background-color: #fd7e14;
  }
`;

export const GithubIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GithubText = styled(Text)`
  color: white;
  font-weight: 800;
  font-size: 14px;
  margin: 0 4px;

  :last-child {
    margin-right: 6px;
  }
`;
