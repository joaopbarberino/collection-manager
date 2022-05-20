import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
	height: 100%;
    width: 100%;
	padding: 20px;

	.info {
		max-width: 900px;
		width: 100%;
		padding: 20px;
		margin: 20px auto;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.4);
		text-align: center;
		font-size: 1.1rem;
		letter-spacing: 0.2px;
		color: #000000;
		
		a {
			color: rgba(41, 144, 233);
			display: flex;
			align-items: center;
			justify-content: center;
			
			svg {
				margin-right: 6px;
			}
			
			&:hover {
				text-decoration: underline;
			}
		}

		ul {
			margin: 40px auto;
			max-width: 600px;
			
			li {
				text-align: left;
				margin-bottom: 10px;
			}
		}
	}
`;

const Section = styled.div`
	height: 100%;
	&:not(:last-child) {
		margin-bottom: 60px;
	}

	.title {
		padding-left: 20px;
		background: rgba(0, 0, 0, 0.3);

		h2 {
			font-weight: 400;
			color: white;
		}
	} 

	.cards-container {
		padding: 30px;
	}
`;

export { Container, Section };
