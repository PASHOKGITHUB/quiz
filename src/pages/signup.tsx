import SignUpForm from '@/components/Auth/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
