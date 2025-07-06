import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function TeamMember() {
  const memberData = [
    {
      order: 1,
      name: '김가람',
      image: '/images/profile_garam.jpeg',
      alt: 'profile_garam',
      github: 'https://github.com/iizz',
      linkedin: 'https://www.linkedin.com/in/garamkim-dev/',
      email: 'mailto:garamkim.dev@gmail.com',
      description:
        "I'm a Full-stack Developer with 7 years of experience, with a strong focus on frontend development over the past 3 years using React.js, TypeScript, and Flutter. I specialize in turning complex ideas into intuitive, high-performing user experiences that drive real business outcomes. Recently, I've been diving into Three.js to explore the world of 3D graphics on the web, expanding my creative and technical capabilities in immersive user interface design.",
    },
    {
      order: 2,
      name: '박소정',
      image: '/images/profile_sojeong.jpeg',
      alt: 'profile_sojeong',
      github: 'https://github.com/sojeongsojeong-park',
      linkedin: 'https://www.linkedin.com/in/sojeong-park-fedeveloper/',
      email: 'mailto:psoj90972@gmail.com',
      description:
        '👩🏻‍💻𝙀𝙣𝙩𝙝𝙪𝙨𝙞𝙖𝙨𝙩𝙞𝙘 𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙀𝙣𝙜𝙞𝙣𝙚𝙚𝙧 with over 2 years of working experience in the e-commerce industry. I focus on transforming web experiences into meaningful user journeys. Constantly exploring new ways to enhance user interaction and digital accessibility with modern technologies.',
    },
    {
      order: 1,
      name: '한별',
      image: '/images/avatar_byol.jpeg',
      alt: 'profile_byol',
      github: 'https://github.com/byol-han',
      linkedin: 'https://www.linkedin.com/in/byol-han/',
      email: 'mailto:byolhandev@gmail.com',
      description:
        'I’m a Frontend Developer with a strong foundation in HTML, CSS, JavaScript and modern frameworks like React and Vue.js. With hands-on experience in SASS, Tailwind CSS, Bootstrap, Material UI, and Quasar, I focus on building seamless, user-centric web applications that deliver both functionality and aesthetic appeal.',
    },
  ];

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
      <div className='w-full h-auto pb-[100px]'></div>
      {memberData.map((item, key) => (
        <div
          className='relative flex items-center justify-center mb-[50px] md:mb-[100px] px-4'
          key={key}
        >
          <div className='flex flex-col gap-5 md:flex-row md:gap-8 lg:w-5xl md:w-3xl'>
            <div
              className={`flex flex-col justify-center md:w-1/2 gap-4 ${
                item.order === 2 ? 'order-2 md:order-1' : 'order-2 md:order-2'
              }`}
            >
              <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
                <div className='flex flex-col gap-4 text-center md:text-left'>
                  <div className='flex gap-4 items-center justify-center'>
                    <h3 className='text-black text-2xl md:text-3xl'>
                      {item.name}
                    </h3>
                    <div className='flex justify-center items-center gap-4'>
                      <a
                        href={item.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href={item.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                      >
                        <FaLinkedin size={24} />
                      </a>

                      <a
                        href={item.email}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Email'
                      >
                        <FaEnvelope size={22} />
                      </a>
                    </div>
                  </div>
                  <p className='text-black text-md'>{item.description}</p>
                </div>
              </div>
            </div>
            <div
              className={`flex order-1 md:order-1 w-full md:w-1/2 ${
                item.order === 2 && 'justify-end'
              }`}
            >
              <div className='md:max-w-[430px] w-full rounded-[30px] relative overflow-hidden'>
                <div className='relative flex flex-col w-full gap-12'>
                  <img src={item.image} alt={item.alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
