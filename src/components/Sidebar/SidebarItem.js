import React from 'react';
import styled from 'styled-components';

const SideBarItem = styled.div``;

const SidebarItem = ({ item }) => {
	const active = item.active ? 'active' : '';
	return (
		<SideBarItem>
			<div className={`sidebar__item-inner ${active}`}>
				<i className={item.icon}></i>
				<span>{item.title}</span>
			</div>
		</SideBarItem>
	);
};

export default SidebarItem;
