// import { GetServerSideProps } from "next";
import { useState, useEffect, useRef } from "react";
import TopMainComponent  from "./topthreeanime";
// import { VinlandImage } from "../api/topthreeanime";
import RightClick from "./topthreeanime";

export default function TopAnime() {
    return(
        <>
            <TopMainComponent/>
            {/* <VinlandImage/> */}
            <TopMainComponent/>
            
        </>
    )
}


// JUST USE IMPORT IMAGE FROM NEXT/IMAGE AND THAT SHOULD HONESTLY DO THE JOB UNTIL THERES A WAY TO GET IT FROM ONE TYPE TO COMPONENT.