// import { GetServerSideProps } from "next";
import { useState, useEffect, useRef } from "react";
import { JujuImage } from "../api/topthreeanime";
import { VinlandImage } from "../api/topthreeanime";
import RightClick from "../api/topthreeanime";

export default function TopAnime() {
    return(
        <>
            <JujuImage/>
            <VinlandImage/>
            <RightClick/>
            
        </>
    )
}


// JUST USE IMPORT IMAGE FROM NEXT/IMAGE AND THAT SHOULD HONESTLY DO THE JOB UNTIL THERES A WAY TO GET IT FROM ONE TYPE TO COMPONENT.