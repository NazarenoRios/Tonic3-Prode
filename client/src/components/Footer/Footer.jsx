import React from 'react'
import Info from './FooterParts/Info';
import NewsLetters from './FooterParts/NewsLetters';
import Other from './FooterParts/Other';
import Policy from './FooterParts/Policy';
import { FooterSection } from './StyledComponents';

function Footer() {
  return (
    <FooterSection>
        <NewsLetters />
        <Info/>
        <Policy/>
        <Other/>
    </FooterSection>
  )
}


export default Footer