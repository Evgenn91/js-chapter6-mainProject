import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRise}) => {

    //здесь мы генерируем список компонентов employers-list-item и вставляем в них значения из массива
    //раньше мы писали hardcode в return вот такой:
    // <ul className=" list-group app-list">
    //         {elements}
    //         <EmployersListItem name={data[0].name} salary={data[0].salary}/>
    //         <EmployersListItem name={data[1].name} salary={data[1].salary}/>
    //         <EmployersListItem name={data[2].name} salary={data[2].salary}/>
    // </ul>
    const elements = data.map(item => {
        // эта строка говорит, что у объекта мы вытащили id а остальные свойства объединили в ...itemProps
        const { id, ...itemProps } = item;
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            //напишем в более современнов виде(тоже самое что сверху)
            //key необходимо всегда указывать, когда мы имеем дело с компонентом для таблицы
            //(необходимо для оптимизации больше)
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete = {()=> onDelete(id)}
                onToggleIncrease ={()=> onToggleIncrease(id)}
                onToggleRise = {()=> onToggleRise(id)}/>
        )
    });

    return (
        // компонент таблицы(проверить что именно так и есть)
        <ul className=" list-group app-list">
            {elements}
        </ul>
    );
}

export default EmployersList;