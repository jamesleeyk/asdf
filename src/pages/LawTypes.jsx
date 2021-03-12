import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LawTypes.scss';
import allTypes from '../assets/Images/sebastian-pichler-bAQH53VquTc-unsplash 1.png';
import bankruptcy from '../assets/Images/melinda-gimpel-9j8k3l9afkc-unsplash 1.png';
import business from '../assets/Images/adeolu-eletu-E7RLgUjjazc-unsplash 1.png';
import civil from '../assets/Images/tingey-injury-law-firm-L4YGuSg0fxs-unsplash 1.png';
import criminal from '../assets/Images/matt-popovich-7mqsZsE6FaU-unsplash 1.png';
import entertainment from '../assets/Images/image 11.png';
import environmental from '../assets/Images/alexander-tsang-ppN1zRQrCEg-unsplash 1.png';
import family from '../assets/Images/download-6 1.png';
import health from '../assets/Images/online-marketing-hIgeoQjS_iE-unsplash 1.png';
import immigration from '../assets/Images/convertkit-htQznS-Rx7w-unsplash 1.png';
import intellectual from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash 1.png';
import international from '../assets/Images/nareeta-martin-iPp_KIsFBnI-unsplash 1.png';
import labour from '../assets/Images/paul-einerhand-InD2tBJODcM-unsplash 1.png';
import maritime from '../assets/Images/image 10.png';
import military from '../assets/Images/diego-gonzalez-nJI8WAqpn7Y-unsplash 1.png';
import personal from '../assets/Images/bill-oxford-OXGhu60NwxU-unsplash 1.png';
import real from '../assets/Images/ronnie-george-9gGvNWBeOq4-unsplash (1) 1.png';
import tax from '../assets/Images/stellrweb-djb1whucfBY-unsplash 1.png';
import back from '../assets/Logo/Vector.png';

export default class LawTypes extends Component {
  render() {
    const lawTypes = [
      { type: 'All types', image: allTypes },
      { type: 'Immigration', image: immigration, to: '/immigration' },
      { type: 'Bankruptcy', image: bankruptcy },
      { type: 'Business/Corporate', image: business },
      { type: 'Civil Rights', image: civil },
      { type: 'Criminal', image: criminal },
      { type: 'Entertainment', image: entertainment },
      { type: 'Environmental', image: environmental },
      { type: 'Family', image: family },
      { type: 'Health', image: health },
      { type: 'Intellectual Property', image: intellectual },
      { type: 'International', image: international },
      { type: 'Labour', image: labour },
      { type: 'Maritime', image: maritime },
      { type: 'Military', image: military },
      { type: 'Personal Injury', image: personal },
      { type: 'Real Estate', image: real },
      { type: 'Tax', image: tax },
    ];
    return (
      <div className="law">
        <div className="law__header">
          <Link to="/main">
            <img src={back} alt="" className="law__back" />
          </Link>
          <h1 className="law__title">Law Types</h1>
          <input type="text" className="law__search" />
        </div>
        <div className="law__card-div">
          {lawTypes.map((law) => {
            return (
              <Link className="law__link" to={law.to}>
                <article className="law__card">
                  <img src={law.image} alt="" className="law__img" />
                  <h2 className="law__type">{law.type}</h2>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
