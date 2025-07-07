const suggestions = [
    "Create a 4x4 sudoku.",
    "Write a short story with less than 50 words about something you ate recently.",
    "Write a poem with only questions.",
    "Draw something using only triangles.",
    "Compose a melody with exactly 5 notes.",
    "Design a character who can't speak.",
    "Write about a country without a traditional government.",
    "Draw a sound you heard in the last week.",
    "Compose a loop with one chord.",
    "Learn 5 new words in a language you don't speak.",
    "Read a chapter of a book.",
    "Do an exercise for 2 minutes.",
    "Do a 5 minute gesture drawing.",
    "Compose a 10-20 second theme in 30 minutes or less.",
    "Do a beginner's Blender challenge.",
    "Write a simple game mechanic and how you could build story or lore around it.",
    "Do 3 chess puzzles.",
    "Go for a walk.",
    "Do 10 minutes of drawing exercises.",
    "Make a small snack.",
    "Add code to this project.",
    "Check in on a friend.",
    "Watch some standup.",
    "5-10 minute tidy.",
    "20 minutes playing a video game.",
    "Watch infotainment YouTube videos for up to 30 minutes.",
    "Watch/progress a TV show you've not finished before",
    "Do a 15 minute Blender sculpt of an object you can see.",
    "Spend 15 minutes writing a diary/journal entry.",
    "Work on feature of data engineering project.",
    "Work on feature of web development project.",
    "20 minutes progressing freeCodeCamp full stack course.",
    "Pick a random year to research history.",
    "Write a 6-8 line poem in rhyming couplets.",
    "Listen to at least 15 minutes of an album you've never heard before.",
    "You have 5 minutes to decide on the next film you will watch."
];

const promptButton = document.getElementById("prompt-generator");
const promptText = document.getElementById("prompt");

promptButton.addEventListener("click", () => {
    const randomSelection = Math.floor(Math.random() * suggestions.length);
    promptText.textContent = suggestions[randomSelection];
})