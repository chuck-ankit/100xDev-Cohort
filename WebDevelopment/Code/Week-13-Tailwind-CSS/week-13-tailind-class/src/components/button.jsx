import '../App.css';

export const Button = ({
    disabled, 
    children,
    onClick
}) => {
    return (
        <span 
            onClick={disabled} 
            className={`rounded-2xl text-semibold text-2xl px-32 py-4 text-white cursor-pointer ${disabled ? "bg-green-400" : "bg-slate-400 cursor-not-allowed"}`}
        >
            {children}
        </span>
    );
}
