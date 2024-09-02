// src/models/SubjectModel.ts

import { db } from "@/lib/firebase"; // Your Firebase configuration file
import { collection, addDoc } from "firebase/firestore";
import { Subject } from "@/interface/Subjects";

export const addSubject = async (subject: Subject) => {
  try {
    const docRef = await addDoc(collection(db, "subjects"), subject);
    return docRef.id;
  } catch (e) {
    throw new Error("Error adding subject: " + e.message);
  }
};
