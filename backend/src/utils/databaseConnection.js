import mongoose from "mongoose";

const databaseConnection = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.NODE_ENV === 'PRODUCTION'
                ? process.env.PRODUCTION_MONGO_DB_URI :
                process.env.DEVELOPMENT_MONGO_DB_URI,
        );


        console.log(`database connection on ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default databaseConnection;