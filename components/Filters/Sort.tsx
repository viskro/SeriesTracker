import { NextPage } from 'next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../shadcn/dropdown-menu'
import { Button } from '../shadcn/button';

// interface Props {}

interface Items {
    name: string;
    id: number;
}

interface Sort {
    title: string;
    items: Items[];
}

const sorts: Sort[] = [
    {
        title: "Note",
        items: [
            { name: "Croissante", id: 1 },
            { name: "Décroissante", id: 2 },
        ]
    },
    {
        title: "Titre",
        items: [
            { name: "A-Z", id: 1 },
            { name: "Z-A", id: 2 },
        ]
    },
    {
        title: "Date de sortie",
        items: [
            { name: "Plus récent", id: 1 },
            { name: "Plus ancien", id: 2 },
        ]
    },
];

const Sort: NextPage = ({ }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-background-secondary border-border-primary text-text-primary hover:bg-border-primary hover:text-white transition-all duration-300"
                >
                    Trier
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background-secondary border-border-primary text-text-primary">
                {sorts.map((sort) => (
                    <DropdownMenuSub key={sort.title}>
                        <DropdownMenuSubTrigger className="hover:bg-border-primary hover:text-white transition-all duration-300">
                            {sort.title}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-background-secondary border-border-primary">
                            {sort.items.map((item) => (
                                <DropdownMenuItem
                                    key={item.id}
                                    className="hover:bg-border-primary hover:text-white transition-all duration-300"
                                >
                                    {item.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Sort