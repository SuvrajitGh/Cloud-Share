import Features from "@/components/Features";
import Footers from "@/components/Footers";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Build Your New{" "}
              <span className="text-blue-600 dark:text-blue-400">Cloud</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <Link
                href="/datadrop"
                className="block px-5 py-2 text-sm font-semibold tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                Drop here
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div className="w-full h-full relative">
            <Image
              src="/heroImg.jpg"
              alt="Your Alt Text"
              layout="fill"
              objectFit="cover"
            />
            <div className="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
      <Features />
      <Footers />
    </>
  );
}

export default Home;
