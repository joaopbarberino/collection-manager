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
		padding: 30px;
	}
`;

export { Container, Section };
