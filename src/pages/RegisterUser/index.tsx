import { useState } from "react";
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
import { FaAngleLeft, FaAngleRight, FaArrowLeft } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdBadge, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logoBoxImg from '../../assets/logo-navmenu.png';
import logoMenuClosed from '../../assets/logo-menu-closed.png';
import { registerUser } from '../../services/UserService'; // Importando a função registerUser
import { useNavigate } from 'react-router-dom';

// Definindo os tipos dos props
interface InputWithToggleProps {
  type: string;
  placeholder: string;
  showPassword: boolean;
  toggleVisibility: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithToggle = ({ type, placeholder, showPassword, toggleVisibility, value, onChange }: InputWithToggleProps) => (
  <div style={{ position: 'relative', width: '100%' }}>
    <Input type={showPassword ? "text" : type} placeholder={placeholder} value={value} onChange={onChange} />
    <FontAwesomeIcon
      icon={showPassword ? faEyeSlash : faEye}
      onClick={toggleVisibility}
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    />
  </div>
);

interface RegisterUserProps {
  refreshUsers: () => void; // Função para atualizar a lista de usuários
}

export function RegisterUser({ refreshUsers }: RegisterUserProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true); 
  const [isAccessControlOpen, setIsAccessControlOpen] = useState<boolean>(true); 
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  
  // Estados para os dados do usuário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registration, setRegistration] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // Hook para navegação

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccessControl = () => setIsAccessControlOpen(!isAccessControlOpen);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (password !== confirmPassword) {
      alert("As senhas não correspondem.");
      return;
    }

    try {
      const userData = {
        name,
        email,
        registration,
        password,
      };

      const response = await registerUser(userData);
      console.log('Usuário criado:', response);

      // Chama a função para atualizar a lista de usuários
      refreshUsers();
      
      // Redireciona para a lista de usuários
      navigate("/user");
      
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      // Trate o erro conforme necessário
    }
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
        <Title>
        <Button 
            style={{ padding: '10px' ,marginLeft: '10px' }} 
            onClick={() => navigate('/user')}
          >
            <FaArrowLeft style={{backgroundColor: 'black'}} />
          </Button>
            Cadastro de Usuário</Title>

        {/* Formulário de Cadastro */}
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SectionTitle>Dados do Usuário</SectionTitle>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'black', marginLeft: '10px' }} />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Input
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Matrícula"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
              />
            </div>
            <Input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '20px' }}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputWithToggle 
                type="password" 
                placeholder="Repetir Senha" 
                showPassword={showConfirmPassword} 
                toggleVisibility={toggleConfirmPasswordVisibility}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <ButtonWrapper>
              <Button style={{ backgroundColor: '#FF6347' }} onClick={() => navigate('/user')}>Cancelar</Button>
              <Button type="submit" style={{ backgroundColor: '#0290A4' }}>Cadastrar</Button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </div>
    </Container>
  );
}
