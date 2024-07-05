document.addEventListener('DOMContentLoaded', () => {

  // 다크 모드 토글
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // 메뉴 항목 클릭 시 메뉴 닫기
  const menuItems = mainNav.getElementsByTagName('a');
  for (let item of menuItems) {
    item.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  }
  // 스크롤 애니메이션
  const fadeElems = document.querySelectorAll('.fade-in');

  const fadeIn = (elem) => {
    const rect = elem.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if (rect.top <= viewHeight && rect.bottom >= 0) {
      elem.classList.add('visible');
    }
  };

  const handleScroll = () => {
    fadeElems.forEach(fadeIn);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 초기 로드 시 실행
});
