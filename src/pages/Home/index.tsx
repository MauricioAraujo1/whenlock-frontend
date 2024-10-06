import { useState, useEffect } from "react";
import { Container, Menu, MenuItem, MenuTitle, Icon, Logo, SubMenu, Title, SubTitle, LogoutButton, RedirectButton } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConnection'; 
import { signOut, onAuthStateChanged, User } from 'firebase/auth'; 

import logoBoxImg from '../../assets/logo-navmenu.png';
import logoMenuClosed from '../../assets/logo-menu-closed.png';
import logoWelcome from '../../assets/logo-welcome.png';

export function Home() { 
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [isAccessControlOpen, setIsAccessControlOpen] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null); // Estado para armazenar informações do usuário
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); // Defina como null quando o usuário não estiver autenticado
        navigate("/signin"); 
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Usuário deslogado com sucesso");
      navigate("/"); // Redireciona para a página de Sign In após logout
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
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
                <MenuItem onClick={handleUsersClick}>
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

      <div style={{ padding: '20px', width: '100%' }}>
        <Title>Olá {user ? user.email : ''}!</Title> {/* Exibe o email do usuário logado */}
        <SubTitle>22, novembro 2024</SubTitle>

        <img src={logoWelcome} alt="Minha Imagem" style={{ width: '500px', marginLeft: '30rem', marginTop: '50px' }} /> {/* Ajuste a largura conforme necessário */}
        
        {/* Botão de Redirecionamento para Usuários */}
        <div>
          <RedirectButton onClick={handleUsersClick} style={{ marginTop: '20px' }}>
            Bem-vindo ao Whenlock!
          </RedirectButton>
        </div>

        <div style={{ marginTop: '-45rem' }}>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </div>
      </div>
    </Container>
  );
}
