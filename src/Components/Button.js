import styled from "styled-components";
import { size } from "../utils/styles";

export const Button = styled.button`
  font-size: 1rem;
  border: none;
  background-color: transparent;
  padding: 0.8rem;
  margin: 0;
  text-align: left;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  padding: 0.8rem;
  margin: 0;
  text-align: left;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonLabel = styled.span`
  font-size: 0.8rem;

  @media ${size.large} {
    font-size: 1.1rem;
  }
`;

export const ButtonIcon = styled.span`
  margin-left: 0.5em;
`;
