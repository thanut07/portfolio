import AddTask from '../image/add-task.png';
import Calculator from '../image/calculator.png';
import WeaterForecast from '../image/weather-forecast.png';
import ECommerce from '../image/e-commerce.png';
import LinkToQr from '../image/link-qr.png';
export default function Home() {
  return (
    <div className='w-full'>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-[#383e8c] text-9xl"> WEB DEVELOPER </h1>
        <h2 className="font-semibold text-[#383e8c] text-7xl"> PORTFOLIO </h2>
      </section>

      <section className="w-full h-screen flex flex-col items-center justify-center mt-20">
        <h1 className="font-semibold text-[#383e8c] text-7xl text-center"> HELLO, I'M THANUTCHAPORN KETJAI (FIN) </h1>
      </section>

      <section className="w-full my-20">
        <h1 className="font-bold text-[#383e8c] text-6xl"> EDUCATION </h1>
        <p className="text-[#383e8c] text-4xl mt-8 font-semibold"> 2023 - 2025 Pathumthani Technical College - Business Computer </p>
        <p className="text-[#383e8c] text-4xl mt-8 font-semibold"> 2020 - 2022 Kanaratbamrungpathumthani </p>
      </section>

      <section className="w-full my-20">
        <h1 className="font-bold text-[#383e8c] text-6xl"> INTERNSHIP </h1>
        <p className="text-[#383e8c] text-4xl mt-8 font-semibold"> May 2025 - September 2025 </p>
        <p className="text-[#383e8c] text-4xl font-semibold"> Front-End Developer At Hugcode Co.,Ltd, Pathumthani </p>
        <p className="text-[#383e8c] text-3xl mt-8 "> เป้าหมายของฉันคือการเป็น fullstack developer คือการพัฒนาเว็บไซต์โดยใช้ทักษะด้าน Front-End และ Back-End ในการพัฒนา ฉันมีทักษะ html, css, JavaScript </p>
      </section>

      <section className="w-full my-20">
        <h1 className="font-bold text-[#383e8c] text-6xl"> PROJECT </h1>
        <div className="w-full flex flex-wrap mt-8">
          <a href="https://to-do-list-kappa-one-87.vercel.app/" target='blank' className='w-6/12 mt-8'>
            <img src={AddTask} className="w-full px-4" />
            <p className='text-center font-bold mt-2 text-[#383e8c]'> To do list Project </p>
          </a>
          <a href="https://qr-generator-omega-roan.vercel.app/" target='blank' className='w-6/12 mt-8'>
            <img src={LinkToQr} className="w-full px-4" />
            <p className='text-center font-bold mt-2 text-[#383e8c]'> QR Code Generate Project </p>
          </a>
          <a href="https://e-commerce-delta-rouge.vercel.app/" target='blank' className='w-6/12 mt-8'>
            <img src={ECommerce} className="w-full px-4" />
            <p className='text-center font-bold mt-2 text-[#383e8c]'> E-commerce Project </p>
          </a>
          <a href="https://weather-app-lilac-delta-44.vercel.app/" target='blank' className='w-6/12 mt-8'>
            <img src={WeaterForecast} className="w-full px-4" />
            <p className='text-center font-bold mt-2 text-[#383e8c]'> Weather Forecast Project </p>
          </a>
          <a href="https://calculator-sage-psi-68.vercel.app/" target='blank' className='w-6/12 mt-8'>
            <img src={Calculator} className="w-full px-4" />
            <p className='text-center font-bold mt-2 text-[#383e8c]'> Calculator Project </p>
          </a>
        </div>
      </section>
    </div>
  )
}
