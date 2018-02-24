import React from 'react';


import classes from './Table.css';

const table = (props) => {
    

    const thead = props.table.th.map(x=><th key={x}>{x}</th>);
    

    const rows = props.data.map((item, v) =>{
        return (
            <tr key={"abc"+v}>
                {
                    props.table.dataTh.map((x,i)=>{
                        return (
                            <td data-th={x} key={x}>
                                <div className={classes.constrained}>
                                {JSON.stringify(item[props.table.sanitize[i]])}
                                </div>
                            </td>
                        );
                    })
                }
            </tr>
        );
    });
    
    

    const a = (
        <div className={classes.result}>
            <table className={[classes.table, classes.responstable].join(" ")}>
                <thead>
                    <tr>
                        {thead}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
    

    return (
        a
    );
}

export default table;