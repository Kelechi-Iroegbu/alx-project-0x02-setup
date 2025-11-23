export interface ButtonProps {
  title: string;
  styles?: string;
  onClick?: () => void;
}

export interface PostCardProps {
  title: string;
  description: string;
  image?: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}
