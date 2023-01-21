import mongoose from 'mongoose';
import fetch from 'node-fetch';

mongoose.connect("mongodb://localhost/127.0.0.1:27017/meal");

const mealSchema = new mongoose.Schema({

    user_id:{
            type: Number,
            require:true
    },
    id:{
        type: Number,
        require:true
    },
    title:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },

});

const Meal = mongoose.model('Meal',mealSchema);

async function getMeals(){
    const myMeals = await fetch("api_web_address");
    const response = await myMeals.json();
    // console.log(response);
    for(let i=0; i<response.length; i++){
        const meal = new Meal({
            user_id:response[i]['userid'],
            id:response[i]['id'],
            title:response[i]['title'],
            description:response[i]['body'],
        });

        meal.save();

    }
}

getMeals();