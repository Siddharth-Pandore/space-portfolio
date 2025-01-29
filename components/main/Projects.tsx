import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/code-smith.png"
          link="https://code-smith-saas-code-editor-a6esi973v.vercel.app/"
          title="CodeSmith-SAAS Code Editor"
          description="A Full Stack Code Editor with features like code execution, Adding/Sharing Snippets, multiple Programming languages support, User Authentication with clerk, Convex DB, Webhooks, Zustand, Framer Motion, TailwindCSS, Piston API, Payment with Lemon Squeezy, etc."
        />
        <ProjectCard
          src="/Hi-Me.png"
          link="https://next-social-media-app-rho.vercel.app/"
          title="Hi-Me"
          description="Next Gen Social Media Application with create posts, likes, comment, Upload image, updating profile, signup, signin functionality. Tech used NextJs, Neon, Postgres, TailwindCSS, Typescript, Shadcn, etc."
        />
        <ProjectCard
          src="/HeartSwipe.png"
          link="https://heart-swipe.onrender.com"
          title="HeartSwipe"
          description="Tinder Clone: A responsive mobile app featuring JWT auth, user Signup/Login/Logout, Zustand, Tailwind, Profile image upload, Swipe Right/Left, Real-time chat (socket.io), notifications, matching algorithm, and mobile-friendly design."
        />
        <ProjectCard
          src="/ChatBuzz_Homepage.png"
          link="https://fullstack-chat-app-hiww.onrender.com"
          title="ChatBuzz"
          description="Realtime Chat App with Signup, Login and Logout facilities, Multiple themes, Profile Picture update, Online users toggle switch, MongoDB, Cloudinary, CORS, TailwindCSS, DaisyUI, Axios, Lucid-react & Socket.io"
        />
        <ProjectCard
          src="/Anime_Webpage.png"
          link="https://anime-gaming-website.netlify.app/"
          title="Anime_Gaming_Webpage"
          description="Award Winning Website is build using React, Vite, Tailwind, react-icons, GSAP. It is a clone of Award Winning Website Zentry."
        />
      </div>
    </div>
  );
};

export default Projects;
