import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

const productsCollection = collection(db, "products");
// HANDLE: add Image to product
export let addProductImgs = async (id: string, img: string) => {
  let docRef = doc(db, "products", id);
  let product = await updateDoc(docRef, {
    images: arrayUnion(img),
  });
  return product;
};
export const addProduct = async (product: any) => {
  let { ...newData } = product;
  delete newData.imgs;
  let docSnapShot = await addDoc(productsCollection, newData);
  return docSnapShot.id;
};
export const getProducts = async () => {
  let snapShot = await getDocs(productsCollection);
  let products = await snapShot.docs.map((_doc) => {
    return {
      ..._doc.data(),
      _id: _doc.id,
    };
  });
  return products;
};
