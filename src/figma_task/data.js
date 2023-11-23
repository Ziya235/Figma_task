import spain from '../img/spain.png';
import italy from '../img/italy.png';
import turkey from '../img/turkey.png';
import why_1 from '../img/why_1.png';
import why_2 from '../img/why_2.png';
import why_3 from '../img/why_3.png';
import turkey_2 from '../img/turkey_2.png'
import argentina from '../img/argentina.png'
import costa_rica from '../img/costa rica.png'
import iceland from '../img/iceland.png'
import roma from '../img/roma.png'
import portugal from '../img/portugal.png'
import vatikan from '../img/vatikan.png'
import kolizey from '../img/kolizey.png'
import peter from '../img/peter_basilica.png'
import food_1 from '../img/Food_drink_1.png'
import food_2 from '../img/Food_drink_2.png'
import See_do from '../img/See_do.png'
import travel_tips from '../img/travel_tips.png'
import inspiration from '../img/inspiration.png'


const trips = [
    {
      image: spain,
      trip: "SPAIN TRIP",
      expression: "Magical Madrid to Marrakech by train",
      days: "12 days",
      price: "$1299.00"
    },
    {
      image: italy,
      trip: "ITALY TRIP",
      expression: "Spectacular Sicily",
      days: "5 days",
      price: "$250.00"
    },
    {
      image: turkey,
      trip: "TURKEY TRIP",
      expression: "International Istanbul",
      days: "7 days",
      price: "$400.00"
    }
  ];


const whyy = [
    {
        image: why_1,
        expression :  "More than 149 travel titles currently in print"
    },
    {
        image: why_2,
        expression : "Supporting millions of travellers since 1982"
    },
    {
        image: why_3,
        expression : "Our utstanding customer satisfaction"
    } 
  ];

const faq_question = [
  {
    number : "01",
    question : "What are the best tips for finding budget-friendly travel accommodations?",
    answer :"To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet."
  },
  {
    number : "02",
    question : "How can I find authentic local experiences when traveling?  "  ,
    answer :"To discover budget-friendly accommodations, consider the following tips: Books"

  },
  {
    number : "03",
    question : "What should I pack for a long-term trip or backpacking adventure?",
    answer :"To discover budget-friendly accommodations, consider the following tips: Books"

  },
  {
    number : "04",
    question : "What are some strategies for overcoming jet lag when traveling across time zones?",
    answer :"To discover budget-friendly accommodations, consider the following tips: Books"
  },

  {
    number : "05",
    question : "What are the visa requirements for popular tourist destinations?",
    answer :"To discover budget-friendly accommodations, consider the following tips: Books"

  }
]

const available_trips = [
  {
    image: roma,
    trip: "ITALY TRIP",
    expression: "Roma",
    days: "13 available trip plans",
    price: "$1299.00"
  },
  {
    image: portugal,
    trip: "PORTUGAL TRIP",
    expression: "Foodie Puglia",
    days: "54 available trip plans",
    price: "$250.00"
  },
  {
    image: turkey_2,
    trip: "TURKEY TRIP",
    expression: "Foodie Puglia",
    days: "45 available trip plans",
    price: "$400.00"
  },
  {
    image: iceland,
    trip: "ICELAND TRIP",
    expression: "Foodie Puglia",
    days: "7 days",
    price: "$400.00"
  },
  {
    image: costa_rica,
    trip: "COSTA RICA TRIP",
    expression: "Foodie Puglia",
    days: "54 available trip plans",
    price: "$400.00"
  },
  {
    image: argentina,
    trip: "ARGENTINA TRIP",
    expression: "Foodie Puglia",
    days: "34 available trip plans",
    price: "$400.00"
  }
];


const MuseumData = [
  {
    image : vatikan, 
    museum_name : "Vatican Museum",
    expression :"Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"

  },
  {
    image : kolizey, 
    museum_name : " Colosseum",
    expression :"Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions."

  },
  {
    image : peter,
    museum_name : "St. Peter's basilicia",
    expression :"In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. "
  }
]



const Italy_experts = [
  {
    image : why_1,
    basliq : "Best Things to Do",
    expression : "Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you."
  },
  {
    image : why_2,
    basliq : "Things to Know",
    expression : "With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go."
  },
  {
    image : why_3,
    basliq : "Transportation",
    expression: "Your guide to traveling independently across Italy, from the Alps to the islands." 
  },
  {
    image : why_2,
    basliq :"Visa Requirements" ,
    expression : 'Italy is one of the most visited countries in Europe and its many attractions are hard to resist. Find out if you need a visa before you go.' 
  },
  {
    image : why_3,
    basliq : "Money and Costs",
    expression: "These top budget tips can help you save money while exploring Italy." 
  },
  {
    image : why_1,
    basliq : "Traveling with Kids",
    expression : "Experience the best of Italy as a family with this guide to the top things to do there with kids."
  }
]

const Blog_mini_1 = [
  {
    image : food_1,
    basliq : "Food & Drink",
    expression : "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"
  },
  {
    image : See_do,
    basliq : "See & Do",
    expression : "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More..."
  }
]

const Blog_mini_2 =[
  {
    image : inspiration,
    basliq : "Inspiration",
    expression :" Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican... "
  },
  {
    image : travel_tips,
    basliq : "Travel Tips",
    expression :"Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales..."
  },
  {
    image : food_2,
    basliq : "Food & Drink",
    expression : "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most... "
  }

]


export {trips, whyy,faq_question,available_trips,MuseumData,Italy_experts,Blog_mini_1,Blog_mini_2}