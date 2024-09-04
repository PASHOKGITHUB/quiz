// src/components/SubjectsPage.tsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Header from './head';
import SubjectCard from './SubjectCard';
import { Subject } from '@/interface/Subjects';

const SubjectsPage = () => {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'subjects'));
                const subjectsData: Subject[] = querySnapshot.docs.map(doc => doc.data() as Subject);
                setSubjects(subjectsData);
            } catch (error) {
                console.error("Error fetching subjects: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubjects();
    }, []);

    const handleAddSubject = () => {
        // Logic for adding a new subject, e.g., opening a modal or redirecting to a new page
    };

    return (
        <div className="p-6">
            <Header
                subjectCount={subjects.length}
                questionCount={15} // Replace with dynamic question count
                onAddSubject={handleAddSubject}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading ? (
                    <p>Loading...</p>
                ) : subjects.length === 0 ? (
                    <p>No subjects found.</p>
                ) : (
                    subjects.map(subject => (
                        <SubjectCard key={subject.subjectCode} subject={subject} />
                    ))
                )}
            </div>
        </div>
    );
};

export default SubjectsPage;
