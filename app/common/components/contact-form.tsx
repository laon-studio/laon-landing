import { Button } from '~/common/components/ui/button';

import {
  FormProvider,
  useForm,
  useFormContext,
  type RegisterOptions,
  type SubmitHandler,
} from 'react-hook-form';
import { useState } from 'react';

interface IFormData {
  fullName: string;
  email: string;
  phone?: string;
  details?: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<IFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        import.meta.env.VITE_GOOGLE_SHEET_URL ?? '',
        {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data),
        }
      ).then((res) => res.text());

      if (response === 'success') {
        methods.reset(); // react-hook-form 방식으로 폼 초기화
        alert('Success');
      } else {
        alert('Failed... Try again later');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed... Try again later');
    }
    setIsLoading(false);
  };

  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center py-20'
    >
      <div className='flex items-center justify-center'>
        <div className='flex flex-col max-w-xl gap-4 text-center'>
          <p className=' text-xs tracking-[0.1em] uppercase'>Work With Us</p>
          <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl'>
            We’d love to hear your ideas. Let’s make something great.
          </h2>
        </div>
      </div>
      <div className='w-full h-auto pb-[100px]'></div>
      <FormProvider {...methods}>
        <form
          className='flex flex-col gap-4 h-full w-full lg:w-5xl md:w-3xl px-4 md:px-0'
          onSubmit={methods.handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <label htmlFor='fullName' className='flex text-xs'>
              <span>FULL NAME</span> <IconRequired />
            </label>
            <OptInInput
              type='text'
              id='fullName'
              name='fullName'
              required
              placeholder='Your full name'
              rules={{ required: 'Please complete this required field.' }}
            />
          </div>
          <div>
            <label htmlFor='email' className='flex text-xs'>
              <span>EMAIL</span> <IconRequired />
            </label>
            <OptInInput
              type='email'
              id='email'
              name='email'
              required
              placeholder='Your email'
              rules={{
                required: 'Please complete this required field.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address.',
                },
              }}
            />
          </div>
          <div>
            <label htmlFor='phone' className='flex text-xs'>
              <span>PHONE</span> <IconRequired />
            </label>
            <OptInInput
              type='text'
              id='phone'
              name='phone'
              placeholder='Your phone number'
              rules={{
                required: 'Please complete this required field.',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Please enter a valid phone number.',
                },
              }}
            />
          </div>
          <div>
            <label htmlFor='details' className='flex text-xs'>
              <span>DETAILS</span>
            </label>
            <textarea
              id='details'
              placeholder='Please write your details for inquiry'
              {...methods.register('details')}
              className='w-full bg-[#f5f8fa] py-[5px] px-[15px] border border-[#cbd6e2] rounded-[15px] mt-1 resize-none'
            />
          </div>
          <Button
            className='bg-primary px-6 py-3 rounded-xl text-base font-bold text-white'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

type OptInInputProps<K extends keyof IFormData> = {
  name: K;
  rules?: RegisterOptions<IFormData, K>;
} & Omit<React.ComponentProps<'input'>, 'name'>;

const OptInInput = <K extends keyof IFormData>({
  type,
  id,
  name,
  required,
  placeholder,
  rules,
}: OptInInputProps<K>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormData>();

  return (
    <div>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        {...register(name, rules)}
        className='w-full h-10 bg-[#f5f8fa] px-[15px] border border-[#cbd6e2] rounded-[15px] mt-1'
      />
      {errors[name] && <p className='text-red-500'>{errors[name]?.message}</p>}
    </div>
  );
};

const IconRequired = () => {
  return <span className='text-red-500'>*</span>;
};
