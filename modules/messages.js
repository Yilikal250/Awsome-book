export const hidemsga = (msga) => {
  msga.classList.add('active');
  setTimeout(() => { msga.classList.remove('active'); }, 2000);
};
export const hidemsgb = (msgb) => {
  msgb.classList.add('active');
  setTimeout(() => { msgb.classList.remove('active'); }, 2000);
};
export const hidemsgc = (msgc) => {
  msgc.classList.add('active');
  setTimeout(() => { msgc.classList.remove('active'); }, 2000);
};