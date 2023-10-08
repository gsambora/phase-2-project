import React from "react";

function MealForm(){
    return(
        <form className="AddMeal">
            <label>
                Day:
                <select name="dayofweek">
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
            </label>

            <label>
                Mealtime:
                <select name="mealtime">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </select>
            </label>

            <label>
                Food:
                <input type="text" name="food"/>
            </label>

            <label>
                Picture:
                <input type="text" name="picture"/>
            </label>
        </form>
    )
}

export default MealForm;