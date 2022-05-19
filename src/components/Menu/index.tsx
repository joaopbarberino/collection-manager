import Link from 'next/link';
import React, { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import MenuContainer from './styles';
import { Button, Fade } from '@mui/material';

const Menu: React.FC = () => {
    // TODO controlar open pelo context pra não trocar de estado na troca de página
    const [open, setOpen] = useState(false);

    return (
        <MenuContainer open={open}>
            <Link href={'/'}>
                <div className='header menu-item'>
                    <MenuBookIcon className='icon' />

                    <Fade in={open}>
                        <h2>My Bookcase</h2>
                    </Fade>
                </div>
            </Link>

            <Button className='toggle-button' onClick={() => setOpen(!open)}>
                {open ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
            </Button>

            <Link href={'/collection'}>
                <div className='menu-item'>
                    <AddIcon className='icon' />

                    <Fade in={open}>
                        <h3>Insert</h3>
                    </Fade>
                </div>
            </Link>
        </MenuContainer>
    );
};

export default Menu;