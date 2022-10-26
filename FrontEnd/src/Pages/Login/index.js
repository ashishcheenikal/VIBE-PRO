import "./style.css";
import LoginForm from "../../Components/login/LoginForm";
import Footer from "../../Components/login/Footer";
import RegisterForm from "../../Components/login/RegisterForm";
import { useState } from "react";

export default function Login() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible}/>
        {visible && <RegisterForm setVisible={setVisible} />}
        <Footer />
      </div>
    </div>
  );
}
