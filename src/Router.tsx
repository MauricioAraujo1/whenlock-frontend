import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/Onboarding/SignIn';
import { RecoveryPass } from './pages/Onboarding/RecoveryPass';
import { User } from './pages/User';
import { RegisterUser } from './pages/RegisterUser';
import { EditUser } from './pages/EditUser';
import { fetchUsers } from './services/UserService'; // Importe a função para buscar usuários
import { SignUp } from './pages/Onboarding/SignUp';

export function Router() {
  const [users, setUsers] = useState<any[]>([]); // Estado para armazenar usuários

  const refreshUsers = async () => {
    try {
      const userList = await fetchUsers(); // Chame a função para buscar usuários
      setUsers(userList); // Atualize o estado com a lista de usuários
      console.log("Lista de usuários atualizada!", userList);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  useEffect(() => {
    refreshUsers(); // Chame refreshUsers ao montar o componente
  }, []);

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/recovery" element={<RecoveryPass />} />
      <Route path="/user" element={<User refreshUsers={refreshUsers} users={users} />} /> {/* Passando a lista de usuários para o User */}
      <Route path="/register" element={<RegisterUser refreshUsers={refreshUsers} />} />
      <Route path="/edit/:userId" element={<EditUser />} />
    </Routes>
  );
}
