export interface BandMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface MusicEventItem{
  id: string;
  title: string;
  category: "music";
  date: string;
  location: string;
  description: string;
  youtubeId: string;
  bandMembers: BandMember[];
}

export const eventsData: MusicEventItem[] | any[] = [
  {
    id: "linkin-park-in-the-end",
    title: "Linkin Park - In The End",
    category: "music",
    date: "2023-09-15",
    location: "Madison Square Garden, New York, NY",
    description: "Join us for an unforgettable night as Linkin Park performs their iconic hit 'In The End' live on stage.",
    youtubeId: "eVTXPUF4Oz4",
    bandMembers: [
      {name: "Chester Bennington", role: "Lead Vocals", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNRNtfwt08ISrdwS-Covu6unZtX8CC5zXb6wdDlNxQXquDgj-VPUevwUQbZHwHpBrHPO-BZ4v46unJI8aAQO86ieRbUN_JIOOIMc5row&s=10"},
      {name: "Mike Shinoda", role: "Vocals, Rhythm Guitar, Keyboards", imageUrl: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRVsb0Bop65XOxIhjdkBXJLCjBnYSrz64wPodQ2EkqzxtNUwzGijX75o6PtU4xf9BrUgZmNcuHEU3FgkdI"},
      {name: "Brad Delson", role: "Lead Guitar", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XoOFuK5anuCuwzvM8TjUYHEMCgiYwNqKY5IUyPXpqstr4Bozb4bj4Kf60tCBGJmQIpB40KWEfP0lzpMKr3LBZ01a_G1iUE2hTXcdOg&s=10"},
      {name: "Dave Phoenix Farrell", role: "Bass Guitar", imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQdMQlA4Ulf4d7VnnAGoV-Hj6u6v2kIS-pz4gl09EfFFleecL_HUHzx5ok2X54xkxGcH4STUgLN_l-9MdA"},
      {name: "Rob Bourdon", role: "Drums", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcMtbfewX8-S7-sTFfZA8mTZ89t1PB320AapjMtbBFZtqU-tEwNTvAsdDJQRWO3ErJmnWaOGBjYmosJB_KhSIWnjiHlsLo4baZZoemJQ&s=10"},
      {name: "Joe Hahn", role: "Turntables, Sampling", imageUrl: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRYvwfwPm4OvmDs9V2XsdsH3Z27hOVyff33I1WkYYy6NnNs6F2ydz-Dk6OZUmG2xSAGQJ5UWAX39fDWKSc"}
    ]
  },
  {
    id: "skillet-monster",
    title: "Skillet - Monster",
    category: "music",
    date: "2023-10-20",
    location: "Hollywood Bowl, Los Angeles, CA",
    description: "Experience the electrifying performance of Skillet as they bring their hit song 'Monster' to life on stage.",
    youtubeId: "1mjlM_RnsVE",
    bandMembers: [
      {name: "John Cooper", role: "Lead Vocals, Bass Guitar", imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/John_Cooper_au_Hellfest_2022.jpg/250px-John_Cooper_au_Hellfest_2022.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"},
      {name: "Korey Cooper", role: "Rhythm Guitar, Keyboards", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uT5YnK18cIb5Gv7FwpI4QcZIpm_VADBAapf6AK8vl3lruAUitSnTLuI3IsUF7zt6mMyxol_o80Qp9vTvi0yaJ_zoY-59UddungZnFQzTHA&s=10"},
      {name: "Jen Ledger", role: "Drums, Vocals", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAacRXtq3p4seOjuSNlwU72vV0YDex9mkgsR__qWWhNsrvfaqV5ONJLJy72B7eMviT_ZDf2jyrPQxeab365TRs96ZsQ2EORqA5k60W9g&s=10"},
      {name: "Seth Morrison", role: "Lead Guitar", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWrID8kbXsL4HNpxfZmQuOtueWv-8dL0QbDMkmrCBqvl6TOM_KAZlUZqyVcsZuZOOxhRdHHvAMB1IduS-LfcnzIXpAvIQ-SBsvgBLmA&s=10"}
    ]
  },
  {
    id: "evanescence-bring-me-to-life",
    title: "Evanescence - Bring Me To Life",
    category: "music",
    date: "2023-11-15",
    location: "The Forum, Los Angeles, CA",
    description: "Join Evanescence for an unforgettable night as they perform their hit song 'Bring Me To Life' live on stage.",
    youtubeId: "3YxaaGgTQYM",
    bandMembers: [
      {name: "Amy Lee", role: "Lead Vocals", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hP5RpNVnNI00Rkd97LMwxeW3NY0RafyzHDyL-cRFFzqmIhwdkA7bnLqjlEvynHKrX2pQig&s"},
      {name: "John LeCompt", role: "Guitar, Keyboards", imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRalubJwkbhw5Wocl63OSAIqW5hEA8Aq-NWY4Hx_gZlRo0ZJHfYTa0leuOuJKGnkrceIvmqv16X9b1-wtI"},
      {name: "Ben Moody", role: "Guitar", imageUrl: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQFuDmo_ecbW0AfnBk4CD_JX3Cvzz3gIb7fTQL77xmlYDDvBbiGiaVmLu_qN1Cl4aAqNUNNX3LKTzwuOC8"},
      {name: "Rocky Gray", role: "Drums", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRte0VGMvZbh0GIuk3RtElkZz8F8WvbtRzVAcDC87Vfkb9CRnzWD6EsIi0tfeRTALbYCQmoMlJOer1t3zkwpNaBUF6Xhp-AkbcgAzKm9Q3P&s=10"},
    ]
  },
];