import { Box, Text } from "@mantine/core";
import styled, { keyframes } from "styled-components";

export const sliding = keyframes`

0%{
  top: 0;
}

50%{
  top: -20px;
}

100%{
  top: 0;
}

/* 
  from {left: 0px;}
  to {left: 200px;}
 */

`;

export const HomePageContainer = styled.section`
  height: 100vh;
  position: relative;
  padding-top: 60px;
`;

export const TextContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ToggleText = styled(Text)`
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  color: gray;
`;

export const SlidingContent = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${sliding} 2s infinite;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const FontRow = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const HorizontalText = styled.span`
  display: flex;
  align-items: center;
  font-size: 26px;
  color: gray;
  margin-right: 10px;
`;

export const LargerText = styled.span`
  font-size: 40px;
  font-weight: 600;
`;

export const MediumText = styled.span`
  font-size: 28px;
  line-height: 0;
  margin-top: 36px;
  margin-bottom: 36px;
  font-weight: 600;
`;

export const ScrollText = styled.div`
  font-weight: 600;
  color: gray;
  font-size: 16px;
`;
