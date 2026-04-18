import { useState } from "react";
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SectionCard from "../Components/SectionCard";
import ScrollTop from "../Components/ScrollTop";

import Story from "./Story";
import Journey from "./Journey";
import Toolkit from "./Toolkit";
import Workbench from "./Workbench";
import Github from "./Github";
import FindMe from "./FindMe";
import Languages from "./Languages";
import Learning from "./Learning";
import Origins from "./Origins";
import Chat from "./Chat";

export default function Home({ dark, setDark }) {
  const [active, setActive] = useState("");

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} setActive={setActive} />

      <Hero dark={dark} />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        <section id="story">
          <SectionCard
            id="story"
            title="Story"
            subtitle="Where you can reach me"
            link="/story"
            active={active === "story"}
            dark={dark}
          />
        </section>

        <section id="journey">
          <SectionCard
            id="journey"
            title="Journey"
            subtitle="Career capters & milestones"
            link="/journey"
            active={active === "journey"}
            dark={dark}
          />
        </section>

        <section id="toolkit">
          <SectionCard
            id="toolkit"
            title="Toolkit"
            subtitle="Technologies & frameworks"
            link="/toolkit"
            active={active === "toolkit"}
            dark={dark}
          />
        </section>

        <section id="workbench">
          <SectionCard
            id="workbench"
            title="Workbench"
            subtitle="Shipped & in progress"
            link="/workbench"
            active={active === "workbench"}
            dark={dark}
          />
        </section>

        <section id="github">
          <SectionCard
            id="github"
            title="Github"
            subtitle="My open source work"
            link="/github"
            active={active === "github"}
            dark={dark}
          />
        </section>

        <section id="findme">
          <SectionCard
            id="findme"
            title="Find Me"
            subtitle="Where you can reach me"
            link="/findme"
            active={active === "findme"}
            dark={dark}
          />
        </section>

        <section id="languages">
          <SectionCard
            id="languages"
            title="Languages"
            subtitle="Human & programming languages"
            link="/languages"
            active={active === "languages"}
            dark={dark}
          />
        </section>

        <section id="learning">
          <SectionCard
            id="learning"
            title="Learning"
            subtitle="What I'm currently studying"
            link="/learning"
            active={active === "learning"}
            dark={dark}
          />
        </section>

        <section id="origins">
          <SectionCard
            id="origins"
            title="Origins"
            subtitle="Where my journey started"
            link="/origins"
            active={active === "origins"}
            dark={dark}
          />
        </section>

        <section id="chat">
          <SectionCard
            id="chat"
            title="Chat me"
            subtitle="Chat with me"
            link="/chat"
            active={active === "chat"}
            dark={dark}
          />
        </section>
      </div>

      <div className="md:col-span-2 flex justify-center mt-6">
        <section id="resume" className="w-full md:w-1/2">
          <SectionCard
            id="resume"
            title="Resume CV"
            subtitle="View & download my CV"
            link="/resumecv"
            active={active === "resume"}
            dark={dark}
          />
        </section>
      </div>

      {/* Scroll top button */}
      <ScrollTop dark={dark} />
    </div>
  );
}
