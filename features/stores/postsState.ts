import { Post } from "@/components/LoadingPosts";
import { atom } from "recoil";

export const postsState = atom<Post[] | undefined>({
  key: "postState",
  default: undefined,
});
