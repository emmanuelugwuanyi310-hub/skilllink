import React from 'react';
import { COLORS } from '../../constants/colors.js';
import { getInitials } from '../../utils/helpers.js';

/**
 * Avatar - User avatar component
 */
const Avatar = ({
  src,
  name = 'User',
  size = 'md',
  online = false,
  verified = false,
  onClick,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-2xl',
  };

  const sizeBorderClasses = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5',
  };

  const initials = getInitials(name);

  const bgColor = `hsl(${name.charCodeAt(0) * 12}, 70%, 60%)`;

  return (
    <div className={`relative inline-block ${className}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={`${sizeClasses[size]} rounded-full object-cover cursor-pointer hover:opacity-80 transition`}
          onClick={onClick}
          title={name}
        />
      ) : (
        <div
          style={{
            backgroundColor: bgColor,
            color: COLORS.white,
            width: sizeClasses[size].split(' ')[0].replace('w-', ''),
            height: sizeClasses[size].split(' ')[1].replace('h-', ''),
          }}
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold cursor-pointer hover:opacity-80 transition`}
          onClick={onClick}
          title={name}
        >
          {initials}
        </div>
      )}

      {/* Online Status Indicator */}
      {online && (
        <div
          style={{
            backgroundColor: COLORS.success,
            borderColor: COLORS.white,
          }}
          className={`${sizeBorderClasses[size]} rounded-full absolute bottom-0 right-0 border-2`}
        />
      )}

      {/* Verified Badge */}
      {verified && (
        <div
          style={{
            backgroundColor: COLORS.primary,
            borderColor: COLORS.white,
          }}
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
        >
          <span style={{ color: COLORS.white }} className="text-xs font-bold">
            ✓
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
