import Posts from "./components/Posts";
import MyProfilePice from './components/MyProfilePice'

export const revalidate = 86400;

export default function Home() {
    return (
        <div className="mx-auto">
            <MyProfilePice />
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Hello and Welcome 👋&nbsp;
                <span className="whitespace-nowrap">
                    I'm <span className="font-bold">MCP</span>.
                </span>
            </p>
            {/* @ts-expect-error Server Component */}
            <Posts />
        </div>
    )
}
