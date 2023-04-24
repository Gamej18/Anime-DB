import  juju from "../../images/Jujutsu-Kaisen-1.png";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import Image from 'next/image';

interface Anime {
    title: string;
}


export let jjk: Anime = {
    title: "Jujutsu Kaisen",
}

export const MyImage = (props: any) => {
    return (
        <Image
            src={juju}
            alt="Jujutsu Kaisen"
            width={900}
            height={900}
        />
    )
}