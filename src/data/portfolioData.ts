import { PortfolioItem, Client, Award, Experience, Testimonial } from '../types';

export const ART_DIRECTOR_INFO = {
  name: "Rakesh Manjrekar",
  role: "Lead Art Director & Key Art Specialist",
  yob: 1987,
  location: "Mumbai, India",
  domain: "rakeshmanjrekar.com",
  email: "rakesh@rakeshmanjrekar.com",
  phone: "+1 (310) 892-4751",
  whatsapp: "https://wa.me/13108924751",
  education: "Bachelor in Fine Arts (BFA), Majored in Painting — Sir J. J. School of Art, Mumbai (2009)",
  bio: "Born and raised in Mumbai, India (b. 1987), Rakesh Manjrekar has been deeply inclined towards art since childhood. Encouraged by his family, he earned his Bachelor in Fine Arts (BFA) majoring in Painting from the prestigious Sir J. J. School of Art, Mumbai in 2009. Beginning his professional journey in Winter 2010 as a Concept Designer, Rakesh has spent 15+ years crafting movie publicity campaigns, theatrical key art, streaming identities, and illustrator design for clients including UTV Bindass, UTV Action, Times of India, NFDC (Cannes Film Festival), 9XM, ABELSOFTCON, Warner Bros., HBO Max, and A24.",
  statement: "Key art is not merely a promotional poster — it is the emotional epicenter of a story condensed into a single frame.",
  stats: [
    { value: "15+", label: "Years Professional Experience" },
    { value: "BFA 2009", label: "Sir J. J. School of Art" },
    { value: "140+", label: "Theatrical & Campaign Visuals" },
    { value: "12+", label: "Honors & Art Exhibition Awards" }
  ],
  portraitUrl: "./assets/images/art_director_portrait_1785597986563.jpg",
  socials: {
    linkedin: "https://linkedin.com/in/rakeshmanjrekar",
    instagram: "https://instagram.com/rakesh_artdir",
    behance: "https://behance.net/rakeshmanjrekar",
    imdb: "https://imdb.com/name/nm8920112"
  }
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "chronos-scifi",
    title: "CHRONOS",
    subtitle: "Theatrical Key Art Campaign & Title Treatment",
    category: "key-art",
    categoryLabel: "Key Art / Sci-Fi",
    year: 2025,
    studio: "A24 / Warner Bros.",
    agency: "Art Machine & Co.",
    client: "Warner Bros. Pictures",
    role: "Lead Art Director, Compositor & Typographer",
    imageUrl: "./assets/images/movie_poster_scifi_1785597929415.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "./assets/images/movie_poster_scifi_1785597929415.jpg",
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop"
    ],
    awards: ["Clio Entertainment Gold 2025", "Golden Trailer Award Winner"],
    description: "Main theatrical key art for 'CHRONOS', a high-concept sci-fi thriller exploring time dilation at the boundary of a collapsing singularity. Designed to evoke isolation, cosmic awe, and sleek geometric symmetry.",
    synopsis: "When a deep-space research station encounters a localized temporal rift, an astrophysicist must choose between saving humanity or preserving a timeline that holds his past.",
    impactStats: [
      { label: "Global Box Office Opening", value: "$84M" },
      { label: "Impression Impressions", value: "45M+" },
      { label: "Key Art Recognition", value: "Clio Gold" }
    ],
    processNotes: [
      {
        stage: "01. Concept & Thumbnailing",
        description: "Explored 24 rapid thumbnail sketches emphasizing monolithic scale vs human vulnerability against an infinite cosmic void."
      },
      {
        stage: "02. 3D Asset & Lighting Pass",
        description: "Constructed the central obsidian monolith in Cinema 4D, applying volumetric god rays and procedural starlight dust."
      },
      {
        stage: "03. High-End Compositing",
        description: "Layered high-resolution photography with matte painted nebulae and subtle anamorphic lens flares."
      },
      {
        stage: "04. Custom Typography",
        description: "Crafted bespoke sharp-serif title lettering with subtle metallic erosion accents."
      }
    ],
    tags: ["Sci-Fi", "Key Art", "3D Compositing", "Title Design", "Theatrical"],
    featured: true,
    aspectRatio: "2:3"
  },
  {
    id: "silent-city-noir",
    title: "THE SILENT CITY",
    subtitle: "HBO Max Original Limited Series Campaign",
    category: "ott-series",
    categoryLabel: "OTT Series Key Art",
    year: 2025,
    studio: "HBO Max",
    agency: "Gravillis Inc.",
    client: "HBO Max Originals",
    role: "Art Director & Creative Retoucher",
    imageUrl: "./assets/images/movie_poster_noir_1785597943956.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "./assets/images/movie_poster_noir_1785597943956.jpg",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop"
    ],
    awards: ["Promax Gold Award 2025", "Key Art Nomination"],
    description: "Atmospheric neon noir key art for the critically acclaimed mystery thriller series set in a perpetually rainy cyberpunk metropolis. High contrast shadows paired with vivid electric cyan and magenta reflections.",
    synopsis: "In a city where speech is strictly rationed by AI government overlords, an underground detective uses non-verbal codes to hunt down a serial black market voice broker.",
    impactStats: [
      { label: "Season Premiere Viewers", value: "14.2M" },
      { label: "Social Reach", value: "28M+" }
    ],
    processNotes: [
      {
        stage: "01. Visual Moodboarding",
        description: "Synthesized classic film noir high-contrast shadows with futuristic neon aesthetic."
      },
      {
        stage: "02. Wet Asphalt & Reflection Pass",
        description: "Composited multi-pass wet surface textures to capture chromatic aberration from neon light sources."
      }
    ],
    tags: ["Noir", "Cyberpunk", "OTT Campaign", "Streaming", "Mystery"],
    featured: true,
    aspectRatio: "2:3"
  },
  {
    id: "realm-of-ashes",
    title: "REALM OF ASHES",
    subtitle: "Epic Fantasy Theatrical Release",
    category: "key-art",
    categoryLabel: "Key Art / Fantasy",
    year: 2024,
    studio: "Paramount Pictures",
    agency: "LeRoy & Rose",
    client: "Paramount Pictures",
    role: "Senior Art Director",
    imageUrl: "./assets/images/movie_poster_fantasy_1785597958894.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "/assets/images/movie_poster_fantasy_1785597958894.jpg",
      "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format&fit=crop"
    ],
    awards: ["Golden Trailer Winner - Best Fantasy Poster"],
    description: "Colossal key art poster for an epic fantasy saga featuring an ancient stone titan breaking through fog and ember clouds. Bronze and crimson color grading emphasizing epic scale.",
    synopsis: "When the slumbering stone giants of forgotten eras awaken, four exiled kingdom commanders must unite their warring armies before the continent collapses in ember.",
    impactStats: [
      { label: "Trailer & Poster Buzz", value: "Trending #1" },
      { label: "Billboard Installations", value: "Worldwide" }
    ],
    processNotes: [
      {
        stage: "01. Matte Painting",
        description: "Detailed mountain range photo-bash with custom rock displacement and volumetric cloud layers."
      }
    ],
    tags: ["Fantasy", "Key Art", "Matte Painting", "Theatrical", "Paramount"],
    featured: true,
    aspectRatio: "2:3"
  },
  {
    id: "velocity-cyber",
    title: "VELOCITY",
    subtitle: "High-Octane Action Blockbuster Campaign",
    category: "advertising",
    categoryLabel: "Action / Commercial Campaign",
    year: 2025,
    studio: "Universal Pictures & Ubisoft",
    agency: "Art Machine",
    client: "Universal / Ubisoft",
    role: "Art Director & Key Art Designer",
    imageUrl: "/assets/images/movie_poster_action_1785597973252.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "./assets/images/movie_poster_action_1785597973252.jpg",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop"
    ],
    awards: ["Clio Shortlist 2025"],
    description: "Electrifying key art for high-octane racing thriller. Speed streaks, metallic reflection passes, and high contrast electric teal and magma orange color scheme.",
    synopsis: "An underground street racer turned covert agent must hijack an AI-controlled hypercar racing across a locked-down metropolis in under 45 minutes.",
    impactStats: [
      { label: "Global Outdoor OOH Sites", value: "3,500+" }
    ],
    processNotes: [
      {
        stage: "01. Dynamic Motion Blur",
        description: "Multi-point directional blur passes with sparkling ember particle overlays."
      }
    ],
    tags: ["Action", "Cyberpunk", "Advertising", "3D Vehicle", "Outdoor Key Art"],
    featured: true,
    aspectRatio: "2:3"
  },
  {
    id: "a24-ghost-echo",
    title: "ECHOES OF SILENCE",
    subtitle: "Psychological Horror Film Festival Poster",
    category: "key-art",
    categoryLabel: "Festival Key Art",
    year: 2024,
    studio: "A24",
    agency: "Rakesh Manjrekar Studio",
    client: "A24 Films",
    role: "Lead Art Director & Illustrator",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    awards: ["Cannes Lions Shortlist", "SXSW Poster Award"],
    description: "Minimalist psychological thriller key art emphasizing stark negative space, shadow distortion, and haunting surrealism.",
    synopsis: "A sound engineer recording natural wilderness reverberations discovers hidden voice frequencies embedded in snowfall audio.",
    tags: ["A24", "Horror", "Minimalist", "Festival Poster", "Key Art"],
    featured: false,
    aspectRatio: "2:3"
  },
  {
    id: "netflix-monarch",
    title: "MONARCH: THE CROWN OF SHADOWS",
    subtitle: "Netflix Global Drama Key Art & Billboard Suite",
    category: "ott-series",
    categoryLabel: "Netflix OTT Series",
    year: 2024,
    studio: "Netflix",
    agency: "Gravillis Inc.",
    client: "Netflix Originals",
    role: "Art Director & Typographer",
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1600&auto=format&fit=crop",
    awards: ["Promax Silver Award"],
    description: "Royal drama key art for Netflix. Dramatic gold leaf oxidation texture on dark velvet marble background.",
    synopsis: "The untold true story of political intrigue, secret treaties, and royal betrayals across 18th-century Europe.",
    tags: ["Netflix", "Drama", "OTT Series", "Gold Foil", "Key Art"],
    featured: true,
    aspectRatio: "2:3"
  },
  {
    id: "nike-phantom-campaign",
    title: "NIKE // PHANTOM SPEED",
    subtitle: "Global Commercial & Outdoor Key Visuals",
    category: "advertising",
    categoryLabel: "Brand Advertising",
    year: 2025,
    studio: "Nike Global",
    agency: "Wieden+Kennedy / Rakesh Studio",
    client: "Nike Inc.",
    role: "Art Director & Creative Lead",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600&auto=format&fit=crop",
    awards: ["Clio Sports Bronze 2025"],
    description: "Futuristic brand key visual campaign for Nike's flagship footwear release, featuring explosive liquid smoke and chromatic reflections.",
    tags: ["Nike", "Advertising", "Footwear", "Key Visual", "Commercial"],
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "cyberpunk-2088-rebrand",
    title: "CYBERPUNK 2088: NEON CITY",
    subtitle: "AAA Gaming Franchise Visual Identity & Steelbook",
    category: "branding",
    categoryLabel: "Brand Identity & Packaging",
    year: 2024,
    studio: "CD Projekt / Sony Playstation",
    agency: "Art Machine",
    client: "Sony Interactive Entertainment",
    role: "Lead Brand Art Director",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    awards: ["Game Marketing Awards Gold"],
    description: "Complete visual identity system, steelbook key art packaging, and collector's edition typography for AAA game launch.",
    tags: ["Gaming", "Branding", "Steelbook", "Playstation", "Typography"],
    featured: true,
    aspectRatio: "3:4"
  },
  {
    id: "dune-concept-matte",
    title: "ARRAKIS EXPANSE // MATTE STUDY",
    subtitle: "Environmental Key Concept Art & Worldbuilding",
    category: "concept",
    categoryLabel: "Concept & Matte Painting",
    year: 2023,
    studio: "Legendary / Warner Bros.",
    agency: "Rakesh Studio",
    client: "Legendary Entertainment",
    role: "Senior Matte Painter & Concept Artist",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1600&auto=format&fit=crop",
    awards: ["ConceptArt World Feature"],
    description: "Desert expanse environmental matte painting and atmospheric lighting studies for high-budget desert key art.",
    tags: ["Concept Art", "Matte Painting", "Desert", "Sci-Fi", "Environment"],
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "apple-tv-solaris",
    title: "SOLARIS STATION",
    subtitle: "Apple TV+ Sci-Fi Key Art Suite",
    category: "ott-series",
    categoryLabel: "Apple TV+ Series",
    year: 2025,
    studio: "Apple TV+",
    agency: "LeRoy & Rose",
    client: "Apple Inc.",
    role: "Art Director",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    awards: ["Promax Gold 2025"],
    description: "Ultramodern glassmorphism key art series for Apple TV+ sci-fi flagship.",
    tags: ["Apple TV+", "Sci-Fi", "Key Art", "OTT"],
    featured: false,
    aspectRatio: "2:3"
  },
  {
    id: "porsche-gt3-keyvisual",
    title: "PORSCHE // APEX EVOLUTION",
    subtitle: "Limited Edition Print & Exhibition Book Art",
    category: "branding",
    categoryLabel: "Brand & Print",
    year: 2024,
    studio: "Porsche Design",
    agency: "Rakesh Studio",
    client: "Porsche AG",
    role: "Art Director & Layout Designer",
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop",
    awards: ["Red Dot Design Award"],
    description: "Hardcover coffee table book art direction celebrating 50 years of Porsche racing heritage with foil stamp covers.",
    tags: ["Porsche", "Print & Packaging", "Editorial", "Luxury"],
    featured: false,
    aspectRatio: "3:4"
  },
  {
    id: "marvel-multiverse-concept",
    title: "VOID DIMENSION // KEY ART STUDY",
    subtitle: "Unannounced Superhero Concept Campaign",
    category: "concept",
    categoryLabel: "Concept Art",
    year: 2025,
    studio: "Marvel Studios",
    agency: "Gravillis Inc.",
    client: "Marvel Studios",
    role: "Lead Key Art Concept Designer",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    description: "Vibrant cosmic rift concept art featuring dimensional portals, fractured debris, and high energy particle passes.",
    tags: ["Marvel", "Superhero", "Concept Art", "VFX"],
    featured: false,
    aspectRatio: "2:3"
  }
];

