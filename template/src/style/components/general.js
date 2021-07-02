/* eslint-disable indent */
import styled, {keyframes, css, createGlobalStyle} from "styled-components";
import {voice} from "./typography.js";
import {breakpoint} from "./breakpoints.js";
import {flex, z} from "./mixins.js";
import {cross, triangle} from "./shapes.js";
import {border, nav, pad, radius, transition} from "./variables.js";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    font-family: '${props => props.theme.font}', sans-serif;
  }
`;

// Components
export const Page = styled.section`
  height: 100%;
  margin: 0 auto;
  margin-top: ${nav}px;
  padding: ${pad * 2}px ${pad}px 0;
  max-width: ${breakpoint.width[6]};

  @media (min-width: ${breakpoint.width[2]}) {
    padding: ${pad * 2}px ${pad * 2}px 0;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.title};
  ${voice.loud}

  ${props =>
    props.inverted &&
    css`
      color: ${prevProps => prevProps.theme.titleInverted};
    `}
`;

export const TitleCenter = styled(Title)`
  text-align: center;
  align-self: center;
`;

export const Heading = styled.h2`
  color: ${props => props.theme.primary};
  ${voice.strong}

  ${props =>
    props.inverted &&
    css`
      color: ${prevProps => prevProps.theme.textInverted};
    `}

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const HeadingCenter = styled(Heading)`
  color: ${props => props.theme.primary};
  text-align: center;
  align-self: center;
`;

export const Text = styled.p`
  text-align: left;
  ${voice.normal};
  color: ${props => props.theme.text};

  ${props =>
    props.inverted &&
    css`
      color: ${prevProps => prevProps.theme.textInverted};
    `};

  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`;

export const TextCenter = styled(Text)`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
`;

export const Small = styled.span`
  color: ${props => props.theme.text};
  ${voice.quiet};
  font-weight: normal;

  ${props =>
    props.inverted &&
    css`
      color: ${prevProps => prevProps.theme.textInverted};
    `}
`;

export const List = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
`;

export const ListItem = styled.li`
  text-decoration: none;
  padding: 0 ${pad}px;
  color: ${props => props.theme.text};
  ${voice.normal};

  &:last-child {
    padding-right: 0;
  }
`;

export const Link = styled.a`
  padding: ${pad / 2}px ${pad}px;
  border-radius: ${radius};
  max-width: max-content;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textInverted};
  ${voice.normal};
`;

export const Button = styled.button`
  padding: ${pad / 2}px ${pad}px;
  border-radius: ${radius};
  max-width: max-content;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textInverted};
  ${voice.normal};

  svg {
    fill: ${props => props.theme.textInverted};
  }
`;

export const ButtonFull = styled.button`
  width: 100%;
  padding: ${pad}px;
  background-color: ${props => props.theme.primary};
  border: ${border} solid ${props => props.theme.black};
  border-radius: ${radius};
  color: ${props => props.theme.textInverted};

  svg {
    fill: ${props => props.theme.textInverted};
  }
`;

export const ButtonWrapper = styled.button`
  width: inherit;
`;

// Form Styles
export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  ${flex("row", "wrap", "center", "start")}
`;

export const SubForm = styled.form`
  margin: 0 auto;
  width: 100%;
  ${flex("row", "wrap", "center", "start")}
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${pad}px;
  ${flex("column", "wrap", "center", "start")};
`;

export const FormGroupHeading = styled(Heading)`
  ${voice.bold};
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${pad}px;
  width: 100%;

  ${props =>
    props.inline &&
    css`
      flex-direction: row;
    `}
`;

export const Label = styled.label`
  line-height: 1.5;
  margin-bottom: ${pad / 2}px;
  cursor: inherit;
  max-width: 400px;
  color: ${props => props.theme.text};
  ${voice.normal};

  ${props =>
    props.inverted &&
    css`
      color: ${prevProps => prevProps.theme.textInverted};
    `}

  ${props =>
    props.center &&
    css`
      display: block;
      text-align: center;
    `}
`;

export const LabelBold = styled(Label)`
  font-weight: bold;
  cursor: inherit;

  ${props =>
    props.inverted &&
    css`
      color: ${prevProps => prevProps.theme.titleInverted};
    `}

  ${props =>
    props.center &&
    css`
      display: block;
      text-align: center;
    `}
`;

export const Input = styled.input`
  padding: ${pad}px ${pad}px;
  border: ${border} solid ${props => props.theme.primary};
  border-radius: ${radius};

  &[type="text"],
  &[type="textarea"],
  &[type="number"],
  &[type="date"],
  &[type="email"],
  &[type="password"] {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 100px;
  padding: ${pad}px;
  border: ${border} solid ${props => props.theme.primary};
  border-radius: ${radius};
`;

export const Block = styled.textarea`
  margin: ${pad}px 0;
`;

export const Invalid = styled.span`
  color: ${props => props.theme.error};
  ${voice.quiet};
`;

// Shapes/Icons
export const TriangleDown = styled.span`
  width: fit-content;
  margin-left: ${pad / 2}px;
  display: flex;
  align-items: center;
  ${props => triangle(pad / 2, props.theme.textInverted, "down")}
`;

