import React from 'react'
import styled from 'styled-components'
import Dropdown from '../DropDown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import NotificationItem from './NotificationItem'
import { Link } from 'react-router-dom'


const TopNavBar = styled.div`
padding : 30px;
display : flex;
align-items : center;
justify-content : space-between;
height : var(--topnav-height);
`
const TopNavBarSearch = styled.div`
positon : relative;
height : 50px;
background-color : var(--main-bg);
display : flex;
align-items : center;
box-shadow : var(--box-shadow);
border-radius : var(--border-radius);
overflow : hidden;
input {
    height : 100%;
    width : 100%;
    padding : 10px 60px 10px 20px;
    font-size : 1rem;
    border-radius : var(--border-radius);
    color : var(--txt-color);
    backfround-color : var(--main-bg);
}
i {
    font-size : 1.5rem;
    // position : absolute;
    right : 20px;
}
`
const Right = styled.div`
display : flex;
align-items : center;
`
const RightItem = styled.div`
margin-left : 30px;
`

const TopNav = () => {
    return (
        <TopNavBar>
            <TopNavBarSearch>
                <input type="text" placeholder="Search Here" />
                <i className="bx bx-search"></i>
            </TopNavBarSearch>
            <Right>
                <RightItem> <Dropdown  icon="bx bx-user"/></RightItem>
                <RightItem> <Dropdown
                    icon="bx bx-bell"
                    badge="12"
                    contentData={notifications}
                    renderItems={(item, index) => <NotificationItem item={item} index={index} />}
                    renderFooter = {() => <Link to="/">View All</Link>}
                /> </RightItem>
                <RightItem> <Dropdown/></RightItem>
            </Right>
        </TopNavBar>
    )
}

export default TopNav
