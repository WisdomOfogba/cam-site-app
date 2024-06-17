import Image from "next/image"
type ButtonProps = {
    type: 'button'| 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    border?: 'border';
}

const Button = ({ type, title, icon, variant, full, border}: ButtonProps) => {
  return (
    <button 
    className={`flexCenter ${border} px-5 py-5 gap-3 rounded-full ${variant} ${full && 'w-full'}`}
    type={type}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-60 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button