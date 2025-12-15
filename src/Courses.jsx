function Courses() {
  return (<>
    <h1 className='text-center text-[50px]' id='courses'>GOA-ს მთავარი კურსები</h1>
    <br/>
  <div className='flex flex-row gap-30 justify-around p-10'>
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
      <br/>
      <button className='bg-[#13c913] p-3 rounded-[15px] hover:bg-[#159115]'><a href="#registration">რეგისტრაცია</a></button>
    </div>

    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#089234]'>
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
      <button className='bg-[#13c913] p-3 rounded-[15px] hover:bg-[#159115]'><a href="#registration">რეგისტრაცია</a></button>
    </div>

    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#089234]'>
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
      <button className='bg-[#13c913] p-3 rounded-[15px] hover:bg-[#159115]'><a href="#registration">რეგისტრაცია</a></button>
    </div>

    <div className='p-10 text-[30px] w-150 border-5 rounded-[15px] bg-[#089234] '>
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
      <br/>
      <button className='bg-[#13c913] p-3 rounded-[15px] hover:bg-[#159115]'><a href="#registration">რეგისტრაცია</a></button>
    </div>
  </div>
  <br/>
  <br/>
  </>)
}

export default Courses;