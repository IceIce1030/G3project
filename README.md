#h1 Sass+Gulp+bower懶人包
#p step.1-1 http://nodejs.org/download/
#p 安裝 Node.js，因為 Gulp 是基於 Node.js 開發而成，所以就先上 Node.js 的官網下載安裝
step.1-2 http://rubyinstaller.org/downloads/
安裝 ruby (除了一直按 Next 之外，記得安裝途中把 Add Ruby executables to your PATH 勾選起來。)
step.2 npm install -g gulp
把 Gulp 安裝到全域的環境(不用在特定資料夾)
step3. npm init （有現成的package.json 可跳過此步驟）
cd 到想安裝的目錄下，輸入npm init，進行這個空白專案的初始化，同時也會生成一個基本的package.json 這個package.json非常重要，因為它定義了這個 Node.js專案裏頭會需要用到的模組與套件 ( Node modules )基本上可以填寫一些名稱或描述，不然其實也可以直接一直 enter 按下去就會建立完成。
step4. npm install gulp -save-dev
專案初始化完成之後，接著就可以來安裝這個專案的 Gulp 套件，當我們寫-save-dev，會將這個模組添加到package.json的devDependencies裏頭，如果寫-save，就會添加到dependencies裡，這兩個的差異在於讓使用具備這個package.json專案的人，可以清楚的知道這個模組，是開發使用，還是執行專案時使用的。
step5. npm i
安裝package.json 裡的記載的gulp套件
step6 gulp
執行gulp
bower
npm install -g bower (在G3那個資料夾) bower i載回套件
*可以不用，因為已經在檔案裡面
Mac、Windows
 npm rebuild node-sass (在G3那個資料夾)
*如果他有說要重建node-sass的話在執行，因為可能windows和Mac環境不一樣。

https://github.com/IceIce1030/G3project.git
