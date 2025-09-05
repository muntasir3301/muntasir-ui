const footerLinks = [
    {
        title: "Getting started",
        links: [
            "Installation",
            "Release Notes",
            "Upgrade Guide",
            "Using with Preprocessors",
            "Optimizing for Production",
            "Browser Support",
            "IntelliSense"
        ]
    },
    {
        title: "Core Concepts",
        links: [
            "Utility-First",
            "Responsive Design",
            "Hover, Focus, & Other States",
            "Dark Mode",
            "Adding Base Styles",
            "Extracting Components",
            "Adding New Utilities"
        ]
    },
    {
        title: "Customization",
        links: [
            "Configuration",
            "Theme Configuration",
            "Breakpoints",
            "Customizing Colors",
            "Customizing Spacing",
            "Configuring Variants",
            "Plugins"
        ]
    },
    {
        title: "Community",
        links: ["GitHub", "Discord", "Twitter", "YouTube"]
    }
];

export default function Footer_3() {
    return (
        <footer className="p-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                {footerLinks.map((section, index) => (
                    <div key={index} className="flex flex-col space-y-3">
                        <h2 className="font-medium text-xl border-l-4 pl-2 border-teal-700">{section.title}</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                            {section.links.map((link, i) => (
                                <a key={i} rel="noopener noreferrer" href="#">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-600">© Copyright 1986. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
