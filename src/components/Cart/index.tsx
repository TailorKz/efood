import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import image from '../../assets/images/image 1.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={image} />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={image} />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        <span>Valor total</span>
        <span>R$ 182,70</span>
      </Prices>
      <button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a entrega
      </button>
    </Sidebar>
  </CartContainer>
)
export default Cart
