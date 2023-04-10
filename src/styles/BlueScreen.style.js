import styled from "styled-components";

const blueColor = "#4472BA";

export const BarGraphPtr = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  width: 20px;
  height: 20px;
`;

export const BarGraph = styled.div`
  display: flex;
  width: 20px;
  border: 2px solid white;
  height: 80%;
  margin-right: 10px;
`;

export const BlueScreenCont = styled.div`
  display: flex;
  border: 2px solid white;
  background-color: ${blueColor};
  height: 100px;
  padding: 0 10px;
  align-items: center;
  justify-content: start;
`;
