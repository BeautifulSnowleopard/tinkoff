import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export default function Header () 
{
  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'customColor.base_02' }}>
      <Toolbar>
        <Link to={'/'} style={{ flexGrow: 1, color: '#000', textDecoration: "none", lineHeight: "normal", fontSize: "24px", fontStyle: "normal", fontWeight: "500", fontFamily: "Inter", textShadow: "0px 4px 4px #00000040"}}>
          Админка фильмотеки
        </Link>
        <Button variant="contained" color="button">
          6407 Маршунина Мария
        </Button>
      </Toolbar>
    </AppBar>
  );
};
