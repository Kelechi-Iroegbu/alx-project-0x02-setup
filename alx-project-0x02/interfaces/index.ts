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
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  className?: string; 
}
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  className?: string;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// interfaces/index.ts
export interface UserProps {
id: number;
name: string;
email: string;
address: {
street: string;
suite: string;
city: string;
zipcode: string;
};
}