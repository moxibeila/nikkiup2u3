//超过此数量折叠，0为永不折叠
var maxHide=0;
//活动名，开始时间，结束时间
//公主双倍为固定格式
var eventList=[
['88888888钻大红包（战意前十','02/08/2018 20:00','02/08/2018 21:00'],
['公主2/4/5/7/9/11/13/15/16双倍','02/08/2018 05:00','02/12/2018 23:59'],
['复开·克洛里斯命运双生','02/09/2018 05:00','02/11/2018 23:59'],
['风林火山+公主级不限次数+3元萌宠+25*3福包+现世云桥（累分送）+登陆送红包·祈福散件+充值30+送红包+好友召回+小屋·流音听雨榭+福袋','02/08/2018 05:00','02/25/2018 23:59'],
['大喵制衣·冰上华尔兹','02/09/2018 05:00','02/12/2018 23:59'],
['冰上华尔兹设计图','02/09/2018 05:00','02/25/2018 23:59'],
['情人节登陆送+热恋魔法','02/10/2018 05:00','02/27/2018 23:59'],
['倾心回忆','02/12/2018 05:00','02/21/2018 23:59'],
['复开·猫王国的茶会','02/14/2018 05:00','02/20/2018 23:59'],
['祝王投票+青白蛇活动','02/14/2018 05:00','02/19/2018 05:00'],
['公主第一卷三倍+星光币双倍','02/14/2018 05:00','02/19/2018 23:59'],
['大喵制衣·韶颜倾城·墨+3元礼包+累消体送（公众号体力补给）','02/14/2018 05:00','02/25/2018 23:59'],
['88888888钻大红包','02/15/2018 20:00','02/15/2018 21:00'],
['复开·白永羲碧霄吟','02/16/2018 05:00','02/18/2018 23:59'],
['登陆送·福旺相伴+新年签·分享','02/16/2018 05:00','02/22/2018 23:59'],
['祝王套装购买','02/19/2018 05:00','02/25/2018 23:59'],
['公主1/2/4/5/6/8/10/14/17双倍','02/21/2018 05:00','02/25/2018 23:59'],
['88888888钻大红包','02/23/2018 20:00','02/23/2018 21:00'],
['复开·路易长夜伊始','02/23/2018 05:00','02/25/2018 23:59'],
['梦蝶夜曲','02/23/2018 05:00','03/01/2018 23:59'],
['大喵制衣·水墨青花+3元礼包+星法法专栏','02/27/2018 05:00','03/05/2018 23:59'],
['6元礼包·大喵汤圆铺+四兽','03/01/2018 05:00','03/05/2018 23:59'],
['游灯浮梦','03/01/2018 05:00','03/10/2018 23:59'],
['星光币双倍','03/02/2018 05:00','03/04/2018 23:59'],
['公主3/4/6/10/12/15/16/18/19双倍+复开·回忆花火','03/09/2018 05:00','03/11/2018 23:59'],
['梦恋奇迹五·咏爱夜曲+大喵制衣·花嫁童话','03/09/2018 05:00','03/15/2018 23:59'],
['誓言之戒礼包','03/09/2018 05:00','03/18/2018 23:59'],
['充值送·大喵的冒险+外服上架','03/09/2018 05:00','03/20/2018 23:59'],
['连冲送·十二星座宝箱','03/09/2018 05:00','04/03/2018 23:59'],
['倾心回忆·三月','03/12/2018 05:00','03/18/2018 23:59'],
['小屋·花与爱恋时光','03/14/2018 05:00','03/20/2018 23:59'],
['大喵制衣·叶葵的窗台','03/16/2018 05:00','03/25/2018 23:59'],
['大喵制衣·晨露芳华','04/09/2018 05:00','04/15/2018 23:59'],
['大喵制衣·星光礼赞','05/11/2018 05:00','05/17/2018 23:59'],
];
