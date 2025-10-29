// quoteBtn
// quoteOutput
//authorOutput
const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);
// https://www.shopify.com/blog/motivational-quotes

const arrayOfQuotes = [
  {
    Author: "Albert Einstein",
    quote:
      "We cannot solve problems with the kind of thinking we employed when we came up with them",
  },
  {
    Author: "Norman Vincent Peale",
    quote: "When you change your thoughts, remember to also change your world.",
  },
  {
    Author: "Gordon B. Hinckley",
    quote:
      "You cannot plow a field by turning it over in your mind. To begin, begin.",
  },
  {
    Author: "Dale Carnegie",
    quote:
      "The successful man will profit from his mistakes and try again in a different way",
  },
  {
    Author: "Winston Churchill",
    quote:
      "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  },
  {
    Author: "John Wooden",
    quote:
      "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
  },
  {
    Author: "Melissa McCarthy",
    quote: "When I believe in something, I’m like a dog with a bone.",
  },
  {
    Author: "Winston Churchill",
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  },
  {
    Author: "Thomas Edison",
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  },
  {
    Author: "Albert Einstein",
    quote:
      "Try not to become a man of success, but rather try to become a man of value.",
  },
  {
    Author: "Colin R. Davis",
    quote:
      "The road to success and the road to failure are almost exactly the same.",
  },
  {
    Author: "Maya Angelou",
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
  },
  {
    Author: "Alexander Graham Bell",
    quote:
      "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
  },
  {
    Author: "Thomas Jefferson",
    quote:
      "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
  },
  {
    Author: "Henry David Thoreau",
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    Author: "Pablo Picasso",
    quote: "Action is the foundational key to all success.",
  },
  {
    Author: "Mahatma Gandhi",
    quote:
      "Glory lies in the attempt to reach one's goal and not in reaching it.",
  },
  {
    Author: "Babe Ruth",
    quote: "Never let the fear of striking out keep you from playing the game.",
  },
  {
    Author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    Author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    Author: "Vidal Sassoon",
    quote:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    Author: "Robert Collier",
    quote: "Success is the sum of small efforts, repeated day in and day out.",
  },
  {
    Author: "Henry Ford",
    quote: "Whether you think you can or think you can’t, you’re right.",
  },
  {
    Author: "Aristotle",
    quote: "Quality is not an act, it is a habit.",
  },
  {
    Author: "Booker T. Washington",
    quote: "If you want to lift yourself up, lift up someone else.",
  },
  {
    Author: "Napoleon Hill",
    quote: "Don’t wait. The time will never be just right.",
  },
  {
    Author: "Confucius",
    quote:
      "When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps.",
  },
  {
    Author: "Eleanor Roosevelt",
    quote: "You must do the thing you think you cannot do.",
  },
  {
    Author: "Theodore Roosevelt",
    quote: "Believe you can and you’re halfway there.",
  },
  {
    Author: "Mary Kay Ash",
    quote:
      "Aerodynamically, the bumble bee shouldn’t be able to fly, but the bumble bee doesn’t know it so it goes on flying anyway.",
  },
  {
    Author: "John D. Rockefeller",
    quote: "Don’t be afraid to give up the good to go for the great.",
  },
  {
    Author: "Maya Angelou",
    quote:
      "Courage is the most important of all the virtues because without courage, you can’t practice any other virtue consistently.",
  },
  {
    Author: "Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    Author: "Coco Chanel",
    quote:
      "Success is most often achieved by those who don’t know that failure is inevitable.",
  },
  {
    Author: "Oprah Winfrey",
    quote:
      "The biggest adventure you can take is to live the life of your dreams.",
  },
  {
    Author: "Margaret Thatcher",
    quote: "You may have to fight a battle more than once to win it.",
  },
  {
    Author: "Sheryl Sandberg",
    quote: "What would you do if you weren’t afraid?",
  },
  {
    Author: "Michelle Obama",
    quote: "There is no limit to what we, as women, can accomplish.",
  },
  {
    Author: "Ruth Bader Ginsburg",
    quote: "Women belong in all places where decisions are being made.",
  },
  {
    Author: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    Author: "Helen Keller",
    quote:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
  },
  {
    Author: "Dalai Lama",
    quote:
      "In order to carry a positive action we must develop here a positive vision.",
  },
  {
    Author: "Babe Ruth",
    quote: "It’s hard to beat a person who never gives up.",
  },
  {
    Author: "Albert Schweitzer",
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
  },
  {
    Author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    Author: "John Wooden",
    quote:
      "Things turn out best for the people who make the best of the way things turn out.",
  },
  {
    Author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);

  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>~${arrayOfQuotes[random].Author}</small>`;
}
