"use client";

import { postsState } from "@/features/stores/postsState";
import axios from "axios";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import useSWR, { Fetcher } from "swr";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const sleep = (second: number): Promise<any> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
};

// データを取得する(2秒間待つ?)
const fetcher: Fetcher<Post[], string> = async (url: string) => {
  const res = await axios.get(url).then(await sleep(2));
  return res.data;
};

const LoaddingPosts = () => {
  // jsonplaceholderからデータを取得する。
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    { suspense: true }
  );

  // Recoilで取得する。
  const setPosts = useSetRecoilState(postsState);
  setPosts(data);

  return (
    <>
      {isLoading || (
        <>
          <div>ローディングが完了しました!!</div>
          <Link href="/posts/">一覧を見る</Link>
        </>
      )}
    </>
  );
};

export default LoaddingPosts;
