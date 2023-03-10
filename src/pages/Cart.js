
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Box, Button } from '@mui/material';
// import { json } from "react-router";
import { useCart } from "../context/CartContext"
// import { updateParameter } from "typescript";
// import { createContext, useContext } from 'react'
// import { CartContext } from "../context/CartContext"



const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '200px',
        width: "100px"
    },
    tbrow: {
        display: "flex",
        // flexDirection: "column"
    },
    tbody: {
        width: "80rem",
    },
    img: {
        height: '150px',
        width: '150px',
        objectFit: 'cover',
        borderRadius: '10px',
        // paddingLeft: '50px'
    },
    items: {
        display: 'flex',
        justifyContent: 'space-around',
        width: "100%",
        height: 80,
        backgroundColor: 'red',
        padding: '1em'
    },
    table: {
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        width: "100%"
    },
    rowStyle: {
        color: '#030303',
        fontSize: '1.6rem',
        fontFamily: 'Merriweather',
    },
    tbContainer: {
        display: "flex",
        justifyContent: "center"
    },
    box: {
        display: "flex",
        justifyContent: "right",
        // width: "80rem"
    }
}

// const mockProducts = [
//     {
//         items: "Nike Blazer",
//         price: 150.99,
//         quantity: 2,
//         size: 43
//     },
//     {
//         items: "Jordan 1 mid",
//         price: 310,
//         quantity: 1,
//         size: 38
//     },
//     {
//         items: "Adidas Niteball",
//         price: 115,
//         quantity: 3,
//         size: 39
//     },
//     {
//         items: "Vans SK8-Hi",
//         price: 120,
//         quantity: 1,
//         size: 40
//     },
//     {
//         items: "Converse Chuck",
//         price: 87,
//         quantity: 1,
//         size: 38
//     },
//     {
//         items: "Puma CaliDream",
//         price: 64,
//         quantity: 1,
//         size: 39
//     },
// ]




function ShowItems({ item, deleteItem, }) {
    // console.log("aici avem itemul minunat", item.quantity)
    const { itemsInCart, setItemsInCart } = useCart();

    const updateQuantity = (product, action) => {
        const newItems = [...itemsInCart]
        const productIndex = newItems.findIndex(elem => {
            return elem.productId === product.productId
        })

        if (action === "dec") newItems[productIndex].quantity -= 1
        if (action === "inc") newItems[productIndex].quantity += 1
        setItemsInCart([...newItems])
        console.log(productIndex)
    }

    return (
        <div style={{ width: "50rem", border: "1px solid black", padding: "1rem", margin: "1rem", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div>
                <img src={item.imageURL} style={style.img} alt="description" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem", width: "250px" }}>
                <h2> {item.description}</h2>
                <p style={{ fontStyle: "bold" }}> Price: {item.price} $</p>
                <div style={{ display: "flex", justifyContent: "space-between", width: "70px", height: "30px", alignItems: "center" }}>
                    <button disabled={item.quantity === 1} onClick={() => updateQuantity(item, "dec")} >-</button>
                    <p> {item.quantity} </p>
                    <button onClick={() => updateQuantity(item, "inc")} >+</button>
                </div>
            </div>
            <div style={{ marginLeft: "30px", display: "flex", justifyContent: "center", height: "30px", flexDirection: "column" }}>
                <button onClick={() => deleteItem(item.productId)}>Remove item</button>
                <p> Total: {item.price * item.quantity} $</p>
            </div>

        </div>

    );
}



const Cart = () => {

    const { itemsInCart, setItemsInCart } = useCart();
    // console.log("aici avem itm in cart", itemsInCart)

    const subtotal = (items) => items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const result = subtotal(itemsInCart)

    const deleteItem = (productId) => {
        const newItems = itemsInCart.filter(item => item.productId !== productId)
        console.log("new itm", newItems)
        setItemsInCart(newItems)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginLeft: "5rem" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <h1> Checkout products</h1>
                    {itemsInCart.map((item) => (
                        <ShowItems deleteItem={deleteItem} item={item} />
                    ))}
                </div >
                <div style={{ display: "flex", marginTop: "5rem", marginLeft: "3rem", fontWeight: "bold", fontSize: "35px" }}>
                    Cashout: {result} $
                </div>
            </div>


            {/* <TableContainer component={Paper} style={style.tbContainer} >
                <Table size="dense" style={style.tbody}>
                    <TableHead >
                        <TableRow style={style.rowStyle} >
                            <TableCell align="left">Items</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell style={{ paddingRight: '40px' }} align="center">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {mockProducts.map((product) => (
                            <TableRow
                                key={product.items}
                            >
                                <TableCell style={style.tbrow} component="th" >
                                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/64aa44d7-1d9b-47d7-8faa-5af7ec777513/dunk-high-shoes-sV709H.png" style={style.img}></img>
                                    <Typography paddingLeft="30px" fontWeight="bold" fontSize="25px" >{product.items}
                                        <br />
                                        <Typography paddingTop="20px" >
                                            size: {product.size}
                                        </Typography>
                                    </Typography>
                                </TableCell>
                                <TableCell style={{ fontSize: "20px", fontFamily: 'Merriweather' }} align="center">{product.quantity}</TableCell>
                                <TableCell style={{ fontSize: "20px", fontFamily: 'Merriweather' }} align="center">{product.price}</TableCell>
                                <TableCell style={{ fontSize: "22px", fontFamily: 'Merriweather', fontWeight: "bold" }} align="center">{product.price * product.quantity}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow >
                            <TableCell rowSpan={1} />
                            <TableCell style={style.rowStyle} colSpan={2}>Total</TableCell>
                            <TableCell style={style.rowStyle} align="right">Total: {result}</TableCell>
                        </TableRow>
                        <Box style={style.box} padding="2em">
                            <Button variant='text' >
                                <Typography style={{ fontSize: "25px" }}>Go to checkout</Typography>
                            </Button>
                        </Box>
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>
    )
}


export default Cart;