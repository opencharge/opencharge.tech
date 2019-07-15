import React from 'react';
import { withNaming } from '@bem-react/classname';
import Card from '../Card/Card';
import cardData from "../../cardData"

const cn = withNaming({ e: '__', m: '_' });
const cnLayout = cn('tpl-layout');


export default function Layout({ children }) {
  const CardComponents = cardData.map(card => <Card key={card.id} serviceName={card.serviceName} price={card.price} cardName={card.cardName} />)
  
  return (
    <div className={cnLayout({ structure: '50-50' })}>
      <div className="tpl-layout__section"> 
        <div className="tpl-layout__content"> 
          <div className="tpl-layout__container"> 
            <Card 
              serviceName = "Spotify"
              price = "$123"
              cardName = "Tinkoff"
            />
            {CardComponents}
          </div>
        </div>
      </div>

      <div className="tpl-layout__section"> 
        <div className="tpl-layout__content"> 
          <div className="tpl-layout__container"> 
          
          </div>
        </div>
      </div>
    </div >
  );
}
