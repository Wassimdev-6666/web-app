import image1 from "../assets/images/Onepiece/onepiece.jpg";
import image2 from "../assets/images/dragonball/dragonball.jpg";
import image3 from "../assets/images/Naruto/Naruto.jpg";
import image4 from "../assets/images/Henter X Henter/Henter.jpg";
import image5 from "../assets/images/Inazuma/Inazuma Eleven.jpg";
import image6 from "../assets/images/Tokyo rol/Tokyo.jpg";
import image7 from "../assets/images/Demon Slayer/Demon slayer.jpg";
import image8 from "../assets/images/Detective Conan/Detective conan.jpg";
import image9 from "../assets/images/Fairy/fairy.jpg";
import image10 from "../assets/images/Haykyo/Haikyu.jpg";
import image11 from "../assets/images/attack on titan/attack on titan.jpg";
import image12 from "../assets/images/Fullmetal/Fullmetal.jpg";
import image13 from "../assets/images/Hero/Herojpg.jpg";
import image14 from "../assets/images/Death/death.jpg";
import image15 from "../assets/images/Gate/gate.jpg";
import image16 from "../assets/images/One Punch/onepunch.jpg";
import image17 from "../assets/images/Swordart/swordart.jpg";
import image18 from "../assets/images/CodeGeass/codegeass.jpg";
import image19 from "../assets/images/Basket/basket.jpg";
import image20 from "../assets/images/nanatsnu no tazai/nanatsnu.jpg";

