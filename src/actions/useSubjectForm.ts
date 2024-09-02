// src/actions/useSubjectForm.ts

import { useState } from "react";
import { addSubject } from "@/models/SubjectModel";
import { Subject } from "@/interface/Subjects";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase"; // Your Firebase configuration file

export const useSubjectForm = () => {
  const [loading, setLoading] = useState(false);

  const handleUploadBanner = async (file: File) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `banners/${file.name}`);
    await uploadBytes(storageRef, file);
    const bannerUrl = await getDownloadURL(storageRef);
    return bannerUrl;
  };

  const handleSubmit = async (subject: Subject, file?: File) => {
    setLoading(true);
    try {
      if (file) {
        const bannerUrl = await handleUploadBanner(file);
        subject.bannerUrl = bannerUrl;
      }
      const subjectId = await addSubject(subject);
      setLoading(false);
      return subjectId;
    } catch (error) {
        setLoading(false);
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("An unexpected error occurred.");
        }
      }
  };

  return { handleSubmit, loading };
};
