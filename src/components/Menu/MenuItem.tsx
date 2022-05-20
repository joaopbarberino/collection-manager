import Link from 'next/link';
import React, { useContext } from 'react';
import { Collapse, Fade } from '@mui/material';
import AppContext from '../../services/AppContext';

interface IMenuItemProps {
    to: string;
    icon: React.ReactElement;
    children: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ to, icon, children }) => {
    const { isMobile, menuOpen, setMenuOpen } = useContext(AppContext);

    return (
        <Collapse in={!isMobile || (isMobile && menuOpen)}>
            <Link href={to}>
                <div className='menu-item' onClick={() => isMobile ? setMenuOpen(false) : null}>
                    {icon}

                    <Fade in={menuOpen}>
                        <h3>{children}</h3>
                    </Fade>
                </div>
            </Link>
        </Collapse>
    )
};

export default MenuItem;