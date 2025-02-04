/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import ProjectCard from "./cards/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Hospital Management",
    date: "Nov 2023 - Dec 2023",
    description:
      "Hospital Management website to manage the patient data",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/hospital%20management.png?alt=media&token=b7798802-0cec-44ff-90c2-6912b07702d2",
    tags: ['django','jinja2','css','sqlite'],
    category: "web app",
    github: "https://github.com/yJoelhenry7/HospitalManagement",
    webapp: "https://hospital-management-lime.vercel.app/",
  },
  {
    id: 2,
    title: "SpendSync",
    date: "Sept 2023 - Sept 2023",
    description:
      "Spend Sync is an Expense Tracker which tracks your personal Expenses",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/SpendSync.png?alt=media&token=c625cb04-7931-47cb-85c1-6bc0846e355f",
    tags: ['MongoDB','Express JS','React Js', 'Node JS', 'Context-API'],
    category: "web app",
    github: "https://github.com/yJoelhenry7/SpendSync",
    webapp: "https://spendsync.netlify.app/",
  },
    {
      id: 3,
      title: "Todo Web Application",
      date: "April 2023 - April 2023",
      description:
        "Todo Manager Web App to Track your TODO Tasks",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/Todo%20Webapp.jpeg?alt=media&token=80912755-c86b-4f0e-b5b6-a17417a4f11c",
      tags: ['Express Js', 'Embedded Javascript','Passport Js' ,'PostgreSQL'],
      category: "web app",
      github: "https://github.com/yJoelhenry7/Todo",
      webapp: "https://todo-web-application-unse.onrender.com/",
    },
    {
      id: 4,
      title: "Translate-Mate",
      date: "Feb 2023 - Feb 2023",
      description:
        "Translate Mate is an Andriod app which takes the input text and convert it into preferred Language",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/translate%20mate.jpg?alt=media&token=279b2ed5-7ddb-409d-84f8-3603dbb0e5c9",
      tags: ['Java','Android Studio','XML','Firebase ML Kit'],
      category: "android app",
      github: "https://github.com/yJoelhenry7/Translate-Mate",
      webapp: "",
    },
    {
      id: 5,
      title: "Shoe Stop",
      date: "Oct 2022 - Nov 2022",
      description:
        "Shoe Stop is an Ecommerce Website which is a online store built specifically for shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/shoe%20stop.png?alt=media&token=fda2ea85-8e40-4c20-9d0d-eb7c2085c9dd",
      tags: ['Node Js', 'Express Js', 'Embedded JavaScript(EJS)','Firebase'],
      category: "web app",
      github: "https://github.com/yJoelhenry7/Shoe-Stop",
      webapp: "https://shoe-stop-e-commerce.onrender.com",
    },

    // {
    //   id: 2,
    //   title: "",
    //   date: "",
    //   description:
    //     "",
    //   image:
    //     "",
    //   tags: [],
    //   category: "",
    //   github: "",
    //   webapp: "",
    //   member: [
    //     {
    //       name: "",
    //       img: "",
    //       linkedin: "",
    //       github: "",
    //     },
    //     {
    //       name: "",
    //       img: "",
    //       linkedin: "",
    //       github: "",
    //     },
    //   ],
    // },
  
  ];
  


const ProjectContainer = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    const btnstyle ='py-2 px-4'
    const activeStyle = 'py-2 px-4 bg-purplish bg-opacity-40 rounded-md'
  return (
    <div className="pt-16 text-white flex justify-center items-center flex-col" style={{background:'linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%)'}}>
        <h1 className="text-4xl m-4 font-bold">Projects</h1>
        <p className="w-1/3 text-center opacity-60 mb-3">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div className="border-purplish border text-purplish rounded-xl flex m-8">
            { toggle === 'all' ? <button className={activeStyle} onClick={() => setToggle('all')}>All </button> : <button className={btnstyle} onClick={() => setToggle('all')}>All </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'web app' ? <button className={activeStyle} onClick={() => setToggle('web app')}>WEB APP'S </button> : <button className={btnstyle} onClick={() => setToggle('web app')}>WEB APP'S </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'android app' ? <button className={activeStyle} onClick={() => setToggle('android app')}>ANDROID APP'S</button> : <button className={btnstyle} onClick={() => setToggle('android app')}>ANDROID APP'S </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'machine learning' ? <button className={activeStyle} onClick={() => setToggle('machine learning')}>MACHINE LEARNING </button> : <button className={btnstyle} onClick={() => setToggle('machine learning')}>MACHINE LEARNING </button> }
        </div>
        <div className="flex justify-center items-center flex-wrap w-3/4">
            {toggle === 'all' && projects
                .map((project, index) => (
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
            {projects
                .filter((item) => item.category == toggle)
                .map((project, index) => (
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
        </div>
    </div>
  )
}

export default ProjectContainer
