import { FaFacebook, FaGitAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F6]">
      <div className="container">
        <div className="grid lg:grid-cols-5 grid-cols-12 gap-6 py-12">
          <div className="lg:col-span-2 col-span-12 text-center lg:text-left">
            <a href="index.html">
              <h1 className="xl:text-4xl text-xl font-bold text-black uppercase">
                Show<span className="text-[#7e22ce]">Case</span>
              </h1>
            </a>
            <p className="text-gray-500/80 mt-5 lg:w-4/5">
              Make your web application stand out with high-quality landing page
            </p>
          </div>

          <div className="lg:col-span-3 col-span-12 text-center lg:text-left">
            <div className="lg:flex gap-[30px] justify-between">
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 mt-3 md:mt-0 uppercase">Platform</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Demo</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Pricing</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Integrations</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Status</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 mt-3 md:mt-0 uppercase">
                    Knowledge Base
                  </h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Blog</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Help Center</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Sales Tools catalog</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">API</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 mt-3 md:mt-0 uppercase">Company</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">About us</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Career</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Contact Us</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 mt-3 md:mt-0 uppercase">Legal</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Usage Policy</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Privacy Policy</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Terms of Service</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Trust</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="grid md:grid-cols-2 text-center md:text-start gap-6">
            <div>
              <p className="text-gray-500/80 text-sm">
                @ 2023 All rights reserved. Crafted by Ostad
              </p>
            </div>
            <div className="flex justify-center md:justify-end gap-5">
              <div>
                <a href="#">
                  <FaFacebook className="text-[24px] text-gray-600" />
                </a>
              </div>
              <div>
                <a href="#">
                  <FaTwitter className="text-[24px] text-gray-600" />
                </a>
              </div>
              <div>
                <a href="#">
                  <FaGitAlt className="text-[24px] text-gray-600" />
                </a>
              </div>
              <div>
                <a href="#">
                  <FaLinkedinIn className="text-[24px] text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
