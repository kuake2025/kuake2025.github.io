const https = require("https");

// ================= 配置区域 =================
const CONFIG = {
  // 你的网站域名（不带 https://）
  host: "kuake2025.github.io",

  // 你的 IndexNow API Key
  key: "a73a4d3c052b4cb68c23d69bde788f06", // 例如：900122858e404bb5b670f29314fac713

  // 你的 Key 验证文件地址 (可选，但推荐填写)
  // 通常是 https://你的域名/你的Key.txt
  keyLocation:
    "https://kuake2025.github.io/a73a4d3c052b4cb68c23d69bde788f06.txt",

  // 需要提交的 URL 列表
  urlList: [
    "https://kuake2025.github.io/software/vmos-pro.html",
    "https://kuake2025.github.io/software/bitcomet.html",
    "https://kuake2025.github.io/software/capcut-vip.html",
    "https://kuake2025.github.io/software/wifi-master-key.html",
    "https://kuake2025.github.io/software/tiktok-unlocked.html",
    "https://kuake2025.github.io/software/juxiafan.html",
    "https://kuake2025.github.io/software/kuwo-music-svip.html",
    "https://kuake2025.github.io/software/montage-video.html",
    "https://kuake2025.github.io/software/ximalaya-fm.html",
    "https://kuake2025.github.io/software/99-game-booster.html",
    "https://kuake2025.github.io/software/iyue-reader.html",
    "https://kuake2025.github.io/software/windows-10-manager.html",
    "https://kuake2025.github.io/software/zd-soft-screen-recorder.html",
    "https://kuake2025.github.io/software/yy-voice.html",
    "https://kuake2025.github.io/software/easeus-data-recovery.html",
    "https://kuake2025.github.io/software/xyplorer.html",
    "https://kuake2025.github.io/software/photodirector.html",
    "https://kuake2025.github.io/software/xmind-2023.html",
    "https://kuake2025.github.io/software/wechat-pc.html",
    "https://kuake2025.github.io/software/wechat-manager.html",
    "https://kuake2025.github.io/software/wps-office-2019.html",
    "https://kuake2025.github.io/software/perfect-decoder.html",
    "https://kuake2025.github.io/software/powerdirector.html",
    "https://kuake2025.github.io/software/wise-registry-cleaner.html",
    "https://kuake2025.github.io/software/wisecare-365.html",
    "https://kuake2025.github.io/software/winsnap.html",
    "https://kuake2025.github.io/software/winrar.html",
    "https://kuake2025.github.io/software/winntsetup.html",
    "https://kuake2025.github.io/software/windows-11-manager.html",
    "https://kuake2025.github.io/software/vuescan.html",
    "https://kuake2025.github.io/software/uninstall-tool.html",
    "https://kuake2025.github.io/software/tencent-video.html",
    "https://kuake2025.github.io/software/topaz-video-ai.html",
    "https://kuake2025.github.io/software/telegram-portable.html",
    "https://kuake2025.github.io/software/startallback.html",
    "https://kuake2025.github.io/software/stardock-start11.html",
    "https://kuake2025.github.io/software/snapshot.html",
    "https://kuake2025.github.io/software/smart-defrag.html",
    "https://kuake2025.github.io/software/sogou-pinyin.html",
    "https://kuake2025.github.io/software/shandou-video-downloader.html",
    "https://kuake2025.github.io/software/screentogif.html",
    "https://kuake2025.github.io/software/sandboxie.html",
    "https://kuake2025.github.io/software/revo-uninstaller.html",
    "https://kuake2025.github.io/software/r-studio.html",
    "https://kuake2025.github.io/software/lightpdf.html",
    "https://kuake2025.github.io/software/qq-portable.html",
    "https://kuake2025.github.io/software/driver-talent.html",
    "https://kuake2025.github.io/software/poweriso.html",
    "https://kuake2025.github.io/software/playerfab.html",
    "https://kuake2025.github.io/software/picpick.html",
    "https://kuake2025.github.io/software/occt.html",
    "https://kuake2025.github.io/software/notepad2.html",
    "https://kuake2025.github.io/software/morin-music.html",
    "https://kuake2025.github.io/software/msmg-toolkit.html",
    "https://kuake2025.github.io/software/mkvtoolnix.html",
    "https://kuake2025.github.io/software/mirillis-action.html",
    "https://kuake2025.github.io/software/beecut.html",
    "https://kuake2025.github.io/software/macrorit-partition.html",
    "https://kuake2025.github.io/software/lx-music.html",
    "https://kuake2025.github.io/software/light-image-resizer.html",
    "https://kuake2025.github.io/software/simple-screen-cast.html",
    "https://kuake2025.github.io/software/iobit-uninstaller.html",
    "https://kuake2025.github.io/software/internet-download-manager.html",
    "https://kuake2025.github.io/software/hibit-uninstaller.html",
    "https://kuake2025.github.io/software/heu-kms-activator.html",
    "https://kuake2025.github.io/software/gom-player.html",
    "https://kuake2025.github.io/software/gihosoft-tubeget.html",
    "https://kuake2025.github.io/software/fxsound.html",
    "https://kuake2025.github.io/software/foxit-pdf-editor.html",
    "https://kuake2025.github.io/software/aomei-partition-assistant.html",
    "https://kuake2025.github.io/software/fastcopy.html",
    "https://kuake2025.github.io/software/firefox-portable.html",
    "https://kuake2025.github.io/software/everything-search.html",
    "https://kuake2025.github.io/software/emeditor.html",
    "https://kuake2025.github.io/software/driver-booster.html",
    "https://kuake2025.github.io/software/crystaldiskinfo.html",
    "https://kuake2025.github.io/software/google-chrome.html",
    "https://kuake2025.github.io/software/ccleaner.html",
    "https://kuake2025.github.io/software/bandicam.html",
    "https://kuake2025.github.io/software/baofeng-player.html",
    "https://kuake2025.github.io/software/apowersoft-screen-recorder.html",
    "https://kuake2025.github.io/software/iqiyi-player.html",
    "https://kuake2025.github.io/software/aomei-backupper.html",
    "https://kuake2025.github.io/software/aliyun-drive-xiaobaiyang.html",
    "https://kuake2025.github.io/software/advanced-installer.html",
    "https://kuake2025.github.io/software/12306-bypass.html",
    "https://kuake2025.github.io/software/qianniu-workbench.html",
    "https://kuake2025.github.io/software/wondershare-uniconverter.html",
    "https://kuake2025.github.io/software/edrawmind.html",
    "https://kuake2025.github.io/software/360-driver-master.html",
    "https://kuake2025.github.io/software/360-secure-browser.html",
    "https://kuake2025.github.io/software/123-pan.html",
    "https://kuake2025.github.io/software/baidu-netdisk.html",
    "https://kuake2025.github.io/software/4k-video-downloader.html",
    "https://kuake2025.github.io/software/cinema-4d.html",
    "https://kuake2025.github.io/software/autocad-2024.html",
    "https://kuake2025.github.io/software/adobe-premiere-pro-2024.html",
    "https://kuake2025.github.io/software/photoshop-cs6.html",
    "https://kuake2025.github.io/software/adobe-photoshop-2023.html",
    "https://kuake2025.github.io/software/snipaste.html",
    "https://kuake2025.github.io/software/mx-player.html",
    "https://kuake2025.github.io/software/potplayer.html",
    "https://kuake2025.github.io/software/qq-music.html",
    "https://kuake2025.github.io/software/ldplayer.html",
    "https://kuake2025.github.io/software/youdao-note.html",
    "https://kuake2025.github.io/software/babybus-songs-tv.html",
    "https://kuake2025.github.io/software/youku-tv.html",
    "https://kuake2025.github.io/software/snake-battle.html",
    "https://kuake2025.github.io/software/777-video.html",
    "https://kuake2025.github.io/software/aidu-novel.html",
    "https://kuake2025.github.io/software/metro-man.html",
    "https://kuake2025.github.io/software/investing-com.html",
    "https://kuake2025.github.io/software/resource-king.html",
    "https://kuake2025.github.io/software/pro-photo-editor.html",
    "https://kuake2025.github.io/software/ai-photo-camera.html",
    "https://kuake2025.github.io/software/apkpure.html",
    "https://kuake2025.github.io/software/device-info.html",
    "https://kuake2025.github.io/software/duofun-anime.html",
    "https://kuake2025.github.io/software/kite-movie-review.html",
    "https://kuake2025.github.io/software/image-upscaler-2x.html",
    "https://kuake2025.github.io/software/jinshu-reader.html",
    "https://kuake2025.github.io/software/scientific-calculator.html",
    "https://kuake2025.github.io/software/lanhu-video.html",
    "https://kuake2025.github.io/software/light-image-resizer.html",
    "https://kuake2025.github.io/software/mifun-anime.html",
    "https://kuake2025.github.io/software/sd-maid-se.html",
    "https://kuake2025.github.io/software/squid-notes.html",
    "https://kuake2025.github.io/software/lion-movie-review.html",
    "https://kuake2025.github.io/software/wanxiang-widgets.html",
    "https://kuake2025.github.io/software/new-biquge.html",
    "https://kuake2025.github.io/software/onion-comics.html",
    "https://kuake2025.github.io/software/applock.html",
    "https://kuake2025.github.io/software/universe-toolkit.html",
    "https://kuake2025.github.io/software/plant-identifier.html",
    "https://kuake2025.github.io/software/text-converter-master.html",
    "https://kuake2025.github.io/software/resource-master.html",
    "https://kuake2025.github.io/software/hongguo-drama.html",
    "https://kuake2025.github.io/software/node-video-editor.html",
    "https://kuake2025.github.io/software/watermark-camera.html",
    "https://kuake2025.github.io/software/kinemaster.html",
    "https://kuake2025.github.io/software/picsart.html",
    "https://kuake2025.github.io/software/todesk.html",
    "https://kuake2025.github.io/software/weili-calendar.html",
    "https://kuake2025.github.io/software/wireshark.html",
    "https://kuake2025.github.io/software/word-office.html",
    "https://kuake2025.github.io/software/camera-360.html",
    "https://kuake2025.github.io/software/media-date-fixer.html",
    "https://kuake2025.github.io/software/our-tv.html",
    "https://kuake2025.github.io/software/word-office.html",
    "https://kuake2025.github.io/software/wondershare-recoverit.html",
    "https://kuake2025.github.io/software/xiaohongshu.html",
    "https://kuake2025.github.io/software/star-walk-2.html",
    "https://kuake2025.github.io/software/xiaowai-wechat-tools.html",
    "https://kuake2025.github.io/software/youtiao-video.html",
    "https://kuake2025.github.io/software/universe-toolkit.html",
    "https://kuake2025.github.io/software/pvz-hybrid.html",
    "https://kuake2025.github.io/software/android-ps-touch.html",
    "https://kuake2025.github.io/software/biqu-book.html",
    "https://kuake2025.github.io/software/dj-mixer.html",
    "https://kuake2025.github.io/software/tomato-listen.html",
    "https://kuake2025.github.io/software/juhuang-video.html",
    "https://kuake2025.github.io/software/jutu-video.html",
    "https://kuake2025.github.io/software/quick-english.html",
    "https://kuake2025.github.io/software/kuaizhao-resource.html",
    "https://kuake2025.github.io/software/mx-player.html",
    "https://kuake2025.github.io/software/media-elephant.html",
    "https://kuake2025.github.io/software/photo-editor-pro.html",
    "https://kuake2025.github.io/software/beauty-editor.html",
    "https://kuake2025.github.io/software/olsoul-tweaker.html",
    "https://kuake2025.github.io/software/qimao-novel.html",
    "https://kuake2025.github.io/software/anti-theft-alarm.html",
    "https://kuake2025.github.io/software/sleep-yoga-sounds.html",
    "https://kuake2025.github.io/software/photo-editor.html",
    "https://kuake2025.github.io/software/micro-slr-camera.html",
    "https://kuake2025.github.io/software/toutiao.html",
    "https://kuake2025.github.io/software/capcut-cn.html",
    "https://kuake2025.github.io/software/eudic-dictionary.html",
    "https://kuake2025.github.io/software/ludashi-pc.html",
    "https://kuake2025.github.io/software/soda-camera.html",
    "https://kuake2025.github.io/software/media-date-fixer.html",
    "https://kuake2025.github.io/software/utorrent-pro.html",
    "https://kuake2025.github.io/software/vllo-video-editor.html",
    "https://kuake2025.github.io/software/compass-fengshui.html",
    "https://kuake2025.github.io/software/cctv-player.html",
    "https://kuake2025.github.io/software/heartbeat-app.html",
    "https://kuake2025.github.io/software/1weather.html",
    "https://kuake2025.github.io/software/bililive-recorder.html",
    "https://kuake2025.github.io/software/ticktick.html",
    "https://kuake2025.github.io/software/anime-house.html",
    "https://kuake2025.github.io/software/file-time-changer.html",
    "https://kuake2025.github.io/software/filmora.html",
    "https://kuake2025.github.io/software/stick-nodes.html",
    "https://kuake2025.github.io/software/daily-english-listening.html",
    "https://kuake2025.github.io/software/office-c2r-installer.html",
    "https://kuake2025.github.io/software/oppo-music.html",
    "https://kuake2025.github.io/software/pixeleap.html",
    "https://kuake2025.github.io/software/green-orange-novel.html",
    "https://kuake2025.github.io/software/vocab-memorizer.html",
    "https://kuake2025.github.io/software/baidu-maps-auto.html",
    "https://kuake2025.github.io/software/dujia-cut.html",
    "https://kuake2025.github.io/software/dsu-sideloader.html",
    "https://kuake2025.github.io/software/pinduoduo.html",
    "https://kuake2025.github.io/software/driver-president.html",
    "https://kuake2025.github.io/software/ticktick.html",
    "https://kuake2025.github.io/software/kk-browser.html",
    "https://kuake2025.github.io/software/bilibili-hd.html",
    "https://kuake2025.github.io/software/bilibili.html",
    "https://kuake2025.github.io/software/face-swap-video.html",
    "https://kuake2025.github.io/software/kuaishou-video-editor.html",
    "https://kuake2025.github.io/software/capcut-clone.html",
    "https://kuake2025.github.io/software/dynamic-island-widgets.html",
    "https://kuake2025.github.io/software/mix-filter-master.html",
    "https://kuake2025.github.io/software/artistic-signature.html",
    "https://kuake2025.github.io/software/video-editor-pro.html",
    "https://kuake2025.github.io/software/suso-video.html",
    "https://kuake2025.github.io/software/number-five-anime.html",
    "https://kuake2025.github.io/software/universal-calculator.html",
    "https://kuake2025.github.io/software/plant-identifier.html",
    "https://kuake2025.github.io/software/literacy-tv.html",
    "https://kuake2025.github.io/software/tv-home.html",
    "https://kuake2025.github.io/software/youtu-tv.html",
    "https://kuake2025.github.io/software/ibis-paint.html",
    "https://kuake2025.github.io/software/ai-chat-assistant.html",
    "https://kuake2025.github.io/software/baby-story-tv.html",
    "https://kuake2025.github.io/software/bilibili.html",
    "https://kuake2025.github.io/software/bolan-toolkit.html",
    "https://kuake2025.github.io/software/bubbleupnp.html",
    "https://kuake2025.github.io/software/chitu-video.html",
    "https://kuake2025.github.io/software/devcheck.html",
    "https://kuake2025.github.io/software/erlv-downloader.html",
    "https://kuake2025.github.io/software/street-view-map.html",
    "https://kuake2025.github.io/software/moon-reader.html",
    "https://kuake2025.github.io/software/litiaotiao-rules.html",
    "https://kuake2025.github.io/software/litiaotiao.html",
    "https://kuake2025.github.io/software/mix-filter-master.html",
    "https://kuake2025.github.io/software/np-manager.html",
    "https://kuake2025.github.io/software/jiulong-video.html",
    "https://kuake2025.github.io/software/jutu-video.html",
    "https://kuake2025.github.io/software/scientific-calculator.html",
    "https://kuake2025.github.io/software/kuaishou-video-editor.html",
    "https://kuake2025.github.io/software/mushroom-identifier.html",
    "https://kuake2025.github.io/software/netflix-factory.html",
    "https://kuake2025.github.io/software/cd-burner.html",
    "https://kuake2025.github.io/software/remini.html",
    "https://kuake2025.github.io/software/phone-tracker.html",
    "https://kuake2025.github.io/software/image-measure.html",
    "https://kuake2025.github.io/software/universal-video-player.html",
    "https://kuake2025.github.io/software/photodirector.html",
    "https://kuake2025.github.io/software/picwish.html",
    "https://kuake2025.github.io/software/ringtone-maker.html",
    "https://kuake2025.github.io/software/camscanner.html",
    "https://kuake2025.github.io/software/video-editor.html",
    "https://kuake2025.github.io/software/my-recorder.html",
    "https://kuake2025.github.io/software/powerdirector-mobile.html",
    "https://kuake2025.github.io/software/weili-calendar.html",
    "https://kuake2025.github.io/software/painless-vocabulary.html",
    "https://kuake2025.github.io/software/exam-bank.html",
    "https://kuake2025.github.io/software/background-video-recorder.html",
    "https://kuake2025.github.io/software/music-player.html",
    "https://kuake2025.github.io/software/music-radar.html",
    "https://kuake2025.github.io/software/zhuishu-novel.html",
    "https://kuake2025.github.io/software/app-killer.html",
    "https://kuake2025.github.io/software/art-world.html",
    "https://kuake2025.github.io/software/3d-knots.html",
    "https://kuake2025.github.io/software/lvdou-novel.html",
    "https://kuake2025.github.io/software/mx-player-pro.html",
    "https://kuake2025.github.io/software/360-secure-browser.html",
    "https://kuake2025.github.io/software/sleep-cycle.html",
    "https://kuake2025.github.io/software/hongguo-drama.html",
    "https://kuake2025.github.io/software/hongguo-drama.html",
    // 在这里添加更多 URL...
  ],
};
// ===========================================

