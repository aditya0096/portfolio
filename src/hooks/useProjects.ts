export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export function useProjects(): Project[] {
  return [
    {
      title: 'Chatting Application',
      description:
        'A one-to-one chatting application with Firebase, React and NextJs. Login and Sign-up is by Google Authentication. Easy and simple interface just need to search the user with whom we need to talk and if he is signed up then we can chat with them.',
      technologies: ['React', 'Firebase', 'Google Auth', 'Next.js'],
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://chatting-app-eight.vercel.app',
      githubUrl: 'https://github.com/aditya0096/chatting_app',
      featured: true,
    },
    {
      title: 'Netflix Clone',
      description:
        'A Netflix-like website with sorted series and movies by genre. Uses a movie API for sorting and shows trailers on click. Built with React and hosted on Firebase.',
      technologies: ['React', 'Firebase', 'Movie API'],
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://netflix-clone-aditya.vercel.app',
      githubUrl: 'https://github.com/aditya0096/netflix-clone',
      featured: true,
    },
    {
      title: 'Cubics',
      description:
        'A Desktop FPP Game with never ending Platform and many Obstacles. Single player with functionalities like moving, jumping, score display, and multiple levels.',
      technologies: ['Unity', 'C++', 'Game Dev'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '',
      githubUrl: '',
      featured: false,
    },
  ];
} 