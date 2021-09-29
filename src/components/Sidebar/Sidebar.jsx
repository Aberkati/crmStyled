import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import SidebarItem from './SidebarItem'

const Sidebare = styled.div`
min-width : var(--sidebar-width);
height : 100vh;
position : fixed;
left : 0;
top:0;
background-color : var(--main-bg);
box-shadow : var(--box-shadow);

`
const SidebarLogo = styled.div`
height : 150px;
display : flex;
align-items : center;
justify-content : center;

img {
    height : 45px;
}
`

const Sidebar = (props) => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <Sidebare>
            <SidebarLogo>
                <img src={logo} alt="Gxp Logo"/>
            </SidebarLogo>
            {sidebar_items.map((item,index) => (
                <Link to={item.route} key={index}>
                    <SidebarItem
                        title={item.display_name}
                        icon={item.icon}
                        active={index === activeItem}
                        ></SidebarItem>
                </Link>
            ))}
        </Sidebare>
    )
}

export default Sidebar
