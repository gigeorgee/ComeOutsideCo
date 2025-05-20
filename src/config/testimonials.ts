// Testimonial interface
export interface Testimonial {
  quote: string;
  name: string;
  since: string;
  image: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    quote: "Come Outside changed my perspective on running. It's not just about the exercise - it's about the amazing people you meet and the community you become part of.",
    name: "Sarah Johnson",
    since: "2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  },
  {
    quote: "From barely being able to run 1K to completing my first half marathon - the support from this community has been incredible. They believe in you even when you don't believe in yourself.",
    name: "Michael Chen",
    since: "2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    quote: "The weekend runs have become the highlight of my week. The positive energy and encouragement from everyone make every session special.",
    name: "Emma Thompson",
    since: "2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    quote: "The inclusive atmosphere at Come Outside is what keeps me coming back. Whether you're walking or running, everyone is celebrated.",
    name: "Thomas Wright",
    since: "2022",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "I started with the 3K walk and now I'm training for a half marathon! The gradual progression and constant encouragement made this possible.",
    name: "Sophia Kim",
    since: "2021",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    quote: "As someone who never considered themselves a 'runner', Come Outside has shown me that running is for everyone. The community spirit is unmatched.",
    name: "David Patel",
    since: "2022",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

export default testimonials;
