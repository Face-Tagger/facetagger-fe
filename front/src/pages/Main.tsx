import styled from 'styled-components';

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
				<Login.Button>로그인</Login.Button>
				<Login.RegisterText>아직 회원이 아니신가요?</Login.RegisterText>
			</Login.Box>
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
		height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 24px;
	`,
	InputBox: styled.div`
		width: 300px;
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
	`,
	Button: styled.div`
		width: 300px;
		height: 30px;
		background-color: aliceblue;
	`,
	RegisterText: styled.p`
		color: #000;
		font-family: Inter;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	`,
};
