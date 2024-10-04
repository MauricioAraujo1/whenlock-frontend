import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { BoxContainer, BoxContent, SubTitle, Title, InputContainer, InputField, PasswordField, InputPassword, TogglePassword, SubmitButton, GoBack } from "./styles";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth } from '../../firebaseConnection'
import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth'

export function BoxSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleRegister() {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((value) => {
        console.log("Cadastrado com sucesso!")
        console.log(value);
        setEmail('')
        setPassword('')
        navigate('/signIn');
    })
    .catch((error) => {
        if(error.code === 'auth/weak-password'){
            alert("Senha muito fraca.")
        }else if(error.code === 'auth/email-already-in-use'){
            alert("Email já existe!")
        }
    })
  }

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <BoxContainer>
      <BoxContent>
        <Title>Bem vindo!</Title>
        <SubTitle>Cadastre sua conta</SubTitle>

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

          <PasswordField>
            <InputPassword
              style={{marginTop: '25px'}}
              type={showPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
            />
            <TogglePassword onClick={togglePasswordVisibility} style={{marginTop: "7px"}}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePassword>
          </PasswordField>

          <SubmitButton onClick={handleRegister}>Cadastrar</SubmitButton>
          <GoBack onClick={handleGoBack}>
            <FaArrowLeft style={{ marginRight: '8px', paddingTop: '5px' }} /> 
            Voltar para o login
          </GoBack>
        </InputContainer>
      </BoxContent>
    </BoxContainer>
  );
}
