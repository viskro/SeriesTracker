import Link from "next/link";

export default function Page() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
                <iframe
                    loading="lazy"
                    className="absolute w-full h-full top-0 left-0 border-0"
                    src="https://www.canva.com/design/DAGpy8v78Mg/Cv8QSfp8wynAhsT2T_HMHA/view?embed"
                    allowFullScreen={true}
                    allow="fullscreen"
                />
            </div>
            <Link
                href={"/"}
                className="fixed bottom-10 text-2xl text-white bg-accent-primary hover:bg-accent-primary-hover px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
                Retour à l&apos;accueil
            </Link>
        </div>
    );
}