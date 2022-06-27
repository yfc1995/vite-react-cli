export const debounce = (func, delay, immediate) => {
  // result表示返回值
  let timeout, result;
  let debounced = function () {
    // 存储触发当前事件的this
    let that = this;
    // 存储event对象
    let args = arguments;
    clearTimeout(timeout);
    // 判断是否立即执行，如果不传默认不立即执行
    if (immediate) {
      // 立即执行
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
      if (callNow) {
        result = func.apply(that, args);
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(that, args);
      }, delay);
    }
    return result;
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
};

export const setMobileHtmlSize = () => {
  let width = window.innerWidth > 1334 ? 1334 : window.innerWidth;
  document.documentElement.style.fontSize = `${(width * 100 / 375).toFixed(4)}px`;
};

export const setPCHtmlSize = () => {
  let width = window.innerWidth > 2770 ? 2770 : window.innerWidth;
  document.documentElement.style.fontSize = `${(width * 100 / 1920).toFixed(4)}px`;
};
