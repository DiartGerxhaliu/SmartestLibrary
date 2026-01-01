import { Box } from '@mui/material'
import React from 'react'
import Banner from '../Organisms/Banner'
import StatsSection from '../Organisms/StatsSection'
import AboutSection from '../Organisms/AboutSection'
import CTASection from '../Organisms/CTASection'
import BG1 from "../../assets/bg1.jpg"
import BG2 from "../../assets/bg2.jpg"
import BG3 from "../../assets/bg3.jpg"
import BG4 from "../../assets/bg4.jpg"
import { useEffect, useState } from 'react';

function Home() {
    let [background, setBackground] = useState(BG1)
    
    useEffect(() => {
        let Timer = setInterval(() => {
            if (background === BG1) {
                setBackground(BG2);
            }
            else if (background === BG2) {
                setBackground(BG3);
            }
            else if (background === BG3) {
                setBackground(BG4);
            }
            else {
                setBackground(BG1);
            }
            clearInterval(Timer);
        }, 5000)

        return () => clearInterval(Timer);
    }, [background])

    return (
        <Box sx={{ width: '100%' }}>
            <Banner
                bckImage={background}
                title={"Mirë se vini në Smart Library"}
                para={"Zbulo mbi 100,000 libra të shënueshem. Huazoni online dhe lexoni sa doni."}
            />

            <StatsSection />

            <AboutSection />

            <CTASection />
        </Box>
    )
}

export default Home