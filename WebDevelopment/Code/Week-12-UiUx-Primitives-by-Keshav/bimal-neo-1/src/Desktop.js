import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import image2 from "./assets/image-2.png";
import imagePhotoroom12 from "./assets/image-photoroom-1-2.png";
import imagePhotoroom1 from "./assets/image-photoroom-1-2.png";

// Styled components
const Header = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.orange[100],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2.75, 10.5),
}));

const Logo = styled(Typography)(({ theme }) => ({
    fontFamily: "'Poppins-Bold', Helvetica",
    fontWeight: "bold",
    color: "#de4a18",
    fontSize: "64px",
}));

const NavLink = styled(Typography)(({ theme }) => ({
    fontFamily: "'Poppins-Regular', Helvetica",
    fontSize: "24px",
    color: "#764322",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
}));

const MainButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.orange[600],
    color: theme.palette.common.white,
    borderRadius: "30px",
    padding: theme.spacing(1.5, 3),
    fontFamily: "'Poppins-Medium', Helvetica",
    fontSize: "24px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: theme.palette.orange[700],
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter-SemiBold', Helvetica",
    fontWeight: "600",
    fontSize: "32px",
    textAlign: "center",
    marginTop: theme.spacing(7.5),
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter-Regular', Helvetica",
    fontSize: "20px",
    textAlign: "center",
    marginTop: theme.spacing(2),
}));

const ProductCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.orange[200],
    borderRadius: "18px",
    padding: theme.spacing(2.5),
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
}));

const ProductImage = styled("img")({
    width: "157px",
    height: "127px",
    objectFit: "cover",
    marginRight: "16px",
});

const ProductTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter-Bold', Helvetica",
    fontWeight: "bold",
    fontSize: "32px",
    color: "#de4a18",
}));

const ProductDescription = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter-Regular', Helvetica",
    fontSize: "20px",
    color: theme.palette.text.primary,
    marginTop: theme.spacing(1),
}));

const ProductButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.orange[600],
    color: theme.palette.common.white,
    borderRadius: "23px",
    padding: theme.spacing(1.5, 3),
    fontFamily: "'Inter-Regular', Helvetica",
    fontSize: "20px",
    textTransform: "none",
    marginLeft: theme.spacing(2),
    "&:hover": {
        backgroundColor: theme.palette.orange[700],
    },
}));

const Footer = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter-SemiBold', Helvetica",
    fontSize: "20px",
    textAlign: "center",
    marginTop: theme.spacing(10),
    color: "#40110a",
}));

const Desktop = () => {
    return (
        <Box sx={{ backgroundColor: "#fef6ee", minHeight: "100vh" }}>
            {/* Header Section */}
            <Header>
                <Logo>bimal</Logo>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <NavLink>Home</NavLink>
                    <NavLink>Our Products</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>About Us</NavLink>
                    <MainButton>Buy Now</MainButton>
                </Box>
            </Header>

            {/* Hero Section */}
            <Container sx={{ mt: 10 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5, // Adjust gap between text and image
                    }}
                >
                    {/* Text Content */}
                    <Box>
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: "'Poppins-ExtraBold', Helvetica",
                                fontWeight: "800",
                                fontSize: "64px",
                                color: "#40110a",
                            }}
                        >
                            Zuba <span style={{ color: "#ee6c2f" }}>Canceri</span>
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "'Poppins-Regular', Helvetica",
                                fontSize: "24px",
                                color: "#000",
                                mt: 2,
                            }}
                        >
                            More you eats, sooner you dies
                        </Typography>
                        <MainButton sx={{ mt: 4 }}>Buy Now</MainButton>
                    </Box>

                    {/* Image Section */}
                    <Box
                        component="img"
                        src={image2}
                        alt="Product"
                        sx={{
                            width: "385px",
                            height: "800px",
                        }}
                    />
                </Box>
            </Container>

            {/* Products Section */}
            <Container sx={{ mt: 15 }}>
                <SectionTitle>Cancerous Products</SectionTitle>
                <SectionSubtitle>
                    Discover an extensive selection of highly cancerous products designed
                    specially for you.
                </SectionSubtitle>

                <Grid container spacing={4} sx={{ mt: 5 }}>
                    {[imagePhotoroom12, imagePhotoroom1].map((imgSrc, index) => (
                        <Grid item xs={12} key={index}>
                            <ProductCard>
                                <ProductImage src={imgSrc} alt={`Product ${index + 1}`} />
                                <Box>
                                    <ProductTitle>
                                        <span style={{ color: "#de4a18" }}>baba </span>
                                        <span style={{ color: "#40110a" }}>Elechi</span>
                                    </ProductTitle>
                                    <ProductDescription>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC.
                                    </ProductDescription>
                                    <Box sx={{ display: "flex", mt: 2 }}>
                                        <ProductButton>Buy Now</ProductButton>
                                        <ProductButton>Add To Cart</ProductButton>
                                    </Box>
                                </Box>
                                
                            </ProductCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer */}
            <Footer>
                bimal <br />
                <span
                    style={{ fontFamily: "'Inter-Regular', Helvetica", color: "#40110a" }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </span>
            </Footer>
        </Box>
    );
};

export default Desktop;
