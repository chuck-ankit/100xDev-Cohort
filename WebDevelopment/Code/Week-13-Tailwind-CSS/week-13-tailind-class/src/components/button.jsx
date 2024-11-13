import '../App.css';

export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return (
        <span
            onClick={disabled ? null : onClick}
            className={`rounded-md font-semibold py-3 px-32 text-center justify-center 
                text-white cursor-pointer ${disabled ?
                    "bg-blue-new cursor-not-allowed " : " bg-green-400"}`}
        >
            {children}
        </span>
    );
}
