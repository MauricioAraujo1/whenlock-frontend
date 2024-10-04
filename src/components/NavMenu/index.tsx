import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando o hook de navegação
import { Container, Menu, MenuItem, MenuTitle, Icon, Logo, SubMenu, Content } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge, faUser } from '@fortawesome/free-regular-svg-icons';

import logoBoxImg from '../../assets/logo-navmenu.png';
import logoMenuClosed from '../../assets/logo-menu-closed.png';

export function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true); // Controle do menu
  const [isAccessControlOpen, setIsAccessControlOpen] = useState<boolean>(true); // Controle do submenu
  const navigate = useNavigate(); // Hook para navegação

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccessControl = () => {
    setIsAccessControlOpen(!isAccessControlOpen);
  };

  const handleHomeClick = () => {
    navigate("/"); 
  };

  const handleUsersClick = () => {
    navigate("/user"); 
  };

  return (
    <Container>
      <Menu style={{ width: isMenuOpen ? '250px' : '60px' }}> 
        <Logo src={isMenuOpen ? logoBoxImg : logoMenuClosed} alt="" style={{ width: isMenuOpen ? '100%' : '40px' }} /> 
        {isMenuOpen && ( 
          <>
            <MenuTitle onClick={handleHomeClick}> 
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px', paddingLeft: '10px' }} />
              Home
            </MenuTitle>
            <MenuItem onClick={toggleAccessControl}>
              <FontAwesomeIcon icon={faIdBadge} style={{ marginRight: '5px', paddingLeft: '10px' }} />
              Controle de Acesso
            </MenuItem>
            {isAccessControlOpen && (
              <SubMenu>
                <MenuItem onClick={handleUsersClick}> {/* Navegação para Usuários */}
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px', paddingLeft: '10px' }} />
                  Usuários
                </MenuItem>
              </SubMenu>
            )}
          </>
        )}
      </Menu>
      <Icon onClick={toggleMenu}> 
        {isMenuOpen ? <FaAngleLeft /> : <FaAngleRight />} 
      </Icon>

      <Content>
        <h1>Olá Maurício!</h1>
        <p>29, novembro 2024</p>
      </Content>
    </Container>
  );
}
