import React from "react";
import { TPostMediaProps } from "../../types/types";

const PostMedia: React.FC<TPostMediaProps> = ({
  postMedia,
}: TPostMediaProps) => {
  return (
    <section className="grid grid-cols-12 gap-[2px]">
      <div className="col-span-4 flex flex-col gap-[2px]">
        <img
          src={postMedia.front}
          className="h-full w-full object-cover"
          alt="post-image"
        />
        <img
          src={postMedia.sideOne}
          className="h-full w-full object-cover"
          alt="post-image"
        />
        <img
          src={postMedia.sideTwo}
          className="h-full w-full object-cover"
          alt="post-image"
        />
      </div>
      <img
        src={postMedia.sideThree}
        className="col-span-8 h-full object-cover w-full"
        alt="post-image"
      />
    </section>
  );
};

export default PostMedia;
