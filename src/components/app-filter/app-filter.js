import './app-filter.css';


const AppFilter = (props) => {

    //подход, когда кнопки в массиве
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThan1000', label: 'З/П больше 1000$' }
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        //смотрим активная кнопка или нет
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            // //key необязательно назначать на name(просто это должно быть индивидуальное значение кнопки)
            <button
                // btn и btn-light - это классы из bootstrap
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={()=>props.onFilterSelect(name)}> 
                {label}
            </button>
        )
    })

    return (
        // btn-group - это класс из bootstrap(смотри документацию boostrap)
        <div className="btn-group">
            {buttons}
        </div>
    );


    // обычный подход
    //     return(
    //         // btn-group - это класс из bootstrap(смотри документацию boostrap)
    //         <div className="btn-group">
    //             <button 
    //             // btn и btn-light - это классы из bootstrap
    //                className="btn btn-light"
    //                type="button">
    //                    Все сотрудники
    //             </button>
    //             <button 
    //             // btn и btn-outline-light - это классы из bootstrap
    //                className="btn btn-outline-light"
    //                type="button">
    //                    На повышение
    //             </button>
    //             <button 
    //                className="btn btn-outline-light"
    //                type="button">
    //                    З/П больше 1000$
    //             </button>

    //         </div>
    //     );
}

export default AppFilter;