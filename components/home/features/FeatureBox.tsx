import { IconType } from "react-icons";

interface FeatureBoxProps{
    icon: IconType;
    title: string;
    description: string;
}

export default function FeatureBox({
    icon, title, description
}:FeatureBoxProps) {
  const Icon = icon;
  return (
    <div className="bg-white p-6 border border-gray-300 rounded-xl">
        <Icon size={55}/>
        <h2 className="font-semibold mt-3">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
    </div>
  )
}