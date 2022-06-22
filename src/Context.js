import React, { createContext, useContext, useEffect, useState } from "react";


const DataContext = React.createContext()

export function useData(){  // allows BudgetsContext to be used outside of BudgetsContext 
  return useContext(DataContext)
}

export const DataProvider = ({children}) =>{ 

  const getLangFromDesc = (desc) =>{

    let languages = []

    let regex = '\bHTML\b';

    let found = desc.match(regex)

    return found


  }

  const projectData = [

    {
      name: "SketchPad",
      desc : "Sketchpad with iPhone OS theme togglebars. Made using HTML, CSS, JS.",
      //langs : getLangFromDesc(desc),
      img_link: "https://raw.githubusercontent.com/KaiSun19/sketchPad/main/sketchpad_demo.PNG"
    },

    {
      name: "Book",
      desc : "Simple test to create and display Book objects . Made using CSS, HTML, JS. ",
      img_link: "https://raw.githubusercontent.com/KaiSun19/Book/main/book_demo.PNG"
    },
    {
      name: "ToDo",
      desc : "Plain JS, CSS, HTML, CSS ToDo app. ",
      img_link: "https://raw.githubusercontent.com/KaiSun19/ToDo/main/todo_js_demo.PNG"
    },
    {
      name: "TicTacToe",
      desc : "Tic Tac Toe game with singleplayer mode created using HTML, CSS, JS",
      img_link: " https://raw.githubusercontent.com/KaiSun19/TicTacToe/main/tictactoe.PNG"
    },
    {
      name: "NaivePortfolioConstruction",
      desc : "Data science project to automatically create a stock investment portfolio based on a Fama French Model. Made using Python .",
      img_link: "https://raw.githubusercontent.com/KaiSun19/NaivePortfolioConstruction/main/portfolio_construction_demo.PNG"
    },
    {
      name: "WorkoutLog",
      desc : "Discontinued app that tracked workout data. Made using HTML, CSS, JS",
      img_link: "https://raw.githubusercontent.com/KaiSun19/WorkoutLog/main/workout_log_demo.PNG"
    },
    {
      name: "WeatherAPI",
      desc : "Weather app calling from api to get weather info for different cities.",
      img_link: "https://raw.githubusercontent.com/KaiSun19/WeatherAPI/master/weatherapi_demo.PNG"
    },
    {
      name: "CVMaker",
      desc : "A form based app used to generate a CV. Made using ReactJS",
      img_link: "https://raw.githubusercontent.com/KaiSun19/CVMaker/main/cvmaker_demo.PNG"
    },
    {
      name: "FlashCardMaker",
      desc : "A flashcards app with ability to change order of flashcards and rotating animation. Made with ReactJs.",
      img_link: "https://raw.githubusercontent.com/KaiSun19/FlashCardMaker/main/flashcard_demo.PNG"
    },
    {
      name: "ShoppingCart",
      desc : "A simple Shopping App that calls from a REST API, item objects. The user can browse an inventory UI and update a Cart UI. Made using ReactJs.",
      img_link: "https://raw.githubusercontent.com/KaiSun19/ShoppingCart/main/shopping_cart_demo.PNG"
    },
    {
      name: "Calculator",
      desc : "A Simple Calculator made using Javascript, CSS , HTML",
      img_link: "https://raw.githubusercontent.com/KaiSun19/Calculator/main/calculator_demo.PNG"
    },
    {
      name: "Ember Super Rentals",
      desc : "An ember app made showing property listings as shown in the Ember Getting Started Tutorials. Modified to have a listing form and more extensive search tool.",
      img_link: "https://raw.githubusercontent.com/KaiSun19/SuperRentals/main/super_rentals_demo.PNG"
    },
    {
      name: "In Development",
      desc : "Stay tuned for more projects",
      img_link: ""
    },
    {
      name: "In Development",
      desc : "Stay tuned for more projects",
      img_link: ""
    },
    {
      name: "In Development",
      desc : "Stay tuned for more projects",
      img_link: ""
    },

  ]

  return(

    <DataContext.Provider
        value = {{ 
          projectData
        }}>
            {children}

    </DataContext.Provider>

  )


}
