
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    label: "Number of Guests Invited",
    expectedAnswers: ["80"]
  },
  {
    id: 2,
    label: "Customer Budget",
    expectedAnswers: ["400-600", "400 to 600", "£400-£600", "£400 to £600", "400 - 600"]
  },
  {
    id: 3,
    label: "Marquee Size (meters)",
    expectedAnswers: ["4.5", "4,5"]
  },
  {
    id: 4,
    label: "Description of Cost (£450)",
    expectedAnswers: ["hire and installation", "hire & installation", "installation and hire"]
  },
  {
    id: 5,
    label: "Description of Cost (£150)",
    expectedAnswers: ["carpeting", "the carpeting", "carpet"]
  },
  {
    id: 6,
    label: "Lighting Cost (approx)",
    expectedAnswers: ["55", "£55", "55 pounds"]
  },
  {
    id: 7,
    label: "Set-up date",
    expectedAnswers: ["june 5", "june 5th", "5 june", "5th june", "05/06", "5/6"]
  }
];

export const TRANSCRIPT = `
Representative: Good afternoon! Magnificent Marquees, how can I help you?
Caller: Oh hello, I would like to hire a marquee. You see, it's for special occasion. My eldest daughter's celebrating her 18th birthday and her coming of age. There was no question of her waiting until her 21st, although I'm sure we'll be having a big celebration then, too!
Representative: So, you're celebrating in style! Well, of course, I'd be happy to help. First, could you give me some details about guest numbers?
Caller: Right, yes...Well, I was anticipating just a small 'do' but my daughter seems to have other ideas!
Representative: Well, you can't blame her; It's a special day!
Caller: I guess...I told her to limit numbers to around 50 guests but the guest list seems to be growing daily. She would like to invite double that number but we decided to split the difference and settle on 80 rather than 100!
Representative: If you don't mind some of the guests standing, then our marquee sizes always allow standing space for almost double as many as those seated. For instance, one of our smaller marquees seats 30 guests but accommodates 50 standing.
Caller: That sounds interesting. How big is that marquee? As not only am I working to a budget but also we're limited by our garden size.
Representative: Can you give me an idea of both your budget and the size we're looking at?
Caller: Yes, I'm thinking of spending between £400-£600. I can stretch to another hundred or two but that's the maximum limit. As for size, well, our garden's 15 metres by 30 metres.
Representative: OK... Well, our 4.5 by 9 metres marquee would fit in nicely. The hire and installation comes to £450 but that allows you to have the marquee for 2 days.
Caller: The marquee size you mentioned sounds fine and will accommodate the guests that we are expecting. Yes, I think that's the size I'll go for.
Representative: So, now as to the cost of lighting and fittings...
Caller: Oh, will that be very expensive?
Representative: It depends on what you want but the cost of carpeting the marquee will add on another £150. With regard to the lighting, prices vary quite a bit. If you opt for chandelier lighting, then it's another £90. But that's the most expensive option. Otherwise, the average pricing is around £55.
Caller: I think I'll go for the more economic lighting then.
Representative: Then there's the furniture: tables and chairs and so on. You decided on seating for 30 guests... Well, at £3 per chair, that will work out at £90 In total. You will then probably need 5 tables at least and so with each table costing £4, that brings us to a total of £20 for the tables.
Caller: OK, so I'm still just within my budget. Great! I'll go ahead with the booking then.
Representative: Wonderful. So there's only one more important detail that I need. When would you like us to set up the marquee?
Caller: Well, my daughter's birthday is on June 6th, so ideally a day beforehand. Then we could have it taken down the day after her birthday.
Representative: Yes, no problem.
Caller: Great. Well, I'll go ahead with the order then.
Representative: Wonderful!
[Part 2]
Representative: OK, so that I can process your order, I need to take down some details. May I start by taking down your name and postcode?
Caller: Yes. It's Jenny Lakewell, and the postcode's CV6 TL3.
Representative: Is that Jenny with a double 'N'?
Caller: Yes, that's correct.
Representative: And is that Jenny with a 'Y' or an 'IE' at the end?
Caller: Yes, it confuses everyone. I use the first spelling.
Representative: And, I'm sorry, I didn't quite catch the postcode, was that 'CB6'?
Caller: No, It's with a 'V', not a 'B'. So it's CV6.
Representative: Right you are. Can I have a contact number also, please?
Caller: My mobile number is 0-7-9-0-0 4-5-6. Oh, hold on a minute! I forgot I've got a different number now. So it's 0-7-9-then double 4, not double 0, followed by 3-2-5-8-8-3.
Representative: Great! That's everything for the moment. Well be sending you details and an invoice through the post in the next few days.
Caller: OK. And thank you for your help. Goodbye!
`;
