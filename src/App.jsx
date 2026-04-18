import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";

import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Journey from "./Pages/Journey";
import Toolkit from "./Pages/Toolkit";
import Workbench from "./Pages/Workbench";
import Github from "./Pages/Github";
import FindMe from "./Pages/FindMe";
import Languages from "./Pages/Languages";
import Origins from "./Pages/Origins";
import Chat from "./Pages/Chat";
import Learning from "./Pages/Learning";
import ResumeCV from "./Pages/ResumeCV";


function App() {

  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <div className={dark 
        ? "bg-[#0f172a] text-white min-h-screen"
        : "bg-white text-black min-h-screen"
      }>

        <Routes>

          <Route path="/" element={<Home dark={dark} setDark={setDark} />} />

          <Route path="/story" element={<Story dark={dark} />} />

          <Route path="/journey" element={<Journey dark={dark}/>}/>

          <Route path="/toolkit" element={<Toolkit dark={dark}/>}/>

          <Route path="/workbench" element={<Workbench dark={dark}/>}/>

          <Route path="/github" element={<Github dark={dark}/>}/>

          <Route path="/findme" element={<FindMe dark={dark}/>}/>

          <Route path="/languages" element={<Languages dark={dark}/>}/>

          <Route path="/learning" element={<Learning dark={dark}/>}/>

          <Route path="/origins" element={<Origins dark={dark}/>}/>

          <Route path="/chat" element={<Chat dark={dark}/>}/>

          <Route path="/resumecv" element={<ResumeCV dark={dark}/>}/>


        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;