export const TriangleUp = styled.span`
  width: fit-content;
  margin-left: ${pad / 2}px;
  display: flex;
  align-items: center;
  ${props => triangle(pad / 2, props.theme.textInverted, "up")}
`;

export const TriangleRight = styled.span`
  width: fit-content;
  margin-left: ${pad / 2}px;
  display: flex;
  align-items: center;
  ${props => triangle(pad / 2, props.theme.textInverted, "right")}
`;

export const TriangleLeft = styled.span`
  width: fit-content;
  margin-left: ${pad / 2}px;
  display: flex;
  align-items: center;
  ${props => triangle(pad / 2, props.theme.textInverted, "left")}
`;

export const TableWrapper = styled.section`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Table = styled.table`
  width: 100%;
  min-height: 100px;
`;

export const TitleRow = styled.tr`
  padding: ${pad}px;
`;

export const Row = styled.tr`
  padding: ${pad * 2}px;
  border-bottom: ${border} solid rgba(0, 0, 0, 0.2);
`;

export const TitleCell = styled.th`
  padding: ${pad}px;
  text-align: left;
  color: ${props => props.theme.textInverted};
`;

export const Cell = styled.td`
  padding: ${pad}px;
  text-align: left;
  position: relative;
  color: ${props => props.theme.text};
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: ${pad * 2}px;
    margin: 0 auto;
    width: 25px;
    height: 25px;
    border-top: ${radius} solid ${props => props.theme.secondary};
    border-right: ${radius} solid ${props => props.theme.secondary};
    border-bottom: ${radius} solid ${props => props.theme.secondary};
    border-left: ${radius} solid ${props => props.theme.primary};
    border-radius: 50%;
    animation: ${rotate} 1s infinite linear;
  }
`;

export const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  ${flex("row", "nowrap", "center", "center")}
  z-index: ${z("peak")};
`;

export const ModalContent = styled.div`
  position: relative;
  width: auto;
  max-height: 75vh;
  min-width: 400px;
  max-width: ${breakpoint.width[3]};
  padding: ${pad * 3}px;
  border-radius: ${radius};
  background: ${props => props.theme.background};
  overflow: auto;
`;

export const ModalButton = styled.button`
  background-color: transparent;
  margin-left: ${pad * 2}px;
  max-width: max-content;

  svg {
    fill: ${props => props.theme.primary};
  }
`;

export const CloseButton = styled(ModalButton)`
  position: relative;
  width: fit-content;
  padding: ${pad}px;
  margin-left: ${pad * 2}px;
  ${cross(18)};
`;

export const CheckWrapper = styled.label`
  ${flex("row", "nowrap", "start", "center")};
  margin: ${pad / 2}px ${pad}px ${pad / 2}px 0;
`;

export const CheckInput = styled(Input)`
  margin: ${pad / 2}px ${pad}px ${pad / 2}px 0;
`;

export const Success = styled.p`
  ${voice.strong};
  color: ${props => props.theme.success};
`;

export const Error = styled.p`
  ${voice.strong};
  color: ${props => props.theme.error};
`;

export const Inline = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  min-width: fit-content;
  padding: ${pad}px;
  border: ${border} solid ${props => props.theme.black};
  border-radius: ${radius};
  background-color: ${props => props.theme.white};

  @media (min-width: ${breakpoint.width[2]}) {
    max-width: 200px;

    ${props =>
      props.fullWidth &&
      css`
        max-width: 100%;
      `}
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 30px;
  height: 17px;
`;

export const Arrow = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: transparent;
  transition: ${transition};

  &:hover {
    background: ${props => props.theme.grayLight};
    border-radius: 50%;
  }

  ${props =>
    props.rotate &&
    css`
      transform: rotate(${props.rotate});
    `}

  &:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    width: 10px;
    height: 2px;
    margin: 0 auto;
    background: ${props => props.theme.primary};
    transform: rotate(-45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: 13px;
    left: 0;
    right: 0;
    width: 10px;
    height: 2px;
    margin: 0 auto;
    background: ${props => props.theme.primary};
    transform: rotate(45deg);
  }
`;

// Masonry

export const Masonry = styled.div`
  // mobile ~ masonry disabled
  display: flex;
  flex-flow: row wrap;

  @media (min-width: ${breakpoint.width[2]}) {
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    flex-basis: 100%;
    order: 2;
    height: calc(100vh - ${nav}px - 100px);
    width: 100%;

    &::before,
    &::after {
      content: "";
      flex-basis: 100%;
      width: 0;
      order: 2;
    }
  }
`;

export const MasonryItem = styled.div`
  width: 100%;
  padding-bottom: ${pad}px;
  padding-right: ${pad}px;

  @media (min-width: ${breakpoint.width[2]}) {
    width: 50%;

    /* Re-order items into rows */
    &:nth-child(2n + 1) {
      order: 1;
    }

    &:nth-child(2n) {
      order: 2;
      padding-right: 0;
    }
  }

  @media (min-width: ${breakpoint.width[5]}) {
    width: 33.33%;

    /* Reset padding */
    &:nth-child(2n) {
      padding-right: ${pad}px;
    }

    /* Re-order items into rows */
    &:nth-child(3n + 1) {
      order: 1;
    }

    &:nth-child(3n + 2) {
      order: 2;
    }

    &:nth-child(3n) {
      order: 3;
      padding-right: 0;
    }
  }
`;
