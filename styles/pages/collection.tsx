import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
	height: 100%;
    width: 100%;

	.amazon-link {
		padding: 20px;
		margin: 10px;
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
		padding-right: 40px;
		margin: auto;

		.message {
			padding: 30px;
			background-color: rgba(255, 255, 255, 0.4);
			text-align: center;
			width: 100%;
			border-radius: 10px;
			font-size: 1.3rem;

			.error {
				color: #BA000D;
			}
		}
	}

	.progress-container {
		height: 100%;
		min-height: 350px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 10px;

		.MuiCircularProgress-root {
		    color: rgba(255, 255, 255, 0.6);	
		}
	}
`;

export { Container, Section };
