import PageTitle from "./PageTitle";

interface PageHeadingSectionProps{
    title: string;
    description?: string;
    className?: string;
    children?: React.ReactNode;
    width?: string;

}

export default function PageHeadingSection({
    title, description, children, width, className
}:PageHeadingSectionProps) {

  return (
    <div className={`container ${className}`}>
      <div className="flex flex-col items-center py-20 text-gray-500">
        <PageTitle title={title} />
        <p className={width}>{description}</p>

        {children}
      </div>
    </div>
  )
}