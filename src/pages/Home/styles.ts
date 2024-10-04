import styled from "styled-components";
import { FaSearch, FaPlus } from 'react-icons/fa';

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
  font-size: 40px;  
  border: none; 
  cursor: pointer; 
  text-align: left; 
  width: 100%; 
  padding-left: 0; 
  margin: 0; 
  margin-top: 80px;
  margin-left: 5px;
`;

export const SubTitle = styled.div`
  color: #021B1A;
  font-weight: bold;
  text-decoration: none; 
  padding: 10px 0; 
  font-size: 20px;  
  border: none; 
  cursor: pointer; 
  text-align: left; 
  width: 100%; 
  padding-left: 0; 
  margin: 0; 
  margin-top: 5px;
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

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF; 
  padding: 10px; 
`;

export const Content = styled.div`
  background-color: white; 
  color: black;
  padding: 40px;
  border-radius: 8px; 
  padding-top: 40rem;
  width: 80%; 
  max-width: 1700px; 
`;

export const SearchAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  width: 20%;
  padding: 10px 40px 10px 40px; 
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #00AAC1;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  font-size: 18px;
`;

export const AddUserButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0290A4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: #02788a;
  }
`;

export const PlusIcon = styled(FaPlus)`
  margin-right: 8px;
  font-size: 16px;
`;

export const LogoutButton = styled.button`
  background-color: #ff4757; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-left: 95rem;
  cursor: pointer;
  margin-top: 20px; /* Espaço acima do botão */
  
  &:hover {
    background-color: #ff6b81; /* Cor ao passar o mouse */
  }
`;

export const RedirectButton = styled.button`
  padding: 10px 20px;
  width: 30%;
  border: none;
  border-radius: 4px;
  background-color: #00AAC1; /* Cor do botão */
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0; /* Espaço em volta do botão */
  margin-left: 32rem;

  &:hover {
    opacity: 0.8; /* Efeito ao passar o mouse */
  }
`;