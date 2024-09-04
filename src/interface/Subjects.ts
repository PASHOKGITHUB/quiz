// src/interfaces/SubjectInterface.ts

export interface Subject {
    subjectCode: string;
    subjectTitle: string;
    category: string;
    bannerUrl?: string; // URL of the uploaded banner image
}
