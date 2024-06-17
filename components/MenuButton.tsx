import Image from "next/image"
type MenuButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon: string;
    onClick: () => void;
}

const   MenuButton = ({ type, icon, title, onClick}: MenuButtonProps) => {
    return (
      <button 
      className="inline-block cursor-pointer lg:hidden bg-white rounded-full p-2"
      type={type}
      onClick={onClick}
      >
          {icon && <Image src={icon} alt={title} width={32} height={32} />}
      </button>
    )
  }
  
export default MenuButton