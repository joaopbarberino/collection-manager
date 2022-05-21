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
		display: flex;
		min-height: 70px;
		align-items: center;
		word-break: break-word;

		h2 {
			font-weight: 500;
			color: white;	
		}
		
		.collection-status {
			color: white;	
			margin-left: 20px;
			display: flex;

			.done {
				color: #00e200;
			}

			svg {
				margin-right: 10px;
			}

			p {
				margin-right: 15px;
				display: flex;
				align-items: center;
			}
		}

		@media (max-width: 768px) {
			justify-content: center;
			padding: 20px;

			h2, p {
				text-align: center;
			}
		}

		@media (max-width: 460px) {
			flex-direction: column;
			height: auto;
		}

	} 

	.message {
		margin: 40px 40px 5px;
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

	.cards-container {
		padding: 0 40px 40px 0;
		margin: auto;

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
