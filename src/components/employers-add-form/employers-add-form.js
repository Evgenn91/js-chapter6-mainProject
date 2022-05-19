import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    //у нас один обработчик событий робит на 2ух inputah(чтобы он понимал разницу мы ввели <input атрибут name(смотри ниже))
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //метод для добавления новых сотрудников
    onSubmit = (e) => {
        //отменяет действие браузера по умолчанию(хз но без нее не работает)
        e.preventDefault();

        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name,this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        const {onAdd} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" 
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        // это мы ввели, чтобы отличать 2 inputa в обработчике событий(т.к. обработчик один)
                        name="name"
                        //тут про понятие управляемые компоненты
                        //(чтобы реакт компонент рендерил форму и контролировал ее поведение 
                        //в ответ на пользовательский ввод)
                        //когда это добавили то поидее ничего не изменилось во премя выполнения
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        //тут про понятие управляемые компоненты
                        //(чтобы реакт компонент рендерил форму и контролировал ее поведение 
                        //в ответ на пользовательский ввод)
                        //когда это добавили то поидее ничего не изменилось во премя выполнения
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    };
}

export default EmployersAddForm;