import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Notification = styled.div`
display : flex;
align-items : center;
padding : 20px;
&:hover{
    background-color : var(--second-bg);
}

span {
    margin-left: 10px;
}
 
`
const Icon = styled.i`

`


const UserMenu = ({ item, index }) => {
    return (
        <Link to="/" key={index}>
            <Notification>
                <Icon className={item.icon}>  
                </Icon>
                 <span>{ item.content}</span>
            </Notification>
        </Link>
    )
}

export default UserMenu
