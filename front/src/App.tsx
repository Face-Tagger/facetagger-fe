import { styled } from 'styled-components';
import Main from './pages/Main';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Group from './pages/Group';
import Grouped from './pages/Grouped';
import GroupedImg from './pages/GroupedImg';
function App() {
	return (
		<Content>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/group/:groupNumber" element={<Group />} />
					<Route path="/grouped" element={<Grouped />} />
					<Route path="/groupedImg/:groupNumber" element={<GroupedImg />} />
				</Routes>
			</BrowserRouter>
		</Content>
	);
}

export default App;
const Content = styled.div`
	width: 100vw;
	height: 100vh;
`;
