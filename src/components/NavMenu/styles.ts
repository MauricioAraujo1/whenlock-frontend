import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh; 
  background-color: #F3F3F3;
`;

export const Header = styled.div`
  display: flex;
  height: 100vh; 
`;

export const Menu = styled.nav`
  width: 250px; 
  background-color: #0D1931; 
  display: flex;
  flex-direction: column;
  padding: 20px; 
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); 
`;

export const Title = styled.text`
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
  margin-left: 40px;
`;

export const MenuTitle = styled.button`
  color: #021B1A;
  font-weight: bold;
  text-decoration: none; 
  padding: 10px 0; 
  font-size: 14px; 
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

// Estilo da div centralizada
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
