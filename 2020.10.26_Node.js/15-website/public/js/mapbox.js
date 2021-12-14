/* eslint-disable */

/**
 * 当前mapbox地图标点玩法( 完成笔记 )
 *      a) 引入基本文件
 *          0. js:
 *              a) 基本: https://cdn.jsdelivr.net/npm/mapbox-gl@2.6.1/dist/mapbox-gl.min.js
 *              b) 多语言: https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-language/v1.0.0/mapbox-gl-language.js
 *          1. css:
 *              a) 基本: https://cdn.jsdelivr.net/npm/mapbox-gl@2.6.1/dist/mapbox-gl.min.css
 *      b) 配置步骤
 *          0. 有标点位置数据
 *          1. mapbox默认地图配置(token等...)
 *          2. mapbox配置语言
 *          3. mapbox配置多个地图标点
 *          4. mapbox显示标点优化
 *          5. 增加气泡提示
 */

(function () {
    // # 获取位置数据
    // # es5获取标签数据方法( 完成笔记 )
    //      a) 使用方法
    //          0. 数据赋值给标签: <div id="test" data-xxx="123" ></div>
    //          1. es5获取数据: document.querySelector("#map").dataset.xxx
    const mapDom = document.querySelector("#map");
    const mapLocations = JSON.parse(mapDom.dataset.locations);

    // # mapbox默认配置代码
    mapboxgl.accessToken =
        "pk.eyJ1IjoienRhZXIiLCJhIjoiY2t4MXV6cTVjMWF2YjJzbzY0bThla2ExMiJ9.XkCLouCpuiiESc_Hxx19pg";
    const map = new mapboxgl.Map({
        container: "map", // html标签id
        style: "mapbox://styles/ztaer/ckx1wbm8f2ex814s5km00xkys", // 皮肤
        scrollZoom: false, // 禁止缩放
        // center: [-118.113491, 34.111745], // 地图中心位置 [lng, lat]
        // zoom: 10, // 地图缩放大小
        // interactive: false, // 取消交互效果
    });

    // # mapbox配置默认地图语言
    const language = new MapboxLanguage({ defaultLanguage: "zh-Hans" });
    map.addControl(language);

    // # mapbox配置多个地图标点
    const bounds = new mapboxgl.LngLatBounds();
    mapLocations.forEach((item) => {
        // 创建标点
        const el = document.createElement("div");
        el.className = "marker";
        // 增加标点
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom",
        })
            .setLngLat(item.coordinates)
            .addTo(map);

        // 增加气泡提示
        new mapboxgl.Popup({
            offset: 30,
        })
            .setLngLat(item.coordinates)
            .setHTML(`<p>${item.description}</p>`)
            .addTo(map);

        // 扩展地图边界含当前位置
        bounds.extend(item.coordinates);
    });
    // 使地图显示标点时更友好
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 200,
            left: 100,
            right: 100,
        },
    });
})();
