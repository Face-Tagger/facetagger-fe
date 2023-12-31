import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import shortid from 'https://cdn.skypack.dev/shortid@2.2.16';
import { useNavigate } from 'react-router';

interface FileData {
	id: string;
	filename: string;
	filetype: string;
	fileimage: string;
	datetime: string;
	filesize: string;
}

function Group() {
	const [room, setRoom] = useState<number[]>([]);
	const [isAddClick, setIsAddClick] = useState<boolean>(false);
	const [selectedfile, SetSelectedFile] = useState<FileData[]>([]);
	const [Files, SetFiles] = useState<FileData[]>([]);
	const navigate = useNavigate();

	const filesizes = (bytes: number, decimals = 2): string => {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	};

	const InputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const files = Array.from(e.target.files);
		const images: File[] = [];

		files.forEach((file) => {
			images.push(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				SetSelectedFile((preValue) => [
					...preValue,
					{
						id: shortid.generate(),
						filename: file.name,
						filetype: file.type,
						fileimage: reader.result as string,
						datetime: file.lastModified.toLocaleString('en-IN'),
						filesize: filesizes(file.size),
					},
				]);
			};
			reader.readAsDataURL(file);
		});
	};

	const DeleteSelectFile = (id: string): void => {
		if (window.confirm('삭제하시겠습니까?')) {
			const result = selectedfile.filter((data) => data.id !== id);
			SetSelectedFile(result);
		}
	};

	const FileUploadSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (selectedfile.length > 0) {
			SetFiles((preValue) => [...preValue, ...selectedfile]);
			SetSelectedFile([]);
			setIsAddClick(false);
		} else {
			alert('Please select file');
		}
	};

	const DeleteFile = (id: string): void => {
		if (window.confirm('정말 삭제하시겠습니까?')) {
			const result = Files.filter((data) => data.id !== id);
			SetFiles(result);
		}
	};
	const handleClassify = () => {
		navigate('/grouped');
	};
	return (
		<>
			<Header />
			{Files.length > 0 ? (
				<>
					<Photo.Wrapper>
						{Files.map((data, index) => {
							const { id, filename, filetype, fileimage, datetime, filesize } =
								data;
							return (
								<FileAtcBox key={index}>
									{filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
										<FileImage>
											{' '}
											<FileImageImage src={fileimage} alt="" />
										</FileImage>
									) : (
										<FileImage />
									)}
									<FileDetail>
										<>
											{filename.slice(-7)}
											<br />
										</>
										<>
											<TextSpan>Size : {filesize}</TextSpan>
										</>
										<FileActions>
											<FileActionBtn onClick={() => DeleteFile(id)}>
												Delete
											</FileActionBtn>
										</FileActions>
									</FileDetail>
								</FileAtcBox>
							);
						})}
					</Photo.Wrapper>
					<SubmitButton>
						<SubmitButtonP onClick={() => handleClassify()}>
							분류하기
						</SubmitButtonP>
					</SubmitButton>
				</>
			) : (
				<Photo.Message>사진이 없습니다.</Photo.Message>
			)}
			<Photo.Add onClick={() => setIsAddClick(!isAddClick)}>+</Photo.Add>
			{isAddClick && (
				<Photo.AddModal onClick={() => setIsAddClick(false)}>
					<Photo.AddModalContent
						onClick={(e: React.MouseEvent<HTMLDivElement>) =>
							e.stopPropagation()
						}
					>
						<Card>
							<CardBody>
								<Form onSubmit={FileUploadSubmit}>
									<FileUpload>
										<FileUploadBox>
											<FileUploadInput
												type="file"
												id="fileupload"
												className="file-upload-input"
												onChange={InputChange}
												multiple
											/>
											<Span>
												드래그 앤 드랍하거나{' '}
												<FileLink>파일을 골라주세요</FileLink>
											</Span>
										</FileUploadBox>
									</FileUpload>
									<>
										{selectedfile.map((data, index) => {
											const {
												id,
												filename,
												filetype,
												fileimage,
												datetime,
												filesize,
											} = data;
											return (
												<FileAtcBox key={id}>
													{filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
														<FileImage>
															{' '}
															<FileImageImage src={fileimage} alt="" />
														</FileImage>
													) : (
														<></>
													)}
													<FileDetail>
														<>
															{filename.slice(-7)}
															<br />
														</>
														<>
															<TextSpan>Size : {filesize}</TextSpan>
														</>
														<FileActions>
															<FileActionBtn
																type="button"
																onClick={() => DeleteSelectFile(id)}
															>
																Delete
															</FileActionBtn>
														</FileActions>
													</FileDetail>
												</FileAtcBox>
											);
										})}
									</>
									<>
										<FormSubmit type="submit">업로드</FormSubmit>
									</>
								</Form>
							</CardBody>
						</Card>
					</Photo.AddModalContent>
				</Photo.AddModal>
			)}
		</>
	);
}

export default Group;
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
	`,
	AddModalContent: styled.div`
		width: 80%;
		height: 80%;
		background-color: white;
	`,
};

const FileUpload = styled.div`
	margin-bottom: 20px;
`;
const FileUploadBox = styled.div`
	border: 1px dashed #b6bed1;
	background-color: #f0f2f7;
	border-radius: 4px;
	min-height: 150px;
	position: relative;
	overflow: hidden;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #8194aa;
	font-weight: 400;
	font-size: 15px;
`;
const FileUploadInput = styled.input`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	cursor: pointer;
`;
const FileLink = styled.span`
	color: #475f7b;
	text-decoration: underline;
	margin-left: 3px;
`;

const FileAtcBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	width: 260px;
`;

const FileImage = styled.div`
	/* width: 130px;
    min-width: 130px;
    height: 85px;
    min-height: 85px; */
	width: 130px;
	height: 85px;
	background-size: cover;
	border-radius: 5px;
	margin-right: 15px;
	background-color: #eaecf1;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	color: #475f7b;
	padding: 3px;
`;
const FileImageImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	border-radius: 4px;
`;
const FileDetail = styled.div`
	flex: 1;
	width: calc(100% - 210px);
`;
const TextSpan = styled.span`
	font-size: 12px;
	color: #8194aa;
	line-height: initial;
	font-weight: 400;
	margin-bottom: 8px;
`;
const FileActions = styled.div`
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	align-items: center;
`;
const FileActionBtn = styled.button`
	font-size: 12px;
	color: #8194aa;
	line-height: 20px;
	font-weight: 400;
	margin-bottom: 0;
	padding: 0;
	background-color: transparent;
	border: none;
	text-decoration: underline;
	margin-right: 15px;
	cursor: pointer;
`;
const FormSubmit = styled.button`
	border-color: #5a8dee !important;
	background-color: #5a8dee !important;
	color: #fff;
	padding: 13px 30px;
	font-size: 15px;
	letter-spacing: 0.3px;
	font-weight: 400;
`;
const Form = styled.form``;
const A = styled.a``;
const Card = styled.div`
	box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
	border-radius: 6px;
	overflow: hidden;
	margin-bottom: 30px;
	background-color: #fff;
	border: none;
`;
const CardBody = styled.div`
	height: 550px;
	overflow: scroll;
	padding: 30px;
`;

const Span = styled.span``;

const SubmitButton = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SubmitButtonP = styled.div`
	text-align: center;
	width: 100px;
	color: white;
	background-color: #007bff;
	padding: 20px;
	border-radius: 20px;
	cursor: pointer;
`;
