import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutText = ({
  title,
  highlight = "",
  description,
  features = [],
  mission = "",
  buttonText = "Më shumë",
  buttonLink = "/"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonLink);
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <h3 style={{
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
        fontSize: "32px",
        margin: 0
      }}>
        {highlight && <span style={{ color: "#2563eb" }}>{highlight}</span>}
        {highlight && " "}
        {title}
      </h3>

      <p style={{
        marginBottom: "25px",
        lineHeight: 1.8,
        color: "#555",
        fontSize: "16px"
      }}>
        {description}
      </p>

      {features.length > 0 && (
        <ul style={{
          marginBottom: "25px",
          paddingLeft: 0,
          listStyle: "none"
        }}>
          {features.map((feature, index) => (
            <li key={index} style={{
              paddingLeft: 0,
              paddingBottom: "10px",
              display: "flex",
              gap: "10px"
            }}>
              <span style={{ color: "#2563eb" }}>✓</span>
              <div>
                <strong style={{ color: "#333" }}>{feature.title}</strong>
                {feature.text && ` — ${feature.text}`}
              </div>
            </li>
          ))}
        </ul>
      )}

      {mission && (
        <p style={{
          marginTop: "20px",
          marginBottom: "25px",
          fontStyle: "italic",
          color: "#666",
          fontSize: "15px"
        }}>
          "{mission}"
        </p>
      )}

      <button 
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
          width: "fit-content",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
        onMouseLeave={(e) => e.target.style.backgroundColor = "#2563eb"}
      >
        {buttonText}
      </button>
    </Box>
  );
};

export default AboutText;
