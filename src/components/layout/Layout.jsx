import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import styled from 'styled-components'
import Routes from '../Routes'
import Sidebar from '../Sidebar/Sidebar'


const Layoute = styled.div`
color : var(--txt-color);
`

const LayoutContent = styled.div`
padding-left : var(--sidebar-width);
background-color : var(--second-bg);
min-height : 100vh 
`

const LayoutContentMain = styled.div`
padding : 30px
`

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <Layoute>
                    <Sidebar {...props} />
                    <LayoutContent>
                        <LayoutContentMain>
                            <Routes/>
                        </LayoutContentMain>
                    </LayoutContent>
                </Layoute>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
