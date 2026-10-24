// ============================================================
// src/data/portfolioData.ts
// Satu sumber data terpusat untuk seluruh konten portofolio.
// Edit file ini untuk memperbarui profil, proyek, skill, dll.
// ============================================================

// ─── INTERFACES ──────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  fullName: string;
  nickname: string;
  initials: string;
  university: string;
  major: string;
  semester: number;
  targetRole: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
  avatarUrl: string;
  socials: SocialLink[];
}

export interface CourseItem {
  name: string;
  description: string;
  icon: string;
}

export interface MiniProject {
  title: string;
  description: string;
  tech: string[];
}

export interface Semester {
  id: number;
  label: string;
  theme: string;
  accentColor: string;
  competencyOutput: string;
  courses: CourseItem[];
  miniProjects: MiniProject[];
}

export interface TechBadge {
  name: string;
  color: string;
}

export type ProjectCategory =
  | "All"
  | "Full-Stack Web"
  | "Frontend/UI"
  | "Backend & Database"
  | "AI & Data";

export interface STARMethod {
  situation: string;
  architecture: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  semester: number;
  summary: string;
  techStack: TechBadge[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  star: STARMethod;
  imageGradient: string;
}

export type SkillCategory =
  | "Languages"
  | "Frontend & Mobile"
  | "Backend, Databases & Cloud"
  | "Tools, DevOps & Workflow";

export interface Skill {
  name: string;
  category: SkillCategory;
  context: string;
  level: "Core" | "Intermediate" | "Learning";
  icon: string;
}

export type ExperienceType = "organization" | "committee" | "lab" | "certification" | "achievement";

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface WhyHireCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  highlights: string[];
}

// ─── PROFILE DATA ────────────────────────────────────────────

export const profile: Profile = {
  fullName: "Handino Asa Galih Romadhon",
  nickname: "Handino",
  initials: "HA",
  university: "Politeknik Negeri Malang",
  major: "Teknik Informatika",
  semester: 5,
  targetRole: "Full-Stack Web Developer / Frontend Engineer",
  tagline: "Building modern, scalable, and beautiful web experiences.",
  bio: "Mahasiswa D4 Teknik Informatika Semester 5 Politeknik Negeri Malang terbiasa dengan skill programming yang terasah pada Full-Stack Web Development dan rekayasa frontend modern. Mampu membangun aplikasi web berskala dengan React, TypeScript, dan Astro Islands Architecture, serta mengoptimalkan efisiensi query database dan performa rendering untuk menghadirkan pengalaman pengguna yang cepat, modular, dan terstruktur.",
  location: "Kota Malang, Jawa Timur",
  email: "hasagalihr@gmail.com",
  phone: "082232347402",
  cvUrl: "/cv-handino-asa-galih.pdf",
  avatarUrl: "/avatar.jpg",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Handinoasa",
      label: "github.com/Handinoasa",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/handino-asa-galih-r-b2535137a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "linkedin.com/in/handino-galih",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/handinasaglhr_?rpxt=d3l3dXk2ZjRydWwz",
      label: "@handinasaglhr_",
    },
  ],
};

// ─── WHY HIRE ME ─────────────────────────────────────────────

