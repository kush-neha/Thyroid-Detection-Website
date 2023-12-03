import { Login } from "../components/login/login";
import { Register } from "../components/login/register";

export const Body = () => {
  const isLogin = false;
  return (
    <>
   {   isLogin && <Login />}
      <Register />
    </>
  );
};
