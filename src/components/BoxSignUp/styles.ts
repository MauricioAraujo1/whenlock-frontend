import styled from "styled-components";

export const BoxContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 65rem;
  margin-top: -25rem;
  width: 764px;
  height: 700px; 
  border-radius: 10px;
  background-color: #ffffff; 
`;

export const BoxContent = styled.div`
  padding: 20px; 
  color: #333; 
  text-align: left; 
  margin-top: -10rem;
  margin-left: -1rem;
`;

export const Title = styled.text`
  font-family: 'Manrope', sans-serif;
  font-weight: bold;
  color: #0290A4;
  text-align: left;
  margin-right: 23rem;
  width: 400px; 
  font-size: 50px; 
`;

export const SubTitle = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-weight: bold;
  color: #0B2B25; 
  text-align: left;
  margin-left: 3px;
  width: 400px;
  font-size: 20px;
  margin-top: 30px; 
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const InputField = styled.input`
  font-family: 'Manrope', sans-serif;
  padding: 15px;
  margin-bottom: 15px;
  width: 650px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #0290A4;
  }
`;

export const PasswordField = styled.div`
  position: relative;
  width: 650px;
`;

export const InputPassword = styled.input`
  font-family: 'Manrope', sans-serif;
  padding: 15px;
  width: 100%;
  font-size: 1rem;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #0290A4;
  }
`;

export const TogglePassword = styled.span`
  position: absolute;
  top: 60%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  font-family: 'Manrope', sans-serif;
  background-color: #0290A4;
  color: #fff;
  padding: 15px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 650px;
  font-size: 1rem;
  margin-top: 25px;

  &:hover {
    background-color: #02788A;
  }
`;

export const ForgotPassword = styled.a`
  font-family: 'Manrope', sans-serif;
  color: #0290A4;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;   
    box-shadow: none;     
  }
  
`;

export const GoBack = styled.a`
  font-family: 'Manrope', sans-serif;
  color: #6F7D7D;
  text-align: center;
  margin-top: 35px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;   
    box-shadow: none;     
  }
`;
