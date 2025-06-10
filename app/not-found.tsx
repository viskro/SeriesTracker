function NotFoundPage() {
    return (
        <main className="w-full h-[320px] bg-background-primary flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-title text-accent-primary">404 | Page introuvable</h1>
                <p className="text-primary">La page que vous avez demandé n&apos;existe pas.</p>
            </div>
        </main>
    )
}

export default NotFoundPage