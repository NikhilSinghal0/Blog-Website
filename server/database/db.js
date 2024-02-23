import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://admin:admin@ac-a1c4xsv-shard-00-00.le94st0.mongodb.net:27017,ac-a1c4xsv-shard-00-01.le94st0.mongodb.net:27017,ac-a1c4xsv-shard-00-02.le94st0.mongodb.net:27017/?ssl=true&replicaSet=atlas-m7il1m-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;