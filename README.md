Contains [Wiki](../../wiki).

<<<<<<< HEAD
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
=======
# Getting started on Ubuntu 18 LTS

```
sudo apt install npm
>>>>>>> 44c4b314a972fda8819ed55a5be2b966498e1396
```
