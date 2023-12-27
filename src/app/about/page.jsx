import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { FaCheck, FaPlay, IconName } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <div className="py-24">
          <div className="container ">
            <div className="text-center">
              <h1 className="text-3xl font-bold">
                Any many more powerful features
              </h1>
            </div>

            <div className="py-16">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="order-1">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Hire and Retain Top Talent
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Team Management
                    </p>
                  </div>
                </div>

                <div className="order-2">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Stay Compliant
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Improve Productivity
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Improve Experience
                    </p>
                  </div>
                </div>

                <div className="order-3">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Self-service Time Tracking
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Performance Management
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Expert HR
                    </p>
                  </div>
                </div>

                <div className="order-4">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      New Hire Checklist
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Tax Calculator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center mx-auto">
              <a href="#" className="myBtn">
                Sign Up Now <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
