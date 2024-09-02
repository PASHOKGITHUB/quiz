import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SubjectCardProps {
  subjectName: string;
  subjectCode: string;
  professorName: string;
  imageUrl: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subjectName, subjectCode, professorName, imageUrl }) => {
  return (
    <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={imageUrl}
          alt={subjectName}
          className="object-cover w-full h-40 rounded-t-lg"
          loading="lazy"  // Adds lazy loading to improve performance
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="text-lg font-semibold">{subjectName}</div>
        <div className="text-sm text-gray-500">{subjectCode}</div>
        <div className="flex items-center mt-2 space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm text-gray-700">{professorName}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
