import styled from 'styled-components';

interface IMenuContainerProps {
    open: boolean;
}

const MenuContainer = styled.div<IMenuContainerProps>`
    width: ${props => props.open ? '240px' : '80px'};
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    background-image: linear-gradient(rgb(41, 144, 233), rgb(0, 38, 89));
    box-shadow: -12px 0px 5px 15px #0000008c;
    transition: all .2s;

    .header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        position: relative;

        h2 {
            font-size: 1.4rem;
            color: white;
        }    

        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
   
    }
    
    .MuiCollapse-root {
        width: 100%;
    }

    .toggle-button {
        min-width: unset;
        width: 30px;
        height: 30px;
        padding-right: ${props => props.open ? '10px' : '6px'};
        border-radius: 50%;
        color: white;
        background-color: rgb(0, 38, 89);
        position: absolute;
        right: -16px;
        top: 109px;

        svg {
            font-size: 16px;
        }
    }
    
    .menu-item {
        color: rgba(0, 0, 0, 0.4);
        width: 100%;
        display: flex;
        align-items: center;
        padding: 15px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 15px;
        transition: all .2s;

        h3 {
            font-size: 1.2rem;
            letter-spacing: 1px;
            font-weight: 400;
            color: white;
        }

        svg {
            width: 50px;
            height: 50px;
            margin-right: 25px;
        }

        &:hover:not(.header) {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            margin: 15px 0; 
        }
    }

    @media (max-width: 768px) {
        height: ${props => props.open ? '100%' : '96px'};
        width: 100%;
        min-height: unset;
        background-image: none;
        background-color: rgb(41, 144, 233);
        box-shadow: none;

        .toggle-button {
            right: unset;
            top: 80px;
            transform: rotate(90deg);
        }

        .menu-item {
            justify-content: center;
        }
    }
`;

export default MenuContainer;