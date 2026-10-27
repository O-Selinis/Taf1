/* Splash curto e não bloqueante, exibido ao abrir o aplicativo. */
(() => {
  const splash=document.getElementById('startupSplash');
  if(!splash)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const begin=performance.now();
  const dismiss=()=>{
    const remaining=Math.max(0,(reduced?250:1900)-(performance.now()-begin));
    setTimeout(()=>{splash.classList.add('is-done');setTimeout(()=>splash.remove(),450)},remaining);
  };
  if(document.readyState==='complete')dismiss();
  else window.addEventListener('load',dismiss,{once:true});
})();
