import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  height: 298px;
  display: flex;
  flex-direction: column;
`
export const LogoFooter = styled.div`
  display: flex;
  justify-content: center;
`
export const Image = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
export const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;
  img {
    height: 24px;
    width: 24px;
  }
`
export const About = styled.p`
  text-align: center;
  font-size: 10px;
  color: ${cores.first};
  font-weight: 400;
  margin-top: 80px;
`
