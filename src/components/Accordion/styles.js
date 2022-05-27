import styled from '@emotion/styled';

export const CustomInput = styled.input`
  padding: 0.6rem 2rem 0.6rem 2.3rem;
  overflow: hidden;
  background: ${(props) => props.theme.white};
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.border};
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.main};
  font-size: 15px;
  transition: all 0.1s ease-in-out;
  &:focus {
    border: 1px solid ${(props) => props.theme.main};
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.boxShadow};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.main};
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.boxShadow};
  }
`;

export const CustomDropdown = styled.div`
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme.white};
  margin: 0.5rem 0 0 0;
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme.border};
`;

export const CustomButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.palette.common.white};
  padding: 0.8rem 0.5rem;
  display: flex;
  justify-content: flex-start;
  justify-items: flex-start;
  text-align: left;
  outline: none;
  font-size: 14px;
  font-weight: 100;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: 400;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.palette.secondary.snow};
    border: 1px solid ${(props) => props.theme.palette.secondary.whiteSmoke};
  }

  &:focus {
    background: ${(props) => props.theme.palette.secondary.snow};
    border: 1px solid ${(props) => props.theme.palette.secondary.whiteSmoke};
    font-weight: 600;
    color: ${(props) => props.theme.palette.primary.main};
  }
  &:active {
    background: ${(props) => props.theme.palette.secondary.snow};
    border: 1px solid ${(props) => props.theme.palette.secondary.whiteSmoke};
    transform: scale(0.99);
  }
`;

export const AccordionBtn = styled.button`
  width: 100%;
  background: ${(props) => props.theme.palette.common.white};
  padding: 0.8rem 0.8rem 0.8rem 0.5rem;
  display: flex;
  justify-content: flex-start;
  justify-items: flex-start;
  text-align: left;
  outline: none;
  font-size: 14px;
  font-weight: 100;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.1s ease-in-out;
  color: ${(props) =>
    props.active
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.darkCharcoal};

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
    background: ${(props) => props.theme.palette.common.white};
  }

  &:focus {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: 800;
  }
  &:active {
    color: ${(props) => props.theme.palette.primary.main};
    transform: scale(0.99);
  }
`;

export const AccordionBtnHead = styled.button`
  width: 100%;
  background: ${(props) => props.theme.palette.common.white};
  padding: 0.8rem 0.8rem 0 0.5rem;
  display: flex;
  justify-content: flex-start;
  justify-items: flex-start;
  text-align: left;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  color: ${(props) =>
    props.active
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.darkCharcoal};

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  &:focus {
    font-weight: 800;
    color: ${(props) => props.theme.palette.primary.main};
  }
  &:active {
    color: ${(props) => props.theme.palette.primary.main};
    transform: scale(0.99);
  }
`;

export const IconContainer = styled.button`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  outline: none;
  border: none;
  height: 0.5rem;
  background: ${(props) => props.theme.palette.common.white};
  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  &:focus {
    font-weight: 800;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
