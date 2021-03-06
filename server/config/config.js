var configs = {
    MYSQL_DB_NAME: 'YOUR-DB-NAME',
    MYSQL_DB_HOST: 'localhost',
    MYSQL_DB_PORT: 3306,
    MYSQL_DB_USERNAME: 'root',
    MYSQL_DB_PASSWORD: 'root',
    NODEJS_IP: '0.0.0.0',
    NODEJS_PORT: 8080,
    ALLOWED_ORIGIN: 'http://localhost:8000',
    ALLOWED_VERBS: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    SOAP_URL: 'http://SOAP_SERVER_URL/soap/RuntimeAccess',
    SOAP_ACTION: 'http://SOAP_SERVER_URL:80/soap/RuntimeAccess',
    SOAP_USER: 'YOUR-SOAP-USER',
    SOAP_PASSWORD: 'YOUR-SOAP-PASSWORD'
};

module.exports = configs;