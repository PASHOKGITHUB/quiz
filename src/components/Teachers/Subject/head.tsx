import React, { useState } from 'react';
import Link from 'next/link';
import { FiGrid } from 'react-icons/fi';
import AddSubjectForm from './AddSubjectForm';

interface HeaderProps {
    subjectCount: number;
    questionCount: number;
    onAddSubject: () => void;
}

const Header: React.FC<HeaderProps> = ({ subjectCount, questionCount, onAddSubject }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false); // State to manage the drawer visibility

    const handleAddSubjectClick = () => {
        setDrawerOpen(true); // Open the drawer when the button is clicked
        onAddSubject(); // Call the provided `onAddSubject` handler if needed
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false); // Close the drawer when clicking outside or a close button
    };

    return (
        <div className="flex flex-col mb-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Subject & Question</h1>
                <div className="flex items-center">
                    <FiGrid className="text-2xl mr-4 cursor-pointer" />
                    <button 
                        onClick={handleAddSubjectClick} 
                        className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition"
                    >
                        + Add Subject
                    </button>
                </div>
            </div>
            <div className="flex space-x-6 mt-4">
                <Link href="/subjects">
                    Subject ({subjectCount})
                </Link>
                <Link href="/questions">
                    Question ({questionCount})
                </Link>
            </div>

            {/* Drawer for Add Subject Form */}
            {isDrawerOpen && (
            <div className="fixed justify-end inset-0 z-50 flex">
                {/* Overlay */}
                <div 
                className="fixed inset-0 bg-black opacity-30" 
                onClick={handleCloseDrawer} // Close drawer when clicking outside
                ></div>
                
                {/* Drawer Content */}
                <div className="bg-white w-96 h-full shadow-xl p-6 transform transition-transform duration-500 ease-in-out translate-x-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add Subject</h2>
                    <button onClick={handleCloseDrawer} className="text-black text-xl">
                    &times;
                    </button>
                </div>

                {/* Render AddSubjectForm directly inside the drawer */}
                <AddSubjectForm onClose={handleCloseDrawer} />
                </div>
            </div>
            )}

        </div>
    );
};

export default Header;
