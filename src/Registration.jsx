function Registration() {
  return (<>
    <h1 className='text-center text-[50px] font-bold' id='registration'>რეგისტრაცია</h1>
  <br/>
  <br/>
  <br/>
  <div className='flex justify-center items-center h-110 w-full max-lg:flex-col p-50'>
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
        <select className='bg-[white] w-[20rem] h-12 rounded-[15px]'>
          <option>Web Development</option>
          <option>Game Development</option>
          <option>AI & Algorithms</option>
          <option>SQL</option>
          <option>Graphic Design</option>
          <option>Robotics & Engineering</option>
        </select>
        <br/><br/>
        <button className='bg-[#14b814] w-[20rem] h-12 rounded-[15px] hover:bg-[#159115]'>დარეგისტრირება</button>
      </form>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  </>)
}

export default Registration;