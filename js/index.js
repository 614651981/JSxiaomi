window.onload=function(){


//导航
	// let nav=document.getElementsByTagName('nav')[0];
	let nav=document.querySelector('nav');
	console.log(nav);
	let navli=document.querySelectorAll('nav >.list > li');
	console.log(navli)
	for(let i=0;i<navli.length-2;i++){
		navli[i].onmouseover=function(){
			let item1=this.getElementsByClassName('item1')[0];
			item1.style.display='block';
		}
		navli[i].onmouseout=function(){
			let item1=this.getElementsByClassName('item1')[0];
			item1.style.display='none';
		}
	}


//侧导航开始
	let aside=document.getElementsByClassName('aside')[0];
	let asideli=document.querySelectorAll('aside>.aside>li')
	let item=document.getElementsByClassName('item');
	for(let i=0;i<asideli.length;i++){
		asideli[i].onmouseover=function(){
            
            let item=this.getElementsByClassName('item')[0];
			item.style.display='block';
		};
		asideli[i].onmouseout=function(){
           
            let item=this.getElementsByClassName('item')[0];
			item.style.display='none';
		}
	}




	let imglist=$('.img-list')[0];
	let imglistli=imglist.getElementsByTagName('li');
	let btnlist=$('.btn-list')[0];
	let btnlistli=btnlist.getElementsByTagName('li');
	let imgwidth=parseInt(getComputedStyle(imglist,null).width);
	let next=0;
	let now=0;
	
	btnlistli[0].style.background='#fff';
//鼠标点击btn 换图片，图片轮播用第一种方式时：	
	// for(let i=0;i<btnlistli.length;i++){
	// 	btnlistli[i].onclick=function(){
		
	// 	//所有消失，对应显示
	// 		for(let i=0;i<imglistli.length;i++){
	// 			imglistli[i].style.display='none';
	// 			btnlistli[i].style.background='';
	// 		}
			
	// 		imglistli[i].style.display='block';
	// 		btnlistli[i].style.background='#fff';
	// 		num=i;
	// 	}
	// }
//鼠标点击btn 换图片，图片轮播用第二种方式时：
//now 当前图片
//i 点击按钮所对应图片，相当于下一张图片
	for(let i=0;i<btnlistli.length;i++){
		btnlistli[i].onclick=function(){
			if(now == i){return};
			btnlistli[now].style.background='';
			btnlistli[i].style.background='#fff';
			imglistli[i].style.left=imgwidth+'px';
			animate(imglistli[now],{left:-imgwidth});
			animate(imglistli[i],{left:0});
			now=next=i;
		}
	}

//时间函数  图片轮播

//图片轮播第一种方式  所有隐藏，再显示当前图片
	// let t=setInterval(move,3000);
	// let num=0;
	// function move(){
	// 	num++;
	// 	if(num==imglistli.length){
	// 		num=0;
	// 	}
	// 	for(let i=0;i<imglistli.length;i++){
	// 			imglistli[i].style.display='none';
	// 			btnlistli[i].style.background='';
	// 		}
			
	// 		imglistli[num].style.display='block';
	// 		btnlistli[num].style.background='#fff';
	// }
	// function moveL(){
	// 	num--;
 //   		if(num<0){
	// 		num=imglistli.length-1;
	// 	}
	// 	for(let i=0;i<imglistli.length;i++){
	// 			imglistli[i].style.display='none';
	// 			btnlistli[i].style.background='';
	// 	}
			
	// 		imglistli[num].style.display='block';
	// 		btnlistli[num].style.background='#fff';
	// }

//图片轮播第二种方式 
	//点击右边 
	//now当前图片位置(0,0)
	//next下一张图片位置(imgwidth,0)
	//now(0,0)--> (-imgwidth,0)
	//next(imgwidth,0)-->now (0,0)
	//更新 now=next;
	//用now 、next轮播时,在CSS中需要将图片定位的位置都改为left(100%),第一张图片left(0)
	
	t=setInterval(move,3000);
	function move(){
		next++;
		if(next==imglistli.length){
			next=0;
		}
		btnlistli[now].style.background='';
		btnlistli[next].style.background='#fff';
		imglistli[next].style.left=`${imgwidth}px`;
		animate(imglistli[now],{left:-imgwidth});
		animate(imglistli[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	function moveL(){
		next--;
		if(next<0){
			next=imglistli.length-1;
		}
		btnlistli[now].style.background='';
		btnlistli[next].style.background='#fff';
		imglistli[next].style.left=`${-imgwidth}px`;
		animate(imglistli[now],{left:imgwidth});
		animate(imglistli[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}


//鼠标移入停止轮播
	let banner=$('.banner')[0];	
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}

// //点击左右箭头换图片，自动轮播用第一种方法时
//    let btnleft=$('.btn-left')[0];
//    let btnright=$('.btn-right')[0];
  
//    btnright.onclick=function(){
//    		move();
   		
//    }
//     btnleft.onclick=function(){
//    		moveL();
//    }
//点击左右箭头换图片，自动轮播用第二种方法时
   let btnleft=$('.btn-left')[0];
   let btnright=$('.btn-right')[0];
   let flag=true;
   btnright.onclick=function(){
   	if(!flag){
			return;
		}
   		move();
   		flag=false;
   }
    btnleft.onclick=function(){
   		moveL();
   }

//小米明星单品
	let starlist=$('.star-list')[0];
	let starlistli=starlist.getElementsByTagName('li');
	console.log(starlistli)
	let moreleft=$('.more-left')[0];
	let morezuo=moreleft.getElementsByTagName('a')[0];
	console.log(morezuo)
	let moreright=$('.more-right')[0];
	let moreyou=moreright.getElementsByTagName('a')[0];
	console.log(moreyou)
	
	starlist.innerHTML+=starlist.innerHTML;
	
	// console.log(moreli )

	let w=(starlistli[0].offsetWidth+parseInt(getComputedStyle(starlistli[0],null).marginRight))*5;
	console.log(w)
	let tt1=setInterval(starmovel,3000);
	let tt2=setInterval(starmoveR,6000);
	
	

	starlist.style.width=w*4+'px';
	
	let i=1;
	moreleft.onclick=function(){
		if(i==0){
			return;
		}
		i--;
		
		starlist.style.transform=`translateX(-${i*w}px)`;
		morezuo.style.color='#ff6700';
		moreyou.style.color='';
	
		starlist.style.transition='all ease 1s';
		morezuo.style.transition='all ease 1s';
		clearInterval(tt1);
		
	}
	starmovel();
	moreright.onclick=function(){
		if(i==3){
			return;
		}
		i++;
		starlist.style.transform=`translateX(-${i*w}px)`;
		moreyou.style.color='#ff6700';
		morezuo.style.color='';
		starlist.style.transition='all ease 1s';
		moreyou.style.transition='all ease 1s';
		clearInterval(tt2);
	}

	
	function starmovel(){
		morezuo.style.color='#808080';
		moreyou.style.color='#b0b0b0';
		starlist.style.transform=`translateX(-${i*w}px)`;
		starlist.style.transition='all ease 1s';
	}
	function starmoveR(){
		moreyou.style.color='#808080';
		morezuo.style.color='#b0b0b0';
		starlist.style.transform=`translateX(-${0}px)`;
		starlist.style.transition='all ease 1s';
	}
	




//为你推荐
	let tjlist=$('.tj-list')[0];
	let tjlistli=tjlist.getElementsByTagName('li');
	console.log(tjlistli)
	let moreleft2=document.querySelectorAll('.more-left')[1];
	console.log(moreleft2)
	let moreleft2a=document.querySelectorAll('.more-left >a')[1];
	console.log(moreleft2a)
	let moreright2=document.querySelectorAll('.more-right')[1];
	console.log(moreright2)
	let moreright2a=document.querySelectorAll('.more-right >a')[1];
	console.log(moreright2a)
	
	// tjlist.innerHTML+=tjlist.innerHTML;
	// console.log(tjlist )
	
	let tt3=setInterval(starmoveLL,3000);
	let tt4=setInterval(starmoveRR,6000);
	
	

	// tjlist.style.width=w*2+'px';
	

	moreleft2.onclick=function(){
		if(i==0){
			return;
		}
		i--;
		
		tjlist.style.transform=`translateX(-${i*w}px)`;
		moreleft2a.style.color='#ff6700';
		moreright2a.style.color='';
	
		tjlist.style.transition='all ease 1s';
		moreleft2a.style.transition='all ease 1s';
		clearInterval(tt3);
		
	}
	moreright2.onclick=function(){
		if(i==1){
			return;
		}
		i++;
		tjlist.style.transform=`translateX(-${i*w}px)`;
		moreright2a.style.color='#ff6700';
		moreleft2a.style.color='';
		tjlist.style.transition='all ease 1s';
		moreright2a.style.transition='all ease 1s';
		clearInterval(tt4);
	}



	function starmoveLL(){
		moreleft2a.style.color='#808080';
		moreright2a.style.color='#b0b0b0';
		tjlist.style.transform=`translateX(-${i*w}px)`;
		tjlist.style.transition='all ease 1s';
	}
	function starmoveRR(){
		moreright2a.style.color='#808080';
		moreleft2a.style.color='#b0b0b0';
		tjlist.style.transform=`translateX(-${0}px)`;
		tjlist.style.transition='all ease 1s';
	}
	

//家电、智能、搭配等
	let jdright=document.getElementsByClassName('jiadian-right')[0];
	console.log(jdright);
	let jdrightli=jdright.getElementsByTagName('li');
	console.log(jdrightli);
	let jdbottom=document.getElementsByClassName('jiadian-bottom')[0];
	console.log(jdbottom)
	let jdbottomul=jdbottom.getElementsByClassName('jiadian-list2');
	console.log(jdbottomul)
	let jdp=jdright.getElementsByTagName('li')[0];
	let jdpp=jdright.getElementsByTagName('p');
	console.log(jdpp)
	jdrightli[0].onmouseover=function(){
		jdbottomul[0].style.display='block';
		jdbottomul[1].style.display='none';
		jdbottomul[2].style.display='none';
		jdbottomul[3].style.display='none';
		jdpp[0].style.color='#ff6700';
		jdpp[0].style.borderBottom='2px solid #FF6700';
		jdpp[1].style.borderBottom='none';
		jdpp[1].style.color='#424242';
		jdpp[2].style.borderBottom='none';
		jdpp[2].style.color='#424242';
		jdpp[3].style.borderBottom='none';
		jdpp[3].style.color='#424242';
	}
	jdrightli[1].onmouseover=function(){
		jdbottomul[1].style.display='block';
		jdbottomul[0].style.display='none';
		jdbottomul[2].style.display='none';
		jdbottomul[3].style.display='none';
		jdpp[1].style.color='#ff6700';
		jdpp[1].style.borderBottom='2px solid #FF6700';
		jdpp[0].style.borderBottom='none';
		jdpp[0].style.color='#424242';
		jdpp[2].style.borderBottom='none';
		jdpp[2].style.color='#424242';
		jdpp[3].style.borderBottom='none';
		jdpp[3].style.color='#424242';
	}
	jdrightli[2].onmouseover=function(){
		jdbottomul[2].style.display='block';
		jdbottomul[0].style.display='none';
		jdbottomul[1].style.display='none';
		jdbottomul[3].style.display='none';
		jdpp[2].style.color='#ff6700';
		jdpp[2].style.borderBottom='2px solid #FF6700';
		jdpp[0].style.borderBottom='none';
		jdpp[0].style.color='#424242';
		jdpp[1].style.borderBottom='none';
		jdpp[1].style.color='#424242';
		jdpp[3].style.borderBottom='none';
		jdpp[3].style.color='#424242';
		
	}
	jdrightli[3].onmouseover=function(){
		jdbottomul[3].style.display='block';
		jdbottomul[0].style.display='none';
		jdbottomul[1].style.display='none';
		jdbottomul[2].style.display='none';
		jdpp[3].style.color='#ff6700';
		jdpp[3].style.borderBottom='2px solid #FF6700';
		jdpp[0].style.borderBottom='none';
		jdpp[0].style.color='#424242';
		jdpp[1].style.borderBottom='none';
		jdpp[1].style.color='#424242';
		jdpp[2].style.borderBottom='none';
		jdpp[2].style.color='#424242';
		
	}


//智能
	let zn=document.getElementsByClassName('zhineng')[0];
	console.log(zn);
	let znright=zn.getElementsByClassName('jiadian-right')[0];
	console.log(znright);
	let znrightli=znright.getElementsByTagName('li');
	console.log(znrightli);
	let znbottom=zn.getElementsByClassName('jiadian-bottom')[0];
	console.log(znbottom)
	let znbottomul=znbottom.getElementsByClassName('jiadian-list2');
	console.log(znbottomul)
	let znp=znright.getElementsByTagName('li')[0];
	console.log(zn)
	let znpp=znright.getElementsByTagName('p');
	console.log(znpp)
	znrightli[0].onmouseover=function(){
		znbottomul[0].style.display='block';
		znbottomul[1].style.display='none';
		znbottomul[2].style.display='none';
		znbottomul[3].style.display='none';
		znpp[0].style.color='#ff6700';
		znpp[0].style.borderBottom='2px solid #FF6700';
		znpp[1].style.borderBottom='none';
		znpp[1].style.color='#424242';
		znpp[2].style.borderBottom='none';
		znpp[2].style.color='#424242';
		znpp[3].style.borderBottom='none';
		znpp[3].style.color='#424242';
	}
	znrightli[1].onmouseover=function(){
		znbottomul[1].style.display='block';
		znbottomul[0].style.display='none';
		znbottomul[2].style.display='none';
		znbottomul[3].style.display='none';
		znpp[1].style.color='#ff6700';
		znpp[1].style.borderBottom='2px solid #FF6700';
		znpp[0].style.borderBottom='none';
		znpp[0].style.color='#424242';
		znpp[2].style.borderBottom='none';
		znpp[2].style.color='#424242';
		znpp[3].style.borderBottom='none';
		znpp[3].style.color='#424242';
	}
	znrightli[2].onmouseover=function(){
		znbottomul[2].style.display='block';
		znbottomul[0].style.display='none';
		znbottomul[1].style.display='none';
		znbottomul[3].style.display='none';
		znpp[2].style.color='#ff6700';
		znpp[2].style.borderBottom='2px solid #FF6700';
		znpp[0].style.borderBottom='none';
		znpp[0].style.color='#424242';
		znpp[1].style.borderBottom='none';
		znpp[1].style.color='#424242';
		znpp[3].style.borderBottom='none';
		znpp[3].style.color='#424242';
		
	}
	znrightli[3].onmouseover=function(){
		znbottomul[3].style.display='block';
		znbottomul[0].style.display='none';
		znbottomul[1].style.display='none';
		znbottomul[2].style.display='none';
		znpp[3].style.color='#ff6700';
		znpp[3].style.borderBottom='2px solid #FF6700';
		znpp[0].style.borderBottom='none';
		znpp[0].style.color='#424242';
		znpp[1].style.borderBottom='none';
		znpp[1].style.color='#424242';
		znpp[2].style.borderBottom='none';
		znpp[2].style.color='#424242';
		
	}











}

