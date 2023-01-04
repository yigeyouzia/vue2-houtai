let echarts__bar_option = {
    title: {
        text: "",
    },
    // 图例文字颜色
    legend: {
        textStyle: {
            color: "#333",
        },
    },
    // 提示框
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "20%",
    },
    // x轴
    xAxis: {
        type: "category", //类目轴
        data: userData.map((item) => item.data),
        axisLine: {
            linestyle: {
                co1or: "#17b3a3",
            },
        },
        axisLabel: {
            interval: 0,
            co10r: "#333",
        },
    },
    // y轴
    yAxis: [
        {
            type: "value",
            axisLine: {
                linestyle: {
                    color: "#17b3a3",
                },
            },
        },
    ],
    color: ["#2ec7c9", "#b6a2de"],
    series: [
        {
            name: "新增用户",
            data: userData.map((item) => item.new),
            type: "bar",
        },
        {
            name: "活跃用户",
            data: userData.map((item) => item.active),
            type: "bar",
        },
    ],
};

export default {
    echarts__bar_option
}