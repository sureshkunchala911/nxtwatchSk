import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BlogAndImageContainer = styled.div``

export const LogoIcons = styled.img`
  width: 40px;
  margin: 0px 6px 0px 0px;
`
export const ContactUsContainer = styled.div`
  padding: 7px;
`

export const Text = styled.p`
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
`
export const WebsiteLogo = styled.img`
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 140px;
    margin-top: 50px;
    margin-bottom: 25px;
    margin-left: 20px;
  }
`
