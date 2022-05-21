import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: all .2s;
    height: 100%;
    display: grid;

    .MuiSkeleton-root {
        transform: scale(1);
    }

    .image {
        .MuiSkeleton-root {
            border-start-start-radius: 10px;
            border-start-end-radius: 10px;
            width: 100%;
            height: 340px;
        }
    }

    .info {
        text-align: center;
        font-weight: 100;
        color: white;
        display: grid;

        .title {
            background: initial;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            padding: 20px 15px;
            
            h3 {
                margin: 0;
                font-weight: 300;
                font-size: 1.3rem;
            }

            .MuiSkeleton-root {
                margin: auto;
            }
        }

        .counters {
            padding: 15px;
            background-color: rgba(0, 0, 0, 0.3);
            border-end-start-radius: 10px;
            border-end-end-radius: 10px;
            
            .MuiSkeleton-root {
                margin: 8px;
            }
        }
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export default Container;