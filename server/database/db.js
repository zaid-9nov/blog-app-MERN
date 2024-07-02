import mongoose from 'mongoose';


const URL = "mongodb+srv://zaidkmansoori8214:zaid8214@blog-app.nrglund.mongodb.net/?retryWrites=true&w=majority&appName=blog-app";

const Connection = async (username, password) => {

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log(':::::: Database connected successfully :::::: ');
    } catch (error) {
        console.log(':::::: Error while connecting to the database ::::::', error);
    }
};

export default Connection;