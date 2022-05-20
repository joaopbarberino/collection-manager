import Link from 'next/link';
import React, { useContext } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import { Button, Fade } from '@mui/material';
import MenuContainer from './styles';
import AppContext from '../../services/AppContext';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
    const { isMobile, menuOpen, setMenuOpen } = useContext(AppContext);

    return (
        <MenuContainer open={menuOpen}>
            <Link href={'/'}>
                <div className='header menu-item' onClick={() => isMobile ? setMenuOpen(false) : null}>
                    <MenuBookIcon className='icon' />

                    <Fade in={menuOpen || isMobile}>
                        <h2>My Bookcase</h2>
                    </Fade>
                </div>
            </Link>

            <Button className='toggle-button' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
            </Button>

            <MenuItem to='/collection' icon={<AddIcon />} >Coleção</MenuItem>


        </MenuContainer>
    );
};

export default Menu;