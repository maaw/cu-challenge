import { FC } from 'react';
import cart from '../../../../assets/cart.svg';
import './SubHeader.scss';
import Delivery from '../../../../models/Delivery';
import { isHoliday } from 'date-fns-holiday-us';

interface SubHeaderProps {
  delivery: Delivery;
}

export const SubHeader: FC<SubHeaderProps> = ({ delivery }) => {
  const shouldReschedule = isHoliday(new Date(delivery.date));

  return (
    <div className="subheader-container">
      <div className="subheader page__horizontal-space">
        <h1 data-test-id="subheader-title">
          {shouldReschedule ? 'Reschedule' : 'Confirm'} your order
        </h1>
        <button
          className="btn-primary cta"
          data-test-id="subheader-cta"
          onClick={() => alert(shouldReschedule ? 'Rescheduled' : 'Confirmed')}>
          <div className="cart-counter">
            <img src={cart} alt="Cart" />
            <span data-test-id="cart-counter">{delivery.products.length}</span>
          </div>
          <span className="copy">
            {shouldReschedule ? 'Reschedule' : 'Confirm'}
          </span>
        </button>
      </div>
    </div>
  );
};
