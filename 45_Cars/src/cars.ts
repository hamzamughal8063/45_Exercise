import { features } from "process";



function storeCarinfo(manufacture: string, modelName: string, ...extraOption: { [key : string]: any } [] ): object {

    const carinfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carinfo;
};


let answer = storeCarinfo('Honda', 'Civic', {color:'Black'}, {features: ['navigation', 'Power window']})

console.log(answer);
