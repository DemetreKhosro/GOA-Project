function MenuBar() {
  return (<>
    <div className='flex justify-between w-full max-lg:flex-col bg-[#014601] text-[30px] text-[white] fixed'>
      <h1 className='p-10'>GOAL-<span className='text-[#06d806]'>ORIENTED</span> ACADEMY</h1>
      <div className='flex justify-between flex-row gap-50 p-10'>
        <button className='cursor-pointer hover:text-[#1cb61c]'><a href="#top">მთავარი</a></button>
        <button className='cursor-pointer hover:text-[#1cb61c]'><a href="#contact">კონტაქტი</a></button>
        <button className='cursor-pointer hover:text-[#1cb61c]'><a href="#registration">რეგისტრაცია</a></button>
        <button className='cursor-pointer hover:text-[#1cb61c]'><a href="#courses">კურსები</a></button>
      </div>
    </div>
  </>)
}

export default MenuBar;