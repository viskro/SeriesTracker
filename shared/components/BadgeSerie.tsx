import { NextPage } from 'next'
import { Badge } from './shadcn/badge';
import { ShowStatus } from '@/features/listePage/types';

interface Props {
  children: React.ReactNode;
  variant?: ShowStatus | "category" | null;
  className?: string;
}

const BadgeSerie: NextPage<Props> = ({ children, variant, className }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "finished":
        return "bg-gradient-to-br from-accent-primary/80 to-accent-primary/60 text-white hover:from-accent-primary hover:to-accent-primary/80";
      case "ongoing":
        return "bg-gradient-to-br from-accent-secondary/80 to-accent-secondary/60 text-white hover:from-accent-secondary hover:to-accent-secondary/80";
      case "to_watch":
        return "bg-gradient-to-br from-background-secondary to-background-primary text-primary hover:border-accent-primary/40 border border-border-primary";
      case "category":
        return "bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 text-accent-primary border border-accent-primary/20 hover:border-accent-primary/40";
      default:
        return "bg-gradient-to-br from-background-secondary to-background-primary text-primary border border-border-primary hover:border-accent-primary/40";
    }
  };

  return (
    <Badge
      className={`font-badge text-xs px-2 py-1 transition-all duration-300 ${getVariantClasses()} ${className}`}
    >
      {children}
    </Badge>
  );
}

export default BadgeSerie