import  juju from "../../images/Jujutsu-Kaisen-1.png";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import { StaticImageData } from "next/image.js";

let newImage = new Image(500, 300);
newImage.src = "../../images/Jujutsu-Kaisen-1.png"; 

interface Anime {
    title: string;
    image: StaticImageData
}


export let jjk: Anime = {
    title: "Jujutsu Kaisen",
    image: newImage
}
