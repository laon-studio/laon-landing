import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '~/common/components/ui/carousel';
import { Card, CardContent, CardFooter } from '~/common/components/ui/card';
import { useLocale } from '../providers/locale-provider';

export default function Portfolio() {
	const { locale } = useLocale();
	const cardData = [
		{
			koTitle: 'LAON STUDIO 랜딩페이지',
			enTitle: 'LAON STUDIO Landing Page',
			koDescription:
				'저희 팀의 비전과 서비스를 소개하기 위한 단일 페이지 웹사이트입니다. 직관적인 사용자 경험과 깔끔한 시각적 구성에 중점을 두었으며, 방문자가 빠르게 팀의 성격과 강점을 파악할 수 있도록 콘텐츠를 구조화했습니다.',
			enDescription:
				'This is a single-page website designed to introduce our team’s vision and services. We focused on delivering an intuitive user experience and a clean visual layout, with content structured to help visitors quickly understand our identity and strengths.',
			image: '/images/laon_landing_thumb.png',
			link: 'https://www.naver.com',
		},
		{
			koTitle: 'HIFI 랜딩페이지 클론 프로젝트',
			enTitle: 'HIFI Landing Page Clone Project',
			koDescription:
				'실제 기업의 웹사이트를 참고하여 디자인과 기능을 재현한 클론 프로젝트입니다. 구현 과정에서 반응형 레이아웃, 스크롤 인터랙션, 애니메이션 효과 등을 직접 설계하며 프론트엔드 구현 능력을 향상시켰습니다.',
			enDescription:
				'This is a clone project that replicates the design and functionality of a real company’s website. Through the development process, I enhanced my frontend skills by independently implementing responsive layouts, scroll interactions, and animation effects.',
			image: '/images/clone_hifi_landing_thumb.png',
			link: 'https://laon-studio.github.io/landing-portfolio/',
		},
	];

	return (
		<div className='flex flex-col items-center justify-center px-4 py-20'>
			<div className='flex items-center justify-center'>
				<div className='flex flex-col max-w-xl gap-4 text-center'>
					<p className=' text-xs tracking-[0.1em] uppercase'>Our work</p>
					<h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl'>
						See what we’ve built
					</h2>
				</div>
			</div>
			<div className='w-full h-auto pb-[100px]'></div>
			<Carousel className='lg:w-5xl md:w-3xl'>
				<CarouselContent>
					{cardData.map((item, key) => (
						<CarouselItem key={key} className='md:basis-1/1 lg:basis-1/2'>
							<a href={item.link} target='_blank'>
								<Card className='mb-5 pt-0 overflow-hidden cursor-pointer'>
									<CardContent className='px-0'>
										<img
											src={item.image}
											alt={locale === 'KO' ? item.koTitle : item.enTitle}
										/>
									</CardContent>
									<CardFooter>
										<p>
											<strong className='block mb-1'>
												{locale === 'KO' ? item.koTitle : item.enTitle}
											</strong>
											<span>
												{locale === 'KO'
													? item.koDescription
													: item.enDescription}
											</span>
										</p>
									</CardFooter>
								</Card>
							</a>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
