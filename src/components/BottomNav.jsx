import React from 'react';
import { Home, Briefcase, MessageSquare, User, Plus } from 'lucide-react';
import { COLORS } from '../../constants/colors.js';

/**
 * BottomNav - Bottom navigation bar for mobile-first app
 */
const BottomNav = ({
  activeTab = 'home',
  onTabChange,
  unreadMessages = 0,
  className = '',
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'marketplace', label: 'Services', icon: Briefcase },
    { id: 'create', label: 'Create', icon: Plus, special: true },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: unreadMessages },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav
      style={{
        backgroundColor: COLORS.white,
        borderTopColor: COLORS.lighter,
      }}
      className={`fixed bottom-0 left-0 right-0 border-t z-50 ${className}`}
    >
      <div className="max-w-2xl mx-auto flex justify-around items-end">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 relative ${
                tab.special ? '-translate-y-3' : ''
              }`}
              style={{
                color: isActive && !tab.special ? COLORS.primary : COLORS.gray,
              }}
            >
              <div
                className={`p-2 rounded-lg transition-all ${
                  tab.special ? 'mb-2' : ''
                }`}
                style={{
                  backgroundColor:
                    tab.special && isActive
                      ? COLORS.primary
                      : tab.special
                      ? COLORS.lightest
                      : 'transparent',
                }}
              >
                <Icon
                  size={24}
                  style={{
                    color: tab.special && isActive ? COLORS.white : 'currentColor',
                  }}
                />
              </div>

              {/* Badge for unread messages */}
              {tab.badge && tab.badge > 0 && (
                <div
                  style={{
                    backgroundColor: COLORS.accent,
                    color: COLORS.white,
                  }}
                  className="absolute top-0 right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                >
                  {tab.badge > 9 ? '9+' : tab.badge}
                </div>
              )}

              <span
                className="text-xs mt-1 font-medium"
                style={{
                  color: isActive && !tab.special ? COLORS.primary : COLORS.gray,
                  fontSize: '11px',
                }}
              >
                {tab.label}
              </span>

              {/* Active indicator */}
              {isActive && !tab.special && (
                <div
                  style={{ backgroundColor: COLORS.primary }}
                  className="absolute bottom-0 w-1 h-1 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;