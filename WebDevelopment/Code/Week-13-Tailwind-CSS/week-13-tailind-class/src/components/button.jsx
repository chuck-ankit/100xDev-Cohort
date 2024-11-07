import '../App.css';

export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return (
        <span
            onClick={disabled ? null : onClick}
            className={`rounded-md font-semibold h-12 w-[20%] text-center justify-center py-2
                text-white cursor-pointer ${disabled ?
                    "bg-blue-new cursor-not-allowed " : " bg-green-400"}`}
        >
            {children}
        </span>
    );
}
