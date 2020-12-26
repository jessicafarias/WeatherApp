export const style = (parentId, ...styles) => {
  const parent = document.getElementById(parentId);
  parent.classList.add(...styles);
};

export const unstyle = (parentId, ...styles) => {
  const parent = document.getElementById(parentId);
  parent.classList.remove(...styles);
};

export const img = (imgId, src, ...styles) => {
  const imagen = document.getElementById(imgId);
  imagen.src = src;
  imagen.classList.add(...styles);
};

export const btn = (btnId, onclick, ...styles) => {
  const btn = document.getElementById(btnId);
  btn.onclick = onclick;
  btn.classList.add(...styles);
};

export const overrite = (itemId, text) => {
  const btn = document.getElementById(itemId);
  btn.innerHTML = '';
  btn.innerHTML = text;
};
