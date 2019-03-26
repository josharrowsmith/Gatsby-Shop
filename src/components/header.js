import React, {useContext} from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Container from './container'
import Nav from './nav';
import Hamburger from './hamburger'



const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
`;

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    color: white;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
`;

const HeaderName = styled.h1`
    color: black;
    text-decoration: underline;
    text-underline-position: under;
    text-transform: uppercase;
    font-size: 2rem;
    @media only screen and (max-width: 600px) {
        font-size: 1.4rem;
  }
`;

const HeaderHamburger = styled(Hamburger)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }    
`;


export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            hamburgerActive: false,
        }
        
    }

    onClickHamburger() {
        this.setState({
            hamburgerActive: !this.state.hamburgerActive
        });
    }

    render() {
        const { pages, categories, primary, currentPage } = this.props
        
        return (
            <Wrapper>
            <HeaderContainer>
                    <Left>
                    <Link to={`/`}>
                      <HeaderName primary={primary || this.state.hamburgerActive}>Shop</HeaderName>
                    </Link>
                    </Left> 
                    <Right>
                    <Nav 
                        primary={primary}
                        pages={pages} 
                        categories={categories}
                        currentPage={currentPage}
                        active={this.state.hamburgerActive}
                    />
                 
                    <HeaderHamburger onClick={() => this.onClickHamburger()} active={this.state.hamburgerActive} />    
                    </Right>
            </HeaderContainer>
            </Wrapper>
        )
    }
}
