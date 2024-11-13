
import '../App.css';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Otp } from '../components/Otp';


function Screen4() {
  return (
    <div className='h-screen bg-blue-900 flex flex-col items-center justify-center'>
      <h2 className="text-white text-center text-4xl mb-8">This is Screen 4</h2>
      {/* <Input type='text' placeholder='Email Address'> Enter your Email: </Input> */}
      <br /> <br /> <br /> <br /> <br />
      <Otp />

      
    </div>
  );
}

export default Screen4;
