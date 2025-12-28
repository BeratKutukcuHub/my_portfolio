import DigitalSkillsProgress from "../components/digitalskills";

export interface Skill {
  title: string;
  description: string;
  percent: number;
}
const skills : Skill[] = [
  {
    title: 'C# / .NET Backend Development',
    description:
      'ASP.NET Core ile RESTful Web API geliştirme, Clean Architecture prensipleri, validation, exception handling ve logging uygulamaları.',
    percent: 78,
  },
  {
    title: 'Database & Data Access',
    description:
      'MSSQL, MongoDB ve Entity Framework Core ile veri modelleme, CRUD işlemleri ve performans odaklı veri erişimi.',
    percent: 72,
  },
  {
    title: 'React & State Management',
    description:
      'React.js ile component tabanlı arayüzler, Redux Toolkit ve RTK Query kullanarak backend servislerle entegrasyon.',
    percent: 70,
  },
  {
    title: 'Distributed Systems',
    description:
      'RabbitMQ ile event-driven sistemler, Redis ile caching stratejileri ve microservices mimarisi üzerine pratik deneyim.',
    percent: 62,
  },
  {
    title: 'DevOps & Tooling',
    description:
      'Docker (temel seviye), Git/GitHub, NPM ve container tabanlı geliştirme süreçleriyle çalışma.',
    percent: 62,
  },
];
export const Skills = () => {
    return (
        <>
        <DigitalSkillsProgress skills={skills}/>
        </>
    )
}
