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

export interface CertificateCredential {
  name: string;
  link?: string;
  type?: "pdf" | "image" | "url";
}

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  credentials?: CertificateCredential[];
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
    id: "pbl-lab-dt",
    title: "PBL Lab DT — Sistem Informasi Laboratorium",
    category: "Full-Stack Web",
    semester: 3,
    summary:
      "Platform web manajemen operasional & layanan Laboratorium DT berbasis PHP dan PostgreSQL, dikembangkan dalam tim 4 orang dengan kontribusi utama pada System Analysis, perancangan proses bisnis (UML), dan arsitektur database relasional (ERD).",
    techStack: [
      { name: "System Analysis & UML", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { name: "ERD & Data Modeling", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "PostgreSQL", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { name: "SQL Views & Procedures", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
      { name: "PHP (MVC)", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
      { name: "Tailwind CSS", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    ],
    demoUrl: "",
    githubUrl: "https://github.com/404GH0ST/PBL-Lab-DT",
    featured: true,
    imageGradient: "from-blue-600 via-indigo-600 to-violet-800",
    star: {
      situation:
        "Dalam proyek PBL (Project-Based Learning) berkelompok 4 orang, Laboratorium DT membutuhkan sistem informasi terpusat untuk mendigitalisasi pengelolaan inventaris dan operasional lab. Tantangan utamanya adalah merancang sistem dari nol dengan alur multi-aktor (admin, teknisi/laboran, civitas) serta skema data yang kompleks agar tim developer memiliki blueprint yang jelas dan tidak terjadi anomali data.",
      architecture:
        "Berperan sebagai System Analyst & Data Modeler: memimpin rekayasa kebutuhan (requirements engineering) dan memodelkan alur bisnis sistem secara presisi menggunakan UML (Use Case, Activity, & Sequence Diagram) serta DFD. Mendesain arsitektur database relasional (ERD) ternormalisasi 3NF pada PostgreSQL, termasuk merancang skrip DDL/DML, views agregasi data, dan stored procedure. Menyusun dokumentasi spesifikasi teknis dan Laporan Akhir PBL sebagai single source of truth untuk rekan pengembang di tim.",
      result:
        "Berkat perancangan sistem dan ERD yang matang di awal, tim developer berhasil mengimplementasikan seluruh fitur tepat waktu tanpa kendala refactor struktur database di tengah jalan. Skema relasi database terbukti solid tanpa redundansi, dan dokumentasi teknis yang komprehensif mengantarkan proyek mendapatkan penilaian sangat baik pada evaluasi PBL.",
    },
  },
  {
    id: "pwl-pos",
    title: "Point of Sales (POS) — Retail Transaction System",
    category: "Full-Stack Web",
    semester: 4,
    summary:
      "Aplikasi web Point of Sales (POS) ritel yang dibangun mandiri menggunakan Laravel dan MySQL, mencakup manajemen multi-role user, katalog inventaris barang, pelacakan stok, dan pencatatan transaksi kasir secara terintegrasi.",
    techStack: [
      { name: "Laravel (MVC)", color: "bg-red-500/10 text-red-400 border-red-500/20" },
      { name: "PHP", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
      { name: "MySQL / Relational DB", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "Eloquent ORM", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { name: "Blade Templating", color: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
      { name: "Bootstrap / CSS", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Handinoasa/PWL_POS",
    featured: true,
    imageGradient: "from-rose-600 via-orange-600 to-amber-600",
    star: {
      situation:
        "Sebagai proyek mandiri pada mata kuliah Pemrograman Web Lanjut (PWL), sistem kasir ritel konvensional kerap menghadapi tantangan inkonsistensi pencatatan stok, rawannya selisih perhitungan transaksi manual, serta ketiadaan kontrol otorisasi bertingkat antara manajer toko, admin inventaris, dan kasir. Diperlukan solusi web POS yang cepat, konsisten, dan terstruktur sesuai standar arsitektur MVC modern.",
      architecture:
        "Mengembangkan aplikasi secara mandiri dari hulu ke hilir (end-to-end) menggunakan framework Laravel. Merancang skema basis data relasional via Laravel Migrations (entitas master: level, user, kategori, supplier, barang; serta entitas transaksi: t_stok, t_penjualan, dan t_penjualan_detail). Mengimplementasikan Eloquent ORM untuk relasi data (One-to-Many & BelongsTo), pengontrolan alur bisnis di Controller dengan form request validation, serta antarmuka terstruktur menggunakan Blade templating engine.",
      result:
        "Seluruh fungsionalitas inti POS berhasil direalisasikan secara mandiri: manajemen hak akses multi-role (RBAC), siklus CRUD katalog barang & supplier, mutasi keluar-masuk stok barang, hingga pencatatan transaksi penjualan kasir secara realtime. Kode terstruktur rapi memudahkan maintainability dan berhasil lulus evaluasi teknis praktikum PWL dengan hasil sangat memuaskan.",
    },
  },
  {
    id: "pbl-gotrack",
    title: "GoTrack — Digital Printing Order & Production Tracker",
    category: "Full-Stack Web",
    semester: 4,
    summary:
      "Platform web pemantauan progres produksi digital printing berbasis alur kerja nyata untuk mitra industri 'Deenhag'. Berperan sebagai System Analyst dalam tim 4 orang yang memimpin rekayasa kebutuhan (SRS), perancangan alur bisnis (UML), dan dokumentasi teknis sistem.",
    techStack: [
      { name: "System Analysis & SRS", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { name: "UML & Process Modeling", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "ERD & Database Design", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { name: "Mitra Industri (Deenhag)", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
      { name: "Workflow Pipeline", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
      { name: "PHP / Web Platform", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
    ],
    demoUrl: "",
    githubUrl: "https://github.com/rahmanlana/PBL",
    featured: true,
    imageGradient: "from-cyan-600 via-teal-600 to-emerald-700",
    star: {
      situation:
        "Mitra industri 'Deenhag' yang bergerak di bidang digital printing menghadapi kendala dalam visibilitas proses produksi pesanan pelanggan. Alur pengerjaan (desain proofing, antrian mesin cetak, finishing, hingga packaging) masih dicatat secara manual/terfragmentasi, menyebabkan rawan penumpukan antrean (bottleneck), ketidakpastian estimasi selesai, dan tingginya beban staf melayani pertanyaan progres pelanggan. Diperlukan platform web tracking terpadu yang memetakan status pengerjaan secara transparan.",
      architecture:
        "Sebagai System Analyst & Technical Documentation Lead dalam tim 4 orang: melakukan observasi operasional dan requirements gathering langsung bersama stakeholder mitra Deenhag. Menerjemahkan alur kerja cetak ke dalam dokumen spesifikasi kebutuhan sistem (SRS) dan Laporan PBL lengkap. Memodelkan proses bisnis multi-aktor (Kasir, Desainer, Operator Mesin, dan Pelanggan) menggunakan diagram UML (Use Case, Activity Diagram per divisi, Sequence Diagram) serta DFD. Merancang arsitektur basis data relasional (ERD) untuk pelacakan siklus pesanan, status stasiun kerja, dan log riwayat pengerjaan sebagai acuan baku tim developer.",
      result:
        "Dokumentasi arsitektur dan spesifikasi alur kerja yang terstruktur berhasil menjadi panduan presisi bagi 3 rekan pengembang dalam mengeksekusi sistem tanpa ambiguitas fitur. Platform GoTrack berhasil memvisualisasikan tahapan produksi pesanan digital printing secara realtime, mereduksi miskomunikasi internal mitra Deenhag, serta mendapatkan apresiasi tinggi saat presentasi pengujian PBL kemitraan industri kampus.",
    },
  },
  {
    id: "roastmate",
    title: "Roastmate — AI Coffee Bean Quality & Brew Advisor",
    category: "AI & Data",
    semester: 5,
    summary:
      "Aplikasi mobile Flutter berbasis AI on-device (TensorFlow Lite & OpenCV) untuk deteksi biji kopi, analisis defect, dan rekomendasi seduh. Berperan sebagai QA Plan Engineer yang merancang strategi pengujian, matriks test case (Unit, Widget, Integrasi, & On-Device), serta verifikasi akurasi inferensi.",
    techStack: [
      { name: "QA & Test Planning", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
      { name: "Test Case Matrix (TC01-TC12)", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { name: "Flutter & Dart", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "On-Device ML (TFLite)", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { name: "OpenCV Computer Vision", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
      { name: "Unit & Integration Testing", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    ],
    demoUrl: "",
    githubUrl: "https://github.com/AhmadKevin000/roastmate_app",
    featured: true,
    imageGradient: "from-amber-600 via-stone-700 to-amber-950",
    star: {
      situation:
        "Aplikasi Roastmate menggabungkan Flutter mobile dengan computer vision (OpenCV) dan inferensi machine learning on-device (TensorFlow Lite) untuk mendeteksi kecacatan (defect), tingkat sangrai (roast), serta menghitung skor kualitas batch biji kopi secara lokal. Tingginya kompleksitas integrasi model AI pada perangkat mobile rentan terhadap edge cases: variasi pencahayaan kamera, latensi inferensi, potensi salah klasifikasi dataset campuran (uncertain classes), serta formula defect rate yang harus presisi. Dibutuhkan perencanaan Quality Assurance (QA) yang sistematis dan menyeluruh.",
      architecture:
        "Bertindak sebagai QA Plan Engineer: menyusun dokumen strategi Quality Assurance dan matriks pengujian end-to-end (12 skenario pengujian TC-01 s/d TC-12). Merancang skenario Widget Testing (navigasi, visualisasi detail inspeksi, filter riwayat), Unit Testing untuk verifikasi formula matematis Quality Score (skala 0–100) dan kalkulasi defect rate, serta validasi skenario confidence rendah ('uncertain/mixed batch'). Menguji integrasi pipeline lokal (Scan → On-device inference → SQLite storage → CSV Export) dan menetapkan benchmark performa hardware (latency budget & memory usage pada physical target device).",
      result:
        "Melalui matriks test plan yang komprehensif, tim pengembang berhasil mendeteksi dan memperbaiki bug logika formula scoring serta error penanganan edge-case dataset kamera sebelum rilis. Aplikasi Roastmate berhasil tervalidasi stabil dalam memproses inferensi on-device secara akurat, alur persistensi data lokal terbukti bebas crash, dan dokumentasi QA menjadi acuan standar verifikasi kualitas perangkat lunak dalam tim.",
    },
  },
  {
    id: "project-slot-5",
    title: "Slot Proyek #5 — Segera Hadir",
    category: "Full-Stack Web",
    semester: 5,
    summary:
      "Ruang ini disiapkan untuk proyek mendatang. Suatu saat Anda dapat menambahkan detail proyek baru dengan mengedit file data portfolio.",
    techStack: [
      { name: "Segera Hadir", color: "bg-slate-800 text-slate-400 border-slate-700" },
      { name: "In Development", color: "bg-slate-800 text-slate-400 border-slate-700" },
    ],
    demoUrl: "",
    githubUrl: "",
    featured: false,
    imageGradient: "from-slate-800 via-slate-850 to-slate-900",
    star: {
      situation: "Slot ini disiapkan untuk dokumentasi proyek nyata Anda berikutnya.",
      architecture: "Detail arsitektur, tech stack, dan implementasi teknis akan dicantumkan saat proyek siap.",
      result: "Hasil akhir, metrik, dan dampak proyek akan ditampilkan di sini.",
    },
  },
  {
    id: "project-slot-6",
    title: "Slot Proyek #6 — Segera Hadir",
    category: "Full-Stack Web",
    semester: 5,
    summary:
      "Ruang ini disiapkan untuk proyek mendatang. Suatu saat Anda dapat menambahkan detail proyek baru dengan mengedit file data portfolio.",
    techStack: [
      { name: "Segera Hadir", color: "bg-slate-800 text-slate-400 border-slate-700" },
      { name: "In Development", color: "bg-slate-800 text-slate-400 border-slate-700" },
    ],
    demoUrl: "",
    githubUrl: "",
    featured: false,
    imageGradient: "from-slate-800 via-slate-850 to-slate-900",
    star: {
      situation: "Slot ini disiapkan untuk dokumentasi proyek nyata Anda berikutnya.",
      architecture: "Detail arsitektur, tech stack, dan implementasi teknis akan dicantumkan saat proyek siap.",
      result: "Hasil akhir, metrik, dan dampak proyek akan ditampilkan di sini.",
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
    type: "achievement",
    title: "Future Entrepreneur Summit & Startup Founder Clash",
    organization: "BEM FEB Universitas Muhammadiyah Malang & FEST Indonesia",
    period: "Okt 2024 – Feb 2025",
    description:
      "Berpartisipasi aktif dalam rangkaian program pengembangan bisnis, inovasi teknologi, dan kepemimpinan startup nasional hingga internasional. Terpilih sebagai peserta Kompetisi Ide Bisnis Tingkat Nasional (Startup Founder Clash), seleksi FEST GoWorld Asia Futurepreneur 2025, serta menuntaskan pelatihan intensif Public Speaking dan Entrepreneurship di DOME UMM untuk memperkuat kapabilitas validasi produk dan komunikasi bisnis.",
    tags: ["Startup Ideation", "Public Speaking", "FEST GoWorld", "Business Model", "National Summit"],
    link: "/certificates/future-entrepreneur-summit.pdf",
    credentials: [
      {
        name: "Peserta Kompetisi Ide Bisnis Tingkat Nasional (Startup Founder Clash)",
        link: "/certificates/future-entrepreneur-summit.pdf#page=6",
        type: "pdf",
      },
      {
        name: "Participant in FEST GoWorld Asia Futurepreneur Selection Program 2025 (International)",
        link: "/certificates/future-entrepreneur-summit.pdf#page=2",
        type: "pdf",
      },
      {
        name: "Peserta Training Public Speaking Tingkat Nasional (Grow Project)",
        link: "/certificates/future-entrepreneur-summit.pdf#page=1",
        type: "pdf",
      },
      {
        name: "Peserta Pelatihan Entrepreneurship Tingkat Nasional (Grow x FEST)",
        link: "/certificates/future-entrepreneur-summit.pdf#page=5",
        type: "pdf",
      },
      {
        name: "Peserta Seminar Nasional Future Entrepreneur Summit 2025",
        link: "/certificates/future-entrepreneur-summit.pdf#page=4",
        type: "pdf",
      },
      {
        name: "Peserta Webinar Nasional Soft Skill Development di Era Digitalisasi",
        link: "/certificates/future-entrepreneur-summit.pdf#page=3",
        type: "pdf",
      },
    ],
  },
  {
    id: "card-2",
    type: "committee",
    title: "Volunteer Panitia Prastudi JTI Polinema 2025",
    organization: "Himpunan Mahasiswa Teknologi Informasi (HMTI) Polinema",
    period: "Agustus 2025",
    description:
      "Berkontribusi sebagai panitia pelaksana kegiatan orientasi mahasiswa baru Jurusan Teknologi Informasi Politeknik Negeri Malang tahun 2025. Bertanggung jawab atas kedisiplinan dan koordinasi operasional lapangan, memfasilitasi pengenalan budaya akademik komputasi, serta menjaga kelancaran alur teknis kegiatan ratusan mahasiswa baru lintas program studi.",
    tags: ["Volunteer", "Event Operations", "Field Management", "Team Leadership", "HMTI Polinema"],
    link: "/certificates/Handino Asa Galih R.pdf",
    credentials: [
      {
        name: "Sertifikat Panitia Prastudi Mahasiswa Baru JTI Polinema 2025 (No: 21069/PL2.3/KM/2025)",
        link: "/certificates/Handino Asa Galih R.pdf",
        type: "pdf",
      },
    ],
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
