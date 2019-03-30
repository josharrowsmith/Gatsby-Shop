import React, {useContext} from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import StoreContext from '../context/StoreContext'
import {FaShoppingBasket} from 'react-icons/fa'


const Bubble = styled.p`
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 0 5px;
    font-size: 1rem;
    float: right;
    margin: -10px;
    z-index: 999;
`

const Wrapper = styled.div`

  &.active {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.3s;
    transform: rotate(45deg);

    .middle {
        width: 0px;       
    }

    .top,
    .bottom {
        transition-delay: 0.2s;
    }

    .top {
        transform: translateY(8px);
    }

    .bottom {
        transform: translateY(-8px) rotate(90deg);
    }
  }
`;

const Line = styled.span`
  width: 35px;
  height: 2px;
  background-color: black;
  display: block;
  margin: 6px auto;
  transition: all 0.3s ease-in-out;
`;

const TopLine = styled(Line)``

const MiddleLine = styled(Line)`
    transition-delay: 0.3s;
`
const BottomLine = styled(Line)``

const Cart = () => {
	const context = useContext(StoreContext)

	const { lineItems } = context.checkout

	return(
        <Link to='/cart'>
            {lineItems.length !== 0 &&
                <Bubble>
                    {lineItems.length}
                </Bubble>
            }
        </Link>
	)
}


const Hamburger = ({ onClick, active, className }) => (
    <Wrapper onClick={onClick} className={`${className} ${active && 'active'}`}>
        <Cart/>
        <TopLine className={`top`} />
        <MiddleLine className={`middle`} />
        <BottomLine className={`bottom`} />
    </Wrapper>
)

export default Hamburger