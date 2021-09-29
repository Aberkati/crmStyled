import React from 'react';
import styled from 'styled-components';

const SideBarItem = styled.div`
	padding: 0 20px;
`;

const SideBarItemInner = styled.div`
	padding: 15px 25px;
	display: flex;
	align-items: center;
	font-weight: 600;
	transition: color 0.3s ease 0s;
	border-radius: ${(props) => (props.active ? 'var(--border-radius)' : 'none')};
	color: ${({ active }) => (active ? 'var(--txt-white)' : 'none')};
	background-image: ${({ active }) =>
		active
			? 'linear-gradient(to right, var(--main-color), var(--second-color))'
			: 'none'};

	i {
		margin-right: 10px;
		font-size: 1rem;
	}
	span {
		text-transform: capitalize;
	}

	&:hover {
		color: var(--main-color);
	}
`;

const SidebarItem = ({ title, icon, active }) => {
	const Active = active ? 'active' : '';
	return (
		<SideBarItem>
			<SideBarItemInner active={Active}>
				<i className={icon}></i>
				<span>{title}</span>
			</SideBarItemInner>
		</SideBarItem>
	);
};

export default SidebarItem;
