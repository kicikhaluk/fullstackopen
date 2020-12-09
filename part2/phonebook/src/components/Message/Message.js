import React from 'react';
import styles from './Message.module.css';

const Message = ({ message, success = false }) => {


  let messageEl = (
    <div className={[styles.message, styles.error].join(' ')}>
      <p>{message}</p>
    </div>
  );

  if (success) {
    messageEl = (
      <div className={[styles.message, styles.success].join(' ')}>
        <p>{message}</p>
      </div>
    );
  }

  return messageEl;
};

export default Message;