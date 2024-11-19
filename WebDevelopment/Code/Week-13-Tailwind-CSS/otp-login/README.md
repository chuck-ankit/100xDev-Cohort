# OTP Login System with React and Tailwind CSS

This project demonstrates an OTP (One-Time Password) login flow built using **React.js** and **Tailwind CSS**. It features a phone number input form, OTP verification, and a resend OTP functionality with a countdown timer.

## Features

- **Phone Number Input**: Users can input their phone numbers with a selected country code.
- **OTP Verification**: A 6-digit OTP input field with real-time validation.
- **Resend OTP**: A timer-based OTP resend button to prevent spam requests.
- **User-Friendly Interface**: Designed with Tailwind CSS for responsiveness and modern UI.

## Progress Flow Diagram

Below is the flowchart that represents the functionality of the OTP Login System:

```mermaid
graph TD
    A[Start] --> B[Enter Phone Number]
    B --> C[Validate Phone Number]
    C --> D{Is Valid?}
    D -->|No| E[Show Error]
    E --> B
    D -->|Yes| F[Submit Phone Number]
    F --> G[Display OTP Input Form]
    G --> H[Enter OTP and Verify]
    H --> I{Valid OTP?}
    I -->|No| J[Resend OTP]
    J --> G
    I -->|Yes| K[Login Successful]
```

## Project Structure

```
.
├── src/
│   ├── App.jsx                # Main application entry point
│   ├── components/            # Folder for reusable components
│   │   ├── PhoneOtpForm.jsx  # Handles phone number and OTP logic
│   │   └── OtpInput.jsx      # Manages OTP input and validation
│   ├── styles/               # Tailwind CSS styles
│   └── index.js              # React app entry
├── package.json              # Project dependencies and scripts
└── README.md                # Documentation (this file)
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/otp-login-system.git
   ```

2. Install dependencies:
   ```bash
   cd otp-login-system
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React.js
- Tailwind CSS
- Vite (for build tooling)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
