import styled from "styled-components";
import { voice } from './typography.js';

// Layout
export const pad = 10;

// Colors
export const colors = {
  black: "#000",
  white: "#fff",
  gray: "#f4f4f4"
}

// Components
export const Page = styled.section`
  padding: ${pad*2}px ${pad}px 0;
`;

export const Title = styled.h1`${voice.loud}`;

export const Heading = styled.h2`${voice.strong}`;

export const Text = styled.p`${voice.normal}`;

export const Small = styled.span`${voice.quiet}`;

export const List = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
`;

export const ListItem = styled.li`
  text-decoration: none;
  padding: 0 ${pad}px;
  font-size: ${voice.normal};
`;

export const Button = styled.button`
  padding: ${pad/2}px ${pad}px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  font-size: ${voice.normal};
  max-width: max-content;
`;