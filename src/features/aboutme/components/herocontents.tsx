export const PTag = ({content}: {content : string}) => <p >
    {content}
</p>
export const HeroContent = ({index} : {index : number}) => {
    if(index == 0) return <p style={{letterSpacing:"0.8px",wordSpacing:"2px",lineHeight:"25px", fontFamily:"unset"}} className="text-white">
Merhaba, ben Berat Kütükçü.  
Backend ağırlıklı junior full-stack geliştiriciyim. Yönetim Bilişim Sistemleri lisans eğitimimin ardından, mezuniyet sonrası farklı sektörlerde çalışırken yazılım alanında kendimi disiplinli ve sürdürülebilir bir şekilde geliştirdim.

.NET (ASP.NET Core) ile RESTful Web API’ler geliştirme, MSSQL ve MongoDB ile veri erişimi sağlama konularında deneyim sahibiyim. Frontend tarafında React.js, Redux Toolkit ve RTK Query kullanarak backend servislerle entegre, işlevsel arayüzler geliştiriyorum.

Monolith ve microservices mimarilerinde; logging, exception handling, caching ve event-driven sistemler (RabbitMQ, Redis) üzerine pratik kazandım. Gönüllü ve bireysel GitHub projeleriyle full-stack geliştirme yetkinliklerimi sürekli olarak pekiştiriyorum.  
Temiz kod, sürdürülebilir mimari ve öğrenmeye açık olmak benim için öncelik.
    </p>

    else return <p style={{letterSpacing:"0.8px",wordSpacing:"2px",lineHeight:"25px", fontFamily:"unset"}} className="text-white">
Hi, I’m Berat Kütükçü, a backend-focused junior full-stack developer. After completing my Bachelor’s degree in Management Information Systems, I worked in different sectors while consistently and discipline-based improving myself in software development.

I have hands-on experience developing RESTful Web APIs with ASP.NET Core, as well as working with MSSQL and MongoDB for data access. On the frontend side, I build functional and well-integrated user interfaces using React.js, Redux Toolkit, and RTK Query.

I have practical experience with monolithic and microservices architectures, including logging, exception handling, caching, and event-driven systems using RabbitMQ and Redis. Through volunteer and personal GitHub projects, I continuously strengthen my full-stack development skills.  
I prioritize clean code, sustainable architecture, and continuous learning.
    </p>    
}