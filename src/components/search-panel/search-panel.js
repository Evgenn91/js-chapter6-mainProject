import { Component } from 'react';

import './search-panel.css';


class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state= {
            term:''
        }
    }

    onUpdSearc = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }


    render(){
        return (
            <input
                type="Text"
                // это готовые классы из библиотеки bootstrap
                className="form-control search-input"
                //говорим что хотим от пользователя
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdSearc}/>
        );
    }
}

export default SearchPanel;