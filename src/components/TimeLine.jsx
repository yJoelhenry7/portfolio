import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard'

const TimeLine = () => {
    const experiences = [
        {
          id: 0,
          img: "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/gptfu_logo-background.png?alt=media&token=b9f488e3-d2ab-45c6-b049-b19c3cbcb7fd",
          role: "Software Engineer Intern",
          company: "GPTfu",
          date: "April 2023 - Present",
          desc: "Working on GPTfu Platforms, managing Frontend, and Backend For the GPTfu Website.",
          skills: [
            "Flask","Python", "Jinja","HTML","CSS", "Bootstrap","MySQL","Postgres","PHP","WORDPRESS",
          ],
          doc: "",
        },
        {
          id: 1,
          img: "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/studyowl.jpeg?alt=media&token=f2023e5c-82c9-43f9-88fc-b67d56080fda",
          role: "FullStack Intern",
          company: "StudyOwl ",
          date: "Sept 2022 - Nov 2022",
          desc: "Worked on Frontend for an Ecommerce website using EJS and Implemented Cart Functionality  ",
          skills: [
            "Node JS" ,"Express JS","Embedded JavaScript (EJS)" ,"Cloud Firestore","Postman API","Jest" 
          ],
          doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/Full%20Stack%20Internship%20Certificate.jpg?alt=media&token=00e9be8d-d60b-4b8e-a800-b33615875912",
        },

      ];
  return (
      <Timeline align="left">
        {experiences.map((experience,index) => (
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                </TimelineSeparator>
                <TimelineContent  sx={{ py: '12px', px: 2 }}>
                    <ExperienceCard experience={experience}/>
                </TimelineContent>
            </TimelineItem>
        ))}
       </Timeline>
  )
}

export default TimeLine
