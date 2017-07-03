app.controller('shoppingController', function($scope, $timeout, $window) {
    $scope.hours = "12";
    $scope.min = "43";
    $scope.second = "48";
    $scope.Totalmoney = 0;
    var sec = 48;
    var m = 43;
    var h = 12;
    var loop = function() {
        $timeout(function() {

            if (sec == 00) {
                sec = 60;
                m--;
                $scope.min = m;
                if (m == 00 && h != 00) {
                    m = 60;
                    h--;
                    $scope.hours = h;
                }
            } else {
                sec--;
                $scope.second = sec;

            }

            if (sec != 00 || m != 00 || h != 00) {
                loop();
            }


        }, 1000);
    };
    loop();

    $scope.shoppingArray = [{
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t4480/303/3139422600/119820/fe6c91f4/58f73752N268adcd4.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t4504/72/1443119771/10377/bdf468e8/58df53eeN3186b86f.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t5116/187/83222458/67531/d362638/58f87466N4f36267f.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t2542/111/1373104345/320405/16d472/56c29a42N7a18f393.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t5851/167/2181001654/183745/d55cc616/592e529aN17b0e442.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t5215/189/1477619948/135678/83a92ce/59103ab7N6c227e2a.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t5590/330/2160756654/148298/8d4084be/592e2049N622dd64d.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }, {
        url: "http://m.360buyimg.com/mobilecms/s220x220_jfs/t3154/163/1193269972/534920/b89a0eea/57c79b1dN16947523.jpg!q70.jpg",
        price: "51.90",
        originprice: "67.20"
    }]

    $scope.shoppinglists = [{
        url: "http://m.360buyimg.com//mobilecms/s410x394_jfs/t3301/42/56334206/335826/823ce386/57a1b84dNf6199f42.jpg!q70.jpg",
        info: "车旅伴(Car Buddy)洗车水桶 户外钓鱼野营水桶 11升含拉链包 HQ-C1279",
        all_price: 19,
        smal_price: 90,
        comment_num: "6351",
        active: '0',
        shoppname: '蓝夫家电',
        ziying: "0",
        id: 1
    }, {
        url: "http://m.360buyimg.com//mobilecms/s410x394_jfs/t4117/301/2084306611/181723/d189756/58a16437N05db9583.jpg!q70.jpg",
        info: "老舍先生经典作品精选集：我这一辈子（纪念珍藏版）",
        all_price: 30,
        smal_price: 40,
        comment_num: "1253",
        active: '0',
        shoppname: '书香门第',
        ziying: "0",
        id: 2
    }, {
        url: "http://m.360buyimg.com//mobilecms/s410x394_jfs/t3157/67/1341917372/138078/42c52d22/57cb970dN3a1e227f.jpg!q70.jpg",
        info: "【京东超市】妈妈壹选 天然皂液（护色洗衣液) 3kg",
        all_price: 65,
        smal_price: 90,
        comment_num: "1253",
        active: '1',
        shoppname: '京东自营',
        ziying: "1",
        id: 3
    }, {
        url: "http://m.360buyimg.com//mobilecms/s410x394_jfs/t1786/118/869283644/139081/94abeb59/55dc390dN2b17c029.jpg!q70.jpg",
        info: "【京东超市】千团精工 油纸牛油纸 硅油纸 烤盘纸 烹调纸百度烤纸 40张装",
        all_price: 15,
        smal_price: 00,
        comment_num: "3.9万",
        active: '0',
        shoppname: '京东自营',
        ziying: "1",
        id: 3
    }, {
        url: "http://m.360buyimg.com//mobilecms/s410x394_jfs/t961/127/1525243165/182897/d63dfde0/573149d5Na69a5a66.jpg!q70.jpg",
        info: "九阳（Joyoung）电水壶1.7L电热水壶JYK-17C15",
        all_price: 69,
        smal_price: 00,
        comment_num: "23.9万",
        active: '0',
        shoppname: '京东自营',
        ziying: "1",
        id: 3
    }]


    $scope.shoopcars = [];

    // 点击加入购物车
    $scope.chooseShop = function(e) {



        if ($scope.shoopcars.length == 0) {
            // console.log('length1', $scope.shoopcars.length)
            // console.log(1);
            var obj = {
                shoppname: e.shoppname,
                ziying: e.ziying,
                id: e.id,
                choose: true, //表示的是这个模块是否被选中去支付
                list: [{
                    url: e.url,
                    info: e.info,
                    all_price: e.all_price,
                    smal_price: e.smal_price,
                    comment_num: e.comment_num,
                    active: e.active,
                    itemchoose: true, //表示模块下的子元素是否被选中去支付
                    paynumber: 1 //购买的数量
                }]
            }
            $scope.shoopcars.push(obj);
        } else {
            // console.log('length2', $scope.shoopcars.length);

            var sign = 0;
            for (var i = 0; i < $scope.shoopcars.length; i++) {
                var item = $scope.shoopcars[i];

                if (item.id == e.id) {
                    var objl = item.list[i];
                    objl = {
                        url: e.url,
                        info: e.info,
                        all_price: e.all_price,
                        smal_price: e.smal_price,
                        comment_num: e.comment_num,
                        active: e.active,
                        itemchoose: true,
                        paynumber: 1
                    }
                    item.list.push(objl);
                    sign = 1;
                }
            }

            if (sign == 0) {
                var obj1 = {
                    shoppname: e.shoppname,
                    ziying: e.ziying,
                    id: e.id,
                    choose: true,
                    list: [{
                        url: e.url,
                        info: e.info,
                        all_price: e.all_price,
                        smal_price: e.smal_price,
                        comment_num: e.comment_num,
                        active: e.active,
                        itemchoose: true,
                        paynumber: 1
                    }]
                }
                $scope.shoopcars.push(obj1);
            }
        }

        colculateAllMoney();
        // console.log('$scope.shoopcars', $scope.shoopcars);
    }

    $scope.showchoose = 0; //点击编辑按钮后才会显示
    $scope.eidthclick = 1; //控制编辑按钮的显示隐藏
    // 这是个一个二维数组  针对完成按钮
    $scope.shopshow_model = ""; //购物车中的商品输入那个商家，也就是数据结构中第一个数组下标
    $scope.shopshow_cart = ""; //购物车中的商品在商家中的位置，也就是数据结构中第二个数组的下标

    // 编辑按钮的点击
    $scope.clickedit = function(a, b) {

            $scope.shopshow_model = a;
            $scope.shopshow_cart = b;
            $scope.showchoose = 1;
            $scope.eidthclick = 0;
        }
        // 完成按钮的点击
    $scope.finishclick = function() {
        $scope.showchoose = 0;
        $scope.eidthclick = 1;
    }

    //删除按钮
    $scope.delitem = function(first, second) {
        layer.open({
            content: "确定要删除这个商品吗？",
            btn: ['确定', '取消'],
            yes: function(index) {
                layer.close(index);
                var object = $scope.shoopcars[first];
                if (object.list.length > 1) {
                    object.list.splice(second, 1);
                } else {
                    $scope.shoopcars.splice(first, 1);
                }
                colculateAllMoney();
            }
        })
    }

    // 购买物品的数量  加号按钮  减号按钮
    $scope.addnum = function(first, second) {
            var objAF = $scope.shoopcars[first];
            var objAS = objAF.list[second];
            objAS.paynumber++;
            colculateAllMoney();
        }
        // 减号按钮
    $scope.subnumber = function(first, second) {

        var objSF = $scope.shoopcars[first];
        var objSS = objSF.list[second];
        if (objSS.paynumber == 1) {

        } else {
            objSS.paynumber--;
        }

        colculateAllMoney();
    }

    /*
      全选按钮的点击

    */
    //全选按钮被选中
    $scope.allchecksign = true;

    function colculateAllMoney() {
        $scope.Totalmoney = 0;
        angular.forEach($scope.shoopcars, function(data, index, array) {

            angular.forEach(data.list, function(data, index, array) {

                if (data.itemchoose == true) {
                    if (data.smal_price != 0) {
                        $scope.Totalmoney += data.all_price * data.paynumber + data.smal_price / 100 * data.paynumber;
                    } else {
                        $scope.Totalmoney += data.all_price * data.paynumber;
                    }
                }


            })

        })
    }


    // 全选按钮
    $scope.bottomChooseClick = function(e) {
        $scope.allchecksign = !e;
        $scope.Totalmoney = 0;
        angular.forEach($scope.shoopcars, function(data, index, array) {
            //data等价于array[index]
            data.choose = !e;
            angular.forEach($scope.shoopcars[index].list, function(data, index, array) {
                data.itemchoose = !e;
            })
        });
        colculateAllMoney();
    }

    // 当点击模块的全选或者单个item的选择时判断是否符合全选条件
    function allchoosebooljudge() {
        var allchooseb = true;
        angular.forEach($scope.shoopcars, function(data, index, array) {
            if (data.choose == false) {
                allchooseb = false;
            }
        });
        $scope.allchecksign = allchooseb;
    }

    //模块按钮的点击
    $scope.moduleCheckbtn = function(first) {
            console.log('moduleCheckbtn' + first);
            var objm = $scope.shoopcars[first];
            objm.choose = !objm.choose;
            angular.forEach(objm.list, function(data, index, array) {
                data.itemchoose = objm.choose;
            });
            allchoosebooljudge();
            colculateAllMoney();

        }
        //判断模块下的item是否都选中。obj 模块下的item的array objmoule 是模块数组
    function allitemischoose(objmoule) {
        var chooseitem = true;
        // obj.itemchoose = 
        angular.forEach(objmoule.list, function(data, index, array) {
            if (data.itemchoose == false) {
                chooseitem = false;
            }
        });
        objmoule.choose = chooseitem;


    }

    $scope.itemclick = function(first, second) {
        var objf = $scope.shoopcars[first];
        var objs = objf.list[second];
        objs.itemchoose = !objs.itemchoose;
        allitemischoose(objf);

        if (objf.choose == true) {
            allchoosebooljudge();

        } else {
            $scope.allchecksign = false;

        }
        colculateAllMoney();

    }
});
