
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, Pagination } from '@mui/material'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { json } from 'react-router';



const productStyle = {
    div: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: 20,
        paddingTop: 100,
        // border: '2px solid black',
        flexDirection: 'column',
        height: '600px',
        width: '400px'

    },
    buttons: {
        color: 'white',
        display: "flex",
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: '#9575cd',
        boderRadius: '40px',
        boxShadow: "0px 2px 2px lightgrey",
        height: 40,
        width: 200,
    },
    add: {
        // color: 'red',
        display: "flex",
        justifyContent: 'space-around',
        alignItems: "center",
        boderRadius: '40px',
        // boxShadow: "0px 0px 0px lightgrey",
        borderRadius: 20,
        height: 40,
        width: 100,
    },
    h2: {
        width: '250px',
        border: '1px solid grey',
        display: 'flex',
        justifyContent: 'center',
        padding: '1em'
    },
    h1: {
        paddingLeft: '60px',
        paddingTop: '20px',
        paddingRight: '30px',
        width: '300px'
    },
    p: {
        justifyContent: 'start',
        height: '15px',
        width: "230px"
    },
    img: {
        height: '300px',
        width: '300px',
        objectFit: 'cover',
        borderRadius: '10px'
    }
}

const Products = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([])
    const [size, setSize] = useState(6);
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('products.json')
            const jsonData = await data.json()
            const slicedJsonData = jsonData.slice(0, size)
            setSearchProducts(jsonData)
            setAllProducts(jsonData)
            setFilteredProducts(jsonData)
        }
        fetchData()
    }, [])

    const handleChange = (event, page) => {
        const from = (page - 1) * size;
        const to = page * size
        const updatedSlicedProducts = allProducts.slice(from, to)
        setFilteredProducts(updatedSlicedProducts)
        // setPage(value);
    };

    const handleAutocompleteChange = (event, value) => {
        console.log(value)
        setFilteredProducts([value])
    };

    const handleFilterText = (event) => {
        console.log(event.target.value)
        const newProducts = searchProducts.filter(product => {
            if (product.description.toLowerCase().includes(event.target.value)) return product
        })
        setFilteredProducts(newProducts)
        console.log(newProducts)
    }

    return (

        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <Stack spacing={2} sx={{ width: 300, paddingLeft: 10, paddingTop: 5 }}>
                <Autocomplete
                    freeSolo
                    disableClearable
                    onChange={handleAutocompleteChange}
                    options={searchProducts}
                    getOptionLabel={(option) => option.description}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onChange={(e) => {
                            }}
                            label="Search"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
            <input placeholder='search by text' onChange={handleFilterText} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="space-evenly" paddingLeft="110px" paddingBottom="90px">
                {filteredProducts.map((el) =>
                    <Grid item style={productStyle.div} key={el.productId}  >
                        <img style={productStyle.img} src={el.imageURL}></img>
                        <h2 style={productStyle.h2} >{el.description} </h2>
                        <p style={productStyle.p} > Price: {el.price} $ </p>
                        <p style={productStyle.p} >  {el.details}  </p>

                        <Button onClick={() => { }} style={productStyle.add} variant="outlined">
                            Add
                        </Button>
                    </Grid>
                )
                }
            </Grid>
            <Box justifyContent='center' alignItems='center' display='flex' sx={{ margin: "25px 0px" }} >
                <Pagination onChange={handleChange} count={Math.ceil(allProducts.length / size)} />
            </Box>
        </div >
    )
}


export default Products;