import getGithubStars from "@/api/getGithubStarts";
import githubLogo from '@public/github-logo.svg'
import Image from "next/image";
import Link from "next/link";

export default async function GithubStars() {
    const starCount = await getGithubStars();

    return (
        <Link target="_blank" href={'https://github.com/muntasir3301/muntasir-ui'}>
            <div className="flex gap-2 items-center p-2 hover:bg-gray-100 transition-all duration-200 rounded-lg">
                <Image
                    alt="github-logo"
                    height={18}
                    width={18}
                    src={githubLogo}
                />
                <p className="text-xs">{starCount}</p>
            </div>
        </Link>
    )
}