interface Movie {
  id: number;
  name: string;
  description: string;
  image: string;
  year: number;
  category: string;
  rating: number;
}

const movies: Movie[] = [
  {
    id: 1,
    name: "Inception",
    description: "Un ladro entra nei sogni delle persone per impiantare idee.",
    image: "/1.jpg",
    year: 2010,
    category: "Fantascienza",
    rating: 8.8,
  },
  {
    id: 2,
    name: "Il Padrino",
    description: "La saga della famiglia mafiosa dei Corleone.",
    image: "/2.jpg",
    year: 1972,
    category: "Crime",
    rating: 9.2,
  },
  {
    id: 3,
    name: "Pulp Fiction",
    description: "Storie intrecciate di criminali a Los Angeles.",
    image: "/3.jpg",
    year: 1994,
    category: "Crime",
    rating: 8.9,
  },
  {
    id: 4,
    name: "Fight Club",
    description: "Un uomo insoddisfatto incontra un venditore di sapone anarchico.",
    image: "/4.jpg",
    year: 1999,
    category: "Drammatico",
    rating: 8.8,
  },
  {
    id: 5,
    name: "The Dark Knight",
    description: "Batman affronta Joker per salvare Gotham.",
    image: "/5.jpg",
    year: 2008,
    category: "Azione",
    rating: 9.0,
  },
  {
    id: 6,
    name: "Forrest Gump",
    description: "La vita straordinaria di un uomo semplice e gentile.",
    image: "/6.jpg",
    year: 1994,
    category: "Drammatico",
    rating: 8.8,
  },
  {
    id: 7,
    name: "The Matrix",
    description: "Un hacker scopre che la realtà è una simulazione.",
    image: "/7.jpg",
    year: 1999,
    category: "Fantascienza",
    rating: 8.7,
  },
  {
    id: 8,
    name: "Interstellar",
    description: "Un viaggio attraverso lo spazio per salvare l’umanità.",
    image: "/8.jpg",
    year: 2014,
    category: "Fantascienza",
    rating: 8.6,
  },
  {
    id: 9,
    name: "Gladiatore",
    description: "Un generale romano diventa gladiatore per vendetta.",
    image: "/9.jpg",
    year: 2000,
    category: "Azione",
    rating: 8.5,
  },
  {
    id: 10,
    name: "The Shawshank Redemption",
    description: "La speranza in un carcere di massima sicurezza.",
    image: "/10.jpg",
    year: 1994,
    category: "Drammatico",
    rating: 9.3,
  },
  {
    id: 11,
    name: "Joker",
    description: "La discesa nella follia di Arthur Fleck.",
    image: "/11.jpg",
    year: 2019,
    category: "Azione",
    rating: 8.4,
  },
  {
    id: 12,
    name: "Parasite",
    description: "Una famiglia povera si infiltra nella vita di una famiglia ricca.",
    image: "/12.jpg",
    year: 2019,
    category: "Crime",
    rating: 8.6,
  },
  {
    id: 13,
    name: "Titanic",
    description: "Una storia d’amore a bordo del transatlantico più famoso.",
    image: "/13.jpg",
    year: 1997,
    category: "Drammatico",
    rating: 7.9,
  },
  {
    id: 14,
    name: "The Social Network",
    description: "La nascita di Facebook e le sue conseguenze.",
    image: "/14.jpg",
    year: 2010,
    category: "Crime",
    rating: 7.7,
  },
];

export type { Movie };
export { movies }
