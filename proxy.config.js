
module.exports = {
    'GET /loadOptions/get':require('mockjs').mock({
        success: true,
        display:"none",
    }),
    'GET /luckyReward/get'(req, res) {
        setTimeout(() => {
            res.json(require('mockjs').mock({
                success:true,
                data:{
                    type:5,
                },
                "msg":"恭喜你中得五等奖",
            }));
        },1000);
    },
    'GET /getTimes/get'(req, res) {
        setTimeout(() => {
            res.json(require('mockjs').mock({
                success: true,
                data:1,
                msg:"当日剩余次数",
            }));
        },1000);
    },
    'GET /rewardInfoOptions/get'(req, res) {
        setTimeout(() => {
            res.json(require('mockjs').mock({
                success:true,
                data:{
                    "activeId":"287913062",
                    "title":"九宫格大抽奖活动",
                    "content":[{"detailType":3,"content":"抽奖活动规则"}],
                    "tips":"欢迎参加大抽奖活动！",
                    "relationMode":[{"attr":"userName","attrName":"用户名","ischose":true,"$$hashKey":"object:1569"},{"attr":"phoneNo","attrName":"手机号","ischose":true,"$$hashKey":"object:1570"},{"attr":"qqAccount","attrName":"QQ帐号","ischose":true,"$$hashKey":"object:1574"}],
                    "rewards":[
                        {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/reward1.png"
                        },
                        {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/reward2.png"
                        },
                         {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/4G.png"
                        },
                        {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/card.png"
                        },
                         {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/card20.png"
                        },
                        {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/qMony.png"
                        },
                         {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/reward1.png"
                        },
                        {
                            "rewardId":"287913063",
                            "activeId":"287913062",
                            "rewardName":"李泉演唱会门票",
                            "rewardImg":"../WeDay_files/reward_04.jpg"
                        }
                    ]
                }
            }));
        },1500);
    },

    'GET /allRewardInfo/get'(req, res) {
        setTimeout(() => {
            res.json(require('mockjs').mock({
                success:true,
                data:[
                    {"nickName":"su、","rewardsName":"5Q币","userId":"538614347","createTime":"2016-12-08"},
                    {"nickName":"Pisces","rewardsName":"5Q币","userId":"538614356","createTime":"2016-12-08"},
                    {"nickName":"MT","rewardsName":"5Q币","userId":"538614435","createTime":"2016-12-08"},
                    {"nickName":"灰太狼","rewardsName":"5Q币","userId":"538628642","createTime":"2016-12-08"},
                    {"nickName":"秦豆加","rewardsName":"5Q币","userId":"538620792","createTime":"2016-12-08"},
                    {"nickName":"Scream","rewardsName":"5Q币","userId":"538631643","createTime":"2016-12-08"},
                    {"nickName":"Recall。","rewardsName":"5Q币","userId":"538639874","createTime":"2016-12-08"},
                    {"nickName":"王海波","rewardsName":"5Q币","userId":"538639595","createTime":"2016-12-08"},
                    {"nickName":"简单","rewardsName":"李泉演唱会门票","userId":"538621078","createTime":"2016-12-08"},
                    {"nickName":"杨克宇","rewardsName":"5Q币","userId":"538620734","createTime":"2016-12-08"},
                    {"nickName":"llove","rewardsName":"5Q币","userId":"538620959","createTime":"2016-12-08"},
                    {"nickName":"ebyyyy","rewardsName":"5Q币","userId":"538688591","createTime":"2016-12-08"},
                    {"nickName":"","rewardsName":"5Q币","userId":"538621037","createTime":"2016-12-08"},
                    {"nickName":"芊芊","rewardsName":"5Q币","userId":"538628624","createTime":"2016-12-08"}
                ],
                msg:"所有中奖纪录",
                type:null,
                code:0
            }));
        },1500);
    },

 'GET /myPrizeRecord/get'(req, res) {
        setTimeout(() => {
            res.json(require('mockjs').mock({
                "success": true,
                "data": [
                    {"nickName":"Pisces","rewardsName":"5Q币","userId":"538614356","createTime":"2016-12-09"},
                    {"nickName":"Pisces","rewardsName":"5Q币","userId":"538614356","createTime":"2016-12-10"}
                    ],
                "msg": "个人中奖纪录",
                "type": null,
                "code": 0
            }));
        },1500);
    },










}


