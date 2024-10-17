import Image from "next/image";
import Menu from "@/app/public/menu.svg";
import Link from "next/link";
import Figma from "@/app/public/claimtrade-figma.png";

import Sample1 from "@/app/public/claimtrade-sample-1.png";
import Sample2 from "@/app/public/claimtrade-sample-2.png";
import Sample3 from "@/app/public/claimtrade-sample-3.png";
import Sample4 from "@/app/public/claimtrade-sample-4.png";
import Sample5 from "@/app/public/claimtrade-sample-5.png";
import Sample6 from "@/app/public/claimtrade-sample-6.png";
import Sample7 from "@/app/public/claimtrade-sample-7.png";

import Background1 from "@/app/public/1.png";

import LinkedIn from "@/app/public/linkedin-3.svg";
import Github from "@/app/public/gmail-3.svg";
import Email from "@/app/public/github-3.svg";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Header */}
      <header className="flex border-b-[1px] border-white w-screen justify-between items-center p-2 h-16 fixed top-0 bg-orange-700 z-50">
        <div className="flex items-center h-full justify-evenly w-1/2 md:w-1/4 lg:w-2/12">
          <h2 className="text-lg text-nowrap font-bold md:text-xl">
            ClaimTrade Portfolio
          </h2>
        </div>

        {/* Menu - not desktop view */}
        <details className="dropdown mr-4 md:hidden">
          <summary className="btn m-1">
            <Image src={Menu} alt={"Menu-lines"} />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-36 p-2 shadow fixed -right-1 top-14">
            <li>
              <Link href={"#intro"}>Introduction</Link>
            </li>
            <li>
              <Link href={"#overview"}>Overview</Link>
            </li>
            <li>
              <Link href={"#stack"}>Tech Stack</Link>
            </li>
            <li>
              <Link href={"#photos"}>Photos</Link>
            </li>
            <li>
              <Link href={"#feedback"}>Photos</Link>
            </li>
          </ul>
        </details>

        {/* Menu - Desktop view */}
        <menu className="hidden md:flex md:w-3/5 lg:w-2/5">
          <ul className="flex w-full justify-evenly">
            <li>
              <Link href={"#intro"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Introduction
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#overview"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Overview
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#stack"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Tech Stack
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#photos"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Photos
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#feedback"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Feedback
                </p>
              </Link>
            </li>
          </ul>
        </menu>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero */}
        <div className="w-full h-screen relative">
          <Image
            src={Background1}
            alt="figma-mockup-hero"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-50"
            priority
          />

          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <h1 className="text-white text-center text-xl font-bold md:text-2xl">
              ClaimTrade Portfolio
            </h1>
            <p className="text-center md:text-lg">
              A journey through the development process
            </p>
            <p className="text-sm italic text-center md:text-base">
              By Raul Calero
            </p>
          </div>
        </div>

        {/* Intro */}
        <div
          id="intro"
          className="flex flex-col items-center justify-center h-screen w-full p-4 bg-gradient-to-b from-white/20 via-black to-black"
        >
          <h2 className="text-lg font-bold md:text-xl">Introduction</h2>
          <Image
            src={Sample6}
            alt="figma-mockup-hero"
            className="my-4 border-[1px] border-white/35 rounded-md shadow-md shadow-foreground md:w-3/4 lg:w-1/2"
          />
          <p className="text-center mb-4 md:w-3/4 lg:w-1/2">
            My role in the project as a Senior Full Stack was to take an idea of
            a claim trading marketplace and bring it to life from end-to-end.
          </p>
          <h3 className="font-bold">Key Responsibilities</h3>
          <ul className="list-disc">
            <li>Front-End and Backend Development</li>
            <li>Deployment and DNS/Domain Configuration</li>
            <li>Coaching and Training of Junior Dev</li>
            <li>Architecting Structure of Database</li>
          </ul>
        </div>

        {/* Overview */}
        <div
          id="overview"
          className="flex flex-col items-center justify-center h-screen w-full px-4 pb-16 bg-gradient-to-b from-black via-white/30 to-white/30"
        >
          <h2 className="text-lg font-bold mb-2 md:text-xl">
            Project Overview
          </h2>
          <div className="flex p-2 flex-col items-center justify-center text-center bg-black/60 w-3/4 h-fit rounded-lg my-2 border-[1px] border-white/40 lg:w-1/2 lg:p-4">
            <h3 className="mb-2 font-bold">Problem Statement</h3>
            <p className="italic">
              ClaimTrade is a land trading marketplace designed for users to
              sell mining rights and for investors to discover and purchase
              claims.
            </p>
          </div>
          <div className="flex p-2 flex-col items-center justify-center bg-black/60 w-3/4 h-fit rounded-lg my-2 border-[1px] border-white/40 lg:w-1/2 lg:p-4">
            <h3 className="mb-2 font-bold">Solution</h3>
            <ul>
              <li>
                <span className="underline underline-offset-2">
                  User Access:
                </span>{" "}
                Secure login and roles.
              </li>
              <li>
                <span className="underline underline-offset-2">Listings:</span>{" "}
                Manage and showcase claims.
              </li>
              <li>
                <span className="underline underline-offset-2">Search:</span>{" "}
                Advanced search and filters.
              </li>
              <li>
                <span className="underline underline-offset-2">Backend:</span>{" "}
                Scalable APIs.
              </li>
              <li>
                <span className="underline underline-offset-2">Frontend:</span>{" "}
                Responsive UI.
              </li>
              <li>
                <span className="underline underline-offset-2">
                  Deployment:
                </span>{" "}
                Vercel & AWS.
              </li>
              <li>
                <span className="underline underline-offset-2">Security:</span>{" "}
                HTTPS & encryption.
              </li>
            </ul>
          </div>
          <div className="flex p-2 flex-col items-center justify-center bg-black/60 w-3/4 h-1/4 rounded-lg my-2 border-[1px] border-white/40 lg:w-1/2 lg:p-4">
            <h3 className="mb-2 font-bold">Key Highlights</h3>

            <ul className="list-disc">
              <li>User authentication with JWT</li>
              <li>SPA and responsive design</li>
              <li>Integration with AWS services</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          id="stack"
          className="flex flex-col items-center justify-center h-screen w-full border-[1px] p-4 bg-gradient-to-tr from-red-700/50 via-sky-800/50 to-purple-800/50"
        >
          <h2 className="text-lg font-bold mb-2 md:text-xl">Tech Stack</h2>
          <div className="border-[1px] my-2 rounded-lg w-3/4 flex items-center flex-col p-2 md:w-1/2 lg:w-1/4">
            <li className="list-none underline underline-offset-2">Frontend</li>
            <ul className="list-disc">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>DaisyUI</li>
            </ul>
          </div>
          <div className="border-[1px] my-2 rounded-lg w-3/4 flex items-center flex-col p-2 md:w-1/2 lg:w-1/4">
            <li className="list-none underline underline-offset-2">Backend</li>
            <ul className="list-disc">
              <li>Node.js</li>
              <li>JWT</li>
              <li>REST API</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="border-[1px] my-2 rounded-lg w-3/4 flex items-center flex-col p-2 md:w-1/2 lg:w-1/4">
            <li className="list-none underline underline-offset-2">
              Deployment
            </li>
            <ul className="list-disc">
              <li>{`AWS (RDS, EC2, S3)`}</li>
              <li>Vercel</li>
              <li>DNS/Domain</li>
              <li>HTTP/HTTPS</li>
            </ul>
          </div>
        </div>

        {/* Photos and Feedback */}
        <div className="flex flex-col items-center justify-center h-fit w-full px-4 pt-10 pb-16 bg-gradient-to-tr from-blue-700/50 via-teal-800/50 to-green-800/50">
          <h2 id="photos" className="text-lg font-bold mb-2 md:text-xl">
            Sample Photos
          </h2>
          <div className="carousel w-full bg-black border-[1px] border-white/30 rounded-lg md:w-3/4 lg:w-1/2">
            <div
              id="Sample1"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Sample1}
                alt="Sample 1"
                priority // Ensures faster loading for images above the fold
                className="object-contain"
                fill // Uses the new 'fill' prop
              />
            </div>
            <div
              id="Sample2"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Sample2}
                alt="Sample 2"
                className="object-contain"
                fill
              />
            </div>
            <div
              id="Sample3"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Sample3}
                alt="Sample 3"
                className="object-contain"
                fill
              />
            </div>
            <div
              id="Sample4"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Sample4}
                alt="Sample 4"
                className="object-contain"
                fill
              />
            </div>
            <div
              id="Sample5"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Sample5}
                alt="Sample 5"
                className="object-contain"
                fill
              />
            </div>
            <div
              id="Figma"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Figma}
                alt="Figma Mockup"
                className="object-contain"
                fill
              />
            </div>
            <div
              id="Sample7"
              className="carousel-item w-full relative"
              style={{ height: "300px" }}
            >
              <Image
                src={Sample7}
                alt="Sample 7"
                className="object-contain"
                fill
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2 mb-10">
            <a href="#Sample1" className="btn">
              1
            </a>
            <a href="#Sample2" className="btn">
              2
            </a>
            <a href="#Sample3" className="btn">
              3
            </a>
            <a href="#Sample4" className="btn">
              4
            </a>
            <a href="#Sample5" className="btn">
              5
            </a>
            <a href="#Figma" className="btn">
              6
            </a>
            <a href="#Sample7" className="btn">
              7
            </a>
          </div>

          <div className="divider"></div>

          {/* Feedback */}
          <h2 id="feedback" className="text-lg font-bold my-4 md:text-xl">
            Feedback
          </h2>
          <div className="bg-slate-700 flex flex-col items-center p-2 rounded-lg shadow-xl shadow-background mb-4 md:w-3/4 md:p-4 lg:w-1/2 lg:my-6">
            <h3 className="underline underline-offset-2">Client</h3>
            <p className="italic text-sm">
              {`"I am privileged to write this recommendation for Raul, a developer
            whose performance and demeanor have consistently impressed me. In
            the realm of software development, Raul exemplifies the qualities of
            a true professional, combining technical expertise with a uniquely
            charming and humble approach to his work. Raul possesses a
            remarkable ability to tackle complex backend and server-related
            challenges with ease. His approach to problem-solving is not only
            efficient but also characterized by a deep understanding of the
            intricacies involved. When given a task, Raul's dedication and focus
            are akin to a skilled running back; he takes the initiative and
            propels the project forward with determination and finesse. One of
            the most noteworthy aspects of Raul's work is his foresight in
            planning and development. From the onset of a project, he
            demonstrates an exceptional grasp of the objectives and
            requirements, which allows for the swift and effective development
            of applications. Moreover, Raul has a unique ability to anticipate
            future needs and expansions, thoughtfully designing solutions that
            accommodate longer-term scaling and the seamless integration of
            potential additions. This strategic approach not only enhances the
            project's current functionality but also ensures its adaptability
            and growth over time. Raul's expertise and proactive attitude,
            combined with his calm humble nature, make him a standout developer.
            His contributions are not just limited to immediate project needs
            but are designed with a vision for future development and success.
            It is with great confidence and admiration that I recommend Raul to
            any team looking for a talented developer with a forward-thinking
            approach and a commendable work ethic. His contributions extend
            beyond code; they encompass a mindset geared towards excellence and
            growth."`}
            </p>
          </div>

          <div className="bg-slate-700 flex flex-col items-center p-2 rounded-lg shadow-xl shadow-background mb-4 md:w-3/4 md:p-4 lg:w-1/2 lg:my-6">
            <h3 className="underline underline-offset-2">Co-Developer</h3>
            <p className="italic text-sm">
              {`"Raul is an exceptional software engineer whose talent and dedication have left a lasting impression on me, as his Lead Backend Developer. His unwavering initiative and sense of responsibility are unparalleled, making him an invaluable asset to any team.

I am genuinely surprised and feel incredibly fortunate to have Raul leading on the backend. Although he entered the project with limited experience on AWS, within a few weeks, Raul embraced the challenge head-on and learned on the job, resulting in successful deployment and thorough testing of the backend. Moreover, Raul demonstrates exceptional attention to the security aspects of the database. He consistently takes ownership of his work and tirelessly seeks optimal solutions through experimentation and testing.

Beyond his outstanding technical skills, Raul's organizational prowess has been evident throughout the project. During the planning phase, he meticulously organized the database schema and sketched out API routes, accompanied by exceptional documentation, facilitating seamless collaboration within the team.

It has been an absolute pleasure collaborating with Raul, and I have no doubt that he will continue to excel in his career."`}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <div>
          <h1 className="text-xl font-bold">ClaimTrade Portfolio</h1>
          <p className="italic">Created by Raul Calero</p>
        </div>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link href={"/"}>
            <Image src={LinkedIn} alt="linkedin" />
          </Link>
          <Link href={"/"}>
            <Image src={Github} alt="linkedin" />
          </Link>
          <Link href={"/"}>
            <Image src={Email} alt="linkedin" />
          </Link>
        </nav>
      </footer>
    </div>
  );
}
