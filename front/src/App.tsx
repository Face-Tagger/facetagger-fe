import { styled } from 'styled-components';
import Main from './pages/Main';

function App() {
	return (
		<Content>
			<Main />
		</Content>
	);
}

export default App;
const Content = styled.div`
	width: 100vw;
	height: 100vh;
`;
