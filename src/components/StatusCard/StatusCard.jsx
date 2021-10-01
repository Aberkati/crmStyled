import styled from "styled-components"

const Card = styled.div`
padding : 30px;
display : flex;
align-items: center;
background-color : var(--main-bg);
box-shadow : var(--box-shadow);
border-radius : var(--border-radius);
position : relative;
overflow : hidden;
z-index : 1;
transition : color .5s ease 0s;
margin-bottom : 30px;
`
const Icon = styled.div`
width : 30%;
height : 100%;
font-size : 3rem;
display : flex;
align-items : center;
justify-content : center;
z-index: 100000;
`
const Info = styled.div`
flex-grow : 1;
text-align : center;
z-index : 1;
text-transform : capitalize;

h4 {
    font-size : 2.5rem;
    margin-bottom : 10px;
}

&:before {
    content : "";
    width: 100%;
    padding-top : 100%;
    border-radius : 50%;
    background-image : linear-gradient(
        to top right,
        var(--main-color),
        var(--second-color)

    );
    position : absolute;
    left : -50%;
    top : 0;
    transform : scale(0);
    transition : transform 1s ease 0s;
}
&:hover {
    color : white;
}

&:hover&:before {
    transform : scale(3);
     color : white;

}

`
const StatusCard = props => {
    return (
        <Card>
            <Icon>
                <i className={props.icon}></i>
            </Icon>
            <Info>
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </Info>
        </Card>
    )
}

export default StatusCard
