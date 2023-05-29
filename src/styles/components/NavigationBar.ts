import { Box } from "@mantine/core";
import styled from "styled-components";
export const NavigationBarContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  z-index: 10000;
  padding: 10px 0;
`;

export const NavigationBarInnerContainer = styled(Box)`
  display: flex;
  flex-direction: row;

  button {
    margin-right: 14px;
  }
`;
