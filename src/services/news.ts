import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

let newsCollection = collection(db, "news");
// HANDLE: get news
export const getNews = async () => {
  let snapShot = await getDocs(newsCollection);
  let news = await snapShot.docs.map((_doc) => {
    return {
      ..._doc.data(),
      _id: _doc.id,
    };
  });
  return news;
};
// HANDLE: add new
export const addNew = async (_new: any) => {
  let { ...newData } = _new;
  delete newData.img;
  let docSnapShot = await addDoc(newsCollection, newData);
  return docSnapShot.id;
};
// HANDLE: add new image
export let addNewImg = async (id: string, img: string) => {
  let docRef = doc(db, "news", id);
  let _new = await updateDoc(docRef, {
    img: img,
  });
  return _new;
};

// HANDLE: delete new
export const deleteNew = async (_id: string) => {
  let docSnap = doc(db, "news", _id);
  await deleteDoc(docSnap);
};