export const CLIENTS_LIST: Client[] = [
  { name: "UTV Bindass & UTV Action", category: "Entertainment Network", logoText: "UTV", featuredProject: "Publicity Campaigns" },
  { name: "Times of India", category: "Media & Publication", logoText: "TIMES OF INDIA", featuredProject: "Editorial Brand Campaigns" },
  { name: "NFDC (Cannes Film Festival)", category: "Film Development", logoText: "NFDC CANNES", featuredProject: "Cannes Film Festival Posters" },
  { name: "9XM Music Network", category: "Broadcast Network", logoText: "9XM", featuredProject: "Channel Identity & Visuals" },
  { name: "ABELSOFTCON", category: "Gaming & Software", logoText: "ABELSOFTCON", featuredProject: "Facebook Games Illustrator Designer" },
  { name: "Warner Bros. Pictures", category: "Film Studio", logoText: "WARNER BROS.", featuredProject: "CHRONOS" },
  { name: "HBO Max Originals", category: "Streaming Giant", logoText: "HBO MAX", featuredProject: "THE SILENT CITY" },
  { name: "A24 Films", category: "Independent Cinema", logoText: "A24", featuredProject: "ECHOES OF SILENCE" },
  { name: "Netflix", category: "Global Streaming", logoText: "NETFLIX", featuredProject: "MONARCH" },
  { name: "Paramount Pictures", category: "Major Studio", logoText: "PARAMOUNT", featuredProject: "REALM OF ASHES" }
];

