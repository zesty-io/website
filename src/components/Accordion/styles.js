import styled from '@emotion/styled';

export const CustomInput = styled.input`
  padding: 0.6rem 2rem 0.6rem 2.3rem;
  overflow: hidden;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  outline: none;
  cursor: pointer;
  color: #497edf;
  font-size: 15px;
  transition: all 0.1s ease-in-out;
  &:focus {
    border: 1px solid #497edf;
    box-shadow: 0px 0px 0px 4px rgba(145, 177, 235, 0.3);
  }
  &:hover {
    border: 1px solid #497edf;
    box-shadow: 0px 0px 0px 4px rgba(145, 177, 235, 0.3);
  }
`;

export const CustomDropdown = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #fff;
  margin: 0.5rem 0 0 0;
  // box-shadow: 0px 0px 0px 4px rgba(145, 177, 235, 0.3);
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid #f1f1f1;



';
`;

export const CustomButton = styled.button`
  width: 100%;
  background: #fff;
  padding:.8rem .5rem;
  display: flex;
  justify-content:flex-start;
  justify-items:flex-start;
  text-align: left;
  outline: none;
  font-size:14px;
    font-weight: 100;
  cursor: pointer;
    border: 1px solid transparent;
    border-radius:5px;
    font-weight:400;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: #fafafa;
    border: 1px solid #f1f1f1;
  }

  &:focus {
    background: #fafafa;
    border: 1px solid #f1f1f1;
    font-weight: 600;
    color: #497edf;
  }
  &:active {
    background: #fafafa;
    border: 1px solid #f1f1f1;
    transform:scale(0.99);
  }

'`;

export const AccordionBtn = styled.button`
  width: 100%;
  background: #fff;
  padding:0.8rem .8rem 0.8rem .5rem;
  display: flex;
  justify-content:flex-start;
  justify-items:flex-start;
  text-align: left;
  outline: none;
  font-size:14px;
  font-weight: 100;
  cursor: pointer;
  border: 1px solid transparent;
  // border-radius:5px;
  transition: all 0.1s ease-in-out;
  color: ${(props) => (props.active ? '#497edf' : '#333333')};
  // border-left: 1px solid #333333;


  &:hover {
    color: #497edf;
    background: #fafafa;
  }

  &:focus {
    font-weight: 800;
    color: #497edf;
  }
  &:active {
    color: #497edf;
    transform:scale(0.99);
  }

'`;

export const AccordionBtnHead = styled.button`
  width: 100%;
  background: #fff;
  padding:.8rem .8rem 0 .5rem;
  display: flex;
  justify-content:flex-start;
  justify-items:flex-start;
  text-align: left;
  outline: none;
  font-size:14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius:5px;
  transition: all 0.1s ease-in-out;
  color: ${(props) => (props.active ? '#497edf' : '#333333')};

  &:hover {
    color: #4973df;
  }

  &:focus {
    font-weight: 800;
    color: #497edf;
  }
  &:active {
    color: #497edf;
    transform:scale(0.99);
  }

'`;

export const IconContainer = styled.button`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  outline: none;
  border: none;
  height: 0.5rem;
  background: #fff;
  &:hover {
    color: #497edf;
  }

  &:focus {
    font-weight: 800;
    color: #497edf;
  }
`;
