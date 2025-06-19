import { Button } from '~/common/components/ui/button';

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-4xl font-bold mb-4'>Hero</h2>
      <Button variant='default' onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
