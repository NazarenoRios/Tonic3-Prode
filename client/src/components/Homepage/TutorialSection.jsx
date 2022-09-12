import React from "react";
import ResponsivePlayer from "../../common/ResponsivePlayer/ResponsivePlayer";
import { TutorialTitle } from "./StyledComponents";

function TutorialSection() {
  return (
    <div className="mt-12 bg-[#172236]">
      <div className="flex justify-center">
        <TutorialTitle className="text-center mt-36">
          HOW TO TAKE PART
        </TutorialTitle>
      </div>
      <div
        style={{ height: "80vh" }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-6 align-middle content-center text-white"
      >
        <div className="text-center">
          <h1 className="mb-5 text-3xl text-cyan-500 tracking-widest">
            Video Tutorial
          </h1>
          <strong className="text-md tracking-widest">
            You can start right now{" "}
          </strong>
          <p className="mt-10 tracking-wider">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nobis maiores reprehenderit cumque at quia deleniti
            suscipit natus numquam, tempora esse. Nulla fugiat iure ut odio
            veritatis iusto alias eveniet magnam accusantium expedita iste
            adipisci, dicta perspiciatis praesentium. Quia, cupiditate autem.
            Ducimus eveniet distinctio quod veritatis. Excepturi tenetur
            incidunt eum!
          </p>
        </div>
        <div className="text-center">
          <ResponsivePlayer />
        </div>
      </div>
    </div>
  );
}

export default TutorialSection;
