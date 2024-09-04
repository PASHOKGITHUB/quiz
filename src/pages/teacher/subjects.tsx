import Sidebar from "@/components/Teachers/Sidebar";
import Header from "@/components/Teachers/Subject/Header";
import SubjectGrid from "@/components/Teachers/Subject/SubjectGrid";

const SubjectsPage = () => {
  return (
    <div className="flex-1 h-screen">
      <Header />     
      <div className=" flex flex-col-2">
        <Sidebar />
        <main className="p-6 flex-grow overflow-auto">
          {/* <h1 className="text-2xl font-semibold mb-4">Subjects</h1> */}
          <SubjectGrid />
        </main>
      </div>
    </div>
  );
};

export default SubjectsPage;


