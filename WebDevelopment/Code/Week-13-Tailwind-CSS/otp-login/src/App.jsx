import './App.css'
import PhoneOtpForm from './components/PhoneOtpForm'

function App() {
  return (
    <div className="font-sans bg-victoria-50 h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white shadow-md rounded-lg max-w-md border border-victoria-200">
        <h1 className="text-3xl font-semibold text-victoria-700 mb-4">Login with Phone</h1>
        <PhoneOtpForm />
      </div>
    </div>
  );
}

export default App;
