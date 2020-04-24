const Redis = require("ioredis");
const fs = require("fs");
// const redis = new Redis(); // uses defaults unless given configuration object
function setCountWords(count) {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.pipeline()
        .set("countWords", count)
        .exec(function (err, result) {
            if (err) {
                console.log('error');
            } else if (result) {
                redis.quit();
            }
        });
}
function setSourceText(sourceText) {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.pipeline()
        .set("sourceText", sourceText)
        .exec(function (err, result) {
            if (err) {
                console.log('error');
            } else if (result) {
                redis.quit();
            }
        });
}
function setPolindrom(polindrom) {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.pipeline()
        .set("polindrom", polindrom)
        .exec(function (err, result) {
            if (err) {
                console.log('error');
            } else if (result) {
                redis.quit();
            }
        });
}

function getCountWords() {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.get("countWords").then(function (result) {
        if (result != null) {
            console.log('Количество слов: ', result);
            fs.writeFileSync("countWords.txt", result);
        } else {
            console.log('слова отсутствуют!');
        }

        redis.quit();
    });
}
function getSourceText() {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.get("sourceText").then(function (result) {
        let sourceText = [];
        sourceText = JSON.parse(result);
        if (sourceText != null) {
            console.log(sourceText);
            fs.writeFileSync("sourceText.txt", sourceText);
        } else {
            console.log('исходный текст отсутствует!');
        }

        redis.quit();
    });
}
function getPolindrom() {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.get("polindrom").then(function (result) {
        let polindromText = [];
        polindromText = JSON.parse(result);
        console.log('слова палиндромы: ', polindromText);
        fs.writeFileSync("polindrom.txt", polindromText);

        redis.quit();
    });
}
module.exports = { setCountWords, setSourceText, setPolindrom, getCountWords, getSourceText, getPolindrom };
