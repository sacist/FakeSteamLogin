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
        const cookies = await page.cookies();
        // console.log(cookies);
        
        // await page.click('a.playerAvatar')
        
        // const updatedCookies = await page.cookies()
        await fetch("https://steamcommunity.com/login/settoken", {
          "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundarybqCR1Qc8LnQwSU7I",
            "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "cookie": `"browserid=${cookies[5].value}; browserid=${cookies[5].value}; timezoneOffset=${cookies[3].value}; sessionid=${cookies[4].value}; steamCountry=${cookies[6].value}; steamLoginSecure=${cookies[0].value}"`,
            "Referer": "https://store.steampowered.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": "------WebKitFormBoundarybqCR1Qc8LnQwSU7I\r\nContent-Disposition: form-data; name=\"nonce\"\r\n\r\n113e892e0728fd59d729984b41141277\r\n------WebKitFormBoundarybqCR1Qc8LnQwSU7I\r\nContent-Disposition: form-data; name=\"auth\"\r\n\r\n9ae093badb38992e69bdc2159827d87c\r\n------WebKitFormBoundarybqCR1Qc8LnQwSU7I\r\nContent-Disposition: form-data; name=\"steamID\"\r\n\r\n76561198301552504\r\n------WebKitFormBoundarybqCR1Qc8LnQwSU7I--\r\n",
          "method": "POST"
        });

        return res.json({ success: true, message: 'Login successful!',cookies});

    } catch (error) {
        console.error('Error in Puppeteer:', error);
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
    }
 
    
}
module.exports = new Login()