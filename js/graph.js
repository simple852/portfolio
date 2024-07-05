document.addEventListener('DOMContentLoaded', () => {
  const metricBarGroups = document.querySelectorAll('.metric-bar-group');
  let minValue = Math.min(...Array.from(metricBarGroups).map(group => parseInt(group.getAttribute('data-level'))));
  let maxValue = Math.max(...Array.from(metricBarGroups).map(group => parseInt(group.getAttribute('data-level'))));

  const range = maxValue - minValue;

  metricBarGroups.forEach(group => {
    const level = parseInt(group.getAttribute('data-level'));
    const month = group.getAttribute('data-month');
    const status = group.getAttribute('data-status');

    // 기존 내용을 비우고 새로운 요소들을 추가합니다.
    group.innerHTML = '';

    const bar = document.createElement('div');
    bar.className = `metric-bar ${status}`;

    // 높이를 설정합니다. (최소 5% 높이 보장)
    const scaledHeight = Math.max(5, (level - minValue) / range * 100);
    bar.style.height = `${scaledHeight}%`;

    const value = document.createElement('span');
    value.className = 'metric-value';
    value.textContent = `${level}%`;
    bar.appendChild(value);

    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = month;

    group.appendChild(bar);
    group.appendChild(label);
  });

  // 향상된 퍼센티지를 계산하고 표시합니다.
  const improvementSpan = document.querySelector('.improvement');
  const improvement = maxValue - minValue;
  improvementSpan.textContent = `프로젝트 적용 후 ${improvement}% 향상`;
});
