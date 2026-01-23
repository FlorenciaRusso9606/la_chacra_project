interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label: any;
    onClick?: () => void;
    className?: string
    type?: 'submit';
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({label, className, onClick, disabled, type, ...props}) =>{
    return(
        <button className={`px-4 py-2 rounded-md font-medium cursor-pointer ${className || ""}`} type={type} disabled={disabled} onClick={onClick} {...props}>
            {label}
        </button>
    )
}