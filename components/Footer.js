import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
        <FooterInfo>
            <h3>Sales & Rentals</h3>
            <FooterLine />

            <a href="/">Sale</a>
            <a href="/">Find a Tenant</a>
            <a href="/">Buy</a>
            <a href="/">Rent Interest</a>
            <a href="/">Search Property</a>
        </FooterInfo>

        <FooterInfo>
            <h3>Useful Links</h3>
            <FooterLine />

            <a href="/">Dashboard</a>
            <a href="/">Sign Up</a>
            <a href="/">Login</a>
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy Policy</a>
        </FooterInfo>

        <FooterInfo>
            <h3>Follow us on</h3>
            <FooterLine />

            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Youtube</a>
        </FooterInfo>

        <FooterInfo>
            <h3>Contact us</h3>
            <FooterLine />

            <a href="/">190 Syggrou, Athens, 17121</a>
            <a href="/">Call us +30 215 215 1962</a>
            <a href="/">info@homi.com.gr</a>
        </FooterInfo>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0;
    background-color: #185CAC;
    color: white;    

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    > a {
        text-decoration: none;
        font-size: 20;
        color: white;        
        margin: 10px 0;
    }
`
const FooterLine = styled.hr`
    width: 200px;
`