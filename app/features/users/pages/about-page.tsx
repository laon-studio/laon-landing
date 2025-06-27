export default function AboutPage() {
  return (
    <>
      <div className='w-full h-auto pb-[100px] md:pb-[150px]'></div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col max-w-xl gap-4 text-center'>
          <p className=' text-xs tracking-[0.1em] uppercase'>People</p>
          <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl'>
            Meet Our Team
          </h2>
        </div>
      </div>
      <div className='w-full h-auto pb-[50px] md:pb-[100px]'></div>
      <div className='relative flex flex-col'>
        <div className='flex flex-col items-center justify-center w-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
          <div className='flex flex-col justify-center order-2 md:order-2 md:w-1/2 gap-4'>
            <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
              <div className='flex flex-col gap-4 text-center md:text-left'>
                <h3 className='text-black text-2xl md:text-3xl'>김가람</h3>
                <p className='text-black text-md'>
                  I'm a Full-stack Developer with 7 years of experience, with a
                  strong focus on frontend development over the past 3 years
                  using React.js, TypeScript, and Flutter. I specialize in
                  turning complex ideas into intuitive, high-performing user
                  experiences that drive real business outcomes. Recently, I've
                  been diving into Three.js to explore the world of 3D graphics
                  on the web, expanding my creative and technical capabilities
                  in immersive user interface design.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center order-1 md:order-1 w-full md:w-1/2'>
            <div className='md:max-w-[430px] w-full rounded-[30px] relative overflow-hidden'>
              <div className='relative flex flex-col items-center justify-center w-full gap-12'>
                <img src='/profile_garam.jpeg' alt='profile_garam' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-auto pb-[60px] md:pb-[120px]'></div>
      <div className='relative flex flex-col'>
        <div className='flex flex-col items-center justify-center w-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
          <div className='flex flex-col justify-center order-2 md:order-1 md:w-1/2 gap-4'>
            <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
              <div className='flex flex-col gap-4 text-center md:text-left'>
                <h3 className='text-black text-2xl md:text-3xl'>박소정</h3>
                <p className='text-black text-md'>
                  👩🏻‍💻𝙀𝙣𝙩𝙝𝙪𝙨𝙞𝙖𝙨𝙩𝙞𝙘 𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙀𝙣𝙜𝙞𝙣𝙚𝙚𝙧 with over 2 years of working
                  experience in the e-commerce industry. I focus on transforming
                  web experiences into meaningful user journeys. Constantly
                  exploring new ways to enhance user interaction and digital
                  accessibility with modern technologies.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center order-1 md:order-1 w-full md:w-1/2'>
            <div className='md:max-w-[430px] w-full rounded-[30px] relative overflow-hidden'>
              <div className='relative flex flex-col items-center justify-center w-full gap-12'>
                <img
                  className='object-cover w-full h-full'
                  src='/profile_sojeong.jpeg'
                  alt='profile_sojeong'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-auto pb-[60px] md:pb-[120px]'></div>
      <div className='relative flex flex-col'>
        <div className='flex flex-col items-center justify-center w-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
          <div className='flex flex-col justify-center order-2 md:order-2 md:w-1/2 gap-4'>
            <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
              <div className='flex flex-col gap-4 text-center md:text-left'>
                <h3 className='text-black text-2xl md:text-3xl'>한별</h3>
                <p className='text-black text-md'>
                  I’m a Frontend Developer with a strong foundation in HTML,
                  CSS, JavaScript and modern frameworks like React and Vue.js.
                  With hands-on experience in SASS, Tailwind CSS, Bootstrap,
                  Material UI, and Quasar, I focus on building seamless,
                  user-centric web applications that deliver both functionality
                  and aesthetic appeal.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center order-1 md:order-1 w-full md:w-1/2'>
            <div className='md:max-w-[430px] w-full rounded-[30px] relative overflow-hidden'>
              <div className='relative flex flex-col items-center justify-center w-full gap-12'>
                <img src='/profile_byol.jpeg' alt='profile_byol' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-auto pb-[100px] md:pb-[200px]'></div>
    </>
  );
}
