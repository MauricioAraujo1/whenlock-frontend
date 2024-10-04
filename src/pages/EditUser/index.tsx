import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from '../../services/UserService';
import { 
  Container, 
  Menu, 
  MenuItem, 
  MenuTitle, 
  Icon, 
  Logo, 
  SubMenu, 
  Title, 
  FormWrapper, 
  SectionTitle, 
  Input, 
  ButtonWrapper, 
  Button 
} from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdBadge, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import logoBoxImg from '../../assets/logo-navmenu.png';
import logoMenuClosed from '../../assets/logo-menu-closed.png';

interface InputWithToggleProps {
  type: string;
  placeholder: string;
  showPassword: boolean;
  toggleVisibility: () => void;
  disabled?: boolean;
}

const InputWithToggle = ({ type, placeholder, showPassword, toggleVisibility, disabled }: InputWithToggleProps) => (
  <div style={{ position: 'relative', width: '100%' }}>
    <Input type={showPassword ? "text" : type} placeholder={placeholder} disabled={disabled} />
    <FontAwesomeIcon
      icon={showPassword ? faEyeSlash : faEye}
      onClick={toggleVisibility}
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    />
  </div>
);

export function EditUser() {
  const { userId } = useParams<{ userId: string }>(); 
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true); 
  const [isAccessControlOpen, setIsAccessControlOpen] = useState<boolean>(true); 
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isEditable, setIsEditable] = useState<boolean>(false); 
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccessControl = () => setIsAccessControlOpen(!isAccessControlOpen);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Buscar os dados do usuário ao carregar o componente
  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const user = await getUserById(userId);
        setName(user.name);
        setRegistration(user.registration);
        setEmail(user.email);
      }
    };
    fetchUser();
  }, [userId]);

  // Função para salvar as alterações
  const handleSave = async () => {
    if (userId) {
      try {
        const updatedUser = {
          name,
          registration,
          email,
          password, 
        };
        await updateUser(userId, updatedUser);
        alert('Usuário atualizado com sucesso!');
        navigate('/user'); 
      } catch (error) {
        console.error('Erro ao atualizar o usuário:', error);
        alert('Erro ao atualizar o usuário.');
      }
    }
  };

  // Função para ativar edição dos campos
  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <Container>
      <Menu style={{ width: isMenuOpen ? '250px' : '60px' }}> 
        <Logo src={isMenuOpen ? logoBoxImg : logoMenuClosed} alt="" style={{ width: isMenuOpen ? '100%' : '40px' }} /> 
        {isMenuOpen && ( 
          <>
            <MenuTitle>
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px', paddingLeft: '10px' }} />
              Home
            </MenuTitle>
            <MenuItem onClick={toggleAccessControl}>
              <FontAwesomeIcon icon={faIdBadge} style={{ marginRight: '5px', paddingLeft: '10px' }} />
              Controle de Acesso
            </MenuItem>
            {isAccessControlOpen && (
              <SubMenu>
                <MenuItem>
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
        <Title>Editar Usuário</Title>

        <FormWrapper>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SectionTitle>Dados do Usuário</SectionTitle>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black', marginLeft: '10px' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Input 
              placeholder="Nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              disabled={!isEditable} 
            />
            <Input 
              placeholder="Matrícula" 
              value={registration} 
              onChange={(e) => setRegistration(e.target.value)} 
              disabled={!isEditable} 
            />
          </div>
          <Input 
            placeholder="E-mail" 
            style={{ marginTop: '20px' }} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            disabled={!isEditable} 
          />

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <SectionTitle>Dados de Acesso</SectionTitle>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black', marginLeft: '10px' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <InputWithToggle 
              type="password" 
              placeholder="Senha" 
              showPassword={showPassword} 
              toggleVisibility={togglePasswordVisibility} 
              disabled={!isEditable} 
            />
            <InputWithToggle 
              type="password" 
              placeholder="Repetir Senha" 
              showPassword={showConfirmPassword} 
              toggleVisibility={toggleConfirmPasswordVisibility} 
              disabled={!isEditable} 
            />
          </div>

          <ButtonWrapper>
            {!isEditable ? (
              <Button style={{ backgroundColor: '#FFA500' }} onClick={handleEdit}>
                Editar
              </Button>
            ) : (
              <>
                <Button style={{ backgroundColor: '#FF6347' }} onClick={() => navigate('/')}>Cancelar</Button>
                <Button style={{ backgroundColor: '#0290A4' }} onClick={handleSave}>Salvar</Button>
              </>
            )}
          </ButtonWrapper>
        </FormWrapper>
      </div>
    </Container>
  );
}
