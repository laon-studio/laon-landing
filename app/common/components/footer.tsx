import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className='bg-primary text-white py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Laon Studio. All rights reserved.
        </p>
        <div className='flex justify-center items-center gap-4 mt-2'>
          <a
            href='https://github.com/laon-studio'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/company/laon-studio'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://x.com/laon__dev'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='X'
          >
            <SiX size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
