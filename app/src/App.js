import React, {Component} from 'react';
import AppButton from './components/AppButton.js';
import AppDropdown from "./components/AppDropdown";
import AppInput from "./components/AppInput";
import './App.css';

let CarModel = require("./data/cars.json");

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "selectedBrand": "",
            "selectedModels": [],
            "selectedModel": "",
            "modelDropdownLabel": "Select a brand first",
            "keyWords": "",
            "isButtonDisabled": true
        };
    }

    componentDidMount() {
        this.setState({"cars": CarModel.cars});
    }

    componentWillUnmount() {}

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Buy A Car</h1>
                </header>
                <div className="App-content">
                    <div className="App-label">Brand:</div>
                    <AppDropdown label="All Brands" list={this.state.cars} onSelect={this.brandSelected.bind(this)} />
                    <div className="App-label">Model:</div>
                    <AppDropdown label={this.state.modelDropdownLabel} list={this.state.selectedModels} onSelect={this.modelSelected.bind(this)} />
                    <div className="App-label">Keywords:</div>
                    <AppInput onTextChange={this.keyWordsChanged.bind(this)}/>
                    <AppButton label="Search Cars" disabled={this.state.isButtonDisabled}/>
                </div>
            </div>
        );
    }

    brandSelected(brandLabel) {
        this.setState({"selectedModels": []});

        if(brandLabel === "") {
            this.setState({
                "selectedBrand": brandLabel,
                "modelDropdownLabel": "Select a brand first"
            }, () => {
                this.checkButtonState();
            });
        }
        this.state.cars.map((brand) => {
            if (brand.label === brandLabel) {
                this.setState({
                    "selectedModels": brand.models,
                    "modelDropdownLabel": "All models"
                }, () => {
                    this.checkButtonState();
                });
            }
        });
    }

    modelSelected(modelLabel) {
        this.setState({"selectedModel": modelLabel}, () => {
            this.checkButtonState();
        });
    }

    keyWordsChanged(keyWords) {
        this.setState({"keyWords": keyWords}, () => {
            this.checkButtonState();
        });
    }

    checkButtonState() {
        this.setState({"isButtonDisabled": (this.state.keyWords === "" &&
                                            this.state.selectedBrand === "" &&
                                            this.state.selectedModels.length === 0)});
    }
}

export default App;
