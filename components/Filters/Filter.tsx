import { NextPage } from 'next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../shadcn/dropdown-menu'
import { Button } from '../shadcn/button';

// interface Props {}

interface Items {
  name: string;
  id: number;
}
interface Filter {
  filters: {
    plateformes: Items[];
    categories: Items[];
    avis: { rating: number; id: number }[];
    initiale: { letter: string; id: number }[];
  };
}

const filters = [
  {
    title: "plateformes",
    items: [
      { name: "Netflix", id: 1 },
      { name: "Disney+", id: 2 },
      { name: "Prime Video", id: 3 },
      { name: "Canal+", id: 4 },
      { name: "OCS", id: 5 },
      { name: "Paramount+", id: 6 },
      { name: "Apple TV+", id: 7 },
      { name: "Salto", id: 8 },
      { name: "Arte", id: 9 },
    ]
  },
  {
    title: "categories",
    items: [
      { name: "Action", id: 1 },
      { name: "Comédie", id: 2 },
      { name: "Drame", id: 3 },
      { name: "Horreur", id: 4 },
      { name: "Science-Fiction", id: 5 },
      { name: "Documentaire", id: 6 },
      { name: "Animation", id: 7 },
      { name: "Romance", id: 8 },
      { name: "Aventure", id: 9 },
      { name: "Fantastique", id: 10 },
      { name: "Thriller", id: 11 },
      { name: "Historique", id: 12 },
      { name: "Western", id: 13 },
      { name: "Biopic", id: 14 },
      { name: "Guerre", id: 15 },
      { name: "Musical", id: 16 },
    ]
  },
  {
    title: "avis",
    items: [
      { name: "1 étoile", rating: 1, id: 1 },
      { name: "2 étoiles", rating: 2, id: 2 },
      { name: "3 étoiles", rating: 3, id: 3 },
      { name: "4 étoiles", rating: 4, id: 4 },
      { name: "5 étoiles", rating: 5, id: 5 },
    ]
  },
  {
    title: "initiale",
    items: [
      { name: "A", letter: "A", id: 1 },
      { name: "B", letter: "B", id: 2 },
      { name: "C", letter: "C", id: 3 },
      { name: "D", letter: "D", id: 4 },
      { name: "E", letter: "E", id: 5 },
      { name: "F", letter: "F", id: 6 },
      { name: "G", letter: "G", id: 7 },
      { name: "H", letter: "H", id: 8 },
      { name: "I", letter: "I", id: 9 },
      { name: "J", letter: "J", id: 10 },
      { name: "K", letter: "K", id: 11 },
      { name: "L", letter: "L", id: 12 },
      { name: "M", letter: "M", id: 13 },
      { name: "N", letter: "N", id: 14 },
      { name: "O", letter: "O", id: 15 },
      { name: "P", letter: "P", id: 16 },
      { name: "Q", letter: "Q", id: 17 },
      { name: "R", letter: "R", id: 18 },
      { name: "S", letter: "S", id: 19 },
      { name: "T", letter: "T", id: 20 },
      { name: "U", letter: "U", id: 21 },
      { name: "V", letter: "V", id: 22 },
      { name: "W", letter: "W", id: 23 },
      { name: "X", letter: "X", id: 24 },
      { name: "Y", letter: "Y", id: 25 },
      { name: "Z", letter: "Z", id: 26 },
      { name: "0-9", letter: "0-9", id: 27 },
    ]
  }
];

const Filter: NextPage = ({ }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="bg-background-secondary border-border-primary text-text-primary hover:bg-border-primary hover:text-white transition-all duration-300"
        >
          Filtres
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background-secondary border-border-primary text-text-primary">
        {filters.map((filter) => (
          <DropdownMenuSub key={filter.title}>
            <DropdownMenuSubTrigger className="hover:bg-border-primary hover:text-white transition-all duration-300">
              {filter.title}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background-secondary border-border-primary">
              {filter.items.map((item) => (
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

export default Filter