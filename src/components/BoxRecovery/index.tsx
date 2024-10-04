import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { BoxContainer, BoxContent, SubTitle, Title, InputContainer, InputField, SubmitButton, GoBack, Logo } from "./styles";
import logoBoxImg from '../../assets/logo-box.svg';
import { auth } from '../../firebaseConnection'; // Importando a configuração do Firebase
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

export function BoxRecovery() {
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleRecovery = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("E-mail de recuperação enviado!");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
  
      if (error instanceof FirebaseError) { 
        if (error.code === 'auth/user-not-found') {
          setMessage("Usuário não encontrado.");
        } else {
          setMessage("Erro ao enviar e-mail de recuperação.");
        }
      } else {
        setMessage("Erro desconhecido.");
      }
    }
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <BoxContainer>
      <BoxContent>
        <Logo src={logoBoxImg} alt="" />
        <Title>Recuperação de senha</Title>
        <SubTitle>Insira seu e-mail para recuperar a senha.</SubTitle>

        <InputContainer>
          <InputField 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {message && <p>{message}</p>} 
          <SubmitButton onClick={handleRecovery}>Recuperar</SubmitButton>
          <GoBack onClick={handleGoBack}>
            <FaArrowLeft style={{ marginRight: '8px', paddingTop: '5px' }} /> 
            Voltar para o login
          </GoBack>
        </InputContainer>
      </BoxContent>
    </BoxContainer>
  );
}
