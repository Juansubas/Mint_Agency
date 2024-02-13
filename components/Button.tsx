"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import useSmoothScroll from '@/hooks/scrollToSection';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  sectionId?: string;
  onButtonClick?: () => void;
};

const Button = ({ type, title, icon, variant, sectionId, onButtonClick }: ButtonProps) => {
  const scrollToSection = sectionId ? useSmoothScroll({ sectionId }) : undefined;

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }

    if(scrollToSection) {
      scrollToSection();
    }
  } 


  return (
    <button
      className={`flexCenter gap-2 rounded-full border ${variant}`}
      type={type}
      onClick={handleClick}
    >
      <label className='font-[500] whitespace-nowrap cursor-pointer'>
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} className='invert' />}
    </button>
  );
};

export default Button;
