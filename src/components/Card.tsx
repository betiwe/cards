import { FC } from 'react';
import './card.css'

interface CardProps {
  img?: string;
  title: string;
  description: string;
  buttonName: string;
  link: string;
}

export const Card: FC<CardProps> = ({ img, title, description, buttonName, link }) => {
  return (
    <>
      <div className='card'>
        {img ? (<img src={img} className='card-img-top' alt='...' />) : (<></>)}
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <a href={link} className='btn'>
            {buttonName}
          </a>
        </div>
      </div>
    </>
  );
};
