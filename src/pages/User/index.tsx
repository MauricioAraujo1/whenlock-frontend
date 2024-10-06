import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Container, Menu, MenuItem, MenuTitle, Icon, Logo, SubMenu, Title, SearchWrapper, SearchInput, SearchIcon, SearchAndButtonWrapper, AddUserButton, PlusIcon } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdBadge, faUser, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { User as UserData, getAllUsers, deleteUser } from '../../services/UserService';

import logoBoxImg from '../../assets/logo-navmenu.png';
import logoMenuClosed from '../../assets/logo-menu-closed.png';

export function User() { 
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [isAccessControlOpen, setIsAccessControlOpen] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState<UserData[]>([]); 

  const [selectedUser, setSelectedUser] = useState<UserData | null>(null); // Usuário selecionado para modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccessControl = () => {
    setIsAccessControlOpen(!isAccessControlOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddUserClick = () => {
    navigate("/register");
  };

  const handleHomeClick = () => {
    navigate("/Home"); 
  };

  const handleEditUser = (userId: string) => {
    navigate(`/edit/${userId}`);
  };

  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await deleteUser(userId); 
        setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Função para buscar usuários ao carregar o componente
  const fetchUsers = async () => {
    const userList = await getAllUsers();
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Função para abrir o modal com os detalhes do usuário
  const handleViewUser = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
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
        <Title>Usuários</Title>

        <SearchAndButtonWrapper>
          <SearchWrapper>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Pesquisar Usuário..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchWrapper>

          <AddUserButton onClick={handleAddUserClick}>
            <PlusIcon />
            Cadastrar Usuário
          </AddUserButton>
        </SearchAndButtonWrapper>

        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(user => (
                  <TableRow hover key={user.id!}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="right">
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <button onClick={() => handleViewUser(user)} style={{ border: 'none', background: 'none', marginRight: '10px' }}>
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button onClick={() => handleEditUser(user.id!)} style={{ border: 'none', background: 'none', marginRight: '10px' }}>
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => handleDeleteUser(user.id!)} style={{ border: 'none', background: 'none' }}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      {/* Modal de visualização de usuário */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="md" // Definindo o tamanho maior do modal
        fullWidth
        PaperProps={{
          style: {
            alignSelf: 'flex-start', // Alinha o modal à esquerda
            margin: '20px', // Margem para dar espaço do lado esquerdo
          },
        }}
      >
        <DialogTitle>Visualizar Usuário</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4>Dados do usuário</h4>
            <hr style={{ flex: 1, marginLeft: '10px', border: 'none', borderTop: '1px solid #ccc' }} /> {/* Div horizontal */}
          </div>
          {selectedUser && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <DialogContentText>Nome: {selectedUser.name}</DialogContentText>
                <DialogContentText>Matrícula: {selectedUser.registration}</DialogContentText>
              </div>
              <DialogContentText>Email: {selectedUser.email}</DialogContentText>
            </>
          )}
          <br></br>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4>Detalhes</h4>
            <hr style={{ flex: 1, marginLeft: '10px', border: 'none', borderTop: '1px solid #ccc' }} /> {/* Div horizontal */}
          </div>
          {selectedUser && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <DialogContentText>Data de criação: 04.10</DialogContentText>
                <DialogContentText>Última edição: 05.10</DialogContentText>
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}