// components/SectionContainer.jsx
import React from 'react'

const SectionContainer = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  titleClassName = '',
  contentClassName = '' 
}) => {
  return (
    <div className={`max-w-6xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className={`mb-8 ${titleClassName}`}>
          {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
      )}
      <div className={contentClassName}>
        {children}
      </div>
    </div>
  )
}

export default SectionContainer