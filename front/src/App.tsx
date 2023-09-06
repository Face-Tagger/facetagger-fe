import { styled } from "styled-components";
import Main from "./pages/Main";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
	return (
		<Content>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/home" element={<Home />}></Route>
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
