function Info() {
  return (<>
    <div className='flex justify-start h-screen p-20 flex-row gap-30'>
    <div>
      <br/><br/>
      <br/><br/>
      <h1 className='text-[50px]' id='top'>რას ისწავლით ჩვენთან</h1>
      <br/>
      <p className='text-[25px]'>ჩვენთან თქვენ ისწავლით პროგრამირებას უმაღლეს დონეზე.<br/>
      კურსის დასრულებისას თქვენ შეგეძლებათ რომ შექმნათ სრული ვებსაიტები/თამაშები.<br/>
      იქნებით Full-Stack Developer და დასაქმდებით ტოპ კომპანიებში.<br/>
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
  </>)
}

export default Info;