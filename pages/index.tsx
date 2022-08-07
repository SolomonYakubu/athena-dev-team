import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Header from "../components/Header";
import team from "../public/team.svg";
import { Zoom, Bounce } from "react-reveal";
import about from "../public/about.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BsGlobe2,
  BsSearch,
  BsFillPenFill,
  BsHammer,
  BsLaptop,
} from "react-icons/bs";
import {
  IoPhonePortraitOutline,
  IoSettingsSharp,
  IoRocketOutline,
} from "react-icons/io5";
import { BiTestTube } from "react-icons/bi";

const Home: NextPage = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: (
        <BsGlobe2
          size={60}
          className="text-white bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full"
        />
      ),
    },
    {
      title: "Mobile App Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: (
        <IoPhonePortraitOutline
          size={60}
          className="text-white bg-gradient-to-r from-red-400 to-pink-600 p-2 rounded-full"
        />
      ),
    },
    {
      title: "Desktop App Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: (
        <BsLaptop
          size={60}
          className="text-white bg-gradient-to-r from-orange-400 to-purple-600 p-2 rounded-full"
        />
      ),
    },
  ];
  const processes = [
    {
      title: "Research",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: <BsSearch size={100} className="text-white animate-bounce" />,
    },
    {
      title: "Product Design",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: <BsFillPenFill size={60} className="text-white animate-pulse" />,
    },
    {
      title: "Implementation",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: <BsHammer size={60} className="text-white animate-bounce" />,
    },
    {
      title: "Optimisation",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: <IoSettingsSharp size={60} className="text-white animate-spin" />,
    },
    {
      title: "Testing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: <BiTestTube size={60} className="text-white animate-pulse" />,
    },
    {
      title: "Deployment and Monitoring",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima exercitationem repellendus fuga quam laboriosam hic aut harum veniam aliquid.",
      icon: <IoRocketOutline size={60} className="text-white animate-bounce" />,
    },
  ];

  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        {/* <Header /> */}
        <section
          className="min-h-[calc(100vh-64px)] px-6 mb-0 pb-0 w-full bg-[#1a1a1a]"
          id="Home"
        >
          <div className="md:flex md:items-center md:justify-between md:w-full px-3 pt-8">
            <div className="pt-5 md:pt-0 md:w-6/12 ">
              <h3 className="font-extrabold text-4xl md:text-7xl text-white">
                Athenasoft
              </h3>
              <Bounce>
                <h3 className="font-extrabold pb-3 text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Technology
                </h3>
              </Bounce>
              <p className="text-white font-thin text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                neque, obcaecati ratione, temporibus doloribus, expedita
                corporis eum debitis tempora repudiandae modi!
              </p>
              <div className="flex mb-10 md:mb-0 w-5/6">
                <button
                  onClick={() => router.push("/signup")}
                  className="hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600  text-white p-3 font-bold rounded-sm mr-1 border-none w-full"
                >
                  Get Quote
                </button>
                {/* <button className=" bg-primary text-white p-3 font-bold rounded-sm border-none w-6/12">
                Sign Up
              </button> */}
              </div>
            </div>

            <Image className=" md:w-6/12 z-0" src={team} alt="illustration" />
          </div>
        </section>
        <section className="p-6  w-full bg-[#242424]" id="About">
          <h3 className=" text-center text-4xl text-white font-extrabold mb-7">
            About Us
          </h3>
          <Zoom>
            <div className="md:flex items-center justify-center">
              {" "}
              <Image src={about} alt="about" />
              <h4 className="md:w-2/3 md:text-2xl font-thin text-lg text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi necessitatibus accusantium ullam placeat amet illo quos
                vel cum ipsa, nisi repellat iste, iusto aliquam veritatis
                fugiat, officia possimus nobis optio.
              </h4>
            </div>
          </Zoom>
          <div className="md:flex "></div>
        </section>
        <section className="p-6  w-full bg-[#1a1a1a]" id="About">
          <h3 className=" text-center text-4xl text-white font-extrabold mb-7">
            Services we can help you with
          </h3>
          <div className="md:flex ">
            {services.map((item, index) => (
              <Zoom key={index}>
                <div className="bg-[#292929] shadow-lg rounded m-2 flex flex-col p-5 rounded-tr-3xl rounded-bl-3xl items-start">
                  {item.icon}
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-3xl m-1">
                    {item.title}
                  </h2>
                  <h3 className="text-white font-light text-lg">{item.desc}</h3>
                </div>
              </Zoom>
            ))}
          </div>
        </section>

        <section
          className="w-full bg-[#242424] p-3 flex flex-col items-center justify-center overflow-hidden"
          id="FAQs"
        >
          <h3 className=" text-center text-4xl text-white font-extrabold mb-7">
            Our Process
          </h3>
          <VerticalTimeline>
            {processes.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "#1a1a1a",
                  color: "#fff",
                  border: "none",
                }}
                contentArrowStyle={{
                  borderRight: "10px solid  #fff",
                }}
                // date="2011 - present"
                iconStyle={{
                  background: `${
                    // (index % 2 &&
                    // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)") ||
                    "linear-gradient(90deg, rgba(30,0,36,1) 0%, rgba(255,0,189,1) 100%)"
                  }`,
                  color: "#fff",
                }}
                icon={item.icon}
              >
                <h3 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {item.title}
                </h3>

                <h4 className="font-thin text-white text-lg">{item.desc}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        <section className="w-full overflow-hidden p-6  bg-[#1a1a1a] flex flex-col items-center justify-center">
          <div className="my-3 text-center">
            <p className="font-thin text-white text-sm">Privacy Policy</p>
            <p className="font-thin text-sm text-white">
              Copyright © 2022 Solomon. All Rights Reserved.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
