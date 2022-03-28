import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { mobile } from "../responsive";
import { all, roomStatus } from "../data";

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 10px;
`;

const Display = styled.div`
    flex: 3;
    margin: 25px;
    border: 0.05px solid black;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Info = styled.div`
    flex: 3;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 5;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    margin: 10px;
    height: 50px;
    width: 500px;
    text-align: center;
    position: relative;
    border: 0.5px solid black;
    border-radius: 5px;
    &:hover ${Info}{
    opacity: 0.6;
    background-position: right center;
        color: #fff;
        text-decoration: none;
        box-shadow: 0 0px 20px rgba(220, 80, 57, 1);
    }
`;

const DoorOutline = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`

const Status = styled.div`
    font-size: 22px;
    letter-spacing: 0.5px;
    font-weight: bold;
`

const RoomNumber = styled.div`
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: bold;
`

const HistoryBox = styled.div`
    margin: 10px;
    height: 40px;
    width: 200px;
    text-align: center;
    font-size: 25px;
    letter-spacing: 0.5px;
    position: relative;
    border: 0.3px solid black;
    border-radius: 3px;
    background-color: #69BCC8;
    &:hover ${Info}{
        opacity: 0.6;
        background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 20px rgba(220, 80, 57, 1);
  }
`

const TenantBox = styled.div`
    margin: 10px;
    height: 600px;
    width: 800px;
    text-align: left;
    border: 0.5px solid black;
    border-radius: 5px;
    &:hover ${Info}{
    opacity: 0.6;
    background-position: right center;
        color: #fff;
        text-decoration: none;
        box-shadow: 0 0px 20px rgba(220, 80, 57, 1);
    }
`

const TenantInfo = () => {
    const { id } = useParams();
    console.log(all[id - 1]);

    if (roomStatus[id - 1]["Status"] === "In room")
        return (
            <div className = "tenant-info">
                <Navbar/>
                <Display>
                    <Left>
                        <Container> 
                            <DoorOutline style={{"background-image": "linear-gradient(to right,#44C16F 0%,#50D665 51%,#4AD4CC 100%)"}}>
                                <Info/>
                                <RoomNumber>Room number: {id}</RoomNumber>
                                <Status>
                                    Current status: {roomStatus[id - 1]["Status"]}
                                </Status>
                            </DoorOutline>
                        </Container>
                        <HistoryBox> 
                            <Info/>
                            History
                        </HistoryBox>
                    </Left>
                        <TenantBox>
                            abcd
                        </TenantBox>
                    <Right>
                        abc
                    </Right>
                </Display>
            </div> 
        );
    else
    return (
        <div className = "tenant-info">
            <Navbar/>
            <Display>
                <Left>
                    <Container> 
                        <DoorOutline style={{"background-image": "linear-gradient(to right,#FB9393 0%,#FBB993 51%,#FD4646 100%)"}}>
                            <Info/>
                            <RoomNumber>Room number: {id}</RoomNumber>
                            <Status>
                                Current status: {roomStatus[id - 1]["Status"]}
                            </Status>
                        </DoorOutline>
                    </Container>
                    <HistoryBox> 
                        <Info/>
                        History
                    </HistoryBox>
                </Left>
                    <TenantBox>
                        abcd
                    </TenantBox>
                <Right>
                    abc
                </Right>
            </Display>
        </div> 
    );
};

export default TenantInfo;