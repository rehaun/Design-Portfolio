// Resume content, per language (from the "Resume" frame in Figma).
// Edit text here; layout is in layouts/Resume.astro.
export const resume = {
  en: {
    name: 'Reyhane Davarpanah',
    role: 'Product Designer',
    print: 'Download PDF',
    sections: {
      experience: 'Experiences',
      education: 'Education',
      courses: 'Workshops & Courses',
      skills: 'Skills',
    },
    experience: [
      {
        title: 'Product Designer',
        place: 'Classeh | School Management Platform, Remote',
        date: 'Sep 2023 – Aug 2024 (10 months)',
        points: [
          'Developing wireframes, prototypes, and high-fidelity designs for a cross-platform LMS.',
          'Designing a roadmap for games and educational games with the ability to develop with personalized content.',
          'Collaborated with the PO on core projects to improve product interfaces and experiences.',
          'Working closely with the development team to ensure the correct implementation of the UI/UX design.',
          'Trained a UI/UX intern in a project-oriented manner.',
        ],
      },
      {
        title: 'Product Designer',
        place: 'Freelancer, Remote',
        date: 'Mar 2022 – Sep 2023 (1.5 years)',
        points: [
          'Developed wireframes, prototypes, and high-fidelity designs for multiple web and mobile applications across various industries including healthcare and shopping.',
          'Collaborated with stakeholders and development teams on core projects to improve product interfaces and experiences.',
        ],
      },
      {
        title: 'UI/UX Designer',
        place: 'Part Software Group, Mashhad',
        date: 'Nov 2021 – Mar 2022 (6 months)',
        points: [
          'Worked closely with developers to ensure seamless implementation of designs while maintaining brand consistency and adhering to design guidelines.',
          'Designed intuitive and visually appealing user interfaces for our websites, mobile apps, and other digital platforms, ensuring a seamless and delightful user experience.',
          'Kept abreast of competitor products and industry trends to ensure our designs stay current and relevant.',
        ],
      },
      {
        title: 'UI/UX Design Intern',
        place: 'Diaco Software Group, Mashhad',
        date: 'Jun 2021 – Sep 2021 (3 months)',
        points: ['Practiced graphics skills through UI design for mobile app development interns.'],
      },
    ],
    education: [
      { title: 'B.Sc. in Computer Engineering', place: 'Ferdowsi University of Mashhad, Mashhad, Iran', date: '2017 – 2023' },
    ],
    courses: [
      { title: 'Advanced Skills Development Under Team Lead Guidance', place: 'Marzie Nadali', date: '2024' },
      { title: 'Comprehensive Foundations of UX Research', place: 'Arghavan Saeedan', date: '2024' },
      { title: 'Foundations of User Experience (UX) Design', place: 'Google', date: '2021' },
    ],
    skills: [
      { title: 'Tools and Technologies', text: 'Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, HTML/CSS, Python.' },
      { title: 'Design', text: 'User Interaction Design, Visual Design, User Interface Design, Micro Interaction Design, Wireframing, Rapid Prototyping.' },
      { title: 'Research', text: 'Interview, Usability Test, Benchmark, Survey, Persona Development, User Flow Map, Trend Analysis.' },
      { title: 'Soft Skills', text: 'Active Listening, Collaboration, Communication, Flexibility, Empathy, Curiosity.' },
    ],
  },
  fa: {
    name: 'ریحانه داورپناه',
    role: 'طراح محصول',
    print: 'دانلود PDF',
    sections: {
      experience: 'سوابق کاری',
      education: 'تحصیلات',
      courses: 'کارگاه‌ها و دوره‌ها',
      skills: 'مهارت‌ها',
    },
    experience: [
      {
        title: 'طراح محصول',
        place: 'کلاسه | پلتفرم مدیریت مدرسه، دورکاری',
        date: 'شهریور ۱۴۰۲ – مرداد ۱۴۰۳ (۱۰ ماه)',
        points: [
          'طراحی وایرفریم، پروتوتایپ و طرح‌های نهایی برای یک سامانه‌ی مدیریت یادگیری چندسکویی.',
          'طراحی نقشه‌ی راه بازی‌ها و بازی‌های آموزشی با امکان توسعه بر اساس محتوای شخصی‌سازی‌شده.',
          'همکاری با مالک محصول (PO) روی پروژه‌های اصلی برای بهبود رابط و تجربه‌ی محصول.',
          'همکاری نزدیک با تیم توسعه برای پیاده‌سازی درست طراحی رابط و تجربه‌ی کاربری.',
          'آموزش پروژه‌محور یک کارآموز طراحی رابط و تجربه‌ی کاربری.',
        ],
      },
      {
        title: 'طراح محصول',
        place: 'فریلنسر، دورکاری',
        date: 'اسفند ۱۴۰۰ – شهریور ۱۴۰۲ (۱.۵ سال)',
        points: [
          'طراحی وایرفریم، پروتوتایپ و طرح‌های نهایی برای چند اپلیکیشن وب و موبایل در حوزه‌های مختلف از جمله سلامت و خرید.',
          'همکاری با ذی‌نفعان و تیم‌های توسعه روی پروژه‌های اصلی برای بهبود رابط و تجربه‌ی محصول.',
        ],
      },
      {
        title: 'طراح رابط و تجربه‌ی کاربری',
        place: 'گروه نرم‌افزاری پارت، مشهد',
        date: 'آبان ۱۴۰۰ – اسفند ۱۴۰۰ (۶ ماه)',
        points: [
          'همکاری نزدیک با برنامه‌نویس‌ها برای پیاده‌سازی بی‌نقص طراحی‌ها، با حفظ یکپارچگی برند و رعایت راهنمای طراحی.',
          'طراحی رابط‌های کاربری روشن و جذاب برای وب‌سایت‌ها، اپلیکیشن‌های موبایل و دیگر بسترهای دیجیتال.',
          'دنبال کردن محصولات رقبا و روندهای صنعت تا طراحی‌ها به‌روز و مرتبط بمانند.',
        ],
      },
      {
        title: 'کارآموز طراحی رابط و تجربه‌ی کاربری',
        place: 'گروه نرم‌افزاری دیاکو، مشهد',
        date: 'خرداد ۱۴۰۰ – شهریور ۱۴۰۰ (۳ ماه)',
        points: ['تمرین مهارت‌های گرافیکی از طریق طراحی رابط کاربری برای کارآموزان توسعه‌ی اپلیکیشن موبایل.'],
      },
    ],
    education: [
      { title: 'کارشناسی مهندسی کامپیوتر', place: 'دانشگاه فردوسی مشهد، مشهد', date: '۱۳۹۶ – ۱۴۰۲' },
    ],
    courses: [
      { title: 'توسعه‌ی مهارت‌های پیشرفته زیر نظر تیم‌لید', place: 'مرضیه نادعلی', date: '۱۴۰۳' },
      { title: 'مبانی جامع پژوهش تجربه‌ی کاربری', place: 'ارغوان سعیدان', date: '۱۴۰۳' },
      { title: 'Foundations of User Experience (UX) Design', place: 'Google', date: '۱۴۰۰' },
    ],
    skills: [
      { title: 'ابزارها و فناوری‌ها', text: 'Figma، Adobe Illustrator، Adobe Photoshop، Adobe XD، HTML/CSS، Python.' },
      { title: 'طراحی', text: 'طراحی تعامل، طراحی بصری، طراحی رابط کاربری، طراحی میکرواینترکشن، وایرفریم، پروتوتایپ سریع.' },
      { title: 'پژوهش', text: 'مصاحبه، تست کاربردپذیری، بنچمارک، پرسش‌نامه، پرسونا، نقشه‌ی جریان کاربر، تحلیل روند.' },
      { title: 'مهارت‌های نرم', text: 'گوش دادن فعال، همکاری، ارتباط مؤثر، انعطاف‌پذیری، همدلی، کنجکاوی.' },
    ],
  },
};
