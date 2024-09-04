import React from 'react';
import { Subject } from '@/interface/Subjects';

interface SubjectCardProps {
    subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
    return (
        <div>
            <h2>{subject.subjectTitle}</h2>
            <p>{subject.subjectCode}</p>
        </div>
    );
};

export default SubjectCard;
