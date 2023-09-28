import { FC } from 'react';
import './Header.scss';

export const Header: FC = () => {
  return (
    <header className="header-container">
      <div className="page__horizontal-space header">
        <div className="tabs-container">
          <div className="tabs">
            <button className="tab active">
              <span className="date">Monday, August 23</span>
            </button>
            <button className="tab active">
              <span className="date">Monday, August 23</span>
            </button>
            <button className="tab active">
              <span className="date">Monday, August 23</span>
            </button>
          </div>
        </div>
        <button
          className="btn-primary btn-buy"
          data-test-id="header-cta"
          onClick={() => alert('Confirmed')}>
          Confirm
        </button>
      </div>
    </header>
  );
};
