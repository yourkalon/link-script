(function(){
  const b=document.getElementById("bar"),
        m=document.getElementById("msg"),
        t=document.getElementById("title"),
        s=document.getElementById("spin"),
        d=document.getElementById("done"),
        btns=document.getElementById("btns");

  let p=0,i=setInterval(()=>{
    p+=10;
    b.style.width=p+"%";
    m.textContent=(p<40)?"প্রস্তুত করা হচ্ছে...":(p<80)?"প্রায় হয়ে গেছে...":"শেষ ধাপ...";
    if(p>=100){
      clearInterval(i);
      s.style.display="none";
      b.parentElement.style.display="none";
      m.style.display="none";
      t.textContent="সব ঠিক! 🎉";
      d.style.display="block";
      btns.style.display="block";
    }
  },60);
})();
