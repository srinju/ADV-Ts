

//TypeInference in zod >>>

import express from "express";
import {z} from 'zod';

const app = express();

const userProfileSchemas = z.object({ //run time variable
    name : z.string().min(1,{message:"name cannot be empty"}),
    email : z.string().email({message:"not a valid email addresss"}),
    age : z.number().min(18,{message : "you must be atleast 18 years old!!!"}).optional()
});

//the below type code line is compile time varaible
type updateBodySchema = z.infer<typeof userProfileSchemas>; //type inference we did here ..it is we extracted the type from the zod schema of the user profile schema we mentioned above

app.put('/user' , (req,res) => {
    const {success} = userProfileSchemas.safeParse(req.body);
    const updateBody : updateBodySchema = req.body;
    if(!success){
        res.status(411).json({message : "error"});
        return;
    }
    //update the user hitting the dataase user.updateONe/updateMany
    res.json({
        message : "user updated"
    });
});

app.listen(3000);