/**
 * 执行 IndexNow 推送
 */
function submitToIndexNow() {
  // 构造请求体数据
  const postData = JSON.stringify({
    host: CONFIG.host,
    key: CONFIG.key,
    keyLocation: CONFIG.keyLocation,
    urlList: CONFIG.urlList,
  });

  // 必应的 IndexNow 端点
  const options = {
    hostname: "api.indexnow.org",
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  console.log(`正在准备推送 ${CONFIG.urlList.length} 个 URL 到 IndexNow...`);

  const req = https.request(options, (res) => {
    let responseBody = "";

    res.on("data", (chunk) => {
      responseBody += chunk;
    });

    res.on("end", () => {
      // IndexNow 成功通常返回 200 或 202
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`✅ 推送成功！状态码: ${res.statusCode}`);
        console.log(`已提交域名: ${CONFIG.host}`);
      } else {
        console.error(`❌ 推送失败。状态码: ${res.statusCode}`);
        console.error(`响应信息: ${responseBody}`);
        // 常见错误处理
        if (res.statusCode === 400)
          console.error("提示：请求格式错误，请检查 URL 格式或 Key 是否正确。");
        if (res.statusCode === 403)
          console.error("提示：Key 无效或未在网站根目录找到验证文件。");
        if (res.statusCode === 422)
          console.error("提示：域名不匹配或 URL 不属于该域名。");
      }
    });
  });

  req.on("error", (e) => {
    console.error(`❌ 请求过程中发生错误: ${e.message}`);
  });

  // 写入数据并结束请求
  req.write(postData);
  req.end();
}

// 运行函数
submitToIndexNow();
