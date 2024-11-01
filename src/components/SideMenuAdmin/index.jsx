import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin(){
  const { logout } = useUser()
  console.log(logout)
  return (
    <Container>
        <hr></hr>
        {listLinks.map(item => (
        <ItemContainer key={item.id} isActive>
            <item.icon className="icon" />
            <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
    ))}
    <hr></hr>
    <ItemContainer style={{position: 'absolute', bottom: '30px'}}>
      <LogoutIcon style={{color: '#ffffff'}}/>
      <ListLink to="/login" onClick={logout}>
        Sair
      </ListLink>
      </ItemContainer> 
    </Container>
  )
}

