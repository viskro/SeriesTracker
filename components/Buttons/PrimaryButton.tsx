import { Button } from '@/components/shadcn/button'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    text: string;
    to?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const PrimaryButton: NextPage<Props> = ({ text, to, className = "", onClick, disabled = false }: Props) => {
    const buttonClasses = `bg-accent-primary hover:bg-accent-primary/90 text-white transition-all duration-200 ${className}`;

    if (!to) {
        return (
            <Button
                variant="default"
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
            variant="default"
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

export default PrimaryButton