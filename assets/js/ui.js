const $target = document.querySelector('[data-fix]');
const $targetChild = document.querySelector('[data-fix-child]');
function checkPosition() {
  if (!$target) return;
  const targetRect = $target.getBoundingClientRect();
  const targetChildRect = $targetChild.getBoundingClientRect();

  const isTargetBottom = targetRect.bottom <= window.innerHeight && targetRect.bottom <= window.innerHeight - 30;
  const isTargetChildTop = window.scrollY + window.innerHeight - 137 - 30 <= targetChildRect.height;
  const isTargetChildBottom = targetChildRect.bottom <= window.innerHeight && targetChildRect.bottom <= window.innerHeight - 30;

  if (isTargetChildBottom) {
    $target.classList.add('is-fix');

    if (isTargetBottom) {
      $target.classList.remove('is-fix');
      $target.classList.add('is-absolute');
    }
  } else {
    $target.classList.remove('is-absolute');
    $target.classList.add('is-fix');
  }

  if (isTargetChildTop) {
    $target.classList.remove('is-absolute');
    $target.classList.remove('is-fix');
  }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);
