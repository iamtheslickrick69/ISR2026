export const smoothScrollTo = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const headerHeight = window.innerWidth < 640 ? 64 : 80;
  const sectionTop = section.offsetTop - headerHeight;

  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth',
  });
};
