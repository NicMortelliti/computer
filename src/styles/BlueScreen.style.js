import styled from "styled-components";

const blueColor = "#4472BA";

export const BarGraphPtr = styled.div`
  background-color: red;
  width: 12px;
  height: 20px;
  position: absolute;
`;

export const BarGraph = styled.div`
  display: flex;
  width: 16px;
  border: 2px solid white;
  height: 80%;
  margin-right: 10px;
  position: relative;
  align-items: ${({ align }) => align};
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
