import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'large' | 'medium';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}