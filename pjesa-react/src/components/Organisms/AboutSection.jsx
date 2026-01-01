import { Box } from "@mui/material";
import AboutText from "../Molecules/AboutText";
import AboutImage from "../Molecules/AboutImage";
import Image from "../../assets/image.png"

const AboutSection = () => {
  return (
    <Box id="aboutus" sx={{
      display: "grid",
      gridTemplateColumns: "50% 50%",
      alignItems: "center",
      padding: "8vh 6%",
      gap: "4%",
      backgroundColor: "#f8f9fa"
    }}>
      <AboutText
        title="Smart Library"
        highlight="Rreth"
        description="Smart Library e bën kërkimin, huazimin dhe leximin e librave të thjeshtë dhe të shpejtë — kudo dhe në çdo kohë."
        features={[
          { title: "Kërkimi i Shpejtë", text: "Gjeni çfarë libri keni nevojë në sekonda" },
          { title: "Huazim i Lehtë", text: "Huazoni libra online me disa klikime" },
          { title: "Disponibilitet 24/7", text: "Aksesoni bibliotekën në çdo kohë" }
        ]}
        mission="Përmirësimi i qasjes në arsim dhe kulturë për të gjithë."
        buttonText="Më shumë Informacion"
        buttonLink="/learn-more"
      />

      <AboutImage
        src={Image}
        alt="Persona duke shfletuar libra në bibliotekë"
      />
    </Box>
  );
};

export default AboutSection;
