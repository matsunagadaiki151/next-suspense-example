"use client";

import Loading from "@/app/loading";
import Button from "@/components/Button";
import LoadingPosts from "@/components/LoadingPosts";
import PostList from "@/components/LoadingPosts";
import { Suspense, useState } from "react";

type TDataLoader = {
  buttonLabel: string;
};

function DataLoader({ buttonLabel }: TDataLoader) {
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
  const onButtonClick = async () => {
    setIsButtonClick(true);
  };

  return (
    <div className="m-10 h-full flex flex-col items-center justify-between space-y-10">
      <Button onButtonClick={onButtonClick}>{buttonLabel}</Button>
      {isButtonClick && (
        <Suspense fallback={<Loading />}>
          <LoadingPosts />
        </Suspense>
      )}
    </div>
  );
}

export default DataLoader;
