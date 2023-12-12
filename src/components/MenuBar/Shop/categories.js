export const categories = [
  {
    id: 1,
    name: 'Vegetables',
    href: '/vegetables',
    parentId: 0,
  },
  { id: 2, name: 'Fresh Fruits', href: '/fruits', parentId: 0 },
  {
    id: 3,
    name: 'Fish',
    href: '/fish',
    parentId: 0,
    subCategories: [
      {
        id: 4,
        name: 'River Fish',
        href: '/fish/river-fish',
        parentId: 3,
      },
      {
        id: 5,
        name: 'Sea Fish',
        href: '/fish/sea-fish',
        parentId: 3,
      },
    ],
  },
  {
    id: 6,
    name: 'Meat',
    href: '/meat',
    parentId: 0,
    subCategories: [
      {
        id: 7,
        name: 'Beef',
        href: '/meat/beef',
        parentId: 6,
      },
      {
        id: 8,
        name: 'Mutton',
        href: '/meat/mutton',
        parentId: 6,
      },
      {
        id: 9,
        name: 'Chicken',
        href: '/meat/chicken',
        parentId: 6,
      },
      {
        id: 10,
        name: 'Other Birds',
        href: '/meat/others',
        parentId: 6,
      },
    ],
  },
  {
    id: 11,
    name: 'Water & Drinks',
    href: '/water-drinks',
    parentId: 0,
    subCategories: [
      {
        id: 12,
        name: 'Tea',
        href: '/water-drinks/tea',
        parentId: 11,
      },
      {
        id: 13,
        name: 'Coffee',
        href: '/water-drinks/coffee',
        parentId: 11,
      },
      {
        id: 14,
        name: 'Juice',
        href: '/water-drinks/juice',
        parentId: 11,
      },
      {
        id: 15,
        name: 'Soft Drinks',
        href: '/water-drinks/soft-drinks',
        parentId: 11,
      },
      {
        id: 16,
        name: 'Energy Drinks',
        href: '/water-drinks/energy-drinks',
        parentId: 11,
      },
      {
        id: 17,
        name: 'Water',
        href: '/water-drinks/water',
        parentId: 11,
      },
    ],
  },
  {
    id: 18,
    name: 'Snacks',
    href: '/snacks',
    parentId: 0,
    subCategories: [
      {
        id: 19,
        name: 'Frozen Foods',
        href: '/snacks/frozen-foods',
        parentId: 18,
      },
      {
        id: 19,
        name: 'Canned Foods',
        href: '/snacks/canned-foods',
        parentId: 18,
      },
      {
        id: 20,
        name: 'Ice Cream',
        href: '/snacks/ice-cream',
        parentId: 18,
      },
      {
        id: 21,
        name: 'Cereal',
        href: '/snacks/cereal',
        parentId: 18,
      },
      {
        id: 22,
        name: 'Others',
        href: '/snacks/others',
        parentId: 18,
      },
    ],
  },
]
