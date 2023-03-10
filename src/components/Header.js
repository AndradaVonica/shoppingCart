import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



const style = {
    header: {
        display: "flex",
        // backgroundColor: 'grey',
        justifyContent: 'space-between',
        height: "130px",
        width: "100%",
        boxShadow: "0 0 3px 2px grey",
        alignItems: "center",
        padding: 20,
        // position: "fixed",

    },
    buttons: {
        // color: 'white',
        justifyContent: 'space-around',
        // backgroundColor: '#9575cd',
        boderRadius: 20,
        boxShadow: "0px 2px 2px lightgrey",
        height: 40,
        width: 120,

    },
    divStyle: {
        display: 'flex',
        width: 500,
        rowDirection: 'row',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: '4rem'

    },
    img: {
        height: '60px',
        width: '140px',
        objectFit: 'cover',
        borderRadius: '10px',
        paddingLeft: "60px"
    }
}

// let elements = [0,1,2,3,4,5,6]

// let from = 3
// let size = 3 + from

// let sizedElements = elements.slice(from, size)

// console.log(sizedElements)


const Header = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home')
    }
    const navigateToProducts = () => {
        navigate('/products')
    }
    const navigateToCart = () => {
        navigate('/cart')
    }


    // const cart = useContext(CartContext)

    // const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    return (
        < div style={style.header} >

            <img src={"https://static.wixstatic.com/media/cc9c78_e891cdb482404c2b8f2c919bcb1faabd~mv2.png/v1/fit/w_2500,h_1330,al_c/cc9c78_e891cdb482404c2b8f2c919bcb1faabd~mv2.png"} alt="description" style={style.img}></img>
            <div style={style.divStyle}>
                <Button style={style.buttons} onClick={navigateToHome} variant="outlined">
                    Home
                    </Button>
                <Button style={style.buttons} onClick={navigateToProducts} variant="outlined">
                    Products
                    </Button>
                <Button style={style.buttons} onClick={navigateToCart} variant="outlined">
                    Cart  items
                    </Button>
            </div>
        </div>

    )
}


export default Header;