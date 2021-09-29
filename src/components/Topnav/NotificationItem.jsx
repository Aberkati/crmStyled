import styled from "styled-components"

const Item = styled.div`
display : flex;
align-items : center;
padding : 20px;
&:hover{
    background-color : var(--second-bg);
}
 i{
     margin-right : 20px;
     font-size : 1.5rem;
 }
`

const NotificationItem = ({item,index}) => {
    return (
        <Item key={index}>
            <i className={item.icon}></i>
            <span>{ item.content}</span>
        </Item>
    )
}

export default NotificationItem
