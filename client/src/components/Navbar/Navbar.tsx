//import { Link } from 'react-router-dom';
import { logoutUser } from '../../hooks/useAuth';
import { LogoutButton, Page } from './style';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface IMenuBurgerProps {
  page?: 'project' | 'resources' | 'home';
  status?: boolean;

}

const NavBar: React.FC<IMenuBurgerProps> = ({ page, status }) => {
  return (
    <>
      <Page>
        <Navbar bg="primary" expand="lg" variant='dark' className='Navb'>
          <Container fluid>

            <Navbar.Brand href='/' className='spaceImg' >
              <img
                alt=""
                src={require('../../assets/compass_with_p_white.png')}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="justify-content-end flex-grow-1 space"
                style={{ maxHeight: '300px' }}
                navbarScroll
              >
                <Navbar.Brand href="/categorias/3" className='subPage '>Mapas e Dados Agropecuários</Navbar.Brand>
                <Navbar.Brand href="#/categorias/1" className='subPage'>Mapas e dados Ambientais</Navbar.Brand>
                <Navbar.Brand href="/municipios" className='subPage'>Conheca os Municípios</Navbar.Brand>
                <Navbar.Brand href="/Saiba_mais" className='subPage'>Conheca o Projeto</Navbar.Brand>
                <Navbar.Brand href="/publicacoes" className='subPage'>Publicações</Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {status ? (
          <p></p>
        )
          : (
            <LogoutButton>
              <button type="button" onClick={logoutUser}>
                <li> Online </li>
              </button>
            </LogoutButton>
          )
        }
      </Page>
    </>
  );
};

export default NavBar;
