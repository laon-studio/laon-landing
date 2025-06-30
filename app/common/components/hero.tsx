import React, { useRef } from 'react';
import { Link } from 'react-router';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

export default function Hero() {
  return (
    <div className='bg-[url(/images/hero_bg.jpg)] no-repeat bg-cover bg-center'>
      <div className='flex flex-col items-center justify-center h-[unset] lg:h-screen px-8 xl:px-20 md:px-10'>
        <div className='flex items-center justify-center gap-10 lg:flex-row flex-col pt-20 pb-10 lg:py-0'>
          <div className='flex-1'>
            <p className='text-lg xl:text-xl mb-6 leading-relaxed'>
              빠르고 임팩트 있게!
            </p>
            <h1 className='text-2xl xl:text-4xl font-bold mb-4'>
              믿고 맡길 수 있는 <br></br>LAON STUDIO 입니다.
            </h1>
            <p className='text-lg xl:text-xl mb-6 leading-relaxed'>
              유연한 팀워크를 바탕으로 랜딩페이지 개발과
              <br className='hidden sm:block' /> 소규모 웹사이트 구축을 빠르고
              안정적으로 제공합니다.
            </p>
            <ul className='text-base xl:text-lg space-y-1 mb-6'>
              <li>디자인 연동부터 반응형 퍼블리싱까지 한 번에</li>
              <li>스타트업, 이커머스 등 다양한 산업군 경험</li>
            </ul>
            <p className='text-lg xl:text-xl'>
              당신의 아이디어를 빠르게 실현해 줄 파트너가 되고자 합니다.
            </p>
          </div>
          <TiltCard />
        </div>
      </div>
    </div>
  );
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className='relative max-h-80 max-w-160 lg:max-h-72 lg:max-w-140 rounded-xl overflow-hidden'
    >
      <Link
        to='https://laon-studio.github.io/landing-portfolio/'
        target='_blank'
      >
        <img
          className='rounded-xl object-cover w-full h-full shadow-2xl'
          src='/images/clone_hifi_landing_thumb.png'
          alt='clone hifi landing'
        />
      </Link>
    </motion.div>
  );
};
