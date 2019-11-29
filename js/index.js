$("document").ready(function () {
    //头部左上角个人简历效果
    $("#head-tit").hover(function() {
        $("#head-e").text("Resume").css("color","#fff");
        $("#head-c").text("前端工程师").css("color","#fff");
    }, function() {
        $("#head-e").text("Huan").css("color","#fff");
        $("#head-c").text("个人简历").css("color","#fff")

    });
    //fullPage 效果
    $('#fullPage').fullpage({
        fixedElements: '#head',
        resize: 'true',
        navigation: 'true',//是否显示导航
        loopHorizontal: 'false',//横向slide幻灯片是否循环滚动
        slidesNavigation: 'false',//是否显示横向幻灯片的导航，
        navigationPosition: 'right',//导航小圆点的位置
        navigationTooltips: ['首页', '关于我', '专业技能', '我的作品', '联系我'],//导航小圆点的提示
        css3: 'ture',//是否使用CSS3 transforms来实现滚动效果，默认为true
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5',],//anchors定义锚链接，默认为[]
        //第一屏的动画效果
        afterLoad:function(link,index){
            switch(index){
                case 1:
                    move('.section1 h1').scale(1.5).duration('1s').end();
                    move('.secp1').set('top','0px').duration('1s').end(function(){
                        move('.secp2').set('top','0px').duration('1s').end(function(){
                            move('.secp3').set('top','0px').duration('1s').end()
                        })
                    });
                    break;
                    //第二屏的动画效果
                case 2:
                    move('.section2 h1').set('margin-left','60%').duration('1s').end(function(){
                        // move('.section2 h1').set('margin-left','45%').duration('.5s').end(function(){
                        //      move('.section2 h1').set('margin-left','50%').duration('.5s').end(function(){
                        move('.section2 h1').set('margin-left','40%').duration('.5s').end()
                        //      })

                        // });
                    });
                    move('.sec2Bor').set('top','40%').duration('1s').end(function(){
                        move('.sectionText').set('opacity','1').duration('3s').end();
                    });
                    //第三屏的动画效果
                    break;
                // case 3:
                //     move('.sec3-li1').set('margin-left','40%').duration('.5s').end(function(){
                //         move('.sec3-li2').set('margin-left','40%').duration('.5s').end(function(){
                //             move('.sec3-li3').set('margin-left','40%').duration('.5s').end(function(){
                //                 move('.sec3-li4').set('margin-left','40%').duration('.5s').end(function(){
                //                     move('.sec3-li5').set('margin-left','40%').duration('.5s').end()
                //                 })
                //             })
                //         })
                //     })
                //     //第三屏左边的自我介绍
                //     var oli =$("#sec3Nav li"),
                //         odiv=$(".sec3Box");
                //     for(var i=0;i<oli.length;i++){
                //         oli[i].id=i;
                //         oli[i].onclick=function(){
                //             for(var j=0; j<odiv.length;j++){
                //                 var that=this;
                //                 odiv[j].style.display="none";
                //                 odiv[that.id].style.display="block";
                //             }
                //         }
                //     }
                //     move(".sec3Wrap") .set("margin-right","45%").duration("1.5s").end();
                //     break;
                    //第四屏的动画效果
                case 3:
                    move('.sec4-pic').set('top','0').duration('.5s').end(function(){
                        move('#pic-h').set('left','-2%').duration('.5s').end(function(){
							move('#pic-c').set('left','0%').duration('.5s').end(function(){
                            move('#pic-j').set('left','2%').duration('.5s').end(function(){
                                move('#pic-aj').set('left','4%').duration('.5s').end(function(){
                                    $('.h-tit').bind('mouseover',function(){
                                        move('.h-tit').set('top','10px').duration('.5s').end(function(){
                                            move('#pic-h>.sec4-list').set('opacity','1').duration('2s').end()}
                                        );
                                    });
                                    $('.c-tit').bind('mouseover',function(){
                                        move('.c-tit').set('top','10px').duration('.5s').end(function(){
                                            move('#pic-c>.sec4-list').set('opacity','1').duration('2s').end()
                                        });
                                    });
                                    $('.j-tit').bind('mouseover',function(){
                                        move('.j-tit').set('top','30px').duration('.5s').end(function(){
                                            move('#pic-j>.sec4-list').set('opacity','1').duration('2s').end()
                                        });
                                        $('.aj-tit').bind('mouseover',function(){
                                            move('.aj-tit').set('top','30px').duration('.5s').end(function(){
                                                move('#pic-aj>.sec4-list').set('opacity','1').duration('2s').end()
                                            });
                                        });
                                    });

                                })
                            })
                        })
                     })
                    });


                    break;
                case 4:
                    $('.demo img').each(function(){
                        $('.mydemo img').bind('mouseover',function() {
                            move(this).set('top','-20px').duration('1s').end();
                            $('.mydemo img').bind('mouseout',function() {
                                move(this).set('top','0px').duration('1s').end();
                                /* Act on the event */
                            });
                        });
                    })


                //     break;
                // case 6:
                //     $('#sec6li').bind('mouseover',function(){
                //         $('#sec6pic').attr('src','../img/weixin.png');
                //
                //     })
                //     $('#sec6li').bind('mouseout',function(){
                //         $('#sec6pic').attr('src','image/qq.jpg')
                //
                //     })
                //     break;
                // default:
                //     break;
            }

        },
        onLeave:function(link,index){
            switch(index){
                case 1:
                    move('.section1 h1').scale(1).end(),
                        move('.secp1').set('top','2000px').end()
                    move('.secp2').set('top','2000px').end()
                    move('.secp3').set('top','2000px').end()


                    break;
                case 2:
                    move('.section2 h1').set('margin-left','0').end(),
                        move('.sec2Bor').set('top','-4000px').duration('.1s').end();
                    move('.sectionText').set('opacity','0').duration('.1s').end();
                    break;
                // case 3:
                //     move('.sec3-li1').set('margin-left','-20%').end();
                //     move('.sec3-li2').set('margin-left','-20%').end();
                //     move('.sec3-li3').set('margin-left','-20%').end();
                //     move('.sec3-li4').set('margin-left','-20%').end();
                //     move('.sec3-li5').set('margin-left','-20%').end();
                //     move(".sec3Wrap") .set("margin-right","-30%").end();


                //     break;
                case 3:
                    move('.sec4-pic').set('top','-4000px').duration('.1s').end();
                    move('#pic-h').set('left','10px').duration('.1s').end(),
                        move('#pic-c').set('left','10px').duration('.1s').end(),
                        move('#pic-j').set('left','10px').duration('.1s').end(),
                        move('#pic-aj').set('left','10px').duration('.1s').end(),
                        move('.h-tit').set('top','120px').end(),
                        move('.c-tit').set('top','120px').end(),
                        move('.j-tit').set('top','140px').end(),
                        move('.aj-tit').set('top','140px').end(),
                        move('#pic-h>.sec4-list').set('opacity','0').end(),
                        move('#pic-c>.sec4-list').set('opacity','0').end(),
                        move('#pic-j>.sec4-list').set('opacity','0').end(),
                        move('#pic-aj>.sec4-list').set('opacity','0').end();
                    break;
                case 4:
                    break;
                default:
                    break;
            }

        }
    })

});

wow = new WOW(
    {
        boxClass: 'wow',      // 默认属性名
        animateClass: 'animated', // 默认触发的动画类(包含在animate css中)
        offset: 0,          // 为所有添加wow的元素设置 data-wow-delay属性 的默认值
        mobile: true,       // 是否在移动设备中开启动画
        live: true        // 持续监测页面中是否插入新的wow元素
    }
);
wow.init();


