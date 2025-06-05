export function Section({
    children,
    className
}: {
    children: React.ReactNode
} & {
    className?: string
}) {
    return <section className={`flex flex-col items-center justify-center w-[70%] ${className}`}>{children}</section>;
}