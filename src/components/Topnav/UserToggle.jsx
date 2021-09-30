import styled from "styled-components"

const RightUser = styled.div`
display : flex;
align-items : center;
`
const Image = styled.div`
width : 40px;
height : 40px;
border-radius : 50%;
overflow : hidden;
margin-right : 10px;

img {
    width : 100%;
}
`
const Name = styled.div`
font-size : 1rem;
font-weight : 600;
`

const UserToggle = ({ user }) => {
   console.log("eee");
    return (
        <RightUser>
            <Image>
                <img src={user.image} alt="User"/>
            </Image>
            <Name>
                {user.display_name}
            </Name>
        </RightUser>
    )
}

export default UserToggle
