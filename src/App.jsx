import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  return (<>
    <div className='flex justify-between w-full max-lg:flex-col bg-[#014601] text-[30px] text-[white] fixed'>
      <h1 className='p-10'>GOAL-<span className='text-[#06d806]'>ORIENTED</span> ACADEMY</h1>
      <div className='flex justify-between flex-row gap-50 p-10'>
        <button className='cursor-pointer'><a href="#top">მთავარი</a></button>
        <button className='cursor-pointer'>კონტაქტი</button>
        <button className='cursor-pointer'><a href="#registration">რეგისტრაცია</a></button>
        <button className='cursor-pointer'><a href="#courses">კურსები</a></button>
      </div>
      
  </div>
  <div className='flex justify-start h-screen p-20 flex-row gap-30'>
    <div>
      <br/><br/>
      <br/><br/>
      <h1 className='text-[50px]' id='top'>რას ისწავლით ჩვენთან</h1>
      <br/>
      <p className='text-[25px]'>ჩვენთან თქვენ ისწავლით პროგრამირებას უმაღლეს დონეზე.<br/>
      კურსის დასრულებისას თქვენ შეგეძლებათ რომ შექმნათ სრული ვებსაიტები/თამაშები.<br/>
      იქნებით Full-Stack Developer და იქნებით დასაქმდებით ტოპ კომპანიებში.<br/>
      გვაქვს სხვადასხვა კურსები:</p>
      <br/>
      <ul className='text-[25px] bg-[#1d9e1d] p-5 rounded-[15px] w-70 shadow'>
        <li>AI & Algorithms</li>
        <li>Web Development</li>
        <li>Game Development</li>
        <li>Graphic Design</li>
        <li>SQL</li>
        <li>Robotics</li>
      </ul>
      <br/><br/>
      <h1 className='text-[30px]'>GOA-ს დამფუძვნებელი და დირექტორი:</h1>
      <br/>
      <p className='text-[20px]'>საქართველოში ყველაზე სანდო და ერთადერთი აკადემია, რომელიც პერსონალურად<br/>
      მოგიდგება და დაგეხმარება ნებისმიერი ცხოვრებისეული პრობლემის მოგვარებაში.<br/>
      დაგისახავ დიად მიზნებს და ბოლომდე მოგეხმარები მათ მიღწევაში<br/>
      <br/>
      პატივისცემით, ნიკა კეშელავა
      </p>
    </div>
    <br/>
    <video className='w-300 h-250' controls src="/goa video.mp4"></video>
  </div>
  <br/>


    <h1 className='text-center text-[50px]' id='courses'>GOA-ს მთავარი კურსები</h1>
    <br/>
    <br/>
  <div className='flex flex-row gap-30 justify-around'>
    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#089234]'>
      <h1 className='text-[40px]'>Web Development</h1>
      <br/>
      <p>ამ კურსზე შეისწავლით სრულყოფილი<br/>
      ვებსაიტების შემქნას, Front-End და Back-End-საც</p>
      <br/>
      <p>კვირაში ერთხელ: 190₾</p>
      <p>კვირაში ორჯერ: 290₾</p>
      <p>კვირაში სამჯერ: 390₾</p>
      <p>კვირაში ოთხჯერ: 490₾</p>
      <br/>
      <button className='bg-[#13c913] p-3 rounded-[15px]'>რეგისტრაცია</button>
    </div>

    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#0a92f4]'>
      <h1 className='text-[40px]'>Game Development</h1>
      <br/>
      <p>ამ კურსზე შეისწავლით Roblox Studio-ში<br/>
      სრულყოფილი თამაშების შექმნას</p>
      <br/>
      <p>ჩატარდება კვირაში ერთხელ</p>
      <p>ფასი: 170₾</p>
      <br/>
      <br/>
      <br/>
      <button className='bg-[#13c913] p-3 rounded-[15px]'>რეგისტრაცია</button>
    </div>

    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#b11724]'>
      <h1 className='text-[40px]'>Robotics & Engineering</h1>
      <br/>
      <p>ამ კურსზე შეისწავლით რობოტიკას და ინჟინერიას,<br/>
      რობოტების და მექანიზმების აწყობას</p>
      <br/>
      <p>ჩატარდება კვირაში ერთხელ</p>
      <p>ფასი: 170₾</p>
      <br/>
      <br/>
      <br/>
      <button className='bg-[#13c913] p-3 rounded-[15px]'>რეგისტრაცია</button>
    </div>

    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#000000] text-[white]'>
      <h1 className='text-[40px]'>AI & Algorithms, C++</h1>
      <br/>
      <p>ამ კურსზე შეისწავლით ხელოვნურ ინტელექტს,<br/>
      ალგორითმებს და C++-ს</p>
      <br/>
      <p>ჩატარდება კვირაში ორჯერ</p>
      <p>ფასი: 290₾</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <button className='bg-[#13c913] p-3 rounded-[15px]'>რეგისტრაცია</button>
    </div>
  </div>
  <br/>
  <br/>
  
  <h1 className='text-center text-[50px] font-bold' id='registration'>რეგისტრაცია</h1>
  <div className='flex justify-center items-center h-screen w-full max-lg:flex-col'>
    <img src="/goaimg.png" alt="" className='h-125.5 rounded-l-[15px]'/>
    <div className='flex justify-center items-center bg-[#023202] flex-col p-10 rounded-r-[15px]'>
      <h1 className='text-[white] text-[25px] font-bold'>კურსზე დარეგისტრირება</h1>
      <br/><br/>
      <form>
        <input type="text" placeholder='მოსწავლის სახელი და გვარი' className='bg-[white] w-[20rem] h-12 rounded-[15px]'/>
        <br/><br/>
        <input type="number" placeholder='ასაკი' className='bg-[white] w-[20rem] h-12 rounded-[15px]'/>
        <br/><br/>
        <input type="email" placeholder='ელექტრონული ფოსტა' className='bg-[white] w-[20rem] h-12 rounded-[15px]'/>
        <br/><br/>
        <button className='bg-[white] w-[20rem] h-12 rounded-[15px]'>დარეგისტრირება</button>
        <br/><br/>
        <select className='bg-[white] w-[20rem] h-12 rounded-[15px]'>
          <option>ვებსაიტების დეველოპმენტი/შექმნა</option>
          <option>თამაშების დეველოპმენტი/შექმნა</option>
          <option>ხელოვნური ინტელექტი და ალგორითმები</option>
          <option>SQL</option>
          <option>გრაფიკული დიზაინი</option>
          <option>GOA Martial Arts - MMA</option>
        </select>
      </form>
    </div>
  </div>
  </>)
}

export default App
