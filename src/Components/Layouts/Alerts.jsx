import React, { useContext } from 'react'
import AlertContext from '../../Context/Alert/AlertContext'

function Alerts() {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && (
          <svg
            width='40px'
            height='40px'
            viewBox='0 0 24 24'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='errorIconTitle'
            stroke='#000000'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            fill='none'
            color='#000000'
          >
            {' '}
            <title id='errorIconTitle'>
              Error
            </title> <path d='M12 8L12 13' />{' '}
            <line x1='12' y1='16' x2='12' y2='16' />{' '}
            <circle cx='12' cy='12' r='10' />{' '}
          </svg>
        )}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  )
}

export default Alerts
