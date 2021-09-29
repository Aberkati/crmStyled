import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import SidebarItem from './SidebarItem'

const Sidebare = styled.div`

`
const SidebarLogo = styled.div`

`

const Sidebar = () => {
    return (
        <Sidebare>
            <SidebarLogo>
                <img src={logo} alt="Gxp Logo"/>
            </SidebarLogo>
            {sidebar_items.map((item,index) => (
                <Link to={item.route} key={index}>
                    <SidebarItem item={item}></SidebarItem>
                </Link>
            ))}
        </Sidebare>
    )
}

export default Sidebar
