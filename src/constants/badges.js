// Achievement Badges for SkillLink
export const BADGES = [
  // Milestone Badges
  {
    id: 'first-service',
    name: 'First Step',
    description: 'Complete your first service',
    icon: 'Footprints',
    rarity: 'common',
    category: 'milestone',
    requirements: { completedServices: 1 },
  },
  {
    id: 'ten-services',
    name: 'Service Provider',
    description: 'Complete 10 services',
    icon: 'CheckSquare',
    rarity: 'uncommon',
    category: 'milestone',
    requirements: { completedServices: 10 },
  },
  {
    id: 'fifty-services',
    name: 'Professional',
    description: 'Complete 50 services',
    icon: 'Award',
    rarity: 'rare',
    category: 'milestone',
    requirements: { completedServices: 50 },
  },
  {
    id: 'hundred-services',
    name: 'Master Freelancer',
    description: 'Complete 100 services',
    icon: 'Crown',
    rarity: 'legendary',
    category: 'milestone',
    requirements: { completedServices: 100 },
  },

  // Rating Badges
  {
    id: 'perfect-rating',
    name: 'Trusted Partner',
    description: 'Maintain 5.0 star rating',
    icon: 'Star',
    rarity: 'rare',
    category: 'rating',
    requirements: { averageRating: 5.0, serviceCount: 5 },
  },
  {
    id: 'high-rating',
    name: 'Highly Rated',
    description: 'Achieve 4.8+ star rating',
    icon: 'Heart',
    rarity: 'uncommon',
    category: 'rating',
    requirements: { averageRating: 4.8, serviceCount: 10 },
  },

  // Learning Badges
  {
    id: 'first-lesson',
    name: 'Scholar',
    description: 'Complete your first micro-lesson',
    icon: 'BookOpen',
    rarity: 'common',
    category: 'learning',
    requirements: { completedLessons: 1 },
  },
  {
    id: 'lesson-streak',
    name: 'Dedicated Learner',
    description: 'Complete 7 lessons in a row',
    icon: 'Flame',
    rarity: 'rare',
    category: 'learning',
    requirements: { lessonStreak: 7 },
  },

  // Social Badges
  {
    id: 'early-adopter',
    name: 'Early Adopter',
    description: 'Join SkillLink in the first month',
    icon: 'Rocket',
    rarity: 'legendary',
    category: 'social',
    requirements: { joinedEarly: true },
  },
  {
    id: 'referral-master',
    name: 'Community Builder',
    description: 'Refer 5 friends to SkillLink',
    icon: 'Users',
    rarity: 'rare',
    category: 'social',
    requirements: { referrals: 5 },
  },

  // Speed Badges
  {
    id: 'quick-responder',
    name: 'Quick Responder',
    description: 'Reply to messages within 1 hour 5 times',
    icon: 'Zap',
    rarity: 'uncommon',
    category: 'engagement',
    requirements: { quickReplies: 5 },
  },
  {
    id: 'always-online',
    name: 'Always Online',
    description: 'Maintain 90% response rate',
    icon: 'Wifi',
    rarity: 'rare',
    category: 'engagement',
    requirements: { responseRate: 90 },
  },

  // Specialization Badges
  {
    id: 'design-specialist',
    name: 'Design Specialist',
    description: 'Complete 20 design services',
    icon: 'Palette',
    rarity: 'uncommon',
    category: 'specialization',
    requirements: { categoryServices: { design: 20 } },
  },
  {
    id: 'dev-expert',
    name: 'Dev Expert',
    description: 'Complete 20 development services',
    icon: 'Code2',
    rarity: 'uncommon',
    category: 'specialization',
    requirements: { categoryServices: { development: 20 } },
  },
];

export const RARITY_COLORS = {
  common: '#6B7280',
  uncommon: '#10B981',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#FF6B4A',
};

export const getBadgeById = (id) => BADGES.find((badge) => badge.id === id);
export const getBadgesByCategory = (category) => BADGES.filter((badge) => badge.category === category);

export default BADGES;
