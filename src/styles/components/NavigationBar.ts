import { Box } from "@mantine/core";
import styled from "styled-components";

export const NavigationBarContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;
