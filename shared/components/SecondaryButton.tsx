import { Button } from '@/shared/components/shadcn/button'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    text: string;
    to?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const SecondaryButton: NextPage<Props> = ({ text, to, onClick, className = "", disabled = false }: Props) => {
    const buttonClasses = `bg-background-secondary hover:bg-border-primary text-text-primary border border-border-primary hover:border-accent-primary/40 transition-all duration-200 ${className}`;

    if (!to) {
        return (
            <Button
                variant="secondary"
                size="lg"
                className={buttonClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </Button>
        )
    }

    return (
        <Button
            variant="secondary"
            size="lg"
            className={buttonClasses}
            disabled={disabled}
        >
            <Link href={to} className="w-full h-full flex items-center justify-center">
                {text}
            </Link>
        </Button>
    )
}

export default SecondaryButton