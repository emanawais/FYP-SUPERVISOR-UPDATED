// components/CardLayout.jsx
import React from 'react'

const CardLayout = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default CardLayout