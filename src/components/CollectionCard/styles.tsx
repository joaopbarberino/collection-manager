import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    transition: all .2s;
    height: 100%;
    display: grid;
    cursor: pointer;

    .image {
        div {
            img {
                border-start-start-radius: 10px;
                border-start-end-radius: 10px;
                width: 100%;
                height: 340px;
                object-fit: cover;
                object-position: 50% 0;
            }
        }
    }

    .info {
        text-align: center;
        font-weight: 100;
        color: white;
        display: grid;
        
        .card-title {
            background: initial;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            padding: 20px 15px;
            
            h3 {
                margin: 0;
                font-weight: 500;
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

                &.done {
				    color: #00e200;
                }
            }
        }
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export default Container;