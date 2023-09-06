import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ToggleButton from "../components/Toggle/ToggleButton";

function Home() {
	const [room, setRoom] = useState<number[]>([]);
	const items = ["그룹 만들기"];

	return (
		<>
			<Header />
			{room.length === 0 ? (
				<Group.Message>어느 그룹에 속해있지 않습니다.</Group.Message>
			) : (
				<Group.Wrapper></Group.Wrapper>
			)}
			<ToggleButton items={items} />
		</>
	);
}

export default Home;
const Group = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
	`,
	Message: styled.p`
		width: 100%;
		text-align: center;
		margin-top: 200px;
	`,
};
