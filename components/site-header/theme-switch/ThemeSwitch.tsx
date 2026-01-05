import Image from "next/image";
import themeSwitchIcon from '@public/theme-switch-icon.svg'

export default function ThemeSwitch() {
    return (
        <div className="p-2 hover:bg-gray-100 transition-all duration-200 rounded-lg">
            <Image
                alt="theme-switch-icon"
                height={18}
                width={18}
                src={themeSwitchIcon}
            />
        </div>
    )
}