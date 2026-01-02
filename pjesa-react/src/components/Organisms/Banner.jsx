import React from 'react'
import { Box } from '@mui/material';

function Banner({ bckImage, title, para }) {
    return (
        <Box id="home" sx={{
            backgroundImage: `url(${bckImage})`,
            width: "100%",
            height: "90vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center"
        }}>
            <Box sx={{
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box sx={{
                    maxWidth: "600px",
                    color: "white",
                    textAlign: "center",
                    px: "20px"
                }}>
                    <h1 style={{
                        margin: "0 0 20px 0",
                        fontSize: "52px",
                        fontWeight: 700,
                        lineHeight: 1.2
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        margin: "0",
                        fontSize: "18px",
                        fontWeight: 300,
                        color: "#e0e0e0",
                        lineHeight: 1.8
                    }}>
                        {para}
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default Banner