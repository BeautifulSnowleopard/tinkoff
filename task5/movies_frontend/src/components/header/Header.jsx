import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export default function Header () 
{
  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'customColor.base_02', height: '4rem'}}>
      <Toolbar>
        <Link 
        to={'/'} 
        style={{ 
          flexGrow: 1,
          color: '#000', 
          fontSize: "24px", 
          textDecoration: "none", 
          fontStyle: "normal", 
          textShadow: "0px 4px 4px #00000040",
          }}>
          Админка фильмотеки
        </Link>
        <Button 
        variant="contained" 
        color="button" 
        style={{borderRadius: "0.5rem"}}>
          6407 Маршунина Мария
        </Button>
      </Toolbar>
    </AppBar>
  );
};
