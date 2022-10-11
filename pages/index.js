import Head from "next/head"
import styled from "styled-components"
import Estate from "../components/Estate"
import data from "../utils/data.json"

const Home = () => {
  return (
    <>
      <Head>
        <title>Homi Greece</title>
      </Head>

      <HomeContainer>
        {data.map((estate) => (
          <Estate estate={estate} />
        ))}
      </HomeContainer>
    </> 
  )
}

export default Home

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ), url("https://www.incimages.com/uploaded_files/image/1920x1080/getty_908748508_381147.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 200px 0px;
`