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
  }
  &:active {
    background: #fafafa;
    border: 1px solid #f1f1f1;
    transform:scale(0.99);
  }

'`;
