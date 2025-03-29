export interface User {
  id: number;
  name: string;
  email?: string;
  profileImage: string;
}

export interface Attachment {
  name: string;
  size: string;
}

export interface Message {
  id: string;
  sender: User;
  timestamp: string;
  text: string;
  type: "text" | "file";
  attachment?: Attachment;
}

export interface Chat {
  id: string;
  taskName: string;
  members: User[];
  messages: Message[];
}
