import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { FaCheck, FaPlay, IconName } from "react-icons/fa";

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[#F4F7FE] relative py-24">
        <div className="py-5">
          <div className="container relative">
            <div className="text-center">
              <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
              <p className="text-gray-500">
                Pricing that <span className="text-theme">works </span> for
                everyone
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-7 mt-14">
              {/* 1 */}

              <div className="">
                <div className=" rounded-xl bg-white  w-full h-full text-center px-[40px] py-[60px]">
                  <span className="text-lg text-theme">Starter</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup>
                    49
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="grid gap-6">
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Up to 600 minutes usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Use for personal only
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Add up to 10 attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-[120px]">
                      <a
                        href="#"
                        className="bg-theme/10 text-theme/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-theme/20 transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div>
                <div className="rounded-xl bg-white  w-full h-full text-center px-[40px] py-[60px]">
                  <span className="text-lg text-theme">Professional</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup>
                    99
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="grid gap-6">
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Up to 6000 minutes usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Add up to 100 attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Up to 5 teams
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-20">
                      <a
                        href="#"
                        className="bg-theme text-white w-full py-3 rounded-lg border border-transparent hover:shadow-lg hover:shadow-theme/30 focus:shadow-none focus:outline focus:outline-theme/40 hover:border hover:border-theme transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className="rounded-xl bg-white  w-full h-full text-center px-[40px] py-[60px]">
                  <span className="text-lg text-theme">Enterprise</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup>
                    599
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Unlimited usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Add Unlimited attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        24x7 Technical support via phone
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-20">
                      <a
                        href="#"
                        className="bg-theme/10 text-theme/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-theme/20 transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
