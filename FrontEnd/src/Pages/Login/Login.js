// import "./Login.css";
// import * as Yup from "yup";
// import { Formik, Form } from "formik";
// import { Link } from "react-router-dom";
// import LoginInput from "../../Components/inputs/loginInputs/loginInputs";
// import { useState } from "react";
// const loginInfos = {
//   email: "",
//   password: "",
// };
// export default function Login() {
//   const [login, setLogin] = useState(loginInfos);
//   const { email, password } = login;
//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLogin({ ...login, [name]: value });
//   };
//   const loginValidation = Yup.object({
//     email: Yup.string()
//       .required("Email address is required.")
//       .email("Must be a valid email address"),
//     password: Yup.string().required("Please enter your password."),
//   });
//   return (
//     <div className="login">
//       <div className="login_wrapper">
//         <div className="login_wrap">
//           <div className="login_1">
//             <img
//               className="Main_logo"
//               src="../../icons/logoVibePro-removebg-preview.png"
//               alt=""
//             />
//             <span>
//               Vibe Pro lets you connect and share with the people in your life.
//             </span>
//           </div>
//           <div className="login_2">
//             <div className="login_2_wrap">
//               <Formik
//                 enableReinitialize
//                 initialValues={{
//                   email,
//                   password,
//                 }}
//                 validationSchema={loginValidation}
//               >
//                 {(formik) => (
//                   <Form>
//                     <LoginInput
//                       onChange={handleLoginChange}
//                       type="text"
//                       name="email"
//                       placeholder="Email address or phone number"
//                     />
//                     <LoginInput
//                       onChange={handleLoginChange}
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       bottom
//                     />
//                     <button type="submit" name="password" className="blue_btn">
//                       Login
//                     </button>
//                   </Form>
//                 )}
//               </Formik>
//               <Link to="/forgot" className="forgot_password">
//                 Forgotten password ?
//               </Link>
//               <div className="sign_splitter"></div>
//               <button className="blue_btn open_signup">Create Account</button>
//             </div>
//             <Link to="/" className="sign_extra">
//               <b>Create a page </b>
//               for a celebrity, brand or business.
//             </Link>
//           </div>
//         </div>
//         <div className="register"></div>
//       </div>
//     </div>
//   );
// }
