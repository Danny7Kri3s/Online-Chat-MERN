export interface Inputs {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

export interface LoginInputs {
  username: string;
  password: string
}

export interface User {
  fullName: string;
  gender: string;
  profilePic: string;
  username: string;
  _id: string | number;
}

export interface MessageType {
shouldShake?: boolean;
createdAt: string;
message: string;
receiverId: string;
senderId: string;
updatedAt: string;
_id: string;
}