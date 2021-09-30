import {useState} from 'react'
import styled from 'styled-components'

const DropDowne = styled.div`
position : relative;
z-index : 99;
`
const DropDownContent = styled.div`
position : absolute;
top : calc(100% + 5px);
right : 0;
width : max-content;
max-width : 400px;
background-color : var(--main-bg);
box-shadow : var(--box-shadow);
border-radius : var(--border-radius);
overflow : hidden;
transform-origin : top right;


transform : ${(props) => props.active ? "scale(1)" : " scale(0)"};
transition : ${(props) => props.active ? "transform 0.5s var(--transition-subic)" : " transform 0.3s ease 0s"};
`
const DropDownFooter = styled.div`
padding : 20px;
text-align : center;
`
const ToggleDropDown = styled.button`
border : 0;
outline : 0;
background-color : transparent;
position : relative;

i {
    font-size : 2.5rem;
    color : var(--txt-color);
}
`
const BadgeToggleDropDown = styled.span`
display : flex;
align-items : center;
justify-content: center;
position : absolute;
top : -12px;
right : -10px;
height : 25px;
width : 25px;
border-radius : 50%;
background-color : var(--main-color);
color : var(--txt-white);
font-size : 0.8rem;
`


const Dropdown = (props) => {
console.log(props);
   
    const [open,setOpen] = useState(false)
    return (
        <DropDowne onClick={() => setOpen(!open)}>
            <ToggleDropDown >
              {props.icon ? <i className={props.icon}></i> : ''}
                {props.badge ? <BadgeToggleDropDown>{ props.badge}</BadgeToggleDropDown> : ''}
               
            </ToggleDropDown>
            <DropDownContent  active={open} >
                {props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''}
                {props.renderFooter ? <DropDownFooter>{ props.renderFooter()}</DropDownFooter> : ''}

            </DropDownContent>
        </DropDowne>
    )
}

export default Dropdown
