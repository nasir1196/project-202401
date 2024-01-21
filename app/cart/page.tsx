import Container from "../components/Container";
import CartUI from "./CartUI";

const Cart = () => {
    return (
        <div className="pt-6">
            <Container>
                <CartUI />
            </Container>
        </div>
    );
}

export default Cart;