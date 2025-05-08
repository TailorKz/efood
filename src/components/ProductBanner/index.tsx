import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { open } from '../../store/cartSlice' // supondo que exista essa ação
import { BannerImg } from './styles'
import bannerImagem from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.png'

const ProductBanner = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartCount = cartItems.length

  return (
    <BannerImg style={{ backgroundImage: `url(${bannerImagem})` }}>
      <h2 className="first">Restaurantes</h2>
      <a href="./">
        <img src={logo} alt="EFOOD" />
      </a>
      <h2 style={{ cursor: 'pointer' }} onClick={() => dispatch(open())}>
        {cartCount} produto(s) no carrinho
      </h2>
    </BannerImg>
  )
}

export default ProductBanner
