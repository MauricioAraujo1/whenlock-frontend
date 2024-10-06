import { useState } from 'react';
import { BoxContainer, BoxContent, SubTitle, Title, InputContainer, InputField, PasswordField, InputPassword, TogglePassword, SubmitButton, ForgotPassword } from "./styles";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth } from '../../firebaseConnection'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Box() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("Usuário logado com sucesso");
        console.log(value.user);
        setEmail('');
        setPassword('');
        navigate('/Home'); // Redireciona para a página inicial após login
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
      });
  }

  // Função para redirecionar para a tela de recuperação de senha
  const handleForgotPassword = () => {
    navigate('/recovery'); // Redireciona para a tela de recuperação de senha
  };

  const handleSignUp = () => {
    navigate('/signUp'); // Redireciona para a tela de recuperação de senha
  };

  return (
    <BoxContainer>
      <BoxContent>
        <Title>Bem vindo!</Title>
        <SubTitle>Entre com sua conta</SubTitle>

        <InputContainer>
          <InputField 
            type="text" 
            placeholder="Email ou Nº matrícula"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          
          <PasswordField>
            <InputPassword
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TogglePassword onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePassword>
          </PasswordField>

          <SubmitButton onClick={handleSignIn}>Entrar</SubmitButton>
          <ForgotPassword onClick={handleForgotPassword}>Esqueci minha senha</ForgotPassword>
          <ForgotPassword onClick={handleSignUp}>Cadastre-se</ForgotPassword> {/* Atualizado para usar onClick */}
        </InputContainer>
      </BoxContent>
    </BoxContainer>
  );
}
