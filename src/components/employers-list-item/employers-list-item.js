// import { Component } from 'react';

import './employers-list-item.css';

//это каждый отдельный сотрудник, который у нас есть в приложении
const EmployersListItem = (props) => {
    //это все закомментировали, потому что теерь состояние increase и rise храним на самом верху в app
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         rise: false
    //     }
    // }

    // // это метод обработки события на кнопке
    // onIncrease = () => {
    //     //будем использовать callback(тоесть нам нужно событие, которое было)
    //     this.setState(({ increase }) => ({
    //         increase: !increase
    //     }))
    //     //объяснение(все что в скобках функции setState - это callback)
    //     //приняли 1 аргумент - объект state(мы из него такой записью сразу вытащили параметр increase: ({increase}))
    //     // после стрелки круглые скобки это вместо return и внутри мы просто возвращаем объект с парам: increase: !increase

    // }

    // //тоже метод обработки события
    // //когда нажмем на сомого сотрудника, то возле него должна появится звездочка
    // onRise = () => {
    //     this.setState(({ rise }) => ({
    //         rise: !rise
    //     }))
    // }


    
        const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;
        //increase приходит из самово компонента 
        // const { increase, rise} = this.state;

        let liClassName = 'list-group-item d-flex justify-content-between';
        if (increase) liClassName += ' increase';
        if (rise) liClassName += ' like';

        return (
            // li - это элемент списка, а значит выше уровнем у нас будет элемент список
            <li className={liClassName}>
                <span className='list-group-item-label' onClick={onToggleRise}>{name}</span>
                {/* поле со значением заработной платы */}
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                {/* блок с кнопками */}
                <div className='d-flex justify-content-center align-items-center'>
                    {/* повесили обработчик событий (метод onIncrease) на эту кнопку */}
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm " 
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    {/* иконка звездочки, отобразим работника на повышение */}
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    
}

export default EmployersListItem;