export const whyHireCards: WhyHireCard[] = [
  {
    icon: "Brain",
    title: "Strong CS Fundamentals",
    subtitle: "Algorithm-First Mindset",
    description:
      "Fondasi kuat pada Algoritma, Struktur Data, dan OOP yang dipelajari secara mendalam dari Semester 1-3. Mampu menganalisis Time & Space Complexity dan memilih struktur data yang optimal.",
    accentColor: "from-violet-500/20 to-purple-600/10",
    highlights: ["Data Structures & Algorithms", "OOP Principles", "Big-O Analysis", "Design Patterns"],
  },
  {
    icon: "Layers",
    title: "Modern Engineering Stack",
    subtitle: "Build Fast, Ship Quality",
    description:
      "Terampil membangun aplikasi web modular menggunakan React, Astro Islands Architecture, TypeScript, dan REST API. Memahami konsep SSG/SSR untuk performa optimal.",
    accentColor: "from-cyan-500/20 to-blue-600/10",
    highlights: ["React + TypeScript", "Astro Islands", "RESTful API", "Tailwind CSS"],
  },
  {
    icon: "Lightbulb",
    title: "Problem-Solving Mindset",
    subtitle: "User-Centric Solutions",
    description:
      "Berfokus pada solusi nyata yang efisien. Terbiasa melakukan optimasi query SQL, refactoring kode, dan memastikan kenyamanan serta aksesibilitas pengguna sebagai prioritas utama.",
    accentColor: "from-amber-500/20 to-orange-600/10",
    highlights: ["SQL Optimization", "UX-First Thinking", "Clean Code", "Debugging Proficiency"],
  },
  {
    icon: "Users",
    title: "Team & Agile Ready",
    subtitle: "Collaborative by Nature",
    description:
      "Terbiasa bekerja dalam tim dengan Git/GitHub workflow (branching, PR, code review), dokumentasi teknis yang baik, dan prinsip-prinsip Agile/Scrum yang dipelajari di Rekayasa Perangkat Lunak.",
    accentColor: "from-emerald-500/20 to-green-600/10",
    highlights: ["Git/GitHub Workflow", "Agile/Scrum", "Code Review", "Technical Docs"],
  },
];

// ─── SEMESTER TIMELINE ───────────────────────────────────────

