import type { Project } from '../types';
import racerAppIcon from '../assets/images/racer/app-icon.png';
import racerGameplay from '../assets/images/racer/gameplay.png';
import racerMainMenu from '../assets/images/racer/main-menu.png';
import racerShop from '../assets/images/racer/shop.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'racer',
    title: 'Racer',
    tagline: 'Published Android endless driving game',
    description:
      'A published Android endless driving game built in Unity. Players race through procedurally paced stretches of road while unlocking cars, chasing leaderboard ranks, and engaging with cloud-backed progression systems.',
    status: 'published',
    statusLabel: 'Published on Google Play',
    coverImage: racerAppIcon,
    technologies: [
      'Unity',
      'C#',
      'Firebase Authentication',
      'Firebase Realtime Database',
      'Google Play',
      'Google Mobile Ads',
      'Android',
      'Blender',
    ],
    features: [
      'Cloud save',
      'Authentication',
      'Leaderboards',
      'Daily rewards',
      'Unlockable cars',
      'Car shop',
      'Audio settings',
      'Rewarded ads',
      'Remove Ads purchase',
      'Responsive UI',
      'Object pooling',
      'Performance optimization',
    ],
    featureCards: [
      {
        title: 'Cloud Progression',
        description:
          'Firebase Authentication and Realtime Database keep player saves, unlocks, and leaderboard state synced across sessions.',
      },
      {
        title: 'Live-Service Systems',
        description:
          'Daily rewards, rewarded ads, and a Remove Ads purchase support retention without breaking core gameplay flow.',
      },
      {
        title: 'Performance-Minded Gameplay',
        description:
          'Object pooling and mobile-focused optimization keep frame pacing stable across a wide range of Android devices.',
      },
      {
        title: 'Player Economy Loop',
        description:
          'Unlockable cars and a shop give players long-term goals beyond a single endless run.',
      },
    ],
    challenges: [
      'Balancing monetization with fair gameplay so ads and purchases never feel required to enjoy the core loop.',
      'Keeping runtime performance stable while supporting responsive UI, audio settings, and frequent spawning systems.',
      'Designing cloud save and authentication flows that stay reliable across install, reinstall, and network interruption cases.',
    ],
    lessons: [
      'Shipping on Google Play forces product thinking: retention, onboarding, and crash-free sessions matter as much as mechanics.',
      'Systems architecture early (pooling, save data, shop state) pays off when features stack quickly.',
      'Polished mobile UX is a gameplay feature — readable menus and responsive controls directly affect session length.',
    ],
    developmentNotes: [
      'Built in Unity with C# gameplay systems and Blender-authored vehicle content.',
      'Integrated Firebase for authentication, cloud save, and leaderboard support.',
      'Shipped with Google Mobile Ads and Google Play billing for rewarded ads and Remove Ads.',
    ],
    media: [
      {
        type: 'video',
        label: 'Racer Trailer',
        caption: 'Gameplay trailer and feature highlights',
        src: '/videos/racer/trailer.mp4',
        poster: racerAppIcon,
      },
      {
        type: 'screenshot',
        label: 'In-Game',
        caption: 'Endless highway gameplay',
        src: racerGameplay,
      },
      {
        type: 'screenshot',
        label: 'Car Shop',
        caption: 'Unlockable cars and paint customization',
        src: racerShop,
      },
      {
        type: 'screenshot',
        label: 'Main Menu',
        caption: 'Title screen and progression entry point',
        src: racerMainMenu,
      },
    ],
  },
  {
    id: 'slay-the-streamer',
    title: 'Slay the Streamer',
    tagline: 'Top-down roguelite inspired by Enter the Gungeon',
    description:
      'An actively developed top-down roguelite focused on readable combat, room-to-room exploration, and satisfying projectile gunplay. The project is growing into a full dungeon-crawl experience with bosses, weapons, and progression systems.',
    status: 'in-development',
    statusLabel: 'Active Development',
    technologies: ['Unity', 'C#', 'Pixel Art'],
    features: [
      'Enemy AI',
      'Boss fight',
      'Weapons',
      'Projectile combat',
      'Connected rooms',
      'Progression systems',
      'Health',
      'Animation',
    ],
    featureCards: [
      {
        title: 'Projectile Combat',
        description:
          'Bullet-pattern readability and weapon feel are central design goals, inspired by Gungeon-style encounter spacing.',
      },
      {
        title: 'Enemy & Boss AI',
        description:
          'Enemies and boss encounters are being tuned for telegraph clarity, pressure, and distinct combat identities.',
      },
      {
        title: 'Connected Room Flow',
        description:
          'Dungeon spaces link into traversable room networks so exploration and combat pacing reinforce each other.',
      },
      {
        title: 'Progression Systems',
        description:
          'Health, weapons, and run progression are evolving together so each successful clear feels earned and replayable.',
      },
    ],
    challenges: [
      'Creating enemy AI that feels threatening without becoming unfair or visually noisy.',
      'Building connected room layouts that stay navigable while supporting procedural variety.',
      'Keeping animation, projectiles, and collision feedback crisp at top-down scale.',
    ],
    lessons: [
      'Roguelite combat quality comes from iteration: feel, telegraphs, and recovery windows matter more than raw content volume.',
      'Prototype systems early, then harden architecture once the core loop is fun.',
      'Pixel art readability is a combat constraint — silhouette and contrast affect player reaction time.',
    ],
    developmentNotes: [
      'Currently in active development with core combat, rooms, and progression foundations in place.',
      'Focus areas: boss encounter polish, weapon variety, and dungeon flow.',
      'Built in Unity with custom C# gameplay systems and pixel-art presentation.',
    ],
    media: [
      {
        type: 'video',
        label: 'Dev Footage Placeholder',
        caption: 'Replace with current Slay the Streamer gameplay',
      },
      { type: 'screenshot', label: 'Screenshot 1', caption: 'Combat encounter' },
      { type: 'screenshot', label: 'Screenshot 2', caption: 'Boss fight' },
      { type: 'screenshot', label: 'Screenshot 3', caption: 'Connected rooms' },
    ],
  },
];
