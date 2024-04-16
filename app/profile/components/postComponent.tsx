import Image from "next/image";
import React from "react";

interface Props {}

function PostComponent(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-full h-[400px] rounded-md border-blue-600/30 border-2 pb-8 mb-8 shadow-md">
        <div className="w-full h-[50px] rounded-b-sm bg-blue-600/60 flex justify-between items-center px-3">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="https://images.pexels.com/photos/20159995/pexels-photo-20159995/free-photo-of-a-black-and-white-photo-of-a-young-girl-looking-out-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-10 w-10 rounded-full object-cover"
              height={40}
              width={40}
              alt="profile picture"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs font-medium text-slate-200">@johndoe</p>
            </div>
          </div>
          <p className="text-sm text-white font-semibold flex justify-center items-center">
            <Image
              className="h-[25px] w-[25px]"
              src="/icons/heartFinal.png"
              height={30}
              width={30}
              alt=""
            />{" "}
            360
          </p>
        </div>
        <div className="p-2">
          <Image
            src="https://images.pexels.com/photos/5877254/pexels-photo-5877254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            height={250}
            width={300}
            alt="post"
            className="rounded-md h-[250px] w-full object-cover"
          />
        </div>
        <p className=" overflow-ellipsis h-[50px] text-sm font-medium px-2 pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          autem, quibusdam reprehenderit eveniet laboriosam excepturi quaerat
          quisquam consectetur minima molestias?
        </p>
      </div>
    </>
  );
}

export default PostComponent;
