import styled from "styled-components"
import statusCard from '../assets/JsonData/status-card-data.json'
import StatusCard from "../components/StatusCard/StatusCard"

const Container = styled.div`

`
const Title = styled.h2`
margin-bottom: 40px;
    text-transform: capitalize;
`
const Wrapper = styled.div`
display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`
const Left = styled.div`
padding: 0 15px;
 width: 50%;
`


const Dashboard = () => {
    return (
        <Container>
            <Title>Dashboard</Title>
            <Wrapper>
                <Left>
                    <Wrapper>
                        {statusCard.map((item, index) => (
                            <Left key={index}>
                                <StatusCard
                                icon={item.icon}
                                count={item.count}
                                title={item.title}
                                />
                        </Left>
                        )) }
                    </Wrapper>
                </Left>
            </Wrapper>
        </Container>
    )
}

export default Dashboard
