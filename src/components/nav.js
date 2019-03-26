import React, {useContext} from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import StoreContext from '../context/StoreContext'
import {FaShoppingBasket} from 'react-icons/fa'

const Bubble = styled.p`
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 0 10px;
    font-size: 1.2rem;
    float: right;
    margin: -10px;
    z-index: 999;
`

const Wrapper = styled.nav`
    padding-left: 35px;

     @media screen and (max-width: 768px) {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity .5s ease;
        background: white;
        margin: 0;
        padding: 0;
        color: black;
        &.active {
            display: flex;
            opacity: 1;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            a {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    }    
`

const A = styled(({ primary, children, ...rest }) => <Link {...rest}>{children}</Link>)`
    color: black;
    text-decoration: none;
    margin-right: 25px;
    font-size: 1.2rem;
    transition: all .2s ease-in-out;
    padding: 9px 0 7px;
    font-weight: 700;
    &:hover,
    &.active {
        border-bottom: 3px solid #fff;
    }
`

const Cart = () => {
	const context = useContext(StoreContext)

	const { lineItems } = context.checkout

	return(
        <A to='/cart'>
            {lineItems.length !== 0 &&
                <Bubble>
                    {lineItems.length}
                </Bubble>
            }
        <FaShoppingBasket/>
        </A>
	)
}

const INVALID_PAGES = ['uncategorized'];

const isCurrentPage = (currentPage, path) => {
    return currentPage === path ? 'active' : '';
}

const isValidPage = ({ node }) => {
    const slug = node.slug || node.title;
    return !INVALID_PAGES.find((v) => v  === slug);
}


const renderCategoryLink = ({ handle, name, primary, currentPage, active }) => (
    <A 
        key={handle} 
        to={`/category/${handle}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, `/category/${handle}`)}
        dangerouslySetInnerHTML={{ __html: handle }}
    />
)


const Nav = ({ pages, categories, primary, currentPage, active }) => (
    <Wrapper className={active && 'active'}>
        <A to={'/'} 
           primary={primary || active} 
           className={isCurrentPage(currentPage, `/`)}>
        Home
        </A>
        {categories && 
            categories.edges
                .filter(isValidPage)
                .map((edge) => renderCategoryLink({ ...edge.node, primary, currentPage, active }))
        }
        <Cart/>
    </Wrapper>
)

export default Nav
