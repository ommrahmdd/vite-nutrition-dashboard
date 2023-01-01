import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

const partnersCollection = collection(db, "partners");

export const addPartner = async () => {
  const snapShot = await addDoc(partnersCollection, {
    img: "",
  });
  return snapShot.id;
};

export const updatePartner = async (_id: string, img: string) => {
  let docSnap = doc(db, "partners", _id);
  await updateDoc(docSnap, {
    img,
  });
};
