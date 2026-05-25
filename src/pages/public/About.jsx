import { useState } from 'react';
import Editorialintro from '../../components/public/EditorialIntro';
import AccoladesBanner from '../../components/public/AccoladesBanner';
import Partners from '../../components/public/Partners';
import CraftManifest from '../../components/public/CraftManifest';
import WelcomeAddress from '../../components/public/WelcomeAddress';
import EditorialTicker from '../../components/public/EditorialTicker';
export default function About() {

  return (
    <>
    <Editorialintro />
    <WelcomeAddress />
    <CraftManifest />
    
      <Partners />
    {/* <AccoladesBanner /> */}
   
    </>
  );
}
