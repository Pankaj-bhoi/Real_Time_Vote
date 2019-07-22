import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Vote extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            choice:''
        }
    }
    handleChange(e){
        this.setState({
            choice : e.target.value
        });
    }
    handleSubmit(e){
        alert(`your choice is ${this.state.choice}`);
        e.preventdefault();
        
    }
    render(){
        const data= {
            labels: ['Red', 'Green', 'Blue', 'Yellow'],
            datasets: [{
                label:'Vote Result',
                data: [5,1,6,7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            
        
        }
        return(
            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><h4>Vote</h4></span>
                                <div className="card-action">
                                    <form onSubmit={this.handleSubmit}>
                                        <p>
                                            <label>
                                                <input name="group1 party" type="radio" id="red" value="Red" checked={this.state.choice === 'Red'}
                                                onChange={this.handleChange}
                                                />
                                                <span className="white-text ">Red</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1 party" type="radio"  id="green" value="Green" checked={this.state.choice === 'Green'}
                                                onChange={this.handleChange}
                                                />
                                                <span className="white-text ">Green</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1 party" type="radio"  id="blue" value="Blue" checked={this.state.choice === 'Blue'}
                                                onChange={this.handleChange}
                                                />
                                                <span className="white-text ">Blue</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1 party" type="radio" id="yellow" value="Yellow" checked={this.state.choice === 'Blue'}
                                                onChange={this.handleChange}
                                                /> 
                                                <span className="white-text ">Yellow</span>
                                            </label>
                                        </p> 
                                        <button className="btn waves-effect waves-light" 
                                        type="submit" name="submit">
                                            Submit
                                        </button> 
                                    </form>    
                                </div>
                        </div>    
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <Bar data={data}/>
                </div>
            </div>
        )
    }
}
export default Vote;