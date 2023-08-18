import { useEffect } from 'react';

const VARIANTS = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success'
};

const FlashMessage = ({ message, onDurationEnd, duration=3000, variant=VARIANTS.info }) => {

  useEffect(() => {
    const timer = setTimeout(onDurationEnd, duration);

    return (() => clearTimeout(timer));
  }, [duration, onDurationEnd]);

  return (
    <div className={`flash ${variant}`}>{message}</div>
  )
};

export default FlashMessage;
