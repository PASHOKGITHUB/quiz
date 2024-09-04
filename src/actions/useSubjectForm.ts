// src/actions/useSubjectForm.ts

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc,getDocs} from "firebase/firestore";
import { app, db } from "@/lib/firebase"; // Your Firebase configuration file
import { Subject } from "@/interface/Subjects";

const handleUploadBanner = async (file: File) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `banners/${file.name}`);
    await uploadBytes(storageRef, file);
    const bannerUrl = await getDownloadURL(storageRef);
    return bannerUrl;
};

export const handleSubmit = async (subject: Subject, file?: File) => {
    try {
        if (file) {
            const bannerUrl = await handleUploadBanner(file);
            subject.bannerUrl = bannerUrl;
        }
        const docRef = await addDoc(collection(db, "subjects"), subject);
        return docRef.id;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred.");
        }
    }
};

export const fetchSubjects = async (): Promise<Subject[]> => {
    try {
        const subjectsCollection = collection(db, "subjects");
        const snapshot = await getDocs(subjectsCollection);
        const subjects: Subject[] = snapshot.docs.map((doc) => ({
            subjectCode: doc.data().subjectCode,
            subjectTitle: doc.data().subjectTitle,
            category: doc.data().category,
            bannerUrl: doc.data().bannerUrl,
        }));
        return subjects;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred.");
        }
    }
};