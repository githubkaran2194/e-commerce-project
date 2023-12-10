import { Box, Button, Container } from '@mui/material';

const FilterSection = ({ handleFilter }) => {
    return (
        <Container sx={{ m: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ flexWrap: "wrap" }}>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('All')}>All</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter("men")}>Men</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('Women')}>Women</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('Jewelery')}>Jewelry</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('Electronic')}>Electronic</Button>
            </Box>
        </Container>
    );
};

export default FilterSection;
