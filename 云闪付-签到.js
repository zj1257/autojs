toast("开始...");
auto();
const WIDTH = Math.min(device.width, device.height);
const HEIGHT = Math.max(device.width, device.height);
setScreenMetrics(WIDTH, HEIGHT);

var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
unlock.unlock();
sleep(2000);


robot.kill("com.unionpay");
sleep(2000);
launch("com.unionpay");
waitForActivity("com.unionpay.activity.UPActivityMain")
sleep(5000)
//进入签到页按钮
if (id("frog_float_gif").exists()) {
    robot.clickIdCenter("frog_float_gif"); //进入签到页按钮
    sleep(2000);
} else {
    robot.kill("com.unionpay");
    exit();   
}
robot.clickTextCenter("签到"); //签到按钮
sleep(2000);
robot.kill("com.unionpay");
toast("结束...")
exit();