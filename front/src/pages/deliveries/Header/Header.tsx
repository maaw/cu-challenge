import './Header.scss';
import Delivery from '../../../models/Delivery';
import { isHoliday } from 'date-fns-holiday-us';

interface HeaderProps {
  deliveries: Delivery[];
  selectedDelivery: Delivery | any;
  setSelectedDelivery: (delivery: Delivery | any) => void;
}

export const Header: React.FC<HeaderProps> = ({
  deliveries,
  selectedDelivery,
  setSelectedDelivery,
}) => {
  const handleTabClick = (delivery: Delivery) => {
    setSelectedDelivery(delivery);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const formatDate = (dateString: string) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const shouldReschedule = isHoliday(
    new Date(selectedDelivery?.date || deliveries[0].date)
  );

  return (
    <header className="header-container">
      <div className="page__horizontal-space header">
        <div className="tabs-container">
          <div className="tabs">
            {deliveries.map((delivery) => (
              <button
                className={`tab ${
                  delivery.id === (selectedDelivery?.id || deliveries[0]?.id)
                    ? 'active'
                    : ''
                }`}
                key={delivery.id}
                onClick={() => handleTabClick(delivery)}>
                <span className="date">{formatDate(delivery.date)}</span>
              </button>
            ))}
          </div>
        </div>
        <button
          className="btn-primary btn-buy"
          data-test-id="header-cta"
          onClick={() => alert(shouldReschedule ? 'Rescheduled' : 'Confirmed')}>
          {shouldReschedule ? 'Reschedule' : 'Confirm'}
        </button>
      </div>
    </header>
  );
};
