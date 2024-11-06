import '../App.css';
import { Button } from '../components/button';

function Screen4() {
  return (
    <div className='h-screen bg-blue-900 flex flex-col items-center justify-center'>
      <h2 className="text-white text-center text-4xl mb-8">This is Screen 4</h2>
      <Button disabled={false}>Sign Up</Button>
    </div>
  );
}

export default Screen4;
