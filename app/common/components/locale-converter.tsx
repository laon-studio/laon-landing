import { Earth } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '../providers/locale-provider';

const LocaleConverter = () => {
	const [isHover, setIsHover] = useState(false);
	const { locale, toggleLocale } = useLocale();
	return (
		<div className='fixed bottom-4 right-4'>
			<ul
				className='flex flex-col gap-2'
				onMouseLeave={() => setIsHover(false)}>
				<li
					className={`bg-white rounded-full p-2 shadow-lg text-center cursor-pointer  transition-opacity duration-300 ${
						isHover ? ' opacity-100' : 'appearance-none opacity-0'
					}`}
					onClick={() => toggleLocale('EN')}>
					EN
				</li>
				<li
					className={`bg-white rounded-full p-2 shadow-lg text-center cursor-pointer  transition-opacity duration-300 ${
						isHover ? ' opacity-100' : 'appearance-none opacity-0'
					}`}
					onClick={() => toggleLocale('KO')}>
					KO
				</li>
				<li
					className='bg-white rounded-full p-2 shadow-lg cursor-pointer'
					onMouseEnter={() => setIsHover(true)}>
					<Earth />
				</li>
			</ul>
		</div>
	);
};

export default LocaleConverter;
