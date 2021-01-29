# Node.js 8x on Amazon Linux (2018-07-20)

```
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum install nodejs
```

* ref: https://nodejs.org/en/download/package-manager/

# UNABLE_TO_GET_ISSUER_CERT_LOCALLY (2018-07-20)

```
info trying registry request attempt 1 at 13:05:59
http GET https://registry.npmjs.org/moment
verbose url raw node-sass
verbose url resolving [ 'https://registry.npmjs.org/', './node-sass' ]
verbose url resolved https://registry.npmjs.org/node-sass
info trying registry request attempt 1 at 13:05:59
http GET https://registry.npmjs.org/node-sass
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
info retry will retry, error on last attempt: Error: UNABLE_TO_GET_ISSUER_CERT_LOCALLY
```

↓do?

```
npm config set strict-ssl=false
```

# Node.js on Ubuntu 18 LTS

apt で入れたものは依然として古すぎるため、公式 GitHub リポジトリ内の説明に従う。(https://github.com/nodesource/distributions/)

apt install で 10 や 11 が入るようになっている。

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

# NPM Package を探すときに便利？かもしれないもの Openbase

https://openbase.com
