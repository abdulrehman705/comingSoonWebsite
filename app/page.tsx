'use client'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useGetUsers } from "./hook/queries";
import { emailSchema } from "./validation/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import CompanyLogo from "@/app/assets/Company logo.png";
import EmployeeImage from "@/app/assets/employeeImage.jpg";
import Timer from "./components/timer";

type FormData = z.infer<typeof emailSchema>;

const ComingSoon = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(emailSchema),
  });
  const { data: team, isLoading, error: isError } = useGetUsers();

  const onSubmit = (data: FormData) => {
    alert(`Subscription successful for email: ${data.email}`);
  };

      console.log("isloading", isLoading);


  return (
    <div className="flex flex-col justify-center min-h-screen bg-black text-white px-6 md:px-16 lg:px-32">
      <header className="flex flex-col md:flex-row justify-between items-center w-full py-12 md:py-24">
        <Image src={CompanyLogo} width={150} height={150} alt="company logo" />
        <div className="font-mono text-xl mt-6 md:mt-0">
          Say hello! syedhaider.saim@ezwage.com
        </div>
      </header>

      <main className="flex flex-col items-center">
        <h1 className="font-bold mb-4 text-4xl md:text-6xl lg:text-8xl font-poppins text-center md:w-2/3">
          We Are Coming Soon
        </h1>
        <div className="flex flex-col md:flex-row py-10 items-center md:items-start">
          <Timer endDate={new Date("2024-12-31T00:00:00")} />
          <p className="mt-6 md:mt-0 text-center md:text-left mb-4 text-base md:text-xl font-mono text-slate-400 w-full md:w-2/4">
            We’re strong believers that the best solutions come from gathering
            new insights and pushing conventional boundaries.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 md:mt-0">
          <u>Our</u> Real Hero
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-center md:text-left w-full md:w-2/4 my-10">
          Every month, amounts of Projects handover by this genius team.
        </p>
        <div className="flex flex-wrap justify-center md:justify-evenly w-full">
          {isLoading ? (
            <div className="mb-10 md:mx-4">Loading...</div>
          ) : isError ? (
            <div className="mb-10 md:mx-4">Error fetching data</div>
          ) : (
            team?.map((member: any) => (
              <div key={member.id} className="mb-10 md:mb-20 mx-4">
                <Image
                  src={EmployeeImage}
                  width={200}
                  height={200}
                  alt={member.name}
                  className="mb-2 rounded-full"
                />
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-slate-400 text-center">{member.website}</p>
              </div>
            ))
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row items-center w-full md:w-2/3 lg:w-1/2"
        >
          <input
            type="email"
            {...register("email")}
            className="p-2 mb-4 md:mb-0 md:mr-4 rounded text-black w-full md:w-2/3"
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="w-full md:w-1/3 p-2 rounded bg-blue-500 hover:bg-blue-400"
          >
            Subscribe
          </button>
        </form>
        {errors?.email && (
          <p className="text-red-500">{errors?.email?.message}</p>
        )}
      </main>

      <footer className="flex flex-col md:flex-row justify-between items-center w-full p-4 mt-10 md:mt-20">
        <div>
          Part of <span className="text-slate-400 cursor-pointer">EzWage</span>
        </div>
        <div>
          Designed and Developed by{" "}
          <span className="text-slate-400 cursor-pointer">Abdul Rehman</span>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
