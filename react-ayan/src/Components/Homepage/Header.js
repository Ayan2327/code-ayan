import React from "react";
import "../../App.css";
import men from "../Assets/men.png";
import women from "../Assets/women.webp";
const data = {
    result:[
        {
            id: 1,
            img: men,
            name: "Codekul",
            address: "Kothrud Depot,Pune",
        },
        {
            id: 2,
            img: women,
            name: "Codekul",
            address: "Kothrud Depot,Pune",
        },
        {
            id: 3,
            img: men,
            name: "Codekul",
            address: "Kothrud Depot,Pune",
        },
        {
            id: 4,
            img: women,
            name: "Codekul",
            address: "Kothrud Depot,Pune",
        },
    ],
};
// https://www.freecodecamp.org/news/react-hooks-fundamentals/#:~:text=React%20Hooks%20are%20simple%20JavaScript,useState%20%3A%20To%20manage%20states.
console.log(JSON.stringify(data.result));
export default function Header(){
    const [visible, setVisible] = React.useState(false);
    const showContent = () => {
        setVisible(true);
    };
    return(
        <div>
            <div>
                <button className="bg-green-600 text-white rounded p-2"
                onClick={() => {
                    showContent();
                }}
                >Visible Items</button>
            </div>
    {visible ? (
        <div className="grid grid-cols-4 gap-2 mt-12 m-5">
            {data.result.map((data) => (
                <div className="border p-2 shadow-xl rounded">
                <div className="flex justify-center">
                <img className="rounded-full h-44 w-44" src="{data.img}"/>
                </div>
                <div className="flex space-x-2 font-semibold">
                    <label>Name &nbsp; :</label>
                    <p>{data.name}</p>
                </div>
                <div className="flex space-x-2 font-semibold">
                    <label>Address &nbsp; :</label>
                    <p>{data.address}</p>
                </div>
            </div>
          ))}
        </div>
    ) : (
       <div>
        <h1>Hello Codekul</h1>
       </div>
    )}
    </div>
    )
}