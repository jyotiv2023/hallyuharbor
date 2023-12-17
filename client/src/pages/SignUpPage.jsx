const SignUpPage = () => {
  return (
    <div className="margin-auto">
      <input
        label="name"
        type="email"
        className=" border border-[#444] margin-auto"
      />
      <input label="password" type="password" />
      <input label="confirm password" type="password" />
      <button>Sign up</button>
    </div>
  );
};

export default SignUpPage;
