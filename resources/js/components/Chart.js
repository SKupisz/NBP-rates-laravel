import React from "react";
import ReactDOM from "react-dom";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class ChartRender extends React.Component{
    constructor(props){
        super(props);
        this.tableData = this.props.courses.substr(1,this.props.courses.length-2);
        this.tableData = this.tableData.split(",");
        this.tableData = this.decodeTheTable(this.tableData);

        this.decodeTheTable = this.decodeTheTable.bind(this);
        
    }
    decodeTheTable(operand){
        let finalResult = [], temp = "";
        for(let i = 0 ; i < operand.length; i++){
            temp+=operand[i];
            if(i % 2 == 1){
                temp = temp.replace("cena","price");
                finalResult.push(JSON.parse(temp));
                temp = "";
            }
            else{
                temp+=",";
            }
            
        }
        return finalResult;
    }
    render(){
        return(
            <div style={{ width: '80%', height: '300px', display: "block"}} className="gold-chart">
                <ResponsiveContainer>
                    <LineChart data={this.tableData} className = "chart" >
                    <XAxis dataKey="data"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 10}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

if(document.getElementById("chart-container")){
    let component = document.getElementById("chart-container");
    let props = component.attributes[2].value.toString();

    ReactDOM.render(<ChartRender courses = {props} />,component);
}