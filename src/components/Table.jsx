import './Table.css'

const GenerateHeader = (props) => {
    console.log(props)
    const items = props.columns.map((column) => 
        <li key={Math.random()}>{ column.name }</li>    
    )
    return (
        <div>
            <ul className="ulTableHeader">{ items }</ul>
        </div>
    )
}

export default function Table({columns}){
    return (
        <div className="mainTable">
            <div className="headerTable">
                <GenerateHeader columns={columns}/>
            </div>
            <div className="tableContent">

            </div>
        </div>
    )
}
