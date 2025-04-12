import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 18px;
    color: ${cores.first};
    font-weight: 900;
  }
  img {
    width: 125px;
    height: 57.5px;
    margin-right: 240px;
    margin-left: 340px;
  }
`
