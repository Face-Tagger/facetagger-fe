import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
	const userName = "아무개";
	return (
		<Content.Wrapper>
			<Content.Logo>Gachi</Content.Logo>
			<Content.UserInfo>
				<Content.UserWelcome>{userName}님 반갑습니다</Content.UserWelcome>
				<Content.Logout to="/">로그아웃</Content.Logout>
			</Content.UserInfo>
		</Content.Wrapper>
	);
}
export default Header;
const Content = {
	Wrapper: styled.div`
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 30px;
		padding-right: 30px;
		border-bottom: 2px solid black;
	`,
	Logo: styled.p`
		color: #000;
		font-family: Inter;
		font-size: 48px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	`,
	UserInfo: styled.div`
		display: flex;
		align-items: center;
		gap: 36px;
	`,
	UserWelcome: styled.p`
		color: #000;
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	`,
	Logout: styled(Link)`
		cursor: pointer;
		text-decoration: none;
		color: black;
	`,
};
