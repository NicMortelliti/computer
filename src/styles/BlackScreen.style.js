import styled from "styled-components";

export const Circle = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "none")};
  width: 40px;
  aspect-ratio: 1 /1;
  margin: 5px;
`;

export const BlackScreenCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid white;
  background-color: black;
  height: 120px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;
