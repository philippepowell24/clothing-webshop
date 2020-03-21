import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("1xsHbwpMbR5DcHfoU7kb")
  .collection("cartItems")
  .doc("360GWlXhuTywxGhc78iO");
firestore.doc("/users/1xsHbwpMbR5DcHfoU7kb/cartItems/360GWlXhuTywxGhc78iO");
firestore.collection("/users/1xsHbwpMbR5DcHfoU7kb/cartItems");
