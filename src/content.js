// ===== Media URLs =====
// Host your media on Cloudinary (free tier) and paste the URLs here.
// Steps:
//   1. Go to https://cloudinary.com and create a free account
//   2. Upload your images/videos via the Media Library dashboard
//   3. Copy each file's URL and paste it below
//
// Cloudinary URL format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/filename.jpg
// For videos: https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/filename.mp4

const CLOUD = 'https://res.cloudinary.com/dcnfdgack'; // <-- Replace with your cloud name

const media = {
  // --- Hero ---
  heroBg: `${CLOUD}/image/upload/v1770700793/miri_background_irnytl.png`,
  heroCover: `${CLOUD}/image/upload//v1770700791/cover_picture_kgqi5w.avif`,

  // --- Portrait / Profile ---
  aboutPortrait: `${CLOUD}/image/upload/v1770700792/miri_circle_kcp9rk.jpg`,
  profileCircle: `${CLOUD}/image/upload/v1770700792/miri_circle_kcp9rk.jpg`,

// --- Gallery ---
  gallery1: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery2: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery3: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery4: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery5: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery6: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery7: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,
  gallery8: `${CLOUD}/image/upload/v1770701612/miri_nap_bmgtz4.jpg`,

  // --- Results ---
  perf1: `${CLOUD}/image/upload/v1770701564/performances_1_clscpf.jpg`,
  perf2: `${CLOUD}/image/upload/v1770701564/performances_2_ucuulr.jpg`,
  perf3: `${CLOUD}/image/upload/v1770701565/performances_3_exh2aq.jpg`,
  perf4: `${CLOUD}/image/upload/v1770701565/performances_3_exh2aq.jpg`,
  
  insights1: `${CLOUD}/image/upload/v1770701563/insights_1_ioyygu.jpg`,
  insights2: `${CLOUD}/image/upload/v1770701563/insights_2_njekze.jpg`,
  insights3: `${CLOUD}/image/upload/v1770701563/insights_3_htkkkg.jpg`,

  // --- Videos ---
  video1: `${CLOUD}/video/upload/v1770702164/cowaramup_feast_flpgi8.mp4`,
  video2: `${CLOUD}/video/upload/v1770702164/cowaramup_feast_flpgi8.mp4`,
  video3: `${CLOUD}/video/upload/v1770702164/cowaramup_feast_flpgi8.mp4`,
  video4: `${CLOUD}/video/upload/v1770702164/cowaramup_feast_flpgi8.mp4`,
};


// ===== Content =====
const content = {
  // --- Navbar ---
  nav: {
    brand: 'Miri',
    links: [
      { label: 'Videos', href: '#videos' },
      { label: 'Photography', href: '#photography' },
      { label: 'Results', href: '#results' },
      { label: 'About', href: '#about' },
    ],
    cta: { label: 'Contact', href: '#contact' },
  },

  // --- Hero ---
  hero: {
    imageLeft: media.heroCover,
    imageRight: media.heroBg,
    name: 'Miri',
    tagline: 'UGC Content Creator — Yoga, Wellness & Travel',
    email: 'hello@miri.creates.com',
    instagram: {
      handle: '@miri.creates.collective',
      url: 'https://instagram.com/miri.creates.collective',
    },
  },

  // --- Introduction + Videos ---
  introduction: {
    heading: 'Authentic Content That Converts',
    paragraphs: [
      'I create warm, scroll-stopping content for brands in the yoga, wellness, and travel space. From concept to delivery, every piece is crafted to feel native to your audience — genuine, beautiful, and effective.',
      'Whether it\'s a 15-second reel or a full photo series, I bring an editorial eye and a deep understanding of what resonates in the wellness community.',
    ],
    videos: [
      { src: media.video1, poster: media.gallery1, title: 'Yoga Flow Reel' },
      { src: media.video2, poster: null, title: 'Wellness Product' },
      { src: media.video3, poster: null, title: 'Travel Content' },
      { src: media.video4, poster: null, title: 'Brand Collab' },
    ],
  },

  // --- Photography ---
  photography: {
    heading: 'UGC Photography',
    images: [
      { src: media.gallery1, alt: 'UGC photography sample 1' },
      { src: media.gallery2, alt: 'UGC photography sample 2' },
      { src: media.gallery3, alt: 'UGC photography sample 3' },
      { src: media.gallery4, alt: 'UGC photography sample 4' },
      { src: media.gallery5, alt: 'UGC photography sample 5' },
      { src: media.gallery6, alt: 'UGC photography sample 6' },
      { src: media.gallery7, alt: 'UGC photography sample 7' },
      { src: media.gallery8, alt: 'UGC photography sample 8' },
    ],
  },

  // --- Results ---
  results: {
    heading: 'Results',
    profileImage: media.profileCircle,
    postInsights: [
      { image: media.perf1, alt: 'Instagram post perf 1' },
      { image: media.perf2, alt: 'Instagram post perf 2' },
      { image: media.perf3, alt: 'Instagram post perf 3' },
      { image: media.perf4, alt: 'Instagram post perf 3' },
    ],
    metricRows: [
      { image: media.insights1, alt: 'insights 1' },
      { image: media.insights2, alt: 'insights 2' },
      { image: media.insights3, alt: 'insights 3' },
    ],
  },

  // --- About Me ---
  about: {
    heading: 'More About Me',
    portrait: media.aboutPortrait,
    paragraphs: [
      'Hi, I\'m Miri! I\'m a content creator based in Europe with a deep love for yoga, mindful living, and exploring beautiful places. My journey into UGC started from a genuine passion for storytelling and visual aesthetics.',
      'I believe the best content comes from authenticity. When I work with a brand, I take time to understand your values, your audience, and your goals — so the content doesn\'t just look good, it feels right.',
      'When I\'m not creating, you\'ll find me on my yoga mat, wandering through a new city, or curled up with a good book and a cup of matcha.',
    ],
  },

  // --- Contact ---
  contact: {
    heading: 'Contact Me',
    subtext: 'Let\'s create something beautiful together.',
    email: 'hello@miri.creates.com',
    instagram: {
      handle: '@miri.creates.collective',
      url: 'https://instagram.com/miri.creates.collective',
    },
    tiktok: {
      handle: '@miri.creates.collective',
      url: 'https://tiktok.com/@miri.creates.collective',
    },
    cta: { label: 'Get in Touch', href: 'mailto:hello@miri.creates.com' },
  },
};

export default content;