const data = [
    {
        id: 1,
        title: "One Piece",
        image: image1,
        description: "Luffy et son équipage de pirates partent à la recherche du trésor ultime, le One Piece, pour devenir le Roi des Pirates.",
        episodes: 1000,
        rating: 6.0,
        category: "Aventure"
    },
    {
        id: 2,
        title: "Dragon Ball",
        image: image2,
        description: "Suivez les aventures de Goku qui s'entraîne aux arts martiaux et explore le monde à la recherche des Dragon Balls.",
        episodes: 153,
        rating: 4.0,
        category: "Action"
    },
    {
        id: 3,
        title: "Naruto",
        image: image3,
        description: "Suivez le parcours de Naruto Uzumaki qui rêve de devenir le ninja le plus fort et le leader de son village.",
        episodes: 720,
        rating: 9.0,
        category: "Aventure"
    },
    {
        id: 4,
        title: "Hunter x Hunter",
        image: image4,
        description: "Gon Freecss veut devenir Hunter pour retrouver son père, mais il rencontre de nombreux défis et se fait de nouveaux amis en chemin.",
        episodes: 148,
        rating: 5.0,
        category: "Aventure"
    },
    {
        id: 5,
        title: "Inazuma Eleven",
        image: image5,
        description: "Un groupe de jeunes joueurs de football se rassemble pour former l'équipe Inazuma Eleven et participer à des tournois pour devenir les meilleurs du monde.",
        episodes: 127,
        rating: 7.0,
        category: "Sport"
    },
    {
        id: 6,
        title: "Tokyo Ghoul",
        image: image6,
        description: "Dans un monde où les goules vivent parmi les humains, Kaneki Ken devient mi-goule après une rencontre fortuite, le forçant à naviguer dans une nouvelle réalité dangereuse.",
        episodes: 48,
        rating: 8.0,
        category: "Horreur"
    },
    {
        id: 7,
        title: "Demon Slayer",
        image: image7,
        description: "Tanjiro Kamado, jeune garçon devenu chasseur de démons, cherche à venger sa famille massacrée et se lance dans un voyage pour éradiquer les démons.",
        episodes: 26,
        rating: 2.0,
        category: "Action"
    },
    {
        id: 8,
        title: "Detective Conan",
        image: image8,
        description: "Shinichi Kudo, un brillant jeune détective, est transformé en enfant après avoir été empoisonné. Il continue de résoudre des affaires sous le pseudonyme de Conan Edogawa.",
        episodes: 1000,
        rating: 9.0,
        category: "Mystère"
    },
    {
        id: 9,
        title: "Fairy Tail",
        image: image9,
        description: "Suivez les aventures de Natsu Dragneel et de ses amis de la guilde Fairy Tail alors qu'ils accomplissent des missions et affrontent de redoutables ennemis dans le pays magique de Fiore.",
        episodes: 328,
        rating: 5.0,
        category: "Aventure"
    },
    {
        id: 10,
        title: "Haikyu!!",
        image: image10,
        description: "Hinata Shoyo, joueur de volley-ball déterminé mais de petite taille, rejoint l'équipe de volley-ball de son lycée pour réaliser son rêve de devenir un grand joueur.",
        episodes: 85,
        rating: 7.0,
        category: "Sport"
    },
    {
        id: 11,
        title: "Attack on Titan",
        image: image11,
        description: "L'humanité lutte pour sa survie contre d'immenses créatures humanoïdes connues sous le nom de Titans, avec une histoire captivante de politique, de survie et de guerre.",
        episodes: 75,
        rating: 8.0,
        category: "Action"
    },
    {
        id: 12,
        title: "Fullmetal Alchemist",
        image: image12,
        description: "Deux frères cherchent la Pierre Philosophale pour restaurer leur corps après une expérience alchimique ratée, découvrant de profondes conspirations en cours de route.",
        episodes: 64,
        rating: 9.0,
        category: "Aventure"
    },
    {
        id: 13,
        title: "My Hero Academia",
        image: image13,
        description: "Dans un monde où presque tout le monde a des super pouvoirs, un jeune garçon sans pouvoir s'inscrit dans une prestigieuse académie de héros pour devenir un héros.",
        episodes: 113,
        rating: 5.0,
        category: "Action"
    },
    {
        id: 14,
        title: "Death Note",
        image: image14,
        description: "Un lycéen acquiert le pouvoir de tuer quiconque en",
        episodes: 37,
        rating: 7.0,
        category: "Mystère"
    },
    {
        id: 15,
        title: "Steins;Gate",
        image: image15,
        description: "Un groupe d'amis invente accidentellement une machine à remonter le temps, ce qui entraîne des conséquences dangereuses alors qu'ils tentent de manipuler le temps à leur avantage.",
        episodes: 24,
        rating: 8.0,
        category: "Sci-Fi"
    },
    {
        id: 16,
        title: "One Punch Man",
        image: image16,
        description: "Un héros qui peut vaincre n'importe quel adversaire d'un seul coup lutte contre l'ennui existentiel dans un monde rempli de puissants méchants.",
        episodes: 24,
        rating: 9.0,
        category: "Action"
    },
    {
        id: 17,
        title: "Sword Art Online",
        image: image17,
        description: "Les joueurs sont piégés dans un MMORPG de réalité virtuelle, où la mort dans le jeu signifie la mort dans la vraie vie, ce qui entraîne une lutte pour la survie et l'évasion.",
        episodes: 97,
        rating: 5.0,
        category: "Fantasy"
    },
    {
        id: 18,
        title: "Code Geass",
        image: image18,
        description: "Dans un futur alternatif, un jeune prince acquiert le pouvoir de contrôler les actions des autres et se lance dans une mission pour renverser un régime oppressif.",
        episodes: 50,
        rating: 7.0,
        category: "Sci-Fi"
    },
    {
        id: 19,
        title: "Kuroko no Basket",
        image: image19,
        description: "Tetsuya Kuroko, un joueur apparemment invisible, rejoint l'équipe de basket-ball du lycée Seirin. Avec ses compétences exceptionnelles de passe et la détermination de l'équipe, ils visent à devenir les meilleurs du Japon.",
        episodes: 75,
        rating: 8.0,
        category: "Sport"
    },
    {
        id: 20,
        title: "Nanatsu no Taizai",
        image: image20,
        description: "Les Sept Péchés Capitaux, un groupe de chevaliers légendaires, ont autrefois mené le royaume de Britannia à la victoire sur ses ennemis. Mais ils ont été accusés de trahison et dissous. Des années plus tard, une princesse se lance dans un voyage pour retrouver les Sept Péchés Capitaux et demander leur aide pour reconquérir le royaume.",
        episodes: 24,
        rating: 2.0,
        category: "Aventure"
    }
];

export default data;
