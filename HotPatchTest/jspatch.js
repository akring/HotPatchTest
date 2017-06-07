include('newVC.js')

defineClass("HotPatchTest.ViewController", {
            
            setUpInterface: function () { //覆盖setUpInterface方法
            require('UIColor');
            
            //重新配置infoLabel信息和颜色
            self.infoLabel().setText("Correct Message");
            self.infoLabel().setBackgroundColor(UIColor.greenColor());
            
            //UIControlEventTouchUpInside的值是1<<6
            self.clickButton().addTarget_action_forControlEvents(self, "buttonClicked", 1<<6);
            }
            })

defineClass("HotPatchTest.ViewController", {
            
            buttonClicked :function() {
            console.log("Try to present a new View Controller")
            var newVC = NewController.alloc().init()
            
            self.navigationController().pushViewController_animated(newVC, YES)
            }
            })
