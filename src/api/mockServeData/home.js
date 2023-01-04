// mock模拟数据
import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: '苹果',
                        value: 5999
                    },
                    {
                        name: 'vivo',
                        value: 1500
                    },
                    {
                        name: 'oppo',
                        value: 1999
                    },
                    {
                        name: '魅族',
                        value: 2200
                    },
                    {
                        name: '三星',
                        value: 4500
                    },
                ],
                // 柱状图
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周三',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周四',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周五',
                        new: 12,
                        active: 120
                    },
                    {
                        data: '周六',
                        new: 23,
                        active: 220
                    },
                    {
                        data: '周日',
                        new: 33,
                        active: 170
                    },
                ],
                // 折线图
                orderData: {
                    data: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: "oppo",
                        tadayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 22222,
                    },
                    {
                        name: "iPhone",
                        tadayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 22222,
                    },
                    {
                        name: "小米",
                        tadayBuy: 400,
                        monthBuy: 2000,
                        totalBuy: 22222,
                    },
                    {
                        name: "魅族",
                        tadayBuy: 500,
                        monthBuy: 3000,
                        totalBuy: 32222,
                    },
                    {
                        name: "三星",
                        tadayBuy: 200,
                        monthBuy: 5000,
                        totalBuy: 11122,
                    },
                ]
            }
        }
    }
}