export const semesters: Semester[] = [
  {
    id: 1,
    label: "Semester 1",
    theme: "Fondasi Pemrograman & Logika",
    accentColor: "#8B5CF6",
    competencyOutput:
      "Kemampuan berpikir komputasional, pemecahan masalah dasar, dan penulisan kode pertama yang terstruktur.",
    courses: [
      {
        name: "Algoritma & Pemrograman Dasar",
        description: "Pseudocode, flowchart, variabel, tipe data, struktur kontrol, fungsi, dan rekursi dasar.",
        icon: "Code2",
      },
      {
        name: "Matematika Diskrit",
        description: "Logika proposisional, himpunan, relasi, fungsi, kombinatorik, dan teori graf dasar.",
        icon: "Calculator",
      },
      {
        name: "Pengantar Teknologi Informasi",
        description:
          "Sejarah komputer, komponen sistem informasi, jaringan dasar, dan etika digital.",
        icon: "Monitor",
      },
      {
        name: "Logika Informatika",
        description: "Proposisi, inferensi logis, aljabar boolean, dan aplikasinya dalam pemrograman.",
        icon: "GitBranch",
      },
    ],
    miniProjects: [
      {
        title: "Kalkulator Berbasis Konsol",
        description:
          "Membangun kalkulator interaktif berbasis terminal dengan Python yang mendukung operasi aritmetika, validasi input, dan history perhitungan.",
        tech: ["Python"],
      },
      {
        title: "Visualisasi Flowchart Algoritma Sorting",
        description: "Membuat visualisasi manual Bubble Sort dan Selection Sort menggunakan pseudocode dan diagram.",
        tech: ["Pseudocode", "Draw.io"],
      },
    ],
  },
  {
    id: 2,
    label: "Semester 2",
    theme: "Struktur Data & Arsitektur",
    accentColor: "#06B6D4",
    competencyOutput:
      "Penulisan kode yang efisien secara memori dan waktu (Time & Space Complexity), serta pemahaman mendalam tentang cara kerja hardware komputer.",
    courses: [
      {
        name: "Struktur Data",
        description:
          "Array, Linked List (Single, Double, Circular), Stack, Queue, Tree (BST, AVL), Graph, Sorting (QuickSort, MergeSort), dan Searching.",
        icon: "Network",
      },
      {
        name: "Organisasi & Arsitektur Komputer",
        description: "CPU, memori, cache, pipeline, instruksi mesin, dan sistem bilangan biner/hex.",
        icon: "Cpu",
      },
      {
        name: "Sistem Operasi",
        description: "Manajemen proses, thread, memori virtual, file system, dan scheduling algorithm.",
        icon: "Terminal",
      },
      {
        name: "Aljabar Linear",
        description: "Vektor, matriks, transformasi linear, eigenvalue, dan aplikasi dalam grafis/ML.",
        icon: "Grid",
      },
    ],
    miniProjects: [
      {
        title: "Implementasi Stack & Queue untuk Parser Ekspresi Matematika",
        description:
          "Menggunakan Stack untuk mengonversi ekspresi infix ke postfix dan mengevaluasinya — contoh nyata penggunaan struktur data.",
        tech: ["C++", "Data Structures"],
      },
      {
        title: "Simulasi Scheduling CPU",
        description: "Mensimulasikan algoritma FCFS, SJF, dan Round-Robin dengan visualisasi Gantt Chart sederhana.",
        tech: ["Python", "OS Concepts"],
      },
    ],
  },
  {
    id: 3,
    label: "Semester 3",
    theme: "Paradigma Objek & Basis Data",
    accentColor: "#10B981",
    competencyOutput:
      "Perancangan skema database relasional yang ternormalisasi dan arsitektur aplikasi berbasis OOP yang modular dan reusable.",
    courses: [
      {
        name: "Pemrograman Berorientasi Objek (OOP)",
        description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Design Patterns (MVC, Singleton, Factory).",
        icon: "Box",
      },
      {
        name: "Sistem Basis Data",
        description:
          "ERD, relational model, SQL DDL/DML, normalisasi (1NF–3NF/BCNF), join queries, views, stored procedures.",
        icon: "Database",
      },
      {
        name: "Jaringan Komputer",
        description: "OSI model, TCP/IP, protokol (HTTP/HTTPS, DNS, DHCP), routing, subnetting, dan keamanan jaringan dasar.",
        icon: "Wifi",
      },
      {
        name: "Pemrograman Web Dasar",
        description: "HTML5, CSS3, JavaScript ES6+, DOM manipulation, Fetch API, dan responsivitas dasar.",
        icon: "Globe",
      },
    ],
    miniProjects: [
      {
        title: "Sistem Manajemen Perpustakaan (OOP + MySQL)",
        description:
          "Aplikasi berbasis Java dengan arsitektur MVC untuk manajemen buku, anggota, dan peminjaman. Database MySQL dengan normalisasi 3NF.",
        tech: ["Java", "MySQL", "OOP", "MVC"],
      },
      {
        title: "Landing Page Responsif — Organisasi Kampus",
        description:
          "Membangun landing page modern untuk organisasi kampus menggunakan HTML, CSS Grid/Flexbox, dan JavaScript.",
        tech: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  {
    id: 4,
    label: "Semester 4",
    theme: "Rekayasa Perangkat Lunak & AI Dasar",
    accentColor: "#F59E0B",
    competencyOutput:
      "Pembangunan aplikasi web utuh dari tahap analisis kebutuhan hingga deployment, menggunakan metodologi Agile dan framework modern.",
    courses: [
      {
        name: "Rekayasa Perangkat Lunak",
        description: "SDLC, Agile/Scrum methodology, UML diagrams (Use Case, Class, Sequence), testing, dan dokumentasi SRS.",
        icon: "FileCode",
      },
      {
        name: "Pemrograman Web Lanjut",
        description: "React.js, REST API, JWT Authentication, state management, dan deployment ke VPS/cloud.",
        icon: "Layout",
      },
      {
        name: "Kecerdasan Buatan Dasar",
        description: "Search algorithms (BFS/DFS/A*), knowledge representation, dan pengantar Machine Learning.",
        icon: "Sparkles",
      },
      {
        name: "Analisis & Desain Algoritma",
        description: "Dynamic Programming, Greedy Algorithm, Divide & Conquer, Graph algorithms (Dijkstra, Bellman-Ford).",
        icon: "Sigma",
      },
    ],
    miniProjects: [
      {
        title: "TaskFlow — Aplikasi Manajemen Proyek Tim",
        description:
          "Full-stack web app dengan React frontend dan Node.js/Express backend. Fitur: JWT Auth, board Kanban interaktif, real-time notifikasi, dan filter task canggih.",
        tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
      },
      {
        title: "Pathfinder Visualizer",
        description:
          "Visualisasi interaktif algoritma pencarian jalur (BFS, DFS, A*, Dijkstra) menggunakan React dan CSS animations.",
        tech: ["React", "TypeScript", "CSS Animations"],
      },
    ],
  },
  {
    id: 5,
    label: "Semester 5",
    theme: "Sistem Skala Lanjut & Spesialisasi Industri",
    accentColor: "#EF4444",
    competencyOutput:
      "Kesiapan kerja industri (Internship-Ready) dengan kemampuan menyelesaikan studi kasus kompleks, membangun sistem berskala, dan berkolaborasi dalam tim engineering profesional.",
    courses: [
      {
        name: "Pengembangan Aplikasi Mobile & Cloud",
        description: "React Native/Flutter, REST API integration, Firebase, AWS/GCP basics, dan deployment pipeline.",
        icon: "Smartphone",
      },
      {
        name: "Machine Learning & Data Mining",
        description: "Supervised/Unsupervised learning, scikit-learn, data preprocessing, feature engineering, dan model evaluation.",
        icon: "BarChart2",
      },
      {
        name: "Keamanan Informasi & Jaringan",
        description: "Kriptografi, OWASP Top 10, penetration testing dasar, secure coding practices, dan HTTPS/TLS.",
        icon: "Shield",
      },
      {
        name: "Proyek Perangkat Lunak Terpadu (Capstone)",
        description: "Tim lintas-fungsi membangun sistem nyata end-to-end menggunakan Agile Sprint, CI/CD, dan code review.",
        icon: "Rocket",
      },
    ],
    miniProjects: [
      {
        title: "NutriTrack — Aplikasi Mobile Tracking Nutrisi",
        description:
          "Cross-platform mobile app dengan React Native + Firebase. Fitur: barcode scanner, AI-powered meal suggestion, dan progress dashboard.",
        tech: ["React Native", "Firebase", "Expo", "TypeScript"],
      },
      {
        title: "Prediksi Dropout Mahasiswa (ML Project)",
        description:
          "Model machine learning untuk memprediksi risiko dropout mahasiswa dengan akurasi 87%. Menggunakan Random Forest dan XGBoost dengan dataset 5.000+ record.",
        tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "Streamlit"],
      },
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow — Project Management Platform",
    category: "Full-Stack Web",
    semester: 4,
    summary:
      "Platform manajemen proyek tim berbasis web dengan fitur Kanban board interaktif, JWT authentication, dan real-time collaboration.",
    techStack: [
      { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
      { name: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { name: "JWT Auth", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
      { name: "Tailwind CSS", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    ],
    demoUrl: "https://taskflow-demo.vercel.app",
    githubUrl: "https://github.com/handino-galih/taskflow",
    featured: true,
    imageGradient: "from-cyan-500 via-blue-600 to-violet-700",
    star: {
      situation:
        "Tim proyek kampus saya kesulitan melacak progres tugas karena menggunakan spreadsheet yang tidak real-time dan menyebabkan miskomunikasi antar anggota. Dibutuhkan solusi manajemen proyek yang terintegrasi dan mudah digunakan.",
      architecture:
        "Membangun full-stack SPA menggunakan React + TypeScript untuk frontend dengan state management via Context API. Backend menggunakan Node.js/Express dengan arsitektur RESTful API dan PostgreSQL sebagai database. Implementasi JWT untuk autentikasi stateless, dengan refresh token yang tersimpan aman di HttpOnly cookie. Database dirancang dengan skema 3NF dan menggunakan indexing pada kolom foreign key untuk performa query optimal.",
      result:
        "Platform berhasil digunakan oleh 4 tim (±30 mahasiswa) selama 3 sprint proyek. Waktu sinkronisasi status task berkurang dari 30 menit rapat harian menjadi real-time. Response time API rata-rata < 120ms dengan query yang dioptimasi. Mendapat nilai A di mata kuliah RPL.",
    },
  },
  {
    id: "shopease",
    title: "ShopEase — E-Commerce Platform",
    category: "Full-Stack Web",
    semester: 4,
    summary:
      "Platform e-commerce lengkap dengan sistem manajemen produk, keranjang belanja, payment gateway simulation, dan admin dashboard.",
    techStack: [
      { name: "Next.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/20" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "Prisma ORM", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
      { name: "MySQL", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { name: "Midtrans API", color: "bg-red-500/10 text-red-400 border-red-500/20" },
    ],
    demoUrl: "https://shopease-demo.vercel.app",
    githubUrl: "https://github.com/handino-galih/shopease",
    featured: true,
    imageGradient: "from-orange-500 via-red-500 to-pink-600",
    star: {
      situation:
        "Proyek UKM lokal membutuhkan platform penjualan online yang terjangkau namun profesional. Platform yang ada terlalu mahal untuk komisi atau tidak mendukung customisasi produk sesuai kebutuhan bisnis mereka.",
      architecture:
        "Menggunakan Next.js dengan App Router untuk SSR/SSG hybrid rendering. Prisma ORM digunakan untuk type-safe database queries ke MySQL. Implementasi optimistic UI updates dengan React Suspense. Payment gateway terintegrasi dengan Midtrans Snap API. Image optimization dengan Next/Image dan lazy loading.",
      result:
        "Platform diluncurkan dengan 50+ produk dan berhasil memproses 120+ transaksi simulasi selama demo. Page load time < 1.5 detik berkat SSG untuk halaman produk statis. Lighthouse score: Performance 94, Accessibility 98.",
    },
  },
  {
    id: "pathfinder",
    title: "Pathfinder Visualizer",
    category: "Frontend/UI",
    semester: 4,
    summary:
      "Visualisasi interaktif algoritma pencarian jalur (BFS, DFS, A*, Dijkstra) dengan animasi smooth dan mode labirin yang dapat dikustomisasi.",
    techStack: [
      { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "Framer Motion", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
      { name: "CSS Animations", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    ],
    demoUrl: "https://pathfinder-viz.vercel.app",
    githubUrl: "https://github.com/handino-galih/pathfinder-viz",
    featured: true,
    imageGradient: "from-purple-500 via-violet-600 to-indigo-700",
    star: {
      situation:
        "Algoritma pencarian jalur sulit dipahami hanya melalui buku teks atau pseudocode. Mahasiswa di kelas AI saya membutuhkan alat visualisasi yang interaktif untuk memahami perbedaan antara algoritma BFS, DFS, A*, dan Dijkstra secara visual.",
      architecture:
        "Grid 2D diimplementasikan sebagai array of objects dengan state yang dikelola oleh useReducer untuk performa optimal. Setiap algoritma diimplementasikan sebagai pure function yang mengembalikan urutan node yang dikunjungi. Animasi menggunakan Framer Motion dengan staggered delays untuk visualisasi yang smooth. Fitur maze generator menggunakan algoritma Recursive Division.",
      result:
        "Digunakan sebagai alat bantu ajar di kelas AI dengan 35+ mahasiswa. Rata-rata waktu pemahaman konsep berkurang 40% dibandingkan penjelasan di whiteboard. Mendapat bintang 18 di GitHub dari mahasiswa lain.",
    },
  },
  {
    id: "nutritrack",
    title: "NutriTrack — Mobile Nutrition App",
    category: "Frontend/UI",
    semester: 5,
    summary:
      "Aplikasi mobile cross-platform untuk tracking nutrisi harian dengan barcode scanner, AI meal suggestion, dan progress dashboard interaktif.",
    techStack: [
      { name: "React Native", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { name: "Expo", color: "bg-slate-500/10 text-slate-300 border-slate-500/20" },
      { name: "Firebase", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    ],
    demoUrl: "https://expo.dev/@handino-galih/nutritrack",
    githubUrl: "https://github.com/handino-galih/nutritrack",
    featured: false,
    imageGradient: "from-green-400 via-teal-500 to-cyan-600",
    star: {
      situation:
        "Banyak mahasiswa kesulitan menjaga pola makan sehat karena tidak ada cara mudah untuk melacak asupan nutrisi secara cepat. Aplikasi yang ada di pasar terlalu kompleks atau memerlukan langganan premium.",
      architecture:
        "Dibangun dengan Expo + React Native untuk cross-platform (iOS & Android). Firebase Authentication untuk login, Firestore sebagai real-time database untuk log makanan, dan Firebase Storage untuk foto makanan. Barcode scanner menggunakan Expo Camera API dan dicocokkan dengan Open Food Facts API. AI suggestion menggunakan simple rule-based engine berdasarkan kekurangan nutrisi harian.",
      result:
        "Beta testing dengan 25 pengguna selama 2 minggu. 88% pengguna melaporkan peningkatan kesadaran pola makan. App size 34MB, cold start time < 2 detik. Rating beta: 4.3/5.",
    },
  },
  {
    id: "dropout-predictor",
    title: "Student Dropout Predictor (ML)",
    category: "AI & Data",
    semester: 5,
    summary:
      "Model machine learning untuk memprediksi risiko dropout mahasiswa dengan akurasi 87%, dilengkapi dashboard Streamlit interaktif.",
    techStack: [
      { name: "Python", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
      { name: "scikit-learn", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { name: "XGBoost", color: "bg-red-500/10 text-red-400 border-red-500/20" },
      { name: "Pandas", color: "bg-green-500/10 text-green-400 border-green-500/20" },
      { name: "Streamlit", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
    ],
    demoUrl: "https://dropout-predictor.streamlit.app",
    githubUrl: "https://github.com/handino-galih/dropout-predictor",
    featured: false,
    imageGradient: "from-red-500 via-orange-500 to-yellow-500",
    star: {
      situation:
        "Universitas tidak memiliki sistem early warning untuk mengidentifikasi mahasiswa yang berisiko dropout sebelum terlambat. Data akademik tersedia namun belum dimanfaatkan secara prediktif.",
      architecture:
        "Dataset 5.000+ record mahasiswa dengan 20+ fitur (IPK, kehadiran, aktivitas organisasi, beban SKS, dll). Pipeline: data cleaning → feature engineering → SMOTE oversampling untuk imbalanced classes → model training (Random Forest, XGBoost, Logistic Regression). Model terbaik (XGBoost) dituning dengan GridSearchCV. Deployed sebagai web app interaktif menggunakan Streamlit.",
      result:
        "Model XGBoost mencapai akurasi 87.3%, F1-Score 0.84, dan AUC-ROC 0.91 pada test set. 5 fitur terpenting: IPK semester pertama, kehadiran, dan aktivitas portal akademik. Dashboard memungkinkan admin universitas memonitor risiko mahasiswa secara real-time.",
    },
  },
  {
    id: "library-system",
    title: "LibraryMS — Library Management System",
    category: "Backend & Database",
    semester: 3,
    summary:
      "Sistem manajemen perpustakaan berbasis Java dengan arsitektur MVC, database MySQL ternormalisasi, dan fitur pencarian buku yang efisien.",
    techStack: [
      { name: "Java", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { name: "MySQL", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "JDBC", color: "bg-slate-500/10 text-slate-300 border-slate-500/20" },
      { name: "MVC Pattern", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    ],
    demoUrl: "",
    githubUrl: "https://github.com/handino-galih/library-ms",
    featured: false,
    imageGradient: "from-indigo-500 via-blue-600 to-cyan-700",
    star: {
      situation:
        "Perpustakaan kampus masih menggunakan pencatatan manual yang rentan error dan tidak efisien. Proyek ini dibuat sebagai solusi digitalisasi sebagai tugas akhir mata kuliah Basis Data dan OOP.",
      architecture:
        "Arsitektur MVC: Model (Java POJO + DAO pattern), View (Java Swing GUI), Controller (Business logic layer). Database MySQL dengan normalisasi 3NF — tabel: buku, anggota, peminjaman, kategori, dengan foreign key constraints dan indexing pada kolom pencarian. Stored procedure untuk laporan bulanan.",
      result:
        "Sistem mampu memproses 200+ record buku dengan query pencarian < 50ms. Fitur laporan otomatis mempersingkat waktu rekap bulanan dari 3 jam menjadi 10 menit. Mendapat nilai tertinggi di kelas (A+).",
    },
  },
];

// ─── SKILLS ──────────────────────────────────────────────────

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages", context: "Core — Dipakai di 6+ Proyek", level: "Core", icon: "FileCode" },
  { name: "JavaScript (ES6+)", category: "Languages", context: "Core — Dipelajari Sem 3, dipakai terus", level: "Core", icon: "FileCode" },
  { name: "Python", category: "Languages", context: "Core — Dipakai di 4+ Proyek ML & Scripting", level: "Core", icon: "FileCode" },
  { name: "Java", category: "Languages", context: "Intermediate — Dipelajari Sem 3 (OOP)", level: "Intermediate", icon: "FileCode" },
  { name: "SQL", category: "Languages", context: "Core — MySQL & PostgreSQL di 5+ Proyek", level: "Core", icon: "Database" },
  { name: "C/C++", category: "Languages", context: "Intermediate — Dipelajari Sem 1-2", level: "Intermediate", icon: "FileCode" },
  { name: "Bash/Shell", category: "Languages", context: "Intermediate — Linux & Deployment Scripts", level: "Intermediate", icon: "Terminal" },

  // Frontend & Mobile
  { name: "React.js", category: "Frontend & Mobile", context: "Core — Framework utama, 6+ Proyek", level: "Core", icon: "Layout" },
  { name: "Astro", category: "Frontend & Mobile", context: "Core — Portofolio & SSG Projects", level: "Core", icon: "Rocket" },
  { name: "Next.js", category: "Frontend & Mobile", context: "Intermediate — ShopEase & 2 Proyek", level: "Intermediate", icon: "Globe" },
  { name: "React Native + Expo", category: "Frontend & Mobile", context: "Intermediate — Dipelajari Sem 5", level: "Intermediate", icon: "Smartphone" },
  { name: "Tailwind CSS", category: "Frontend & Mobile", context: "Core — Styling utama di semua proyek", level: "Core", icon: "Palette" },
  { name: "HTML5 & CSS3", category: "Frontend & Mobile", context: "Core — Fondasi sejak Sem 3", level: "Core", icon: "Layout" },

  // Backend, Databases & Cloud
  { name: "Node.js + Express", category: "Backend, Databases & Cloud", context: "Intermediate — TaskFlow & API projects", level: "Intermediate", icon: "Server" },
  { name: "MySQL", category: "Backend, Databases & Cloud", context: "Core — Dipakai di 4+ Proyek", level: "Core", icon: "Database" },
  { name: "PostgreSQL", category: "Backend, Databases & Cloud", context: "Intermediate — TaskFlow Project", level: "Intermediate", icon: "Database" },
  { name: "Firebase (Auth, Firestore, Storage)", category: "Backend, Databases & Cloud", context: "Intermediate — NutriTrack Mobile App", level: "Intermediate", icon: "Cloud" },
  { name: "REST API Design", category: "Backend, Databases & Cloud", context: "Core — Diimplementasi di 5+ Proyek", level: "Core", icon: "Globe" },

  // Tools, DevOps & Workflow
  { name: "Git & GitHub", category: "Tools, DevOps & Workflow", context: "Core — Workflow harian, 50+ commits/bulan", level: "Core", icon: "GitBranch" },
  { name: "Figma", category: "Tools, DevOps & Workflow", context: "Intermediate — UI/UX Wireframing & Prototyping", level: "Intermediate", icon: "Pen" },
  { name: "Linux / WSL2", category: "Tools, DevOps & Workflow", context: "Intermediate — Development environment", level: "Intermediate", icon: "Terminal" },
  { name: "Antigravity IDE", category: "Tools, DevOps & Workflow", context: "Core — AI-assisted development tool", level: "Core", icon: "Sparkles" },
  { name: "VS Code", category: "Tools, DevOps & Workflow", context: "Core — Primary code editor", level: "Core", icon: "Code2" },
];

// ─── EXPERIENCES & CERTIFICATIONS ────────────────────────────

export const experiences: Experience[] = [
  {
    id: "card-1",
    type: "organization",
    title: "",
    organization: "",
    period: "",
    description: "",
    tags: [],
  },
  {
    id: "card-2",
    type: "committee",
    title: "",
    organization: "",
    period: "",
    description: "",
    tags: [],
  },
  {
    id: "card-3",
    type: "lab",
    title: "",
    organization: "",
    period: "",
    description: "",
    tags: [],
  },
  {
    id: "card-4",
    type: "certification",
    title: "",
    organization: "",
    period: "",
    description: "",
    tags: [],
  },
];

// ─── SITE CONFIG ─────────────────────────────────────────────

export const siteConfig = {
  title: `${profile.fullName} — Portofolio Magang`,
  description: `Portofolio profesional ${profile.fullName}, Mahasiswa ${profile.major} Semester ${profile.semester} ${profile.university}. ${profile.bio}`,
  ogImage: "/og-image.jpg",
  siteUrl: "https://handino-portfolio.vercel.app",
  themeColor: "#6366f1",
};
