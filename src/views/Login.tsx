// // src/pages/Login.jsx
// import React, { useEffect, useState } from "react";
// import TextField from "../components/TextField";
// import { Form, Formik } from "formik";
// import { useLocation, useNavigate } from "react-router-dom";

// export interface IForm {
//   username: string;
//   password: string;
// }
// export default function Login() {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   useEffect(() => {
//     if (pathname === "/login") {
//       const user = localStorage.getItem("user");
//       if (user) {
//         navigate("/");
//       }
//     }
//   }, [pathname]);
//   const handleLogin = (values: IForm) => {
//     const username = "fin";
//     const password = "1270";
//     console.log(values);

//     if (username === values.username && password === values.password) {
//       const jsonString = JSON.stringify(values);
//       const encoded = btoa(encodeURIComponent(jsonString));
//       localStorage.setItem("user", encoded);
//       navigate("/");
//     } else {
//       alert("ไม่พบข้อมูล");
//     }
//   };

//   return (
//     <section className="w-full h-full flex justify-center">
//       <Formik
//         enableReinitialize
//         initialValues={{
//           username: "",
//           password: "",
//         }}
//         onSubmit={(values: IForm) => handleLogin(values)}
//       >
//         {({ setFieldValue, values }) => (
//           <Form>
//             <div className="flex flex-col items-center">
//               <h2 className="font-bold text-2xl">Login</h2>
//               <div className="px-4 py-2">
//                 <TextField
//                   className="p-2 outline-slate-400 rounded-md"
//                   title="username"
//                   type="text"
//                   name="username"
//                   value={values.username}
//                   onChange={(value: string) => setFieldValue("username", value)}
//                 />
//               </div>

//               <div className="px-4 py-2">
//                 <TextField
//                   className="p-2 outline-slate-400 rounded-md"
//                   title="password"
//                   type="password"
//                   name="password"
//                   value={values.password}
//                   onChange={(value: string) => setFieldValue("password", value)}
//                 />
//               </div>
//               <button
//                 className="bg-blue-950 p-2 px-3 rounded-lg text-white mt-4 w-fit hover:bg-blue-950/80"
//                 type="submit"
//               >
//                 Login
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </section>
//   );
// }
