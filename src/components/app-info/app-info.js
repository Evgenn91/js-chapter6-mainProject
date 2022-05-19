import './app-info.css';


const AppInfo = (props) => {
    const {employees, increased} = props;
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N1</h1>
            <h2>Обще число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;