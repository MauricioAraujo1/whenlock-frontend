import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh; 
  background-color: #F3F3F3;
`;

export const Header = styled.div`
  display: flex;
  height: 100vh; 
  background-color: #F3F3F3; 
`;

export const Menu = styled.nav`
  width: 250px; 
  background-color: #0D1931; 
  display: flex;
  flex-direction: column;
  padding: 20px; 
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); 
`;

export const Title = styled.div`
  color: #021B1A;
  font-weight: bold;
  text-decoration: none; 
  padding: 10px 0; 
  font-size: 30px;  
  border: none; 
  cursor: pointer; 
  text-align: left; 
  width: 100%; 
  padding-left: 0; 
  margin: 0; 
  margin-top: 80px;
  margin-left: 5px;
`;

export const MenuTitle = styled.button`
  color: #021B1A;
  font-weight: bold;
  text-decoration: none; 
  padding: 10px 0; 
  font-size: 14px; 
  background-color: #00AAC1; 
  border: none; 
  cursor: pointer; 
  text-align: left; 
  width: 100%; 
  padding-left: 0; 
  margin: 0; 

  &:hover {
    color: #021B1A; 
  }
`;

export const MenuItem = styled.button`
  color: white;
  font-weight: bold;
  text-decoration: none; 
  padding: 10px 0; 
  font-size: 14px; 
  background: none; 
  border: none; 
  cursor: pointer; 
  text-align: left; 
  width: 100%; 
  padding-left: 0; 
  margin: 0; 

  &:hover {
    color: #b0c4de; 
  }
`;

export const SubMenu = styled.div`
  padding-left: 20px; 
`;

export const Icon = styled.div`
  color: #0D1931; 
  margin: 20px; 
  cursor: pointer; 
  font-size: 24px; 
`;

export const Logo = styled.img`
  width: 100%; 
  padding: 20px;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  background-color: white; 
  padding: 20px; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;
