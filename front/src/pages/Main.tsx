import { Link } from "react-router-dom";
import styled from "styled-components";

function Main() {
	return (
		<Content>
			<Logo>Poker Face</Logo>
			<Login.Box>
				<Login.InputBox>
					<Login.Text>아이디</Login.Text>
					<Login.Input></Login.Input>
				</Login.InputBox>
				<Login.InputBox>
					<Login.Text>비밀번호</Login.Text>
					<Login.Input></Login.Input>
				</Login.InputBox>
				<Login.Button to="/home">로그인</Login.Button>
			</Login.Box>
			<Login.RegisterText>아직 회원이 아니신가요?</Login.RegisterText>
		</Content>
	);
}
export default Main;
const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Logo = styled.p`
	color: #000;
	font-family: Inter;
	font-size: 96px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
const Login = {
	Box: styled.div`
		width: 400px;
		height: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 36px;
		margin-top: 100px;
		margin-bottom: 20px;
	`,
	InputBox: styled.div`
		width: 350px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`,
	Text: styled.p`
		color: #000;
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	`,
	Input: styled.input`
		padding: 10px;
		background-color: #d9d9d9;
		border: none;
	`,
	Button: styled(Link)`
		width: 100%;
		height: 50px;
		background-color: #4489c5;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		cursor: pointer;
		text-decoration: none;
	`,
	RegisterText: styled.p`
		color: #000;
		font-family: Inter;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		cursor: pointer;
		width: 400px;
		text-align: right;
	`,
};
