const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://dev:dev@cluster0.z0tzn.mongodb.net/telegram?retryWrites=true&w=majority',
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    fileFolderName: process.env.FILE_FOLDER_NAME || 'files'
};

module.exports = config;