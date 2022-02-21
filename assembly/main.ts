import { storage, logging } from "near-sdk-as";

// --- contract code goes below

export function addLike(coin: string): void {
  const cname = "lk_" + coin;
  const likes = storage.getPrimitive<i32>(cname, 0) + 1;
  storage.set<i32>(cname, likes);
  logging.log("Likes for "+coin+": " + likes.toString());
}

export function getLikes(coin: string): i32 {
  const cname = "lk_" + coin;
  return storage.getPrimitive<i32>(cname, 0);
}

export function resetLikes(coin: string): void {
  const cname = "lk_" + coin;
  storage.set<i32>(cname, 0);
  logging.log("Likes for "+coin+" were reset");
}