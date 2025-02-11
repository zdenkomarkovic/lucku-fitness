import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    list: [
      {
        title: "Kuhinje",
        link: "",
      },
      {
        title: "Plakari",
        link: "",
      },
      {
        title: "TV Komode",
        link: "",
      },
      {
        title: "Projektovanje Enterijera",
        link: "",
      },
    ],
  },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];
