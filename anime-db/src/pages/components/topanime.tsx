// import { GetServerSideProps } from "next";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import connectToDatabase from '../../../lib/mongodb.js';
import  juju from "../../images/Jujutsu-Kaisen-1.png";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import {jjk} from "../api/topthreeanime"
import { MyImage } from "../api/topthreeanime";

export default function TopAnime() {
    return(
        <>
            <MyImage/>
        </>
    )
}

// JUST USE IMPORT IMAGE FROM NEXT/IMAGE AND THAT SHOULD HONESTLY DO THE JOB UNTIL THERES A WAY TO GET IT FROM ONE TYPE TO COMPONENT.