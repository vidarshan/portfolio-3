import { Box, Text } from "@mantine/core";
import styled from "styled-components";

export const HomePageContainer = styled.section`
  height: 100vh;
`;

export const TextContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ToggleText = styled(Text)`
  margin-left: 10px;
  font-weight: 600;
  font-size: 14px;
`;
