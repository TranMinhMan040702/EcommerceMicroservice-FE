import { useEffect, useState } from 'react';
import { useTable, useRowSelect } from 'react-table';
import { Checkbox } from '../Checkbox/Checkbox';

function Datatable(props) {
    const columns = props.columns;
    const data = props.data;
    const actionColumns = props.actionColumns;
    const [listData, setListData] = useState([]);

    const checkbox = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
                Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
            },
            ...columns,
        ]);
    };
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        actionColumns,
        useRowSelect,
        checkbox,
    );

    useEffect(() => {
        listData.length = 0;
        selectedFlatRows.map((item) => setListData((prev) => [...prev, item.original]));
        props.GetDataValue(listData);
        console.log(listData);
    }, [selectedRowIds]);

    return (
        <>
            <table {...getTableProps()} className="table">
                <thead class="table-light">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            'selectedFlatRows[].original': selectedFlatRows.map((d) => d.original),
                        },
                        null,
                        2,
                    )}
                </code>
            </pre>
        </>
    );
}

export default Datatable;
