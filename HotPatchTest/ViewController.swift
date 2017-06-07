//
//  ViewController.swift
//  HotPatchTest
//
//  Created by diaokediao on 2017/6/5.
//  Copyright © 2017年 lvjun. All rights reserved.
//

import UIKit
import JSPatch

class ViewController: UIViewController {
    
    @IBOutlet weak var infoLabel: UILabel!
    @IBOutlet weak var clickButton: UIButton!
    @IBOutlet weak var modeLabel: UILabel!
    @IBOutlet weak var modeSwitch: UISwitch!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setUpInterface()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

extension ViewController {
    
    /// 配置界面信息
    func setUpInterface() -> Void {
        
        infoLabel.text = "Error Message"
        infoLabel.backgroundColor = #colorLiteral(red: 0.8078431487, green: 0.02745098062, blue: 0.3333333433, alpha: 1)
        
        clickButton.addTarget(self, action: #selector(buttonClicked), for: .touchUpInside)
    }
    
    
    /// 按钮点击
    func buttonClicked() {
        
        let alert = UIAlertController(title: "Error!", message: "Error occured!", preferredStyle: .alert)
        let cancelAction = UIAlertAction(title: "取消", style: .cancel, handler: nil)
        alert.addAction(cancelAction)
        present(alert, animated: true, completion: nil)
    }
}

extension ViewController {
    
    @IBAction func modeSwitched(sender:UISwitch) {
        
        if sender.isOn {
            let jsPath = Bundle.main.path(forResource: "jspatch", ofType: "js")
            JPEngine.evaluateScript(withPath: jsPath!)
            setUpInterface()
        }
        else {
            sender.setOn(true, animated: false)
        }
    }
}

