import React from "react";
import Hero2 from "@/components/heroOptions/Hero2";
import ButtonToTop from "@/components/ButtonToTop";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Hero2
        title={"Radionica Glume Iskra"}
        img={"/IMG-e185cc3ae58782a7a7a7e39e6cb6b4fb-V (1).jpg"}
        text2={"Upis je u toku!"}
        hideTextOnMobile
      />
      <ButtonToTop />

      <div className="container px-2 md:px-4 mx-auto space-y-12 py-10">
        {/* Za koga */}
        <section className="space-y-6">
          <h2 className="text-5xl md:text-6xl text-primary text-center font-gagalin py-6">
            Za koga je radionica?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-xl md:text-2xl">
            <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
              <p>Ako je Vaše dete maštovito, smišlja nove svetove i igre.</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
              <p>Ako je malo povučeno i ne ume da iskaže svoj potencijal.</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
              <p>Ako je zaljubljenik u čitanje i gledanje predstava.</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
              <p>
                ...onda je radionica glume <strong>pravo mesto za njega</strong>
                .
              </p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-center pt-4">
            Niko ne traži od deteta da postane profesionalni glumac, samo da se{" "}
            <strong>zabavimo, istražujemo, učimo i stičemo nove veštine</strong>
            .
          </p>
          <p className="text-xl md:text-2xl text-center font-semibold text-primary">
            Radionocu vodi profesionalna glumica Iskra Brajović
          </p>
        </section>

        {/* Raspored */}
        <section className="space-y-6">
          <h2 className="text-5xl md:text-6xl text-primary text-center font-gagalin py-6">
            Raspored
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-8 text-center text-background space-y-3">
              <p className="text-3xl font-bold">Mlađa grupa</p>
              <p className="text-xl">uzrast 6–9 godina</p>
              <p className="text-2xl font-semibold mt-4">Subotom</p>
              <p className="text-2xl font-bold">16:00 – 18:00h</p>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-center text-background space-y-3">
              <p className="text-3xl font-bold">Starija grupa</p>
              <p className="text-xl">uzrast 10–13 godina</p>
              <p className="text-2xl font-semibold mt-4">Nedeljom</p>
              <p className="text-2xl font-bold">16:00 – 18:00h</p>
            </div>
          </div>
        </section>

        {/* Sta deca razvijaju */}
        <section className="space-y-6">
          <h2 className="text-5xl md:text-6xl text-primary text-center font-gagalin py-6">
            Šta deca razvijaju?
          </h2>
          <p className="text-xl md:text-2xl text-center">
            Kroz vežbe i igre na radionici deca razvijaju:
          </p>
          <ul className="space-y-4 text-xl md:text-2xl max-w-2xl mx-auto">
            {[
              "Koncentraciju i fokus",
              "Osećaj za ritam i tempo",
              "Koordinaciju tela i glasa",
              "Maštu i slobodu izražavanja",
              "Timski duh i odgovornost prema grupi",
              "Sposobnost čitanja partnera na sceni",
              "Kontrolu impulsa",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold text-2xl mt-0.5">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Citate / insight */}
        <section className="space-y-6">
          <div className="bg-primary/10 rounded-2xl p-8 text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl font-semibold italic">
              &bdquo;Želja pokreće. Moć usporava, ubrzava, menja pravac. Igra postoji
              samo dok su oboje prisutni.&ldquo;
            </blockquote>
            <blockquote className="text-2xl md:text-3xl font-semibold italic">
              &bdquo;I najvažnije – shvate da scena ne živi u tekstu, nego između
              dvoje ljudi.&ldquo;
            </blockquote>
            <p className="text-xl md:text-2xl">
              Uče da scena nije mesto gde si sam, već gde zajedno{" "}
              <strong>stvaramo nešto živo, razigrano i neponovljivo</strong>.
            </p>
          </div>
        </section>

        {/* Galerija */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Image
              src={"/1.jpg"}
              width={500}
              height={500}
              alt={"Radionica glume Iskra"}
              className="w-full md:w-1/3 object-cover rounded-2xl"
            />
            <Image
              src={"/2.jpg"}
              width={500}
              height={500}
              alt={"Radionica glume Iskra"}
              className="w-full md:w-1/3 object-cover rounded-2xl"
            />
            <Image
              src={"/3.jpg"}
              width={500}
              height={500}
              alt={"Radionica glume Iskra"}
              className="w-full md:w-1/3 object-cover rounded-2xl"
            />
          </div>
        </section>

        {/* Kontakt */}
        <section className="space-y-4 text-center py-8">
          <h2 className="text-5xl md:text-6xl text-primary font-gagalin py-6">
            Kontakt
          </h2>
          <p className="text-xl md:text-2xl font-semibold">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/radionicaglumeiskra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              @radionicaglumeiskra
            </a>
          </p>
          <p className="text-xl md:text-2xl">
            Kontakt:{" "}
            <a href="tel:0612242193" className="text-primary font-semibold">
              0612242193
            </a>
          </p>
          <p className="text-xl md:text-2xl">
            Nikole Stefanovića 9, Vračar
            <br />
            <span className="text-muted-foreground">
              (Prostorije Lucky Fitnessa)
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
