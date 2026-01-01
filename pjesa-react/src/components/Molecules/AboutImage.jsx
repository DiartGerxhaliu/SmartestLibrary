import { Box } from "@mui/material";

const AboutImage = ({ src, alt }) => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center"
    }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
        }}
      />
    </Box>
  );
};

export default AboutImage;
