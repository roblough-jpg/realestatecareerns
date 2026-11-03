// Agent testimonials. Each agent gave written permission to publish their words, name and photo.
// An entry with name: null is waiting for details and is not shown on the site.
export interface Testimonial { name: string | null; since: string; photo: string; quote: string[]; }

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Melissa Pilkington',
    since: 'With Century 21 Optimum Realty since December 2024',
    photo: '/media/agents/melissa-pilkington.jpg',
    quote: [
      'I joined Century 21 Optimum in December 2024, and within just a few short weeks, I knew I had found the perfect place for me!',
      'Both owners, Rob and Keith, bring a great balance of knowledge, industry experience, compassion, and genuine care for their agents. And perhaps most importantly, they actually answer the phone when I call with a problem!',
      'Early on, I had a challenging transaction that required some broker intervention. Rob took the time to patiently listen to the situation and offer guidance, while Keith stepped in to help with some client correspondence. Having that kind of support when you need it really makes a difference.',
      'I’m proud to be part of the Century 21 Optimum team!',
    ],
  },
  {
    name: 'Dale Quinlan',
    since: 'REALTOR® for 26 years, with Century 21 Optimum Realty since November 2024',
    photo: '/media/agents/dale-quinlan.jpg',
    quote: [
      'When I was advised, on relatively short notice, that my previous brokerage, Red & White Realty, would be closing, I took some time to research my options. I wanted to find a brokerage that was progressive, forward-thinking, and could provide me with the tools, support, and opportunities to continue growing my business. It quickly became clear that Century 21 Optimum Realty was exactly what I was looking for.',
      'Although I was already a very experienced REALTOR®, I recognized that there was still so much more to learn. I wanted a brokerage where I could continue to grow, receive ongoing training, and have access to one-on-one support when needed. I found all of that and more at Century 21 Optimum Realty. The brokers are absolutely amazing! Their knowledge, guidance, and willingness to help have played a huge part in making me an even more successful agent. They have been there for me every step of the way.',
      'Century 21 also provides its agents with an impressive selection of tools and resources to make the job easier and more efficient. One of my favourites is BrokerageFlow, which allows us to securely store and organize all our documents in one convenient location. It also provides valuable reminders and tools to help keep clients informed and up to date throughout the buying and selling process. Whether you are working with a buyer or a seller, the information is readily available and can be personalized to meet each client’s needs. And those reminders: they are worth their weight in gold for each client!',
      'Looking back, I am so glad I took the time to research my options and made the move to Century 21 Optimum Realty. It has been a great decision, and I truly feel I found a brokerage that supports me as an agent, encourages growth, and provides the resources needed to succeed.',
    ],
  },
];
