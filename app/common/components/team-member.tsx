import { useLocale } from '../providers/locale-provider';

export default function TeamMember() {
	const { locale } = useLocale();
	const memberData = [
		{
			order: 1,
			koName: '김가람',
			enName: 'Garam Kim',
			image: '/images/profile_garam.jpeg',
			alt: 'profile_garam',
			enDescription:
				"I'm a Full-stack Developer with 7 years of experience, with a strong focus on frontend development over the past 3 years using React.js, TypeScript, and Flutter. I specialize in turning complex ideas into intuitive, high-performing user experiences that drive real business outcomes. Recently, I've been diving into Three.js to explore the world of 3D graphics on the web, expanding my creative and technical capabilities in immersive user interface design.",
			koDescription:
				'저는 7년 경력의 풀스택 개발자로, 최근 3년간 React.js, TypeScript, Flutter를 활용한 프론트엔드 개발에 집중해왔습니다. 복잡한 아이디어를 직관적이고 성능 좋은 사용자 경험으로 구현하여 실제 비즈니스 성과로 연결하는 데 전문성을 가지고 있습니다. 최근에는 Three.js를 활용해 웹에서의 3D 그래픽 분야에 도전하며, 몰입감 있는 UI 디자인에 대한 창의적이고 기술적인 역량을 확장하고 있습니다.',
		},
		{
			order: 2,
			koName: '박소정',
			enName: 'Sojeong Park',
			image: '/images/profile_sojeong.jpeg',
			alt: 'profile_sojeong',
			enDescription:
				'👩🏻‍💻𝙀𝙣𝙩𝙝𝙪𝙨𝙞𝙖𝙨𝙩𝙞𝙘 𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙀𝙣𝙜𝙞𝙣𝙚𝙚𝙧 with over 2 years of working experience in the e-commerce industry. I focus on transforming web experiences into meaningful user journeys. Constantly exploring new ways to enhance user interaction and digital accessibility with modern technologies.',
			koDescription:
				'👩🏻‍💻새로운 것을 배우고 만드는 것을 소프트웨어 엔지니어로, 이커머스 산업에서 2년 이상의 실무 경험을 보유하고 있습니다. 웹에서의 경험을 의미 있는 사용자 여정으로 바꾸는 데 집중하며, 최신 기술을 활용해 사용자 인터랙션과 디지털 접근성을 끊임없이 개선하는 방법을 탐구하고 있습니다.',
		},
		{
			order: 1,
			koName: '한별',
			enName: 'Byol Han',
			image: '/images/profile_byol.jpeg',
			alt: 'profile_byol',
			enDescription:
				"I'm a Frontend Developer with a strong foundation in HTML, CSS, JavaScript and modern frameworks like React and Vue.js. With hands-on experience in SASS, Tailwind CSS, Bootstrap, Material UI, and Quasar, I focus on building seamless, user-centric web applications that deliver both functionality and aesthetic appeal.",
			koDescription:
				'저는 HTML, CSS, JavaScript와 React, Vue.js 같은 최신 프레임워크에 탄탄한 기반을 가진 프론트엔드 개발자입니다. SASS, Tailwind CSS, Bootstrap, Material UI, Quasar 등의 실무 경험을 바탕으로, 기능성과 미적 완성도를 모두 갖춘 사용자 중심의 웹 애플리케이션을 구축하는 데 집중하고 있습니다.',
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
					className='relative flex flex-col items-center mb-[50px] md:mb-[100px] px-4'
					key={key}>
					<div className='flex flex-col gap-5 md:flex-row md:gap-8 lg:w-5xl md:w-3xl'>
						<div
							className={`flex flex-col justify-center md:w-1/2 gap-4 ${
								item.order === 2 ? 'order-2 md:order-1' : 'order-2 md:order-2'
							}`}>
							<div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
								<div className='flex flex-col gap-4 text-center md:text-left'>
									<h3 className='text-black text-2xl md:text-3xl'>
										{locale === 'KO' ? item.koName : item.enName}
									</h3>
									<p className='text-black text-md'>
										{locale === 'KO' ? item.koDescription : item.enDescription}
									</p>
								</div>
							</div>
						</div>
						<div
							className={`flex order-1 md:order-1 w-full md:w-1/2 ${
								item.order === 2 && 'justify-end'
							}`}>
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
