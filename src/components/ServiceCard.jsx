import React from 'react';
import { Star, Clock } from 'lucide-react';
import { COLORS } from '../../constants/colors.js';
import Avatar from './UI/Avatar.jsx';
import VerifiedTag from './UI/VerifiedTag.jsx';
import StatusPill from './UI/StatusPill.jsx';
import { formatPrice, truncateText } from '../utils/helpers.js';

/**
 * ServiceCard - Service listing card component
 */
const ServiceCard = ({
  id,
  title,
  category,
  price,
  image,
  provider,
  rating = 0,
  reviewCount = 0,
  deliveryDays,
  status,
  featured = false,
  onPress,
  compact = false,
  className = '',
}) => {
  const baseClasses = `
    rounded-xl overflow-hidden
    transition-all duration-200
    hover:shadow-lg active:scale-95
    cursor-pointer
    ${compact ? 'h-64' : 'h-80'}
    ${className}
  `;

  return (
    <div
      style={{
        backgroundColor: COLORS.white,
        borderColor: featured ? COLORS.primary : COLORS.lighter,
      }}
      className={`${baseClasses} border-2 ${featured ? 'shadow-md' : ''}`}
      onClick={onPress}
    >
      {/* Image Section */}
      <div className="relative h-40 overflow-hidden bg-lightest">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div
            style={{ backgroundColor: COLORS.lightest }}
            className="w-full h-full flex items-center justify-center"
          >
            <div
              style={{ color: COLORS.lightGray }}
              className="text-center"
            >
              <div className="text-3xl mb-2">📦</div>
              <p className="text-xs" style={{ color: COLORS.gray }}>
                No image
              </p>
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <div
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.white,
            }}
            className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold"
          >
            Featured
          </div>
        )}

        {/* Status Badge */}
        {status && (
          <div className="absolute top-2 left-2">
            <StatusPill status={status} size="sm" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-3">
        {/* Category Tag */}
        <span
          style={{ color: COLORS.primary }}
          className="text-xs font-semibold mb-1 uppercase tracking-wide"
        >
          {category}
        </span>

        {/* Title */}
        <h3
          style={{ color: COLORS.dark }}
          className="font-bold text-sm mb-2 line-clamp-2"
        >
          {truncateText(title, compact ? 40 : 50)}
        </h3>

        {/* Provider Info */}
        <div className="flex items-center gap-2 mb-3">
          <Avatar
            name={provider?.name || 'Provider'}
            src={provider?.avatar}
            size="sm"
            verified={provider?.verified}
          />
          <div className="flex-1 min-w-0">
            <p
              style={{ color: COLORS.dark }}
              className="text-xs font-semibold truncate"
            >
              {provider?.name || 'Unknown'}
            </p>
            {provider?.verified && (
              <VerifiedTag size="sm" tooltipText={null} />
            )}
          </div>
        </div>

        {/* Rating */}
        {!compact && (
          <div className="flex items-center gap-1 mb-3">
            <Star size={16} className="fill-current" style={{ color: COLORS.warning }} />
            <span
              style={{ color: COLORS.dark }}
              className="text-sm font-semibold"
            >
              {rating.toFixed(1)}
            </span>
            <span
              style={{ color: COLORS.gray }}
              className="text-xs"
            >
              ({reviewCount})
            </span>
          </div>
        )}

        {/* Footer Info */}
        <div className="flex items-center justify-between mt-auto">
          {/* Price */}
          <div>
            <p
              style={{ color: COLORS.primary }}
              className="text-lg font-bold"
            >
              {formatPrice(price)}
            </p>
          </div>

          {/* Delivery Time */}
          {deliveryDays && (
            <div className="flex items-center gap-1 text-right">
              <Clock size={14} style={{ color: COLORS.gray }} />
              <span
                style={{ color: COLORS.gray }}
                className="text-xs"
              >
                {deliveryDays}d
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;