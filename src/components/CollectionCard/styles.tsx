import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    margin: 15px;
    transition: all .2s;

    .image {
        img {
            border-start-start-radius: 10px;
            border-start-end-radius: 10px;
            width: 100%;
            height: 340px;
            object-fit: cover;
            object-position: 50% 0;
        }
    }

    .info {
        text-align: center;
        font-weight: 100;
        color: white;
        
        .title {
            background: initial;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            padding: 20px 15px;
            
            h3 {
                margin: 0;
                font-weight: 300;
                font-size: 1.3rem;
            }
        }

        .counters {
            padding: 15px;
            background-color: rgba(0, 0, 0, 0.3);
            border-end-start-radius: 10px;
            border-end-end-radius: 10px;

            h5 {
                font-weight: 300;
                font-style: italic;
                margin: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            svg {
                font-size: 1.18rem;
                margin-right: 5px;
            }
        }
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export default Container;