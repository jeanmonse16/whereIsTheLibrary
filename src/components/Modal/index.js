import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

export const Modal = (isOpen, onClose, { children }) => {
  if (isOpen) {
    ReactDOM.createPortal(
      <div className='Modal'>
        <div className='Modal__container'>
          <button className='Modal__close-button' onClick={onClose}> x </button>
          {children}
        </div>
      </div>,
      document.getElementById('modal')
    )
  } else {
    return null
  }
}

export const Deadpool = (Open, Close) => (
  <Modal isOpen={Open} onClose={Close}>
    <img src='../../images/deadpool.png' />
  </Modal>
)
