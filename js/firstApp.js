

app.controller('firstController', function($scope,$http) {

    // 头部轮播图
    $scope.sliderImages = [{
        url: "https://m.360buyimg.com/mobilecms/s720x322_jfs/t6034/304/985849105/100695/73716974/592edc51N200740d9.jpg!q70.jpg"
    }, {
        url: "https://m.360buyimg.com/mobilecms/s720x322_jfs/t5758/41/2200666992/92677/22d000a0/592eac48N711c5445.jpg!q70.jpg"

    }, {
        url: "https://m.360buyimg.com/mobilecms/s720x322_jfs/t5923/60/1035455087/176444/a72a3315/592e62f5Nc615aa54.jpg!q70.jpg"
    }];
    
    // 推荐活动
    $scope.activeUrl = "https://m.360buyimg.com/mobilecms/jfs/t5680/112/2227173433/115651/209aa144/592e64fdN9345bd7d.jpg!q70.jpg";
     
     // 模块

     $scope.moduls = [{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5668/159/160398199/14046/acfe1fa3/591d9424N068a7ad0.png",
     	title:"京东超市",
     	linkurl:"https://pro.m.jd.com/mall/active/2hqsQcyM5bEUVSStkN3BwrBHqVLd/index.html"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5590/77/163913044/11676/3a301f00/591d944eN3566014c.png",
     	title:"全球购",
     	linkurl:"https://h5.m.jd.com/active/3YvKJrc4e4WK7aZ46j3h5UMCvEn4/index.html?has_native=1"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png",
     	title:"服装城",
     	linkurl:"https://pro.m.jd.com/mall/active/3GTca2WsjgRdohGtJCUnWB3bDs8o/index.html"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5626/330/1449991736/14681/29321e2c/59263c60N0aa922b7.png",
     	title:"京东生鲜",
     	linkurl:"https://h5.m.jd.com/active/4Sa8QGJDMDZ66NzYajpSe4GmeUn2/index.html"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png",
     	title:"京东到家",
     	linkurl:"https://daojia.jd.com/html/index.html?channel=jdapp"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5647/156/156583179/12255/981e942a/591d94a1Nfde63a47.png",
     	title:"充值缴费",
     	linkurl:"https://newcz.m.jd.com/"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png",
     	title:"领京豆",
     	linkurl:"javascript:;"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png",
     	title:"领券",
     	linkurl:"https://coupon.m.jd.com/center/getCouponCenter.action"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png",
     	title:"惠赚钱",
     	linkurl:"https://m.jr.jd.com/spe/qyy/main/index.html?userType=41"
     },{
     	url:"https://m.360buyimg.com/mobilecms/s80x80_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png",
     	title:"物流查询",
     	linkurl:"https://home.m.jd.com/user/userAllOrderList.action"
     }]
  


});
