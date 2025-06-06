import { NextPage } from 'next'
import { Badge } from './shadcn/badge';

interface Props {
  text: string;
  variant: "vu" | "enCours" | "aVenir" | "category";
}

const BadgeSerie: NextPage<Props> = ({ text, variant }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "vu":
        return "bg-green-500/20 text-green-500 border-green-500/20 hover:bg-green-500/30";
      case "enCours":
        return "bg-blue-500/20 text-blue-500 border-blue-500/20 hover:bg-blue-500/30";
      case "aVenir":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/30";
      case "category":
        return "bg-accent-primary/20 text-accent-primary border-accent-primary/20 hover:bg-accent-primary/30";
      default:
        return "bg-accent-primary/20 text-accent-primary border-accent-primary/20 hover:bg-accent-primary/30";
    }
  };

  return (
    <Badge
      className={`font-badge text-xs px-2 py-1 border transition-colors duration-200 ${getVariantClasses()}`}
    >
      {text}
    </Badge>
  )
}

export default BadgeSerie