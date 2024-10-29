import { PrismaClient } from "@prisma/client";

/* Inicializamos Prisma Client dentro de una constante */
const prisma = new PrismaClient();

/* Función asíncrona: */
async function main() {
    // Crea (Inserta) o actualiza un registro en la tabla
    // create: Inserta un nuevo registro y lanza un error si ya existe.
    const meme01 = await prisma.meme.create({
        data: {
            title: 'Pikachu Sorprendido',
            description: 'Meme del Pokémon Pikachu sorprendido',
            imageUrl: 'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600,c_limit/Ideas_Surprised_Pikachu_HD.jpg',
            isTrending: false,
            creatorName: 'Smpratte',
            likes: 3000
        }
    });
    const meme02 = await prisma.meme.create({
        data: {
            title: 'Trollface',
            description: 'Meme clásico utilizado para representar trolling (troleo) o bromas',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png',
            isTrending: true,
            creatorName: 'Carlos Ramírez',
            likes: 2000
        }
    });

    // Crea (Inserta) un nuevo registro si no existe, o lo actualiza si ya existe.
    // upsert: Busca el registro; si existe, lo actualiza; si no, lo crea.
    const newmeme01 = await prisma.meme.upsert({
        where: { title: 'Doomer' },  // Criterio de búsqueda
        update: { likes: 4444 }, // Datos para actualizar si el meme ya existe
        create: { //Datos para crear si el meme ya existe
            title: 'Doomer',
            description: 'Un Wojack sombrío que representa el existencialismo y la desesperanza',
            imageUrl: 'https://pngimg.com/uploads/wojak/wojak_PNG109607.png',
            isTrending: true,
            creatorName: 'Anónimo',
            likes: 5000
        }


    });
    console.log({ meme01, newmeme01 });
    
    /* Ejecutar la función 'main': */
    main()
        .catch((e) => {
            console.error(e);
            process.exit(1);
        })
        .finally(async () => {
            // close Prisma Client at the end
            await prisma.$disconnect();
        });

}
