import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userId = "eadc29e9-bbf4-4562-9752-704530102cc0";

  // Ensure the user exists
  const user = await prisma.user.upsert({
    where: { id: userId },
    update: {},
    create: {
      id: userId,
      username: "test",
      email: "test@gmail.com",
    },
  });

  // Define notebooks, collections, and cues data
  const notebooksData = [
    {
      title: "Spanish Notebook",
      collections: [
        {
          title: "Basics",
          cues: [
            {
              question: "How do you say 'apple' in Spanish?",
              answer: "Manzana",
            },
            { question: "How do you say 'book' in Spanish?", answer: "Libro" },
            { question: "How do you say 'house' in Spanish?", answer: "Casa" },
          ],
        },
        {
          title: "Advanced",
          cues: [
            {
              question: "How do you say 'computer' in Spanish?",
              answer: "Computadora",
            },
            {
              question: "How do you say 'science' in Spanish?",
              answer: "Ciencia",
            },
            {
              question: "How do you say 'friendship' in Spanish?",
              answer: "Amistad",
            },
          ],
        },
      ],
    },
    {
      title: "Math Notebook",
      collections: [
        {
          title: "Algebra",
          cues: [
            { question: "Solve for x: 2x + 3 = 7", answer: "x = 2" },
            { question: "Solve: 3x - 5 = 10", answer: "x = 5" },
            { question: "Factor: x^2 - 9", answer: "(x-3)(x+3)" },
          ],
        },
        {
          title: "Geometry",
          cues: [
            { question: "Sum of angles in a triangle?", answer: "180°" },
            { question: "Area of a circle formula?", answer: "πr²" },
            { question: "Pythagoras theorem?", answer: "a² + b² = c²" },
          ],
        },
      ],
    },
    {
      title: "History Notebook",
      collections: [
        {
          title: "Ancient Civilizations",
          cues: [
            {
              question: "Where was the Roman Empire centered?",
              answer: "Rome",
            },
            {
              question: "Who built the Pyramids?",
              answer: "Ancient Egyptians",
            },
            { question: "First writing system?", answer: "Cuneiform" },
          ],
        },
        {
          title: "Modern History",
          cues: [
            { question: "Year of the French Revolution?", answer: "1789" },
            {
              question: "Who was the first US president?",
              answer: "George Washington",
            },
            { question: "Start of World War II?", answer: "1939" },
          ],
        },
      ],
    },
  ];

  // Loop through notebooks, collections, and cues to create them
  for (const notebookData of notebooksData) {
    const notebook = await prisma.notebook.create({
      data: {
        title: notebookData.title,
        userId: user.id,
      },
    });

    for (const collectionData of notebookData.collections) {
      const collection = await prisma.collection.create({
        data: {
          title: collectionData.title,
          notebookId: notebook.id,
        },
      });

      for (const cueData of collectionData.cues) {
        await prisma.cue.create({
          data: {
            question: cueData.question,
            collectionId: collection.id,
            answer: {
              create: {
                text: cueData.answer,
              },
            },
          },
        });
      }
    }
  }

  console.log("data has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
