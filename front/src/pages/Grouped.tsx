import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import spinner from '../assets/spinner.svg';
import { useNavigate } from 'react-router';
function Grouped() {
	const [room, setRoom] = useState<number[]>([]);
	const [isAddClick, setIsAddClick] = useState<boolean>(true);
	const navigate = useNavigate();
	useEffect(() => {
		if (isAddClick) {
			const timer = setTimeout(() => {
				setIsAddClick(false);
			}, 2000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, []);
	const handleClickFolder1 = () => {
		navigate('/GroupedImg/1');
	};
	const handleClickFolder2 = () => {
		navigate('/GroupedImg/2');
	};
	return (
		<>
			<Header />
			{isAddClick ? (
				<Photo.AddModal onClick={() => setIsAddClick(false)}>
					<img src={spinner} />
					분류 중입니다.
				</Photo.AddModal>
			) : (
				<Content>
					<BoxWrapper>
						<FolderWrapper1 onClick={() => handleClickFolder1()}>
							<FolderBox1></FolderBox1>
							<FolderName>분류1</FolderName>
						</FolderWrapper1>
						<FolderWrapper1 onClick={() => handleClickFolder2()}>
							<FolderBox2></FolderBox2>
							<FolderName>분류2</FolderName>
						</FolderWrapper1>
						<FolderWrapper1>
							<FolderBox3></FolderBox3>
							<FolderName>분류3</FolderName>
						</FolderWrapper1>
					</BoxWrapper>
				</Content>
			)}
		</>
	);
}

export default Grouped;
const Content = styled.div`
	padding: 20px;
`;
const Photo = {
	Wrapper: styled.div`
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	`,
	Message: styled.p`
		width: 100%;
		text-align: center;
		margin-top: 200px;
	`,
	Add: styled.button`
		cursor: pointer;
		position: absolute;
		bottom: 60px;
		right: 60px;
		z-index: 999;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 50%;
		width: 60px;
		height: 60px;
		font-size: 36px;
	`,
	AddModal: styled.div`
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	`,
	AddModalContent: styled.div`
		width: 80%;
		height: 80%;
		background-color: white;
	`,
};

const BoxWrapper = styled.div`
	display: flex;
	gap: 36px;
`;
const FolderBox1 = styled.div`
	width: 100px;
	height: 100px;
	box-shadow: 5px 5px 5px 5px gray;
	background-size: contain;
	background-image: url('/sung.png');
	cursor: pointer;
`;

const FolderBox2 = styled.div`
	width: 100px;
	height: 100px;
	box-shadow: 5px 5px 5px 5px gray;
	background-size: contain;
	background-image: url('/jin.png');
	cursor: pointer;
`;
const FolderBox3 = styled.div`
	width: 100px;
	height: 100px;
	box-shadow: 5px 5px 5px 5px gray;
	background-size: contain;
	background-image: url('/jong.png');
	cursor: pointer;
`;
const FolderName = styled.p``;
const FolderWrapper1 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
`;
