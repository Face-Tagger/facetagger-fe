import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ToggleButton = ({ items }: { items: string[] }) => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const toggleList = () => {
		setIsOpen(!isOpen);
	};

	const handleMenuClick = (item: string) => {
		if (item === "그룹 만들기") {
			navigate("/group/1");
		}
	};

	return (
		<Container>
			<Button onClick={toggleList} $isOpen={isOpen}>
				+
			</Button>
			<ListContainer $isOpen={isOpen}>
				<List>
					{items.map((item, index) => (
						<ListItem key={index} onClick={handleMenuClick(item)}>
							{item}
						</ListItem>
					))}
				</List>
			</ListContainer>
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	bottom: 60px;
	right: 60px;
`;

const Button = styled.button<{ $isOpen: boolean }>`
	cursor: pointer;
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 999;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	font-size: 36px;
	transition: transform 0.3s ease-in-out;
	transform-origin: center center;
	transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0deg)")};
`;

const ListContainer = styled.div<{ $isOpen: boolean }>`
	position: absolute;
	bottom: 75px;
	right: -34px;
	z-index: 998;
	transform: translateX(-50%);
	transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	opacity: ${(props) => (props.$isOpen ? 1 : 0)};
	transform: ${(props) =>
		props.$isOpen ? "translateY(0%)" : "translateY(100%)"};
`;

const List = styled.ul`
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 5px;
	list-style: none;
	padding: 10px;
	width: 200px;
`;

const ListItem = styled.li`
	margin: 5px 0;
	cursor: pointer;
`;

export default ToggleButton;
