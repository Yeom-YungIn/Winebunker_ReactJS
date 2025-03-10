import React from 'react';
import { Main } from '../components/Header/Main';
import { Footer } from '../components/Footer/Footer';
import { Registration } from '../components/Registration/Registration';
export default function RegistrationModule() {
  return (
    <div>
      <Main></Main>
      <Registration />
      <Footer />
    </div>
  );
}
