import styled from '@emotion/styled';

export const CustomInput = styled.input`
  padding: 0.6rem 2rem 0.6rem 2.3rem;
  overflow: hidden;
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
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
  margin:.5rem 0 0 0 ;
  box-shadow: 0px 0px 0px 4px rgba(145, 177, 235, 0.3);
  max-height: 70vh;
  overflow-y: auto;


'`;
