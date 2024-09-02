import SubjectCard from "./SubjectCard";

const SubjectGrid = () => {
  const subjects = [
    {
      subjectName: "English",
      subjectCode: "EN01",
      professorName: "Prof. Michelle",
      imageUrl: "/images/english.jpg",
    },
    {
      subjectName: "Tamil",
      subjectCode: "TA02",
      professorName: "Prof. Michelle",
      imageUrl: "/images/tamil.jpg",
    },
    // Add more subjects here
  ];

  return (
    <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.subjectCode}
          subjectName={subject.subjectName}
          subjectCode={subject.subjectCode}
          professorName={subject.professorName}
          imageUrl={subject.imageUrl}
        />
      ))}
    </div>
  );
};

export default SubjectGrid;
