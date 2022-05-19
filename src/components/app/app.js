import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John.D', salary: 100, increase: true, rise: false, id: 1 },
                { name: 'Smith.A', salary: 320, increase: false, rise: true, id: 2 },
                { name: 'Susanna.L', salary: 4000, increase: true, rise: true, id: 3 }
            ],
            // это строка поиска
            term: '',
            //строка фильтра(сюда будем записывать выбранный фильтр)
            filter: 'all'
        }
        this.maxId = 4;
    }

    // сейчас сделаем массив с работниками(который типо пришол с вервера)
    //boolean значение - это получит премию сотрудник или нет
    //id - id обязательно нужен, чтобы приложение быстро работало со списками
    // const data = [
    //     { name: 'John.D', salary: 100, increase: true, id: 1 },
    //     { name: 'Smith.A', salary: 320, increase: false, id: 2 },
    //     { name: 'Susanna.L', salary: 4000, increase: true, id: 3 }
    // ];

    //добавление сотрудника
    addItem = (name, salary) => {

        //создаем новый объект по входным данным
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        //создаем новый массив и добавляем туда наш объект
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            //найдем индекс элемента в массиве с таким id
            // const index = data.findIndex(elem => elem.id == id);
            //создаем новый массив и уже его возвращаем, а просто из старого удалять нельзя!!!
            //1 способ
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ... after];

            //2 способ
            // data.filter(item => item.id != id)

            return { data: data.filter(item => item.id != id) }
        })
    }

    //изменятя параметр increase на противоположный у определенного элемента
    onToggleIncrease = (id) => {
        //1 способ
        // this.setState(({data})=>{
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     //принцип записи такой, что мы копируем старый массивБ а справа дописываем данные которые хотим дополнить
        //     //но если они по ключу совпадут с ключем в массиве, то он их перепишет на то что ввели
        //     const newItem = {...old, increase: !old.increase};
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)];
        //     return {data: newArray}
        // })
        //2 способ (с использованием метода map)
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, rise: !item.rise }
                }
                return item;
            })
        }))
    }

    //метод поиска(аргументы это:term - строка по которой фильтруем, items - массив которые нужно фильтровать)
    searchEmp = (items, term) => {
        if (term.length === 0) { return items; }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term });
        //можно записать так, это такая же запись
        // this.setState({term})
    }

    //метод для фильтрации
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            //break не ставим потому что реакт знает что делать
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        // const visibleDate = this.searchEmp(data, term);
        //комбинируем 2 метода
        const visibleDate = this.filterPost(this.searchEmp(data, term), filter);
        return (
            // app - это тот класс, который мы застелизовали
            <div className="app">
                {/* основной заголовок */}
                <AppInfo
                    employees={employees}
                    increased={increased} />

                {/* это фильтры поиска по критериям */}
                {/* сделалем здесь, так как в нем будут 2 компонента */}
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                {/* это таблица(передаем в этот компонент массив с данными) */}
                <EmployersList
                    data={visibleDate}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />

                {/* добавление сотрудника */}
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }

}

export default App;