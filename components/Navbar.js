import styled from "styled-components"

const Navbar = () => {
  return (
    <NavbarContainer>
        <img 
            src="https://homi.com.gr/wp-content/uploads/2019/10/homi-logo-2-1-1.png"
            alt="" />

        <NavbarOptions>
            <a href="/">Sales</a>
            <a href="/">Rentals</a>
            <a href="/">Assignment</a>
            <a href="/">Interest Request</a>
            <a href="/">Tools</a>
            <a href="/">Blog</a>
        </NavbarOptions>

        <NavbarButtons>
            <button>Login</button>
            <button>Register</button>
        </NavbarButtons>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin-bottom: 20px;
    }

    > img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin-left: 20px;

        @media only screen and (max-width: 600px) {
            margin-left: 0;
        }
    }
`

const NavbarOptions = styled.div`
    display: flex;
    text-align: center;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

    > a {
        text-decoration: none;
        font-size: 26px;
        color: #185CAC;
        margin: 0 20px;        

        @media only screen and (max-width: 600px) {
            margin: 20px 0;
        }
    }
`

const NavbarButtons = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

    > button {
        background-color: inherit;
        border: 1px solid #185CAC;
        border-radius: 10px;
        color: #185CAC;
        padding: 16px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin: 0 10px;
        transition: 0.5s;

        :hover {
            background-color: #185CAC;
            color: white;
        }

        @media only screen and (max-width: 600px) {
            margin: 10px 0;
        }
    }
`