import React from 'react'

import { useAuth } from "@/hooks/UseAuth";
import { Template } from '@/components/Template';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export const MyAccount = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Template pageTitle='Minha conta'>
      <Hero pageTitle='Minha conta'/>
      <Section>
        <h1>Minha conta</h1>
        <button onClick={handleLogout}>Logout</button>
      </Section>
    </Template>
  );
};
