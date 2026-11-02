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
];
