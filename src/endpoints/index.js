import request from "request";
import urlToObject from "parse-github-url";

var options = {
  url: "https://api.github.com/repos/hristo2612/Random-Cat",
  headers: {
    "User-Agent": "Gitteacher-Editor"
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);

export let getRepositoryStats = function(url) {
    const obj = urlToObject(url);
    return new Promise((resolve, reject) => {
        if (obj.repo) {
                request({ url: "https://api.github.com/repos/" + obj.repo, headers: { "User-Agent": "Gitteache-Editor" }}, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        resolve(JSON.parse(body));
                    } else {
                        reject(error || response.statusCode);
                    }
                });
        } else {
            reject("Could not fuckin parse the url");
        }
    });
};
