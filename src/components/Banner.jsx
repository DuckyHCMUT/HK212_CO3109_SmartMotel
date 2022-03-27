import { Badge } from "@material-ui/core";
import { PersonOutlineOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100%;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    color: black;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Banner = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link style={{textDecoration: 'none'} }
                        to="/">
                        <Logo>EOF Smart Motel</Logo>
                    </Link>
                </Left>
                <Right>
                    <MenuItem>Notification</MenuItem>
                    <MenuItem>About Us</MenuItem>

                    <Link to="/user/cart"
                        style={{ color: "inherit", textDecoration: "inherit" }}>
                        <MenuItem>
                            <Badge badgeContent={0} color="primary">
                                <PersonOutlineOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Banner;