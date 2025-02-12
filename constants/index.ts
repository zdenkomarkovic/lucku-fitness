import { GiWeightLiftingUp } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },

  {
    title: "Fitness za decu",
    link: "/fitnesszadecu",
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
    title: "Aeromix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface ImageData {
  id: number;
  image: string;
}

export const imageData: ImageData[] = [
  {
    id: 1,
    image: "/images/lucky-fitness.jpg",
  },
  {
    id: 2,
    image: "/images/lucky-fitness (3).jpg",
  },
  {
    id: 3,
    image: "/images/lucky-fitness (4).jpg",
  },
  {
    id: 4,
    image: "/images/lucky-fitness (5).jpg",
  },
  {
    id: 5,
    image: "/images/lucky-fitness (6).jpg",
  },
  {
    id: 6,
    image: "/images/lucky-fitness (7).jpg",
  },
  {
    id: 7,
    image: "/images/lucky-fitness (8).jpg",
  },
  {
    id: 8,
    image: "/images/lucky-fitness (9).jpg",
  },
  {
    id: 9,
    image: "/images/lucky-fitness (10).jpg",
  },
  {
    id: 10,
    image: "/images/lucky-fitness (11).jpg",
  },
  {
    id: 11,
    image: "/images/lucky-fitness (12).jpg",
  },
  {
    id: 12,
    image: "/images/lucky-fitness (13).jpg",
  },
  {
    id: 13,
    image: "/images/lucky-fitness (14).jpg",
  },
  {
    id: 14,
    image: "/images/lucky-fitness (15).jpg",
  },
  {
    id: 15,
    image: "/images/lucky-fitness (16).jpg",
  },
  {
    id: 16,
    image: "/images/lucky-fitness (17).jpg",
  },
  {
    id: 17,
    image: "/images/lucky-fitness (18).jpg",
  },
  {
    id: 18,
    image: "/images/lucky-fitness (19).jpg",
  },
  {
    id: 19,
    image: "/images/lucky-fitness (20).jpg",
  },
  {
    id: 20,
    image: "/images/lucky-fitness (21).jpg",
  },
];