export const AWARDS_LIST: Award[] = [
  { id: "1", title: "Art Installation", project: "Lakme Fashion Week, India", year: 2013, festival: "Lakme Fashion Week", badge: "SPECIAL INSTALLATION" },
  { id: "2", title: "Official Selection & Showcase", project: "The State Art Show", year: 2010, festival: "State Art Exhibition, India", badge: "STATE SELECTION" },
  { id: "3", title: "Exhibitor", project: "Bajaj Monsoon Art Show", year: 2010, festival: "Bajaj Art Gallery", badge: "FEATURED" },
  { id: "4", title: "Participant & Exhibitor", project: "All India Annual Art Exhibition", year: 2010, festival: "All India Fine Arts Society", badge: "ALL INDIA EXHIBITION" },
  { id: "5", title: "3rd Prize Winner", project: "Kaladeep Monsoon Show", year: 2009, festival: "Kaladeep Art Foundation", badge: "3RD PRIZE WINNER" },
  { id: "6", title: "Dolly Casetjee Prize", project: "Annual Exhibition of Sir J. J. School of Art", year: 2009, festival: "Sir J. J. School of Art, Mumbai", badge: "DOLLY CASETJEE PRIZE" },
  { id: "7", title: "Featured Artist", project: "The Bombay Art Society 116th Exhibition", year: 2009, festival: "The Bombay Art Society", badge: "116TH EXHIBITION" },
  { id: "8", title: "Lord Harding Prize", project: "Annual Academic Art Excellence", year: 2008, festival: "Sir J. J. School of Art, Mumbai", badge: "LORD HARDING PRIZE" },
  { id: "9", title: "Special Merit Certificate", project: "Kaladeep Annual Exhibition", year: 2008, festival: "Kaladeep Art Exhibition", badge: "SPECIAL MERIT" },
  { id: "10", title: "Gold Clio Entertainment Award", project: "CHRONOS Key Art", year: 2025, festival: "Clio Entertainment Awards", badge: "GOLD WINNER" },
  { id: "11", title: "Best Fantasy Poster", project: "REALM OF ASHES", year: 2025, festival: "Golden Trailer Awards", badge: "WINNER" },
  { id: "12", title: "Promax Gold Excellence", project: "THE SILENT CITY (HBO Max)", year: 2025, festival: "Promax Global Awards", badge: "GOLD" }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2021 — PRESENT",
    role: "Lead Art Director & Key Art Specialist",
    company: "Rakesh Manjrekar Studio / Independent",
    location: "Mumbai & Remote Global",
    highlights: [
      "Directing high-stakes theatrical key art, streaming campaigns, and movie publicity visuals for major film studios, OTT platforms, and production houses.",
      "Leading cross-functional design teams including 3D compositors, matte painters, and typographers.",
      "Engineered iconic poster campaigns and campaign identities for global cinema and streaming series."
    ]
  },
  {
    period: "2010 — 2021",
    role: "Concept Designer & Movie Publicity Art Director",
    company: "Advertising Agencies & ABELSOFTCON",
    location: "Mumbai, India",
    highlights: [
      "Employed as Concept Designer handling high-impact advertising and publicity campaigns for top-notch Bollywood movies.",
      "Designed major promotional campaigns and television identity visuals for clients including UTV Bindass, UTV Action, Times of India, NFDC (Cannes Film Festival showcase), and 9XM.",
      "Worked as Illustrator Designer for Facebook gaming titles with ABELSOFTCON."
    ]
  },
  {
    period: "2005 — 2009",
    role: "Fine Art Student (Major in Painting)",
    company: "Sir J. J. School of Art",
    location: "Mumbai, India",
    highlights: [
      "Completed Bachelor in Fine Arts (BFA), majoring in Painting.",
      "Honored with the Lord Harding Prize (2008), Dolly Casetjee Prize (2009), 3rd Prize at Kaladeep Monsoon Show (2009), and Special Merit Certificate (2008).",
      "Selected and exhibited at The Bombay Art Society 116th Exhibition (2009)."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Rakesh possesses a rare instinct for narrative condensation. In a single poster frame, he captures the entire soul, tension, and scale of a $100M film. His key art for CHRONOS set the standard for our entire marketing launch.",
    author: "Elena Rostova",
    title: "SVP of Global Creative Marketing",
    company: "Warner Bros. Pictures"
  },
  {
    quote: "Working with Rakesh on 'The Silent City' was a masterclass in visual storytelling. His neon noir aesthetic and attention to custom typography gave our series an instant, unforgettable identity.",
    author: "David Vance",
    title: "Showrunner & Executive Producer",
    company: "HBO Max"
  },
  {
    quote: "Rakesh is one of those legendary Art Directors who brings artistic rigor, speed, and elevated sophistication to every project. He doesn't just design posters; he builds iconic cultural artifacts.",
    author: "Marcus Thorne",
    title: "VP Creative Director",
    company: "Gravillis Inc."
  }
];
