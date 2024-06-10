import * as React from 'react';
import "./ReviewCard.scss"
export interface reviewCardProps {
}

export default function ReviewCard(props: reviewCardProps) {
  return (
    <div className='reviewCard-component'>
        <img src="" alt="" />
      <p>User name</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus voluptate libero ipsam, nam, odio dicta eveniet minima fuga culpa nemo quos maiores reiciendis illum, iusto deleniti sapiente deserunt labore! Qui.</p>
    </div>
  );
}
